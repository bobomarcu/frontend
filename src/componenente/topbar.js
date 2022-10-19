import React from "react";
import Cookies from "universal-cookie";

export default function Topbar(){

    const cookies = new Cookies()

    const logout = () =>{

        cookies.remove('logged-in')
        window.location.reload()
    }
            

            return(
                <div className="bar">
                     <div className="barLeft">
                        <p style={{marginLeft: "10px"}}>Aplicatia 1</p>
                    </div>
                    <div className="barRight">
                        <button onClick={logout}><p>Log out</p></button>
                    </div>
                </div>
            )
    



}