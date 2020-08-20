import { call, all, takeLatest, put, select } from 'redux-saga/effects'
import api from '../../../services/api'

import { getInvestimentosSuccess} from './actions'
import { AnyAction } from 'redux'

import { ApplicationState } from '../../index'

import { InvestimentoTypes, InvestimentoData } from './types'

function* getInvestimentos() {
    const investimentosData = yield call(api.get, '')
    const investimentos = JSON.parse(investimentosData.data.body)
    yield put(getInvestimentosSuccess(investimentos))
}

function* addInvestimento({payload}: AnyAction){
    const investimentos= yield select((state: ApplicationState) => state.investimento.investimentos)
    const newInvestimento = {
        opcao: payload.opcao,
        valor: payload.valor,
        data: payload.data
    }

    yield call(api.post, '', newInvestimento)

    const updatedInvestimentos = [newInvestimento, ...investimentos]    
    yield put(getInvestimentosSuccess(updatedInvestimentos))
}

function* removeInvestimento({payload}: AnyAction){
    const investimentos = yield select((state: ApplicationState) => state.investimento.investimentos )
    const updatedInvestimentos = investimentos.filter((investimento: InvestimentoData) => investimento._id!=payload._id)
    yield call(api.delete, payload._id)
    console.log(updatedInvestimentos)
    yield put(getInvestimentosSuccess(updatedInvestimentos))
}

export default all([
    takeLatest(InvestimentoTypes.GET_INVESTIMENTOS_REQUEST, getInvestimentos),
    takeLatest(InvestimentoTypes.ADD_INVESTIMENTO_REQUEST, addInvestimento),
    takeLatest(InvestimentoTypes.REMOVE_INVESTIMENTO_REQUEST, removeInvestimento),
  ])