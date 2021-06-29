import {ms} from 'react-native-size-matters';
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Header from '../Components/Header';
export default function JobDetail(props) {
  const {navigation, route} = props;
  const {posisi, perusahaan, lokasi, status, tanggal, label} = route.params;
  return (
    <View style={styles.cover}>
      <Header name={posisi} />

      <View style={styles.card}>
        <Image
          style={styles.tinyImage}
          resizeMode="contain"
          source={{
            uri: `${label}`,
          }}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style={{justifyContent: 'center'}}>
            <Text style={styles.txt}>Posisi</Text>
            <Text style={styles.txt}>Perusahaan</Text>
            <Text style={styles.txt}>Lokasi</Text>
            <Text style={styles.txt}>Status</Text>
            <Text style={styles.txt}>Tanggal Penayagan</Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Text style={styles.txt}>:</Text>
            <Text style={styles.txt}>:</Text>
            <Text style={styles.txt}>:</Text>
            <Text style={styles.txt}>:</Text>
            <Text style={styles.txt}>:</Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Text style={styles.txt}>{posisi}</Text>
            <Text style={styles.txt}>{perusahaan}</Text>
            <Text style={styles.txt}>{lokasi}</Text>
            <Text style={styles.txt}>{status}</Text>
            <Text style={styles.txt}>{tanggal}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cover: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F6F9FB',
  },
  card: {
    width: ms(335),
    height: ms(522),
    marginHorizontal: ms(20),
    paddingHorizontal:ms(15),
    marginTop: ms(30),
    marginBottom: ms(180),
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    textAlign: 'center',
  },
  txt: {
    fontSize: ms(13),
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
  tinyImage: {
    width: ms(250),
    height: ms(250),
    borderRadius:10,
    alignSelf:'center'
    
  },
});
