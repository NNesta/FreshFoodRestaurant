import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import tw from 'twrnc';
import * as Progress from "react-native-progress";
import { useNavigation } from '@react-navigation/native';

const PreparingOrderScreen = () => {
    const navigation = useNavigation()
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("DeliveryScreen")
        }, 5000)
    })
  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
          <Text>Waiting for restaurant to accept your order</Text>
          <Progress.Circle className="text-white" size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  )
}

export default PreparingOrderScreen;