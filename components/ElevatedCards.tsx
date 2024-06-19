import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView  horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.cardElevated]}>
          <Text style={styles.textColor}>Tap</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
          <Text style={styles.textColor}>to</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
          <Text style={styles.textColor}>Scroll</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
          <Text style={styles.textColor}>more...</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
          <Text style={styles.textColor}>view</Text>
        </View>
      </ScrollView>
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
    textColor:{
      color:'#FFFFFF'
    },
    container:{
      padding:8
    },
    card:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      width:100,
      borderRadius:5,
      margin:10,
      height:100
    },
    cardElevated:{
      backgroundColor:'#CAD5E2',
      elevation:4,
      shadowOffset:{
        height:1,
        width:1
      },
      shadowColor:'#5DA3FA',
      shadowOpacity:0.4
    }

})