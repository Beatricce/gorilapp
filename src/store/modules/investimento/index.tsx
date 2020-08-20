import { Reducer } from 'redux'

import { InvestimentoState, InvestimentoTypes } from './types'

const INITIAL_STATE: InvestimentoState = {
    investimentos: []
}

const reducer: Reducer<InvestimentoState> = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case InvestimentoTypes.GET_INVESTIMENTOS_SUCCESS:
      return {...state, investimentos: action.payload.investimentos}
    default:
      return state
  }
}

export default reducer