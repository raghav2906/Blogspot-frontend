
import React, { useEffect, useState } from 'react'
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar'
import Home from './components/Home'
import Allblogs from './components/Allblogs'
import FullBlog from './components/FullBlog'
import CreateBlog from './components/CreateBlog'
import updateBlog from './components/updateBlog'
import Login from './components/login';
import Signup from './components/signup';
import {UserContext} from './UserContext'
import AuthorBlog from './components/AuthorBlog'

function App() {
  const [user, SetUser] = useState(null)  
  useEffect(()=>{
    const atr = JSON.parse(localStorage.getItem('athr'))
    if(atr){
      SetUser(atr)
    }
  },[])
  return (
    <div className="App">
      
      <BrowserRouter>
      <UserContext.Provider value={{user,SetUser}}>
      <Navbar/>
        <Switch>
          <Route path exact='/'>
            <Home/>
          </Route>
          <Route path='/createablog/:id' component={CreateBlog} />
          <Route path='/updateablog/:id' component={updateBlog} />
          <Route path='/fullblog/:id' component={FullBlog} />
          <Route path='/allblogs'> <Allblogs/></Route>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/authorblog' component={AuthorBlog} />
        </Switch>
        </UserContext.Provider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
