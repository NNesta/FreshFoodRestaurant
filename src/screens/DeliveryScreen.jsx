import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { Bar } from 'react-native-progress'
import { XIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { selectRestaurant } from '../features/restaurantSlice'
import { useSelector } from 'react-redux'; 
import MapView,{Marker} from 'react-native-maps'

const DeliveryScreen = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)
  return (
    <View className="flex-1 pt-5">
          <SafeAreaView className="bg-[#00CCBB] z-50">
              <View className="flex-row justify-between items-center p-5">
                  <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                      <XIcon color="white" size={30} />
                  </TouchableOpacity>
                  <Text className="font-light text-white text-lg">Order Help</Text>
              </View>
              <View className="bg-white mx-5 rounded-md p-6 z-50 shadow-md">
                  <View className="flex-row justify-between">
                      <View>
                          <Text className="text-lg text-gray-400">Estimated Arrival</Text>
                          <Text className="text-4xl font-bold">45-55 Minutes</Text>
                      </View>
                     <Image className="h-20 w-20" source={require("../assets/food8.jpg")} />
                  </View>
                  <Bar size={30} indeterminate={true} color="#00CCBB" />
                  <Text className="mt-3 text-gray-500">Your order at {restaurant.title} is being prepared</Text>
              </View>
          </SafeAreaView>
           <MapView
              className="flex-1 -mt-10 z-0"
              mapType='mutedStandard'
              initialRegion={{
                  latitude: -1.956216,
                  longitude: 30.028601,
                  latitudeDelta: 0.005,
                  longitudeDelta: 0.005
              }}>
              <Marker
                  coordinate={{
                      latitude: -1.956216,
                      longitude: 30.028601,
                  }}
                  title={restaurant.title}
                  description={restaurant.description}
                  identifier="origin"
                  pinColor="#00CCBB"
              />
          
          </MapView> 
          <SafeAreaView style={[tw`bg-white flex-row items-center h-28`, {gap: 5}]}>
              <Image source={require("../assets/food4.jpg")} className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5" />
              <View className="flex-1">
                  <Text className="text-lg">Nestor Ngabo</Text>
                  <Text className="text-gray-400">Your Rider </Text>
              </View>
              <Text className="text-[#00CCBB] text-lg mr-5 font-bold"></Text>
          </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen