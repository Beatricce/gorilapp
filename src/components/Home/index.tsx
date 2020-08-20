import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ApplicationState } from '../../store'
import { getInvestimentosRequest, addInvestimentoRequest, removeInvestimentoRequest} from '../../store/modules/investimento/actions'

import {Head, Logo, Title, Bar, Content} from './styles'
import {Select, InputNumber, DatePicker, Button} from 'antd'
import {PlusOutlined} from '@ant-design/icons'

import Lists from '../Lists'
import Graph from '../Graph'
import 'antd/dist/antd.css';
import logo from "../../images/logo.jpeg"

const {Option} = Select;

interface InvestimentoData {
    _id?: string,
    opcao: string,
    valor: number,
    data: string
}

const Home: React.FC = () => {
    const [opcao, setOpcao] = useState("fixa")
    const [valor, setValor] = useState(0)
    const [data, setData] = useState("01-01-2019")
    const [investimentoList, setInvestimentoList] = useState<InvestimentoData[]>([])
    const [investimento, setInvestimento] = useState("")

    useEffect(() => {
        const investimentos = localStorage.getItem("investimentoList")
        if(investimentos){
            setInvestimentoList(JSON.parse(investimentos))
       }
    }, [])
    
    useEffect(() => {
        localStorage.setItem('investimentoList', JSON.stringify(investimentoList))
    }, [investimentoList])

    const dispatch = useDispatch()
    const investimentos = useSelector((state: ApplicationState) => state.investimento.investimentos)
    const perFixa = investimentos.length > 0? investimentos.filter((investimento: InvestimentoData) => investimento.opcao === "fixa").length/investimentos.length: 0
    const perVariavel = 1-perFixa

    useEffect(() => {
        console.log("getTodosRequest")
        dispatch(getInvestimentosRequest())
      }, [])

    function handleSelect(val: any){
        setOpcao(val)
    }
    function handleInput(val: any){
        setValor(val)
    }
    function handleDate(val: any, dateString: string){
        setData(dateString)
    }
    function handleAdd(){
        dispatch(addInvestimentoRequest(opcao, valor, data))
    }
    function handleDelete(_id: string){
        dispatch(removeInvestimentoRequest(_id))
    }

    return (
        
        <Content>
            <Head>
                <Logo src = {logo} />
            </Head>
            <Title>
                Carteira de Investimentos
            </Title>
            <Bar>
                <h4>Adicionar novo investimento:</h4>
                <h4> Tipo:</h4>
                <Select 
                style={{ width: 120 }} 
                onChange={e=>handleSelect(e)}>                    
                    <Option value="fixa"> Fixa </Option>
                    <Option value="variavel"> Variável </Option>
                </Select>
                <h4> Valor:</h4>
                <InputNumber onChange={e=>handleInput(e)}/>
                <h4> Data:</h4>
                <DatePicker format="DD-MM-YYYY" onChange={handleDate}/>
                <Button onClick={handleAdd} shape="circle" icon={<PlusOutlined/>}/>
            </Bar>
            <Bar>
                <Lists investimentos={investimentos} handleDelete={handleDelete} />
            </Bar>
            <div>
                <Graph perFixa = {perFixa} perVariavel={perVariavel}/>
            </div>
        </Content>
    )
}

export default Home