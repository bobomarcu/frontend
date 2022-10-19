import React from "react";


export default  function Documentation(){


    return(

        <div>
                <h1>Guide</h1>
                <div className="guide">

                <h3>Download scripts</h3>
                <p>Scripturile pot fi gasite in acest <a href="https://github.com/bobomarcu/scripts.git">GitHub</a> repository.</p>
                <hr></hr>
                <h3>Linux</h3>
                <p>Pentru a rula scriptul pe masini Linux/Ubuntu trebuie scrisa comanda:</p>
                <code>./scanLinux.sh</code>
                <p>Asteptati executarea scriptului si aparitia mesajului:</p>
                <code>Scan complete</code>
                <br></br>
                <br></br>
                <hr></hr>
                <h3>Windows</h3>
                <p>Pentru a rula scriptul pe masini Windows10 trebuie scrisa comanda:</p>
                <code>bash scanWindows.bash</code>
                <p>Asteptati executarea scriptului si aparitia mesajului:</p>
                <code>Scan complete</code>
                <br></br>
                <br></br>
                <hr></hr>
                <h3>MacOS</h3>
                <p>Pentru a rula scriptul pe masini Windows10 trebuie scrisa comanda:</p>
                <code>bash scanMacOS.bash</code>
                <p>Asteptati executarea scriptului si aparitia mesajului:</p>
                <code>Scan complete</code>
                <br></br>
                <br></br>
                <hr></hr>
                <h3>Compatibily</h3>
                <p><b>Linux:</b> ubuntu server</p>
                <p><b>Windows:</b> 10</p>
                <p><b>MacOS:</b> MacOS Montrey</p>
                </div>
                

                



        </div>


    )



}