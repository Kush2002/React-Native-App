import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCards() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
    const img = require('../assets/img/typescript.png')
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.hadingContainer}>
            <Text style={styles.headerText}>What's New in TypeScript ?</Text>
        </View>
        <Image source={img} style={styles.cardImage}/>
        <View style={styles.bodyContainer} >
            <Text numberOfLines={3} style={styles.cardDesc}>Starting as a small scripting language for adding trivial interactivity 
                to webpages, JavaScript has grown to be a language of choice for both frontend and backend 
                applications of every size. While the size, scope, and complexity of programs written 
                in JavaScript has grown exponentially, the ability of the JavaScript language to express 
                the relationships between different units of code has not.</Text>
        </View>
        <View style={styles.footerContainer} >
            <TouchableOpacity onPress={() => openWebsite('https://www.typescriptlang.org/docs/handbook/intro.html')}>
                <Text style={styles.socialLink}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openWebsite('https://www.youtube.com/watch?v=j89BvWz8Eag&list=PLRAV69dS1uWRPSfKzwZsIm-Axxq-LxqhW')}>
                <Text style={styles.socialLink}>Follow More</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal: 8,
    },
    card:{
        width:360,
        height:470,
        borderRadius:5,
        marginVertical:12,
        marginHorizontal:16
    },
    elevatedCard:{
        backgroundColor:'#DC7633',
        elevation: 3,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#333',
        shadowOpacity:1
    },
    hadingContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    cardDesc:{
        marginBottom:8,
        fontSize:15,
        color:'#FFFFFF'
    },
    headerText:{
        color:'#000',
        fontWeight:'bold',
        fontSize:20
    },
    cardImage:{
        height:300,
        width:365,
        borderTopLeftRadius:8,
        borderTopRightRadius:8
    },
    bodyContainer:{
        padding:10,
    },
    footerContainer:{
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        
        justifyContent:'space-evenly'
    },
    socialLink:{
        color:'#000',
        fontWeight:'bold',
        paddingHorizontal:20,
        paddingVertical:6,
        backgroundColor:'#FFFFFF',
        borderRadius:6
    }
})