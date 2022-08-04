import React from 'react'
import { View, ScrollView } from "react-native";
import tw from 'twrnc'
import CategoryCard from "./CategoryCard";


const Category = () => {
  return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={tw`px-2 flex-row pt-2`}  >
         <CategoryCard title="Pizza" image={require("../assets/food8.jpg")} /> 
         <CategoryCard title="Hot Dogs" image={require("../assets/food7.jpg")} /> 
         <CategoryCard title="Humberger" image={require("../assets/food6.jpg")} /> 
         <CategoryCard title="Chicken" image={require("../assets/food5.jpg")} /> 
         <CategoryCard title="Beef" image={require("../assets/food4.jpg")} /> 
         <CategoryCard title="Bread" image={require("../assets/food3.jpg")} /> 
         <CategoryCard title="Hot Sauce" image={require("../assets/food2.jpg")} /> 
         <CategoryCard title="Pork" image={require("../assets/food1.jpg")} /> 
 
    </ScrollView>
  )
}

export default Category