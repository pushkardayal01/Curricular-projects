import style from "./Login.module.css";
function Login(){

    return (
        
        <div className = {style.container}>
            <div className = {style.login}>
                <p>Login</p>
            </div>

            <div className= {style.box}>
                <input className = {style.inputtag} placeholder = "email address" type = "text"/>
                <input className = {style.inputtag} placeholder = "password" type = "password" />

            </div>

            <div className= {style.loginbtn}> Log In</div>
            <div className = {style.tag}>Forget your password</div>
            
        </div>
        
    )
}

export default Login;