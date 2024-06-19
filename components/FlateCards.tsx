import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlateCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlateCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}><Text style={styles.textColor}>Red</Text></View>
        <View style={[styles.card, styles.cardTwo]}><Text style={styles.textColor}>Green</Text></View>
        <View style={[styles.card, styles.cardThree]}><Text style={styles.textColor}>Blue</Text></View>
        <View style={[styles.card, styles.cardThree]}><Text style={styles.textColor}>Blue</Text></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        margin:2,
        paddingHorizontal: 8,
    },
    container:{
        flex:1,
        flexDirection:'row',
        padding:8
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        borderRadius: 4,
        margin:10
    },
    cardOne:{
        backgroundColor:'#EF5354'  
    },
    cardTwo:{
        backgroundColor:'#50DBB4'  
    },
    cardThree:{
        backgroundColor:'#5DA3FA'  
    },
    textColor:{
        color:'#FFFFFF'
    }
})