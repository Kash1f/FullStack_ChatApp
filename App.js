import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState()


  return (
    <View>
      <Text style={{fontSize:30}}>Simple form in React native</Text>
      <TextInput style={styles.textInput}
      placeholder='Enter user name'></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
