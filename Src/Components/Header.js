import {ms} from 'react-native-size-matters';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Header({name}) {
  return (
      <View style={styles.header}>
        <Text style={styles.txt}>{name}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: ms(50),
    backgroundColor: 'white',
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  txt: {
    fontSize: ms(20),
    fontWeight: '700',
    fontFamily: 'Poppins-Regular',
  },
});
