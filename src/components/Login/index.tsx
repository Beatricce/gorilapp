import React, { useEffect, useState } from 'react'

import { Input, Button } from 'antd'
import { Content } from './styles'
import 'antd/dist/antd.css';

const Login: React.FC = () => {
    const [username, setUsername] = useState("")
    const [pass, setPass] = useState("")
    const [logged, setLogged] = useState(false)

    useEffect(() => {
        const authenticated = localStorage.getItem("logged")
        if(authenticated=="true"){
            setLogged(true)
       }
    }, [])
    
    useEffect(() => {
        localStorage.setItem('logged', JSON.stringify(logged))
    }, [logged])

    const allowedUser = {
        username: "admin",
        pass: "asenhamaisfacildomundo"
    }

    function handleUsername(val: any){
        setUsername(val)
    }

    function handlePass(val: any){
        setPass(val)
    }

    function handleUser(){
        const userInput = {
            username: username,
            pass: pass
        }
        if(userInput.username === allowedUser.username && userInput.pass === allowedUser.pass){
            setLogged(true)
            localStorage.setItem('logged', JSON.stringify(true))
            window.location.reload(false)
        }
        else window.alert("Opa! Algo está errado, tente novamente")
        setUsername("")
        setPass("")
    }

    return(
        <Content>
            <Input placeholder="Username" onChange={(e) => handleUsername(e.target.value)}/>
            <Input.Password placeholder="Senha" onChange={(e) => handlePass(e.target.value)}/>
            <Button onClick={handleUser}>Login</Button>
        </Content>
    )
}

export default Login

export const isAuthenticated = () =>  localStorage.getItem("logged")=="true"? true: false