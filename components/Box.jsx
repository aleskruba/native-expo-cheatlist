import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Box({children,style}) {
  return (
        <View style={[styles.box, style]}>
            <Text style={styles.text} >{children}</Text>
        </View>

  )
}

export const styles = StyleSheet.create({

    box:{
        backgroundColor:"lightgray",
        padding:10
   
    },
    text:{
        fontSize:24,
        fontWeight:"bold",
        textAlign: "center",
        color: "green"
    }

})