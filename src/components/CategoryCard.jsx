import React from 'react';
import { View, Text, TouchableOpacity, Image } from "react-native";
import tw from 'twrnc'




const CategoryCard = (props) => {
  
  return (
    <TouchableOpacity style={tw`px-1`}>
      <View style={tw`relative`}>
          <Image style={tw`h-32 w-32`} source={props.image} />
        <Text style={tw` absolute left-0 top-[60%] text-white font-bold text-xl`}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default CategoryCard;