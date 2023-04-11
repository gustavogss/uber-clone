import { View, Image, FlatList, TouchableOpacity, Text } from 'react-native';
import {data} from '../../model/data';
import tw from 'tailwind-react-native-classnames';
import styles from './styles';

export const NavOptions = () => {
  return (
    <FlatList        
    data={data}   
    horizontal   
    keyExtractor={(item)=>item.id}  
    renderItem={({item})=>(
        <TouchableOpacity style={tw `p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
            <View>
                <Image 
                style={styles.icon}
                source={{uri: item.image}}
                />
                <Text style={tw `mt-2 text-lg font-semibold`} >{item.title}</Text>
            </View>
        </TouchableOpacity>
    )}

    />
     
  )
}

