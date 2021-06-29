import {all} from 'redux-saga/effects';
import {SkillSaga} from '../Components/Saga';
export function* SagaWatcher() {
  yield all([SkillSaga()]);
}
