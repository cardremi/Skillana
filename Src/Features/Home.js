import {ms} from 'react-native-size-matters';
import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {Avatar} from 'react-native-elements';
import CardHome from '../Components/CardHome';

function Home(props) {
  const DATA = [
    {
      id: 1,
      title:
        'Officia voluptate velit deserunt excepteur commodo ut excepteur eiusmod.',
    },
    {
      id: 2,
      title:
        'Reprehenderit commodo ullamco labore in nulla sunt mollit ipsum excepteur cupidatat.',
    },
    {
      id: 3,
      title:
        'Laborum in reprehenderit ullamco consequat sunt aliqua consequat ex.',
    },
  ];
  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          width: ms(15),
        }}
      />
    );
  };
  return (
    <View style={styles.cover}>
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{alignContent: 'flex-start'}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.txt}>Hai </Text>
              <Text style={styles.txt}>{props.DataLogin.fullName},</Text>
            </View>
            <Text style={styles.txt1}>Yuk temukan potensimu!</Text>
          </View>
          <Avatar
            rounded
            source={{
              uri: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1727&q=80',
            }}
            size="large"
          />
        </View>
        <View style={{paddingTop: ms(55), paddingBottom: ms(20)}}>
          <Text style={styles.txt2}>Konten Buat Kamu</Text>
        </View>
        <View>
          <FlatList
            contentContainerStyle={{paddingBottom:ms(10),paddingHorizontal:ms(5)}}
            horizontal
            data={DATA}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={ItemSeparatorView}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return <CardHome title={item.title} />;
            }}
          />
        </View>
      </View>
    </View>
  );
}
const mapStateToProps = state => ({
  DataLogin: state.dataReducer.DataLogin,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
const styles = StyleSheet.create({
  cover: {
    backgroundColor: '#F6F9FB',
    width: '100%',
    height: '100%',
    paddingHorizontal: ms(33),
    paddingTop: ms(60),
  },
  txt: {
    fontSize: ms(25),
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
  },
  txt1: {
    fontSize: ms(14),
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
  txt2: {
    fontSize: ms(18),
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
});
