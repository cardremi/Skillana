import {ms} from 'react-native-size-matters';
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {white} from 'react-native-paper/lib/typescript/styles/colors';

export default function CardHome({title, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cover}>
        <View>
          <Image
            style={styles.tinyImage}
            resizeMode="stretch"
            source={{
              uri: 'https://stikfamika.ac.id/wp-content/uploads/2020/12/3904-perbesar-peluang-lolos-di-seleksi-interview-campuspedia-dengan-tips-trick-interview-online.png',
            }}
          />
        </View>
        <View style={{paddingTop: ms(20), paddingHorizontal: ms(12)}}>
          <Text style={{textAlign: 'justify'}}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cover: {
    width: ms(300),
    height: ms(214),
    borderRadius: 20,
    backgroundColor: 'white',
    elevation: 5,
  },
  tinyImage: {
    width: '100%',
    height: ms(100),
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});
