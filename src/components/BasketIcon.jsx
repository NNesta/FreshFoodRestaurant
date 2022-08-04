import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import tw from "twrnc";
import Currency from "react-currency-formatter"
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice';

const BasketIcon = () => {
    const items = useSelector(selectBasketItems);
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal)
  return (
    <View style={tw`absolute bottom-10 z-50 w-full`}>
          <TouchableOpacity onPress={() => navigation.navigate('Basket')} style={[tw`mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center justify-between`, { gap: 10 }]}>
              <Text style={tw`px-2 py-1 bg-[#01A296] text-white text-xl font-extrabold`}>{items.length}</Text>
              <Text style={tw`text-lg text-white font-extrabold`}>View Basket</Text>
              <Text style={tw`text-lg text-white font-extrabold`}><Currency quantity={basketTotal} currency="GBP" /></Text>
              
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon

