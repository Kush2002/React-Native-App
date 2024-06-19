import { View, Text, StyleSheet, useColorScheme } from 'react-native'
import React from 'react'

const AppPro = () => {
    const isDark = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text style={isDark ? styles.whiteText : styles.darkText}>AppPro</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    whiteText:{
        color: '#FFFFFF'
    },
    darkText:{
        color:'#000000'
    }
});

export default AppPro;