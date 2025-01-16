import { StyleSheet,View,Text,Button,Alert,Image,ScrollView,Pressable,Modal,ActivityIndicator } from 'react-native';

export default function Greet({name}) {
return(

    <View>
        <Text style={{color:'white'}}>Hello , {name}</Text>
    </View>
)
}