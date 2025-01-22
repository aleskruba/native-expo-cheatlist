/* import { StatusBar } from 'expo-status-bar'; */
import React, { useState } from 'react';
import { StyleSheet,
         View,
         Text,
         Button,
         Alert,
         Image,
         ScrollView,
         Pressable,
         Modal,
         ActivityIndicator,
          StatusBar,
        SectionList,
        SectionListComponent
        } from 'react-native';
import listOfObjects from '../data.json'
import groupedListoObjects from '../grouped-data.json'
import { SafeAreaView } from 'react-native-safe-area-context';

import { FlatList } from 'react-native';

export default function App() {


  return (

    <SafeAreaView style={styles.container} >
{/*         <ScrollView style={styles.scrollView}>
           {listOfObjects.map(el =>{
            console.log(el.id)
            return (
                <View style={styles.card} key={el.id}>
                   <Text style={styles.cardText}>{el.type}</Text>
                   <Text>{el.name}</Text>
                </View>
            )
           })} 
        </ScrollView> */}
{/*     <FlatList
     data={listOfObjects}
     keyExtractor={(item) => item.id.toString()}
     ItemSeparatorComponent={<View style={{height:16}}/>}
    ListEmptyComponent={<Text>No items found</Text>}
    ListHeaderComponent={<Text style={styles.headerText}>List o objects</Text>}
    ListFooterComponent={<Text style={styles.footerText}>FOOTER</Text>}

     renderItem={({ item }) => {
      
    console.log(item.id)
    return (
      <View style={styles.card} key={item.id}>
        <Text style={styles.cardText}>{item.type}</Text>
        <Text>{item.name}</Text>
      </View>
    );
  }}
/>
 */}


    <SectionList
       sections={groupedListoObjects}
       renderItem={({item})=>{
        return (
          <View style={styles.card}>
                <Text style={styles.cardText}>{item}</Text>
          </View>
        )
       }}

       renderSectionHeader={({ section }) => (
        <Text style={styles.sectionHeaderText}>{section.type}</Text>
      )}

      ItemSeparatorComponent={()=> <View style={{height:16}}/>}
      SectionSeparatorComponent={()=> <View style={{height:16}}/>}
  />


    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'green',
    paddingTop:StatusBar.currentHeight,
    paddingHorizontal:16
  },
  scrollView: {
    paddingHorizontal:16
  },
  card:{
    backgroundColor: 'white',
    padding:16,
    borderRadius:8,
    borderWidth:1,
    marginBottom:16
  },
  cardText:{
    fontSize:30
  },
  headerText:{
    fontSize:24,
    color: 'white',
    textAlign: 'center',
    marginBottom:12
  },
  footerText:{
    fontSize:24,
    color: 'white',
    textAlign: 'center',
    marginTop:12,
    marginBottom:12
  },
  sectionHeaderText:{
    fontSize:24,
    backgroundColor: 'red',
    color: 'blue',
    textAlign: 'center',
    marginBottom:12
  }
});