import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts =[
        {
            uid:1,
            name:'Arjun',
            status:'Node Js,React Developer',
            imageUrl:'https://banner2.cleanpng.com/20180402/bje/kisspng-computer-icons-avatar-login-user-avatar-5ac207e69ecd41.2588125315226654466505.jpg',
        },
        {
            uid:2,
            name:'Siddharth',
            status:'Any Technology Developer',
            imageUrl:'https://static.vecteezy.com/system/resources/previews/009/398/577/non_2x/man-avatar-clipart-illustration-free-png.png',
        },
        {
            uid:3,
            name:'Meet',
            status:'Social Media',
            imageUrl:'https://banner2.cleanpng.com/20180619/aqe/kisspng-computer-icons-avatar-user-profile-5b29a301bb4939.4658258415294553617671.jpg',
        },
        {
            uid:4,
            name:'Darshit',
            status:'Android Developer',
            imageUrl:'https://i.pinimg.com/736x/21/20/b0/2120b058cb9946e36306778243eadae5.jpg',
        },
        {
            uid:5,
            name:'Jainum',
            status:'MERN Developer',
            imageUrl:'https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png',
        }
    ]
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
            <View key={uid} style={styles.userCard}>
                <Image source={{uri: imageUrl}} style={styles.userImage}/>
                <View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal: 8,
    },
    container:{
        paddingHorizontal:12
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:3,
        backgroundColor:'#C0C0C0',
        padding:8,
        borderRadius:10
    },
    userImage:{
        width:60,
        height:60,
        borderRadius: 60/2,
        marginRight:12
    },
    userName:{
        fontSize:16,
        fontWeight:'500',
        color:'#000'
    },
    userStatus:{
        fontSize:14,
        color:'#000'
    },
})