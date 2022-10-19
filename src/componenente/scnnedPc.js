import axios from "axios";
import React, {  useEffect, useState } from "react";

export default function ScannedPC(){

    const [data,setData] = useState([])



        const refresh = () =>{

            window.location.reload()

        }

        useEffect(()=>{


                axios.get('http://192.168.7.211/get-pc-data').then((res)=>{

                    setData(res.data)

                })

        },[])


        if(typeof data == 'object'){

            return(
                <div className="data">
                    <h1>Pc scanned</h1>
                    <button className="butonRefresh" onClick={refresh}>Refresh</button>
                    <br></br>
                    <br></br>
                    <div>


                        
                    </div>
                    <table>
                        <thead>

                            <tr>
                                <th>Id</th>
                                <th>User</th>
                                <th>RAM Memory</th>
                                <th>CPU</th>
                                <th>GPU</th>
                                <th>IP</th>
                                <th>OS</th>
                                <th>Data</th>
                            </tr>

                        </thead>
            

                        <tbody>
                            {
                                data.map((item)=>{
                                    return(

                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.user}</td>
                                            <td>{item.mem}</td>
                                            <td>{item.cpu}</td>
                                            <td>{item.gpu}</td>
                                            <td>{item.host}</td>
                                            <td>{item.os}</td>
                                            <td>{item.data}</td>
                                        </tr>

                                    )

                                })
                            }      
                        </tbody>                        
                      
                   

                       

                        


                    </table>
                       

                   
                    
                </div>
            )
            

        }
        else{

            return(
                
                <div className="data">
                    <h1>Pc scanned</h1>
                    <button className="butonRefresh" onClick={refresh}>Refresh</button>
                    <br></br>
                    <p style={{textAlign:'center' ,marginTop:'30vh'}}><b>{data}</b></p>
                </div>

            )

        }

            



}