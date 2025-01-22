import { View, Text,StyleSheet,StatusBar,SafeAreaView,TextInput } from 'react-native'
import React,{useState} from 'react'
import { Switch } from 'react-native';


export default function App() {

  const [name,setName] = useState("")
  const [isDarkMode,setIsDarkMode] = useState(false)

  return (
    <SafeAreaView style={styles.container} >
            <TextInput style={styles.input}
                        value={name}
                        onChangeText={setName}
                        placeholder='name...'
                        autoCorrect
     /*                    secureTextEntry={true}
                        keyboardType='numeric' */
                    />
            <Text>The name is {name}</Text>

            <View style={styles.switchContainer}>
                <Text style={styles.switchContainerText}>
                    Dark Mode
                  </Text>
                  <Switch
                  value={isDarkMode}
                  onValueChange={() => setIsDarkMode((prevState) => !prevState)}
                  trackColor={{false:'#767577',true:'red'}}
                  thumbColor="yellow"
             />

            </View>

            <TextInput style={[styles.input,styles.secInput]} 
                       placeholder='message' 
                       multiline
            />
      <StatusBar style="auto"/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgreen',
      padding:60
    },
    input:{
        height:40,
        margin:12,
        padding:10,
        borderWidth:1
    },
    secInput:{
        minHeight:100,
        textAlignVertical:"top"
    },switchContainer:{
      flexDirection:"row",
      alignItems: "center",
      justifyContent:"space-between",
      paddingHorizontal:10,
    },switchContainerText:{
      color:"black",
    }

  });