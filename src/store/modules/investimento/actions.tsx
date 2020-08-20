import { action } from 'typesafe-actions'
import { InvestimentoTypes, InvestimentoData } from './types'

export const getInvestimentosRequest = () => action(InvestimentoTypes.GET_INVESTIMENTOS_REQUEST)
export const getInvestimentosSuccess = (investimentos: InvestimentoData[]) => action(InvestimentoTypes.GET_INVESTIMENTOS_SUCCESS, { investimentos })
export const addInvestimentoRequest = (opcao: string, valor: number, data: string) => action(InvestimentoTypes.ADD_INVESTIMENTO_REQUEST, { opcao, valor, data })
export const removeInvestimentoRequest = (_id: string) => action(InvestimentoTypes.REMOVE_INVESTIMENTO_REQUEST, { _id })