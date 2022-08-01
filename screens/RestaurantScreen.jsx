import { View, Text, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import tw from "twrnc";
import { ArrowLeftIcon, StarIcon, LocationMarkerIcon, ChevronRightIcon } from 'react-native-heroicons/solid';
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import { useDispatch } from 'react-redux';
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';
import { setRestaurant } from '../features/restaurantSlice';

const RestaurantScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { params: { image, title, rating, genre, address, description, dishes } } = useRoute();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);
    useEffect(() => {
        dispatch(setRestaurant({ image, title, rating, genre, address, description, dishes }));
    }, [dispatch])
    return (
        <>
        <BasketIcon />
        <ScrollView style={tw`relative`}>
        <View style={[tw`h-full w-full bg-white flex-1 relative pt-5 `]}>    
           <Image source={image} style={[tw`w-full h-56`]} />
           <TouchableOpacity onPress={navigation.goBack} style={[tw`absolute top-6 left-5 bg-white rounded-full`]}>
           <ArrowLeftIcon style={tw`p-2`} size={40} color="#00bbcc" />
           </TouchableOpacity>
            <View style={tw`bg-white`}>
                    <View style={tw`px-4 pt-4`}>
                        <Text style={tw`text-3xl font-bold`}>{title}</Text>
                        <View style={[tw`flex-row items-center`, {gap:2}]}>
                            <StarIcon size={20} color="#00BBCC" />
                            <Text style={tw`text-xs text-gray-500`}>
                                <Text style={tw`text-green-300`}>{rating}</Text>. {genre}   </Text>
                            <Text style={tw`text-xs text-gray-500`}><LocationMarkerIcon size={20} />
                            Nearby {address}</Text> 
                        </View>
                        <Text style={tw`text-gray-500 py-4`}>{description}</Text>
                        <TouchableOpacity style={[tw.style(`flex-row items-center py-4 border-3 border-gray-300`), {borderTopWidth: 2, borderTopColor: "gray", borderBottomWidth: 2, borderBottomColor: "gray"}]}>
                        <QuestionMarkCircleIcon size={20} color="gray" />
                        <Text style={tw`flex-1 pl-3 font-bold text-lg`}>Have a food allergy?</Text>
                            <ChevronRightIcon size={30} color="#00CCBB" />
                        </TouchableOpacity>
                        
                    </View>     
            </View>
            </View>
            <Text style={tw`text-xl font-bold p-2`}>Menu</Text>
            <View style={[tw`w-full bg-white flex-row pb-24`]}>
                <ScrollView>{dishes.map(dish=><DishRow
                        id={dish.id}
                        name={dish.name}
                        description={dish.description}
                        price={dish.price}
                        image={dish.image}
                        />)
                        }</ScrollView>
            
            </View>
        </ScrollView>
    </>
  )
}

export default RestaurantScreen