import { all } from 'redux-saga/effects'

import investimento from './investimento/sagas'

export default function* rootSaga() {
  return yield all([investimento])
}