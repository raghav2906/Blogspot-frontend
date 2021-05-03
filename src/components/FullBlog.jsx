import axios from 'axios'
import React, { useContext, useEffect,useState} from 'react'

import Card from 'react-bootstrap/Card'
import config from '../config.json'
import Button from 'react-bootstrap/Button'
import {Redirect,Link} from 'react-router-dom'
import Demo from './popup'
import  {UserContext}  from '../UserContext'


const FullBlog = (props) => {
    const {user,SetUser} = useContext(UserContext)
    console.log(props.match.params.id)
    let id=props.match.params.id
    const [blog , SetBlog] = useState([])
    const [deleteB, setDeleteB] = useState(false)
    useEffect(()=>{
        const fetchBlog = async () => {
            try{
                const res = await axios.get(`${config.BASE}api/blog/${id}`)
                if(res.data){
                    SetBlog(res.data)
                }
            }
            catch(error){
                console.log(error)
            }
        }
        fetchBlog()
    },[])

    const deleteBlog = async () =>{
        try{
            const res = await axios.delete(`${config.BASE}api/delete/${id}`,{
                headers:{
                    'Content-Type':'application/json',
                    'authorization':'Bearer '+localStorage.getItem('jwt')
                }
            })
            if(res.data){
                setDeleteB(true)
            }
        }
        catch(error){
            console.log(error)
            window.alert('Something wrong, please try again')
        }
    }

    const updateBlog = async()=>{

    }

    if(deleteB){
        return <Redirect to='/allblogs' />
    }
    return (
        <>
            <Card style={{ width: '80%',marginTop:'5%',marginLeft:'10%' }} className="BlogsCard">
                        <div style={{display:"flex",flexDirection:"column"}}>
                            <div className="BlogsTitle">{blog.title}</div>
                            <div className="BlogsAuth">( by - {blog.author} )</div>
                            <div className="BlogsDesc">{blog.desc}</div>
                        {/* <Link to={{pathname:'/fullblog/'+blog._id}}><Button varient="primary">Explore More</Button></Link> */}
                        </div>
                    </Card>
                    {user ?
                       <> {blog.author== user.username ?<> <Button varient="primary" onClick={deleteBlog}>Delete Blog</Button>
                        <Demo id={blog._id} /></> :<></> }</>
                    :<></> }
                    
                   
        </>
    )
}

export default FullBlog