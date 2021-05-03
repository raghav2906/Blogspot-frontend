import React,{useEffect , useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import config from '../config.json'
import { Redirect,Link} from 'react-router-dom'

const UpdateBlog =(props)=>{
    let id = props.id
    const [blog,setBlog] = useState({
        title:"",
        desc:""
    })
    const [updated,setUpdated] = useState(false)


    useEffect(()=>{
        const fetchBlog = async () => {
            try{
                const res = await axios.get(`${config.BASE}api/blog/${id}`)
            
                if(res.data){
                    let blog = res.data
                    setBlog({
                        title:blog.title,
                        desc:blog.desc
                    })
                }
            }
            catch(error){
                console.log(error)
            }
        }
        fetchBlog()
    },[])


    const handleChange = (e)=>{
        console.log(e)
        setBlog({
            ...blog,
            [e.target.name]: e.target.value
        })
    }

    const updateBlog = () => {
        // try{
        //     const res = await axios.put(`${config.BASE}api/update/${id}`, {
        //     headers:{
        //         "Content-Type":"application/json",
        //         "authorization":"Bearer "+localStorage.getItem("jwt")
        //     },
        //     blog
        //     } )
            
        //     if(res.data){
        //         setUpdated(true)
        //         window.alert("Blog Alert!")
        //         window.location.reload()

        //     }
        // }catch(err){
        //     console.log(err)
        // }
        fetch(`${config.BASE}api/update/${id}`,{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify(blog)
        }).then(res=>res.json())
        .then(data=>{
            if(data.doc){
                
                window.alert('Blog is Updated')
            }else{
                window.alert("Error")
            }
        }).catch(err => {console.log("something")})
    }        

    const onSubmit = (e)=>{
        if(blog.title.trim() !== ''    && blog.desc.trim() !== '' ){
            updateBlog()
        }else{
            window.alert("Fill the Form completely!")
        }
    }

    if(updated){
        return <Redirect to={`/fullblog/${id}`} />
    }
    return (
        <>
            <div className="BlogsCreate" style={{marginTop:'-20%',marginLeft:'-50%'}}>
                <h4>Update This Blog</h4>
            <Form className="BlogsMainForm">
                <Form.Group controlId="exampleForm.ControlInput1" className = "BlogsForm">
                    <p className="BlogsFormLabel">Title Name</p>
                    <Form.Control type="text" name="title" value={blog.title} onChange={handleChange} placeholder="Title" />
                </Form.Group>

                
                

                <Form.Group controlId="exampleForm.ControlTextarea1" className = "BlogsForm">
                <p  className="BlogsFormLabel">Description</p>
                <Form.Control as="textarea" name="desc" value={blog.desc} onChange={handleChange}  rows={3} />
                </Form.Group>
                <Button variant="primary"  onClick={onSubmit} style={{marginRight:"-250px" ,width:"50%"}}>
                    update a blog
                </Button>
            </Form>
            </div>
        </>
    )
}
export default UpdateBlog