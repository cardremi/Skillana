import {all, call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import * as Navigation from '../Utils/HelperNav';
import Toast from 'react-native-simple-toast';
import {setListData, setLoading, setLogin, setDataLogin} from './Action';
import qs from 'qs';

function* GetItem() {
  try {
    yield put(setLoading(true));
    let config = {
      method: 'get',
      url: 'https://dev.skillana.id/api/internal/recruitment/vacancies/list',
      headers: {
        Cookie: 'ci_session=fiq6p82lo00ak3btih56ii66vhi5vrtj',
      },
    };
    const response = yield call(axios, config);
    console.log(response, 'uuuhuhuhu');
    if (response.status === 200) {
      yield put(setListData(response.data.data));
    } else {
      Toast.show('Server Error', 4000);
    }
  } catch (error) {
    console.log('ERR', error);
  } finally {
    yield put(setLoading(false));
  }
}
function* PostLogin(payload) {
  try {
    yield put(setLoading(true));
    const {email, password} = payload;
    let data = qs.stringify({
      email: `${email}`,
      password: `${password}`,
    });
    console.log(data);
    let config = {
      method: 'post',
      url: 'https://dev.skillana.id/api/auth/login',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Cookie: 'ci_session=k2uq2dsnqjnv7pq70phhl1l3d6evh5q1',
      },
      data: data,
      validateStatus: status => status < 500,
    };
    const respond = yield call(axios, config);
    console.log(respond, 'ini res1');
    if (respond.status == 200) {
      yield put(setDataLogin(respond.data));
      Toast.show(`Selamat Datang ${respond.data.fullName}`, 5000);
      yield Navigation.navigate({
        name: 'BottomNav',
        params: {},
      });
      yield put(setLogin(true));
    } else {
      Toast.show('Something Wrong');
    }
  } catch (error) {
    console.log('ERR', error);
  } finally {
    yield put(setLoading(false));
  }
}
export const SkillSaga = function* () {
  yield all([
    takeLatest('LOGIN', PostLogin),
    takeLatest('GETALLITEM', GetItem),
  ]);
};
