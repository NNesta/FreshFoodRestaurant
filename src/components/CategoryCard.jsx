import React from 'react';
import { View, Text, TouchableOpacity, Image } from "react-native";
import tw from 'twrnc'




const CategoryCard = (props) => {
  
  return (
    <TouchableOpacity className="px-1">
      <View className="relative">
          <Image className="h-32 w-32" source={props.image} />
        <Text className=" absolute left-0 top-[60%] text-white font-bold text-xl">{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default CategoryCard;