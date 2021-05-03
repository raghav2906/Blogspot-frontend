import React, { useContext } from 'react'
import Blogs from './Blogs'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UserContext } from '../UserContext'

const Allblogs = () => {
    const {user,SetUser} = useContext(UserContext)
    const youareel= 'blogauthor/' + user.username
    return(
        <>
           ALL BLOGS 
           <Blogs count={1000000} url={youareel} />
        </>
    )
}

export default Allblogs