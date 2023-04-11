import { SafeAreaView, View, Image} from 'react-native'
import tw from 'tailwind-react-native-classnames';
import styles from './styles'
import { NavOptions } from '../../components/NavOptions';

export const Home = () => {
  return (
    <SafeAreaView style={tw `bg-white h-full`}>
      <View style={tw `p-5`}>
        <Image         
        style={styles.logo}
        source={{
          uri: 'https://logospng.org/download/uber/logo-uber-1536.png'
        }}
         />
      </View>   
      <NavOptions />  
    </SafeAreaView>
  )
}



