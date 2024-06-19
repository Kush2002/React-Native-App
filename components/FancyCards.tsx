import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function FancyCards() {
    const Img = require('../assets/img/himachal.jpg')
  return (
    <View >
        <Text style={styles.headingText}>Trending Place</Text>
        <View style={[styles.card, styles.cardElevated]}>
            <Image source={Img} style={styles.cardImage}></Image>
            <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Champawat</Text>
            <Text style={styles.cardLable}>Himachal</Text>
            <Text style={styles.cardDesc}>Himachal Online is your premier travel partner for
                discovering the enchanting beauty of the mesmerizing Himachal region through
                our carefully crafted tour packages. As a travel agency deeply rooted in the
                heart of Himachal Pradesh, we take immense pride in showcasing the natural.</Text>
                <Text style={styles.cardFooter}>15 minites ago</Text>
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
    textColor:{
      color:'#FFFFFF'
    },
    card:{
        width:360,
        height:420,
        borderRadius:5,
        marginVertical:12,
        marginHorizontal:16
    },
    cardElevated:{
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    cardImage:{
        height:250,
        width:360,
        borderTopLeftRadius:8,
        borderTopRightRadius:8
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,
        backgroundColor:'#C0C0C0'
    },
    cardTitle:{
        fontWeight:'bold',
        fontSize:22,
        marginBottom:4
    },
    cardLable:{
        marginBottom:6,
        fontSize:14,
    },
    cardDesc:{
        marginBottom:12,
        fontSize:12,
        marginTop:6,
        flexShrink:1
    },
    cardFooter:{
        fontSize:10,
        fontWeight:'bold'
    }
})