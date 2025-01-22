import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Box from '../components/Box'

export default function App({children,style}:any) {
  return (
    <View style={styles.container}>

        <Box style={{backgroundColor:'black'}}>Box 1</Box>
        
        <Box style={{backgroundColor:'blue'}}>Box 2</Box>
        
        <Box style={{backgroundColor:'purple'}}>Box 3</Box>

        <Box style={{backgroundColor:'pink'}}>Box 4</Box>

        <Box style={{backgroundColor:'red'}}>Box 5</Box>
        
        <Box style={{backgroundColor:'blue'}}>Box 6</Box>
        
        <Box style={{backgroundColor:'purple'}}>Box 7</Box>

        <Box style={{backgroundColor:'yellow'}}>Box 8</Box>

    </View>
  )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
         /* flexDirection: 'row', */ //
/*         alignItems: 'flex-end', */
        alignContent: 'space-between',
        backgroundColor:'lightgray',
        marginTop:64,
        borderWidth:6,
        borderColor:'white',
    }

})