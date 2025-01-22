
import React from 'react';
import { StyleSheet,View,Platform, ScrollView } from 'react-native';
import Card from '../components/Card'
import { SafeAreaView } from 'react-native-safe-area-context';
export default function App() {

    const image1 = {
        name: "image1",
        image: require('../assets/images/img1.png'),
        type: "Fire",
        hp: 391,
        moves: ["Scratch", "Ember", "Growl", "Leer"],
        weaknesses: ["Water", "Rock"]
    };
    
    const image2 = {
        name: "image2",
        image: require('../assets/images/img2.png'),
        type: "Water",
        hp: 420,
        moves: ["Splash", "Water Gun", "Tail Whip", "Bubble"],
        weaknesses: ["Electric", "Grass"]
    };
    
    const image3 = {
        name: "image3",
        image: require('../assets/images/img3.png'),
        type: "Grass",
        hp: 350,
        moves: ["Vine Whip", "Razor Leaf", "Growl", "Leech Seed"],
        weaknesses: ["Fire", "Flying", "Ice"]
    };
    
    const image4 = {
        name: "image4",
        image: require('../assets/images/img2.png'),
        type: "Electric",
        hp: 380,
        moves: ["Thunder Shock", "Quick Attack", "Tail Whip", "Charge"],
        weaknesses: ["Ground"]
    };
    
    const image5 = {
        name: "image5",
        image: require('../assets/images/img1.png'),
        type: "Rock",
        hp: 400,
        moves: ["Tackle", "Rock Throw", "Defense Curl", "Rollout"],
        weaknesses: ["Water", "Grass", "Fighting", "Ground", "Steel"]
    };
    
    const image6 = {
        name: "image6",
        image: require('../assets/images/img3.png'),
        type: "Ice",
        hp: 370,
        moves: ["Powder Snow", "Ice Shard", "Hail", "Avalanche"],
        weaknesses: ["Fire", "Fighting", "Rock", "Steel"]
    };
    

  return (

    <SafeAreaView style={styles.container} >
        <ScrollView>
            <Card {...image1}/>
            <Card {...image2}/>
            <Card {...image3}/>
            <Card {...image4}/>
            <Card {...image5}/>
            <Card {...image6}/>
        </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f5f5f5',
    paddingTop:Platform.OS ==='android' ? 25 : 0
  }
})