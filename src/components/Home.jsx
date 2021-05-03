import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Blogs from './Blogs'
import CreateBlog from './CreateBlog'

const Home = ()=>{



    return (

        <>
        
            <Container>
                <Row>
                    <Col lg="8"><Blogs count={4} url={'blogs'} /></Col>
                    <Col lg='4'><CreateBlog/></Col>
                </Row>
            </Container>
        </>
    )
}

export default Home