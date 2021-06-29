import {ms} from 'react-native-size-matters';
import React from 'react';
import {StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default function CardJob({
  job,
  date,
  minSalary,
  maxSalary,
  location,
  company,
  type,
  onPress
}) {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.cover}>
      <View style={{flexDirection: 'row'}}>
        <Image style={styles.tinyLogo} source={require('../Assets/logo.png')} />
        <View style={{paddingLeft: ms(15), alignItems: 'flex-start'}}>
          <Text style={styles.txt}>{job} </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.txt1}>{company} -</Text>
            <Text style={styles.txt2}> {type}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: ms(4),
            }}>
            <SimpleLineIcons
              name="location-pin"
              color="#A4A3B8"
              size={ms(12)}
            />
            <Text style={styles.txt2}> {location}</Text>
          </View>

          <View style={{flexDirection: 'row', paddingTop: ms(3)}}>
            <Text style={styles.txt3}>
              {minSalary ? (
                <Text>Rp.{minSalary}</Text>
              ) : (
                <Text>Gaji tidak disebutkan</Text>
              )}{' '}
            </Text>
            <Text style={styles.txt3}>
              {maxSalary ? <Text>- Rp.{maxSalary}</Text> : null}
            </Text>
          </View>
          <View style={{paddingTop: ms(3),paddingBottom:ms(4)}}>
            <Text style={styles.txt2}>{date}</Text>
          </View>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cover: {
    width: ms(335),
    height: ms(121),
    borderRadius: 10,
    paddingHorizontal: ms(16),
    paddingVertical: ms(11),
    backgroundColor: 'white',
    elevation: 3,
  },
  tinyLogo: {
    width: ms(60),
    height: ms(60),
    marginVertical: ms(20),
  },
  txt: {
    color: 'blue',
    fontSize: ms(15),
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
  },
  txt1: {
    fontSize: ms(13),
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
  },
  txt2: {
    color: '#A4A3B8',
    fontSize: ms(12),
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
  txt3: {
    color: 'blue',
    fontSize: ms(13),
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
  },
});
