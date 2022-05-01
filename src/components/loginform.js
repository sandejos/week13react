import React from "react";

export default function LoginForm(){
    return(
        <div id='form' className="row">
            <div class='col-sm'>
            <h3 id='form' >Login</h3>
            <form>
                <input type='email' name='email' placeholder="email" required/>
                <input type='password' name='password' placeholder="password" required/>
                <button>Login</button>
            </form>
        </div>
        </div>
    )
}