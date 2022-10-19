import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function Servers(){

    const [svData , setSvData] = useState([])



            useEffect(()=>{
                axios.get('http://192.168.7.211/get-server-status').then((res)=>{

                    setSvData(res.data)
        
                })
            },[])
            
        
            setInterval(()=>{

                window.location.reload()

            },60*1000)
            



   
 
    return(
        <div>
                <h1>Server status</h1>
                <div className="parent">

                    {

                        svData.map((item)=>{
                            return(
                                <div className="buble">

                                    <p>Server: <b>{item.host}</b></p>
                                    <p>Port: <b>{item.port}</b></p>
                                    <p>Status: <b>{item.status}</b></p>
                                    <a href={`http://${item.host}:${item.port}`} ><button className="butonRefresh">Open</button></a>

                                </div>
                            )



                        })

                    }                    

                </div>
        </div>
    )

}