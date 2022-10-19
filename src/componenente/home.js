import React from "react";
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import ScannedPC from './scnnedPc'
import Documentation from "./documentation";
import Servers from "./servers";

export default function Home(){


    return(

        <section className="content">
            

           
            
                <Router>
                    <div className="taskbar">
                        <ul>
                        <h1>Optiuni disponibile</h1>
                        <br></br>
                        <li><Link to={"/scanned-pc"} className={'link'}>Pc scanned</Link></li>
                        <br></br>
                        <li><Link to={"/guide"} className={'link'}>Guide</Link></li>
                        <br></br>
                        <li><Link to='servers' className="link">Servers</Link></li>
                        </ul>
                    </div>
                    <div>  
                        <Routes>
                                <Route path='/scanned-pc' element={<ScannedPC/>} exact/>
                                <Route path='/guide' element={<Documentation/>} exact />
                                <Route path='/servers' element={<Servers/>} exact />
                        </Routes>
            
                    </div>
                </Router> 
           


        </section>

    )


}