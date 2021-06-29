import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import { ms } from 'react-native-size-matters';

export default function Button({name, onTap}) {
  return (
    <TouchableOpacity style={styles.press} onPress={onTap}>
      <Text style={styles.text1}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  press: {
      backgroundColor:'#5AADF7',
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center',
      width:ms(327),
      height:ms(60)
  },
  text1:{
    fontSize:ms(16),
    fontWeight:'500',
    color:'white',
    fontFamily:'Poppins-Regular'
  }
});
