import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Box from '../components/Box'

export default function App({children,style}:any) {
  return (
    <View style={styles.container}>

        <Box style={{backgroundColor:'red',paddingVertical:100}}>Box 1</Box>
        
        <Box style={{backgroundColor:'blue',alignSelf:'center'}}>Box 2</Box>
        
        <Box style={{backgroundColor:'purple',alignSelf:'flex-end'}}>Box 3</Box>

        <Box style={{backgroundColor:'pink',alignSelf:'stretch'}}>Box 4</Box>

    </View>
  )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column', //
        alignItems: 'flex-end',
        backgroundColor:'lightgray',
        marginTop:64,
        borderWidth:6,
        borderColor:'white',
    }

})