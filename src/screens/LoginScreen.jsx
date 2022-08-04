import { View, Text, SafeAreaView, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import React, { useEffect, useState } from 'react';
import tw from "twrnc";
import { UserIcon, LockClosedIcon, EyeOffIcon, EyeIcon } from "react-native-heroicons/outline";
import { useNavigation } from '@react-navigation/native';
import { useUserAuth } from "../context/UserAuthContext";;


const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [viewPassword, setViewPasword] = useState(false)
    const navigation = useNavigation();
    const {logIn} = useUserAuth();
    const handleLogin = async () => {
        const response = await logIn(email, password)
        console.log(response.user.accessToken);
    }
    /* useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("Home")
            }
        })
        return unsubscribe;
    }) */
    
  return (
      <SafeAreaView className="mt-5 pt-4 h-full w-full bg-[#00CCBB]">
          <View className="h-1/5">
              <Text className="text-2xl uppercase text-center text-white">
                  Welcome to Fresh Food Restaurant Derivery
              </Text>
          </View>
          <KeyboardAvoidingView className="flex-row justify-center items-center h-4/5 w-full bg-gray-100 rounded-t-3xl">
              <View style={[tw`w-full`]}>
              <View  style={[tw`mx-12`, {gap: 10}]}>
                  <Text >
                      Email
                      </Text>
                      <View className="flex-row items-center h-8 w-full bg-white" >
                          <UserIcon size={20} color="black" />
                          <TextInput className="px-[0.2rem]" style={[tw`flex-1 h-full `, {}]} onChangeText={(value)=>setEmail(value)} />
                          
                      </View>
              
              </View> 
              
              <View style={[tw`pt-4 mx-12`, {gap: 10}]}>
                  <Text>
                      Password
                      </Text>
                      <View className="flex-row items-center h-8 w-full bg-white">
                          <LockClosedIcon size={20} color="black" />
                          <TextInput className="px-[0.2rem]" style={[tw`flex-1 h-full`, {}]} onChangeText={(value)=>setPassword(value)} secureTextEntry={!viewPassword} />
                          {!viewPassword ? <TouchableOpacity onPress={() => setViewPasword(!viewPassword)} ><EyeOffIcon size={20}/></TouchableOpacity> :
                              <TouchableOpacity onPress={() => setViewPasword(!viewPassword)} size={20} ><EyeIcon size={20}/></TouchableOpacity>
                             }
                      </View>
              
                  </View>
                  <TouchableOpacity  className="mx-16" onPress={handleLogin}>
                  <View className="bg-[#00CCBB] my-4">
                      <Text className="px-16 py-2 text-center text-white font-bold text-xl">
                          Login
                      </Text>
                  </View>
              </TouchableOpacity>
                  <TouchableOpacity  className="mx-16" onPress={()=>navigation.navigate("SignupScreen")}>
                  <View className="bg-white border-[1.5px] border-[#00CCBB] my-4">
                      <Text className="px-16 py-2 text-center text-[#00CCBB] font-bold text-xl">
                          Signup
                      </Text>
                  </View>
              </TouchableOpacity>
              </View>
              
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LoginScreen