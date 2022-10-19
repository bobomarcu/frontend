import './App.css';
import React, { useState } from "react";
import axios from 'axios';
import Cookies from 'universal-cookie'
import Home from './componenente/home';
import Topbar from './componenente/topbar';

function App() {

  const cookies = new Cookies();

  const [username , setUsername ] = useState('')
  const [password , setPassword ] = useState('')

  const login = () =>{

    // cookies.set('logged-in', {id:3 , username:'admin'})
    // window.location.reload();

    axios.get(`http://192.168.7.211/login/${username}-${password}`).then((res)=>{

      if(res.status === 200){

          cookies.set('logged-in', res.data)
          window.location.reload();

      }
      else{

          window.alert(res.data)

      }


    }).catch((err)=>{
      if (err) throw err
    })

    

  }

  if(cookies.get('logged-in')){

    return(
      <section>
            <Topbar/>
            <Home/>
      </section>
  

    )
  }

  else{

    return(

      <div className='login'>
          
          <div className='main'>
              <h1>Log in</h1>
              <br></br>
              <br></br>
              <input

                placeholder='username'
                name='username'
                onChange={(e)=>{

                  setUsername(e.target.value)

                }}

              ></input>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              <input

                placeholder='password'
                name='password'
                type={"password"}
                onChange={(e)=>{

                  setPassword(e.target.value)

                }}

              ></input>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              <button

                onClick={login}

              >Log in!</button>
              
          </div>
          

        

      </div>

    )

  }

}

export default App;
