import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {Input} from 'react-native-elements';
import {ms} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import Button from '../Components/Button';
import {connect} from 'react-redux';
import {ActionLogin} from '../Components/Action';
function Login(props) {
  const [visibility, setVisibility] = useState(true);
  const [iconName, setIconName] = useState('eye-with-line');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = text => {
    setEmail(text);
  };

  const validatePassword = text => {
    setPassword(text);
  };
  const loginAction = () => {
    props.ActionLogin(email, password);
  };

  const setPasswordVisibility = () => {
    setVisibility(!visibility);
    setIconName(iconName === 'eye' ? 'eye-with-line' : 'eye');
  };
  return (
    <View style={styles.cover}>
      <View style={styles.headerLogo}>
        <Image
          style={styles.tinyLogo}
          source={require('../Assets/skillana.png')}
        />
      </View>
      <View style={{paddingBottom: ms(30)}}>
        <Text style={styles.txt}>Login</Text>
      </View>

      <Text style={styles.txt1}>Email</Text>
      <Input
        containerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onChangeText={text => validateEmail(text)}
        inputContainerStyle={{
          width: ms(327),
          height: ms(56),
          borderStyle: 'solid',
          borderBottomWidth: 0,
          borderRadius: 10,
          paddingLeft: ms(15),
          backgroundColor: '#F8F8FA',
        }}
      />
      <Text style={styles.txt1}>Password</Text>
      <Input
        containerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onChangeText={text => validatePassword(text)}
        inputContainerStyle={{
          width: ms(327),
          height: ms(56),
          borderStyle: 'solid',
          borderBottomWidth: 0,
          borderRadius: 10,
          paddingLeft: ms(15),
          backgroundColor: '#F8F8FA',
        }}
        secureTextEntry={visibility}
        rightIcon={
          <TouchableOpacity
            onPress={setPasswordVisibility}
            style={{paddingRight: ms(10)}}>
            <Entypo name={iconName} size={ms(18)} color="#6E80B0" />
          </TouchableOpacity>
        }
      />
      <View style={{paddingTop: ms(28)}}>
        <Button name="Masuk" onTap={loginAction} />
      </View>
    </View>
  );
}
const mapStateToProps = state => ({});

const mapDispatchToProps = {
  ActionLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
const styles = StyleSheet.create({
  cover: {
    width: '100%',
    height: '100%',
    paddingHorizontal: ms(24),
    backgroundColor: 'white',
  },
  txt: {
    fontSize: ms(30),
    fontWeight: '700',
    fontFamily: 'Poppins-Regular',
  },
  txt1: {
    fontSize: ms(14),
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
    paddingBottom: ms(12),
  },
  tinyLogo: {
    width: ms(150),
    height: ms(140),
  },
  headerLogo: {
    alignSelf: 'center',
    paddingTop: ms(50),
    paddingBottom: ms(50),
  },
});
