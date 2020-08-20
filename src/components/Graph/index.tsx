import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

interface Static{
    perFixa: number,
    perVariavel: number
}

const Graph: React.FC<Static> = ({perFixa, perVariavel}: Static) => {
    return(
        <HighchartsReact 
                highcharts={Highcharts}
                options={{
                    chart: {
                        type: "pie"
                    },
                    title: {
                        text: "Resumo da carteira"
                    },
                    series: [{
                        data:[{
                                name: "Fixa",
                                y: perFixa
                            },
                            {
                                name: "Variável",
                                y: perVariavel
                        }]
                    }]
                }}/>
    )
}

export default Graph