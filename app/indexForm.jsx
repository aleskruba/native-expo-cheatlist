import { View,KeyboardAvoidingView, Image,Text,StyleSheet,Button,StatusBar,SafeAreaView,TextInput, Platform } from 'react-native'
import React,{useState} from 'react'
import { Switch } from 'react-native';



export default function App() {

 const [username,setUserName] = useState('')
 const [password,setPassword] = useState('')
 const [errors,setErros] = useState({})

const validateForm = () => {
    let errors = {}

    if (!username) errors.username = "Username is required"
    if (!password) errors.password = "Password is required"

    setErros(errors)

    return Object.keys(errors).length === 0;
}

const handleSubmit = () =>{
    if (validateForm()) {
        console.log("Submited",username,password)
        setUserName("");
        setPassword("");
        setErros({})
    }
}

  return (
    <KeyboardAvoidingView 
            style={styles.container} 
            behavior='padding'
            keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
            >
        <View style={styles.form}>
            <Image source={require("../assets/images/img1.png")}
                    style={styles.image}
                    
                    />
            <Text style={styles.label}>Username</Text>
            <TextInput 
                    placeholder='Enter your usermame'
                    style={styles.input}
                    value={username}
                    onChangeText={setUserName}
                    />
                    {errors.username ? <Text style={styles.errorText}>{errors.username}</Text> : null }

                    
            <Text style={styles.label}>Password</Text>
            <TextInput 
                    placeholder='Enter your password' 
                    secureTextEntry
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    />
                    {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null }

          <Button title='Login'
                onPress={handleSubmit}
          />          
        </View>
      <StatusBar style="auto"/>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgreen',
      padding:60
    },
    form:{
        backgroundColor: 'white',
        padding:20,
        borderRadius: 10,
        shadowColor:'black',
        shadowOffset:{
            width: 0,
            height: 2
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation: 5
    },label:{
        fontSize:16,
        marginBottom:5,
        fontWeight: 'bold',

    },input:{
        height:40,
        borderColor:"#ddd",
        borderWidth:1,
        marginBottom:15,
        padding:10,
        borderRadius:5,
    },image:{
        width:150,
        height:200,
        alignSelf:"center",
        marginBottom:50,
        resizeMode: 'contain',
    },errorText:{
        color:'red',
        marginBottom:10,
    }

  });