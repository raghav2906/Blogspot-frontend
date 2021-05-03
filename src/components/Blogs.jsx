import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/esm/Container'
import config from '../config.json'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const Blogs =(props)=>{

    const [blogs,setBlogs] = useState([])

    useEffect(()=>{
        const dataFetch = async ()=>{
            try{
                const res = await axios.get(`${config.BASE}api/${props.url}`)
                console.log(res.data); 
                if(res.data){
                    setBlogs(res.data.slice(res.data.length - props.count ,res.data.length ).reverse())
                }
            }
            catch(error){
                console.log(error);
            }
            // fetch('https://raghav-dada-blog.herokuapp.com/api/blogs')
        }
        dataFetch()

    },[])
    

    return (
        <>
        <Container>
        <Row>
            {blogs ? (
                <>
                    {blogs.map((blog, id)=>(
                        <Col key={id} lg="12" className="BlogsCol">
                        <Card style={{ width: '18rem' }} className="BlogsCard">
                        <div style={{display:"flex",flexDirection:"column"}}>
                        <div className="BlogsTitle">{blog.title}</div>
                        <div className="BlogsAuth">( by - {blog.author} )</div>
                        <div className="BlogsDesc">  {blog.desc.substring(0,50)}...
                        </div>
                        <Link to={{pathname:'/fullblog/'+blog._id}}><Button varient="primary">Explore More</Button></Link>
                        </div>
                    </Card>
                    </Col>
                    ))}
                </>
            ) : (
                <>
                    <div>Loading...</div>
                </>
            )}
        </Row>
        </Container>
        </>
    )
}

export default Blogs