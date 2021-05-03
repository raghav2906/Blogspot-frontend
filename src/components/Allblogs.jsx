import React from 'react'
import Blogs from './Blogs'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Allblogs = () => {
    return(
        <>
           ALL BLOGS 
           <Blogs count={1000000} url={'blogs'} />
        </>
    )
}

export default Allblogs