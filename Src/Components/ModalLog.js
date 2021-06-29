import {ms} from 'react-native-size-matters';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Modal, Pressable} from 'react-native';
import {connect} from 'react-redux';
import {logOut} from '../Components/Action';

function ModalLog(props) {
  const {navigation} = props;
  const [modalVisible, setModalVisible] = useState(false);

  const keluar = () => {
    props.logOut();
    navigation.navigate('Login', {});
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', e => {
      setModalVisible(!modalVisible);
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <View style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Peringatan</Text>
            <Text style={styles.modalText2}>
              Apakah Kamu Yakin Ingin Keluar Dari Akunmu?
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <Pressable
                style={styles.button}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  keluar();
                }}>
                <Text style={styles.textStyle}>Ya,Keluar</Text>
              </Pressable>
              <Pressable
                style={styles.buttonClose}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle2}>Batalkan</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const mapStateToProps = state => ({});

const mapDispatchToProps = {
  logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalLog);
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: ms(315),
    height: ms(208),
  },
  button: {
    width: ms(130),
    height: ms(35),
    borderColor: '#F9A696',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonClose: {
    width: ms(130),
    height: ms(35),
    backgroundColor: '#5AADF7',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#F9A696',
  },
  textStyle2: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: ms(18),
  },
  modalText2: {
    color: '#909095',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: ms(14),
    marginBottom: ms(40),
  },
});
