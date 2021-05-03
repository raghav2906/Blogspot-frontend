import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import config from '../config.json'
import axios from 'axios'
import '../login.css'
import {Link, useHistory} from 'react-router-dom'

const Signup = ()=>{

    const [author, SetAuthor] = useState({username:"",password:"",fullName:""})
    const history = useHistory()
    
    const handleChange = (e)=>{
        console.log(e.target.value)
        SetAuthor({
            ...author,
            [e.target.name]:e.target.value
        })
    }

    const onsingin =  ()=>{

        fetch('https://raghav-dada-blog.herokuapp.com/api/signup',{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                username: author.username,
                password: author.password,
                fullName: author.fullName
            })
        }).then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.error){
                    window.alert(data.error)
                }else{
                    window.alert(data.msg)
                    history.push('/login')
                    
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
                                
                                <label>Fullname</label><br/>
                                <input type="text" name="fullName" value={author.fullName} placeholder="fullName" onChange={handleChange} /><br/>
                                
                                
                                <button onClick={onsingin} >
                                        Singup
                                </button>
                                <p>Already have an account? <Link to="login">Login</Link></p>
                            </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
                        
        </>
    )
}

export default  Signup