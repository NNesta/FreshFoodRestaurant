import { View, Text, SafeAreaView, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import tw from "twrnc"
import { useNavigation } from '@react-navigation/native'
import { SearchIcon, UserIcon, AdjustmentsIcon, ChevronDownIcon } from "react-native-heroicons/outline";
// ...
import Category from "../components/Category";
import FeaturedRow from "../components/FeaturedRow";

// type Props = {}

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])
  return (
    <SafeAreaView style={tw`bg-white pt-4 flex-1 h-full w-full`}>
      <View style={tw`flex-row justify-center items-center p-4`}>
        <Image source={require("../assets/food3.jpg")} style={tw`h-10 w-10 rounded-full`} />
        <View style={tw`flex-1 px-4`}>
            <Text style={tw`font-bold text-gray-400 text-xs`}>Deriver Now</Text>
            <View style={tw`flex-row items-center`}>
              <Text style={tw`font-bold text-xl`}>Current Location</Text>
              <ChevronDownIcon style={tw`w-7 h-7 mt-1`} color="#00CCBB" />
            </View>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("SignupScreen")}>
          <UserIcon size={40} color="#00CCBB" />
        </TouchableOpacity>
      </View> 
      <View style={tw`flex-row items-center p-2`}>
        <View style={tw`flex-1 rounded-xl flex-row h-12 bg-gray-300 focus:bg-red-500 items-center`}>
          <SearchIcon style={tw`h-full w-8`} color="gray" />
          <TextInput style={tw`flex-1 h-full`} placeholder='search for food' keyboardType='default' />
        </View>
        <AdjustmentsIcon size={30} color="#00CCBB" />
      </View>
      <View>
        <Category />
        </View>
        <ScrollView>
        <FeaturedRow title="Restaurant Food" description="Best Restaurant in the Area" />
        <FeaturedRow title="Restaurant Food" description="Best Restaurant in the Area" />
        <FeaturedRow title="Restaurant Food" description="Best Restaurant in the Area" />
        </ScrollView>
      </SafeAreaView>
  )
}

export default HomeScreen