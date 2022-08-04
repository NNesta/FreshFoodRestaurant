import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from "react-native-heroicons/outline"
import tw from "twrnc";
import CategoryCard from "./CategoryCard";
import RestaurantCard from './RestaurantCard';

const FeaturedRow = (props) => {
  return (
    <View className="mt-4 px-4">
    <View className="flex-row justify-between items-center ">
      <Text>{props.title}</Text>
      <ArrowRightIcon color="#00CCBB" />
    </View>
    <Text className="text-xs text-gray-400">
        {props.description}
      </Text>
      <ScrollView className="pt-4"
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
          gap: 10
      }}>
      <RestaurantCard image={require("../assets/food1.jpg")}  rating={4.5} genre="Japanese" address="KN7  ave" title="Thai Food" description="Best Hotel in the area with best foods , dishes, and best service come again " dishes={[{key: 2, id: 2, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}, {key: 3, id: 3, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}, {key: 4, id: 4, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}, {key: 5, id: 5, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}, {key: 6, id: 6, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}]}/>
      <RestaurantCard image={require("../assets/food2.jpg")} rating={4.5} genre="Japanese" address="KN7  ave" title="Yo Sushi" description="Best Hotel in the area with best foods , dishes, and best service come again " dishes={[{key: 2, id: 2, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}, {key: 3, id: 3, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}, {key: 4, id: 4, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}, {key: 5, id: 5, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}, {key: 6, id: 6, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}]} />
      <RestaurantCard image={require("../assets/food3.jpg")} rating={4.5} genre="Japanese" address="KN7  ave" title="MC Donald's" description="Best Hotel in the area with best foods , dishes, and best service come again " dishes={[{key: 2, id: 2, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}, {key: 3, id: 3, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}, {key: 4, id: 4, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}, {key: 5, id: 5, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}, {key: 6, id: 6, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}]} />
      <RestaurantCard image={require("../assets/food4.jpg")}  rating={4.5} genre="Japanese" address="KN7  ave" title="Thai Food" description="Best Hotel in the area with best foods , dishes, and best service come again " dishes={[{key: 2, id: 2, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}, {key: 3, id: 3, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}, {key: 4, id: 4, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}, {key: 5, id: 5, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}, {key: 6, id: 6, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}]}/>
      <RestaurantCard image={require("../assets/food5.jpg")} rating={4.5} genre="Japanese" address="KN7  ave" title="Korean Food" description="Best Hotel in the area with best foods , dishes, and best service come again " dishes={[{key: 2, id: 2, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}, {key: 3, id: 3, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}, {key: 4, id: 4, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}, {key: 5, id: 5, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}, {key: 6, id: 6, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}]} />
      <RestaurantCard image={require("../assets/food6.jpg")}  rating={4.5} genre="Japanese" address="KN7  ave" title="Thai Food" description="Best Hotel in the area with best foods , dishes, and best service come again " dishes={[{key: 2, id: 2, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}, {key: 3, id: 3, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}, {key: 4, id: 4, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}, {key: 5, id: 5, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}, {key: 6, id: 6, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}]}/>
      <RestaurantCard image={require("../assets/food7.jpg")}  rating={4.5} genre="Japanese" address="KN7  ave" title="Thai Food" description="Best Hotel in the area with best foods , dishes, and best service come again " dishes={[{key: 2, id: 2, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}, {key: 3, id: 3, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}, {key: 4, id: 4, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}, {key: 5, id: 5, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}, {key: 6, id: 6, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}]}/>
      <RestaurantCard image={require("../assets/food8.jpg")}  rating={4.5} genre="Japanese" address="KN7  ave" title="Thai Food" description="Best Hotel in the area with best foods , dishes, and best service come again " dishes={[{key: 2, id: 2, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}, {key: 3, id: 3, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}, {key: 4, id: 4, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}, {key: 5, id: 5, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}, {key: 6, id: 6, name: "Hot Dogs", image: require('../assets/food2.jpg'), description: "Best food ever", price: 23}]}/>
      </ScrollView>
    </View>
  )
}

export default FeaturedRow;