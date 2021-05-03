import React, { useContext, useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import config from '../config.json'
import axios from 'axios'
import '../login.css'
import {Link, useHistory} from 'react-router-dom'
import  {UserContext}  from '../UserContext'




const Login = ()=>{

    const [author, SetAuthor] = useState({username:"",password:""})
    const {user,SetUser} = useContext(UserContext)
    
    const history = useHistory()
    const handleChange = (e)=>{
        console.log(e.target.value)
        SetAuthor({
            ...author,
            [e.target.name]:e.target.value
        })
    }

    
    const onsingin =  ()=>{
        // Setispress(true)
        fetch('https://raghav-dada-blog.herokuapp.com/api/signin',{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                username: author.username,
                password: author.password
            })
        }).then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.error){
                    window.alert('Logged in Failed')
                }else{
                    window.alert('Logged in successfuuly')
                    localStorage.setItem("jwt",data.token)
                    localStorage.setItem("authr",JSON.stringify(data.author))
                    console.log(data.author)
                    SetUser(data.author)

                    history.push('/')
                }
            }).catch(err=>{console.log(err)})
    }

    return (
        <>
            
            LOGIN HERE !
            <Container>
                <Row>
                    <Col></Col>
                    <Col xs={6}>

                            <div className="login-form">
                                <label>Username</label><br/>
                                <input type="text" name="username" placeholder="Username" value={author.username} onChange={handleChange} /><br/>
                                
                                <label>Password</label><br/>
                                <input type="password" name="password" value={author.password} placeholder="Password" onChange={handleChange} /><br/>
                                
                                
                                <button onClick={onsingin} >
                                        Signin
                                </button>
                                
                                <p>Don't have account? <Link to="signup">singup</Link></p>
                                
                            </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
                        
        </>
    )
}

export default  Login