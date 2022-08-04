import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from "twrnc";
import { StarIcon, LocationMarkerIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';



const RestaurantCard = ({image, title, rating, genre, address, description, dishes}) => {
    const navigation = useNavigation()
    const handlePressRestaurant = () => {
        navigation.navigate("Restaurant", {image, title, rating, genre, address, description, dishes})
    }
  return (
      <TouchableOpacity
         onPress={handlePressRestaurant}
          style={[tw`shadow-lg py-2 px-2`, { gap: 4 }]}>
          <Image style={tw`w-64 h-32 rounded`} source={image} />
          <View style={[tw`px-4`]}>
              <Text style={[tw`text-xl font-bold text-black pl-2`]}>{ title }</Text>
          <View style={[tw.style(`flex-row`), {gap:7}] } >
              <StarIcon style={tw`text-green-500`} color="#00CCBB" opacity={0.5} size={22} />
              <Text style={tw`text-xs text-gray-500`}>{rating} . {genre}</Text>
              
          </View>
          <View style={[tw`flex-row items-center`, {gap:10}]}>
              <LocationMarkerIcon size={22} opacity={0.4} color="gray" />
              <Text style={[tw`text-xs text-gray-500`]}>Nearby. { address}</Text>
              </View>
          </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard

const styles = StyleSheet.create({})