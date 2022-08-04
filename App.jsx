import react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantScreen from './src/screens/RestaurantScreen';
import PreparingOrderScreen from './src/screens/PreparingOrderScreen';
import BasketScreen from './src/screens/BasketScreen';
import DeliveryScreen from './src/screens/DeliveryScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import { Provider } from "react-redux";
import { store } from './src/store';
import { TailwindProvider } from 'tailwindcss-react-native';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Provider store={store}>
      <TailwindProvider>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen name="Basket" component={BasketScreen}
           options={{presentation: 'modal', headerShown: false}}
          />
          <Stack.Screen name="PreparingOrderScreen" component={PreparingOrderScreen}
          options={{presentation: 'fullScreenModal', headerShown: false}}
          />
          <Stack.Screen name="DeliveryScreen" component={DeliveryScreen}
          options={{presentation: 'fullScreenModal', headerShown: false}}
          />
          <Stack.Screen name="LoginScreen" component={LoginScreen}
          options={{presentation: 'fullScreenModal', headerShown: false}}
          />
          <Stack.Screen name="SignupScreen" component={SignupScreen}
          options={{presentation: 'fullScreenModal', headerShown: false}}
          />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
