import React from 'react'
import { View, ScrollView } from "react-native";
import tw from 'twrnc'
import CategoryCard from "./CategoryCard";


const Category = () => {
  return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={tw`px-2 flex-row space-x-2 pt-2 gap-2`}  >
         <CategoryCard title="Humberger" image="../assets/food1.jpg" /> 
         <CategoryCard title="Humberger" image="../assets/food2.jpg" /> 
         <CategoryCard title="Humberger" image="../assets/food3.jpg" /> 
         <CategoryCard title="Humberger" image="../assets/food4.jpg" /> 
         <CategoryCard title="Humberger" image="../assets/food5.jpg" /> 
         <CategoryCard title="Humberger" image="../assets/food6.jpg" /> 
         <CategoryCard title="Humberger" image="../assets/food7.jpg" /> 
         <CategoryCard title="Humberger" image="../assets/food8.jpg" /> 
 
    </ScrollView>
  )
}

export default Category