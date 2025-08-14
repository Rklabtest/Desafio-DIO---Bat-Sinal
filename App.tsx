import { ScrollView, StyleSheet, View } from 'react-native'
import {Home} from './src/screens/Home/Home'

export default function App() {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container} >
        <Home />
      </View>
    </ScrollView>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
