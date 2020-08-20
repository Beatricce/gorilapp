import React from 'react'
import { Button, List } from 'antd'
import { CloseOutlined } from '@ant-design/icons'

interface InvestimentoData {
    _id: string,
    opcao: string,
    valor: number,
    data: string
}
interface Investimentos{
    investimentos: InvestimentoData[]
    handleDelete: (_id: string) => void
}

const Lists : React.FC<Investimentos> = ({investimentos, handleDelete}: Investimentos) =>{
    return(
        <>
        <div>
            <h4>Renda Fixa:</h4>
            <List
                dataSource={investimentos.filter((investimento: InvestimentoData) => investimento.opcao === "fixa")}
                renderItem={item =>(
                    <List.Item>
                        <Button size="small" onClick={()=>handleDelete(item._id)} icon={<CloseOutlined/>} danger/> {item.data} R${item.valor} 
                    </List.Item>
                )}
            ></List>
        </div>
        <div>
            <h4>Renda Variável:</h4>
            <List
                dataSource={investimentos.filter((investimento: InvestimentoData) => investimento.opcao === "variavel")}
                renderItem={item =>(
                    <List.Item>
                        <Button size="small" onClick={()=>handleDelete(item._id)} icon={<CloseOutlined/>} danger/> {item.data} R${item.valor} 
                    </List.Item>
                )}
            ></List>
        </div>
        </>
    )
}

export default Lists