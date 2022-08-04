import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc';
import Currency from "react-currency-formatter";
import { XCircleIcon } from 'react-native-heroicons/solid';
import { selectBasketItems, removeItemFromBasket, selectBasketTotal } from '../features/basketSlice'
import { selectRestaurant } from '../features/restaurantSlice'

const BasketScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const basketTotal = useSelector(selectBasketTotal);
    const items = useSelector(selectBasketItems);
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])
    const [BasketItems, setBasketItems] = useState([])
    const dispatch = useDispatch();
    useEffect(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
            
        }, {})  
        setGroupedItemsInBasket(groupedItems);
        setBasketItems(Object.entries(groupedItems))
    }, [items]);
  return (
      <SafeAreaView style={tw`flex-1 bg-white pt-6`}>
          <View  style={tw`flex-1 bg-gray-100`}>
              <View style={tw`p-5 border-b border-[#00CCBB] bg-white shadow-xl`}>
                  <View>
                      <Text style={tw`text-lg font-bold text-center`}>Basket</Text>
                      <Text style={tw`text-gray-400 text-center`}>{ restaurant?.title }</Text>
                  </View>
                  <TouchableOpacity
                      onPress={navigation.goBack}
                      style={tw`rounded-full bg-gray-100 absolute top-3 right-5`}
                  >
                      <XCircleIcon color="#00CCBB" size={50} />
                   
                  </TouchableOpacity>
              </View>
              <View style={tw`flex-row items-center px-4 py-3 bg-white my-5`}>
                  <Image
                      source={require("../assets/food1.jpg")}
                      style={tw`h-10 w-10 p-4 mr-4 rounded-full bg-gray-300`}
                  />
                  <Text style={tw`flex-1`}>Deliver in 45-75 minutes</Text>
                  <TouchableOpacity>
                      <Text style={tw`text-[#00CCBB] text-lg`}>Change</Text>
                  </TouchableOpacity>
              </View>
              <ScrollView style={tw`flex-col`}>
                  {BasketItems.map(([key, items]) => (                
                      <View key={key} style={tw`flex-row items-center py-2 px-5 bg-white`}>
                      <View style={[tw`flex-row flex-1 items-center`, {gap:10}]}>
                          
                          <Text>{items.length} x  </Text>
                          <Image
                              style={tw`h-12 w-12 rounded-full`}
                          source={items[0].image}
                          />
                              <Text> {items[0]?.name}</Text>
                          </View>
                          <View style={[tw`flex-row items-center`, { gap: 10 }]}>
                              <Text style={tw`text-gray-600`}><Currency quantity={items[0].price} currency="GBP" /></Text>
                              
                              <TouchableOpacity><Text onPress={()=> dispatch(removeItemFromBasket({id: key}))} style={tw`text-[#00CCBB]`}>  Remove</Text></TouchableOpacity>
                              
                          </View>
                      </View>
                  )
                  )}
              </ScrollView>
              <View style={[tw`bg-white p-5 mt-5`,{gap:10}]}>
                  <View style={tw`flex-row justify-between items-center py-2`}>
                      <Text style={tw`text-gray-400`}>SubTotal</Text>
                      <Text style={tw`text-gray-400`}>
                          <Currency quantity={basketTotal} currency="GBP" />
                      </Text>

                  </View>
                  <View style={tw`flex-row justify-between items-center py-2`}>
                      <Text style={tw`text-gray-400`}>Delivery fees</Text>
                      <Text style={tw`text-gray-400`}>
                          <Currency quantity={5.99} currency="GBP" />
                      </Text>

                  </View>
                  <View style={tw`flex-row justify-between items-center py-2`}>
                      <Text style={tw`text-gray-900`}>Order Total</Text>
                      <Text style={tw`font-extrabold`}>
                          <Currency quantity={basketTotal + 5.99} currency="GBP" />
                      </Text>
                  </View>
                      <TouchableOpacity onPress={()=>navigation.navigate("PreparingOrderScreen")} style={tw`p-4 rounded-lg bg-[#00CCBB] py-2`}>
                          <Text style={tw`text-center text-white text-lg font-bold`}>
                              Place Order
                          </Text>
                 </TouchableOpacity>
              </View>
          </View>
    </SafeAreaView>
  )
}

export default BasketScreen