import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Currency from "react-currency-formatter";
import tw from "twrnc";
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToBasket, removeItemFromBasket, selectBasketItems, selectBasketItemsWithId } from '../features/basketSlice';

const DishRow = ({id, name, description, image, price }) => {
    const [isPressed, setIsPressed] = useState(false);
    const dispatch = useDispatch();
    const items = useSelector((state)=>selectBasketItemsWithId(state, id))
    const removeItem = () => {
        if (!items.length > 0) return;
        dispatch(removeItemFromBasket({id}))
    }
    return (
      <>
      <TouchableOpacity onPress= {()=>setIsPressed(!isPressed)} className="bg-white p-4 flex-row">
          <View className="flex-1 pr-2">
              <Text className="text-lg mb-1">{ name }</Text>
              <Text className="text-gray-400">{description}</Text>
              <Text><Currency quantity={price} currency="RWF" /></Text>
          </View>
          <View>
              <Image className="h-20 w-20 p-4" source={image} />
          </View>
            </TouchableOpacity>
            {
                isPressed && (
                    <View style={[tw`bg-white px-4 flex-row items-center pb-3`, {gap: 2}]}>
                        <TouchableOpacity onPress={removeItem}>
                            <MinusCircleIcon className="text-blue-500" size={40} />
                        </TouchableOpacity>
                        <Text className="text-xl">{items.length}</Text>
                        <TouchableOpacity onPress={() => dispatch(addItemToBasket({id, name, description, image, price }))}>
                            <PlusCircleIcon className="text-blue-500" size={40} />
                     </TouchableOpacity>
                    </View>
                
                )
        }
        </>
  )
}

export default DishRow