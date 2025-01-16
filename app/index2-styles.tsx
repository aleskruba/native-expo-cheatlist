import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>
          Style inheritance <Text style={styles.boldText}>Text in bold</Text>
        </Text>
      </View>
      <View style={[styles.LightblueBg,styles.box,styles.androidShadow]}>
       <Text style={{borderRadius:5,backgroundColor:'blue'}}>Lightblue box</Text>
      </View>
      <View style={[styles.box,styles.LightgreenBg,styles.androidShadow]}>
       <Text style={styles.title}>Lightgreen box</Text>
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({
    container: {flex:1,backgroundColor:"plum",padding:60},
    darkMode:{
        backgroundColor:"black",
    },
    darkModeText:{
       color:"white"
    },
    boldText:{
      fontWeight:"bold",
   },
    box:{
      width:250,
      height:250,
      backgroundColor:'pink',
      paddingHorizontal:10,
      paddingVertical:10,
      marginVertical:10,
      borderWidth:2,
      borderColor:"white",
      borderStyle:"solid",
      borderRadius:20
    },
    LightblueBg:{
      backgroundColor:'green',

    },
    LightgreenBg:{
      backgroundColor:'lightgreen',

    },
    title: {
      color:'white'
    },
    boxShadow:{
      shadowColor:'blue',
      shadowOffset:{
        width:6,
        height:6
      },
      shadowOpacity:0.6,
      shadowRadius:4
    },
    androidShadow:{
      elevation:10,
    }

})