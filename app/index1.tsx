import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet,View,Text,Button,Alert,Image,ScrollView,Pressable,Modal,ActivityIndicator } from 'react-native';
const logoImg = require('../assets/images/icon.png')
import Greet from '../components/Greet';

export default function App() {


  const [isModalVisible, setIsModalVisible] = useState(false)

  return (

    <View style={styles.container} >
      <ScrollView>
      <Image source={require('../assets/images/icon.png')} style={{width:300,height:300}}/>
      <Image source={logoImg} style={{width:300,height:300}} />
      <Greet  name='ales' />
      <Greet  name='Joe' />
      
      <View style={{}}>
        <Text>StyleSheet API</Text>
      </View>

      <Pressable onPressOut={()=>console.log('Image pressed OUT')}>
        <Text style={{color:"white"}}>Hello World dd </Text>
        <Image source={logoImg} style={{width:300,height:300}} />
      </Pressable>
      
      <Button title="is Modal Visible" 
             onPress={()=>setIsModalVisible(true)}
             color="midnightblue"
             disabled={false}
             />

          <View style={{flex:1,backgroundColor:"plum",padding:60}}>
            <Button title="Alert" onPress={()=>Alert.alert("Invalid data")}/>
            <Button title="Alert 2 " onPress={()=>Alert.alert("Invalid data","DOB incorrect")}/>
            <Button title="Alert 3 " onPress={()=>Alert.alert("Invalid data","DOB incorrect",[
              {
                text:"Cancel",
                onPress:()=> console.log("Cancel pressed")
              },
              {
                text:"OK",
                onPress:()=> console.log("OK pressed")
              }
            ])}/>

            <ActivityIndicator />
            <ActivityIndicator size="large" />
            <ActivityIndicator size="large" color="midnightblue" />
            <ActivityIndicator size="large" color="midnightblue"animating={false} />
          </View>
      <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab adipisci exercitationem iste, corrupti quae laboriosam incidunt recusandae nemo aperiam fugit, veritatis consequatur vitae obcaecati ea tempora inventore. Corrupti non iste in excepturi et. Dolorem corporis, nostrum dicta alias laudantium recusandae!      
      </Text>

      <Modal visible={isModalVisible}
            onRequestClose={()=>setIsModalVisible(false)}
            animationType='slide' //slide , none
       

      >
        <View style={{flex:1,backgroundColor:'lightblue',padding:60 }}>
     
        <Button title="is Modal Visible" 
             onPress={()=>setIsModalVisible(false)}
             color="midnightblue"
             disabled={false}
             />
        </View>
      </Modal>
      
      <StatusBar style="auto" 
                 backgroundColor='red'
                
                 />
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    padding:60
  }
});