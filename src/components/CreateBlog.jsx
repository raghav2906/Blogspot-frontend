import React,{useEffect,useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import config from '../config.json'

const CreateBlog =()=>{
    const [blog,setBlog] = useState({
        title:"",
        desc:""
    })

    const handleChange = (e)=>{
        // console.log(e)
        setBlog({
            ...blog,
            [e.target.name]: e.target.value
        })
    }

    const postBlog = () => {
        fetch(`${config.BASE}api/create`,{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify(blog)
        }).then(res=>res.json())
        .then(data=>{
            if(data.blog){
                window.alert('CReated')
            }else{
                window.alert(data.msg)
            }
        }).catch(err => {console.log("something")})
        }

    const onSubmit = (e)=>{
        
        if(blog.title.trim() !== ''  && blog.desc.trim() !== '' ){
            postBlog()
        }else{
            window.alert("Fill the Form completely!")
        }
    }

    return (
        <>
            <div className="BlogsCreate">
                <h4>Create A Blog</h4>
            <Form className="BlogsMainForm">
                <Form.Group controlId="exampleForm.ControlInput1" className = "BlogsForm">
                    <p className="BlogsFormLabel">Title Name</p>
                    <Form.Control type="text" name="title" value={blog.title} onChange={handleChange} placeholder="Title" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1" className = "BlogsForm">
                <p  className="BlogsFormLabel">Description</p>
                <Form.Control as="textarea" name="desc" value={blog.desc} onChange={handleChange}  rows={3} />
                </Form.Group>
                <Button variant="primary"  onClick={onSubmit} style={{marginRight:"-250px"}}>
                    Submit
                </Button>
            </Form>
            </div>
        </>
    )
}
export default CreateBlog