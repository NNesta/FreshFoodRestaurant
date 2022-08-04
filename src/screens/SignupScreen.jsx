import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import tw from "twrnc";
import { UserIcon, LockClosedIcon, EyeOffIcon, EyeIcon } from "react-native-heroicons/outline";
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
    const navigation = useNavigation(); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [viewPassword, setViewPasword] = useState(false)
    
  return (
      <SafeAreaView style={tw`bg-white mt-5 pt-4 h-full w-full bg-[#00CCBB]`}>
          <View style={tw`h-1/6`}>
              <Text style={tw`text-2xl uppercase text-center text-white`}>
                  Create account
              </Text>
          </View>
          <View style={tw`flex-row justify-center items-center h-5/6 w-full bg-white rounded-t-3xl`}>
              <View style={[tw`w-full`]}>
              <View  style={[tw`mx-12`, {gap: 10}]}>
                  <Text>
                      First Name
                      </Text>
                      <View style={tw`flex-row border-2 items-center h-8 w-full`}>
                          <UserIcon size={20} color="black" />
                          <TextInput placeholder='e.g:John' style={[tw`flex-1 h-full `, {}]} onChangeText={(value)=>setEmail(value)} />
                          
                      </View>
              
              </View> 
              <View  style={[tw`mx-12`, {gap: 10}]}>
                  <Text>
                      Last Name
                      </Text>
                      <View style={tw`flex-row border-2 items-center h-8 w-full`}>
                          <UserIcon size={20} color="black" />
                          <TextInput placeholder='e.g: Doe' style={[tw`flex-1 h-full `, {}]} onChangeText={(value)=>setEmail(value)} />
                          
                      </View>
              
              </View> 
              <View  style={[tw`mx-12`, {gap: 10}]}>
                  <Text>
                      Email
                      </Text>
                      <View style={tw`flex-row border-2 items-center h-8 w-full`}>
                          <UserIcon size={20} color="black" />
                          <TextInput placeholder='e.g:johndoe@gmail.com' style={[tw`flex-1 h-full `, {}]} onChangeText={(value)=>setEmail(value)} />
                          
                      </View>
              
              </View> 
              <View style={[tw`pt-4 mx-12`, {gap: 10}]}>
                  <Text>
                      Password
                      </Text>
                      <View style={tw`flex-row border-2 items-center h-8 w-full`}>
                          <LockClosedIcon size={20} color="black" />
                          <TextInput placeholder='e.g:jsdfg43rr$$5' style={[tw`flex-1 h-full`, {}]} className="focus:" onChangeText={(value)=>setPassword(value)} secureTextEntry={!viewPassword} />
                          {!viewPassword ? <TouchableOpacity onPress={() => setViewPasword(!viewPassword)} ><EyeOffIcon size={20}/></TouchableOpacity> :
                              <TouchableOpacity onPress={() => setViewPasword(!viewPassword)} size={20} ><EyeIcon size={20}/></TouchableOpacity>
                             }
                      </View>
              
                  </View>
                  <TouchableOpacity style={tw`mx-16`} onPress={()=>console.log("Signup")} >
                  <View style={tw`bg-[#00CCBB] my-4`}>
                      <Text style={tw`px-16 py-2 text-center text-white font-bold text-xl`}>
                          Signup
                      </Text>
                  </View>
              </TouchableOpacity>
                  <TouchableOpacity style={tw`mx-16`} onPress={()=>navigation.navigate("LoginScreen")}>
                  <View style={tw`bg-white border-2 border-tr-[#00CCBB] my-4`}>
                      <Text style={tw`px-16 py-2 text-center text-[#00CCBB] font-bold text-xl`}>
                          Login
                      </Text>
                  </View>
              </TouchableOpacity>
              </View>
              
      </View>
    </SafeAreaView>
  )
}

export default SignupScreen