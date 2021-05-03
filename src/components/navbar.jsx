import React, { useContext } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {Link, useHistory} from 'react-router-dom'
import  {UserContext}  from '../UserContext'

const Navar = () =>{
  const {user ,SetUser} = useContext(UserContext)
  const history = useHistory()
  const lgout=()=>{
    window.alert('Author logged out')
    localStorage.clear('authr')
    localStorage.clear('jwt')
    SetUser(null)
    history.push('/')
  }
  const renderlist = ()=>{
    if(user){
      return []
    }else{
      return []
    }
  }
    return (
        
  <Navbar bg="dark" collapseOnSelect="true" expand="lg" variant="dark">
  <Navbar.Brand><Link to ='/'>Blog-app</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link><Link to="/allblogs">All Blogs</Link></Nav.Link>
      {user?
        <>
        <Nav.Link><Link to="/authorblog">Your Blogs</Link></Nav.Link>
          <Button variant="primary" onClick={lgout}  style={{width:"100%"}}>
                    Logout
                </Button>
        </>
      :
      <>
        <Nav.Link><Link to="/login">Login</Link></Nav.Link>
        <Nav.Link><Link to="/signup">Signup</Link></Nav.Link>
      </>
      }
      {/* <Nav.Link href="#link">Link</Nav.Link> */}
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
    )
}
export default Navar