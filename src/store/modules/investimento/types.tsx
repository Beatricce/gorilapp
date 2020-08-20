export enum InvestimentoTypes {
    'GET_INVESTIMENTOS_SUCCESS' = '@investimento/GET_INVESTIMENTOS_SUCCESS',
    'GET_INVESTIMENTOS_REQUEST' = '@investimento/GET_INVESTIMENTOS_REQUEST',
    'ADD_INVESTIMENTO_REQUEST' = '@investimento/ADD_INVESTIMENTO_SUCCESS',
    'REMOVE_INVESTIMENTO_REQUEST' = '@investimento/REMOVE_INVESTIMENTO_REQUEST',
  }

  export interface InvestimentoData {
        _id: string,
        opcao: string,
        valor: number,
        data: string
    }

  export interface InvestimentoState {
    investimentos: InvestimentoData[]
  }