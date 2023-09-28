import React from 'react'
import '../../assets/css/logInCss.css'
import LayoutLogin from './LayoutLogin'
import { Link, useNavigate } from 'react-router-dom'
import server from '../../apis/axios'
import { IUser } from '../../interfaces/interfaces'
import secret_key from '../../config/secret_key'
const SignIn = (): JSX.Element => {
    const [error,setError] = React.useState<string>('')
    const navigate = useNavigate();
    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
      ): Promise<void> => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const body = {
            gmail: data.get('gmail'),
            password: data.get('password'),
            re_password: data.get('re-password'),
            username:data.get('username')
        }
        const profile: IUser = {
            userName:body.username as string,
            password:body.password as string,
            gmail:body.gmail as string,
            phoneNumber: "012345236",
            roleName: "User",
            isDelete: 0
          }
          
        if(body.password !== body.re_password){
            setError("Mật khẩu nhập lại không đúng")
            return;
        }else{
            try {
              await server.post('/User/CreateUser', profile)
              navigate("/")
            } catch (error) {
              console.log(error)
            }
        }
      }
    return (
        <LayoutLogin title='Register'>
            <form onSubmit={handleSubmit}>
                <div className="auth-from_body">
                    <div className="auth-from_group">
                        <input type="text" name='username' className="auth-from_input" placeholder="Type your email or your username" />
                    </div>
                    <div className="auth-from_group">
                        <input type="text" name='gmail' className="auth-from_input" placeholder="Type your email" />
                    </div>
                    <div className="auth-from_group">
                        <input type="password" name='password' className="auth-from_input" placeholder="Type your password" />
                    </div>
                    <div className="auth-from_group">
                        <input type="password" name='re-password' className="auth-from_input" placeholder="Enter your re - password" />
                    </div>
                </div>

                {
                    error && 
                    (
                        <span style={{color:"red"}}>
                            {error}
                        </span>
                    )
                }

                <div className="auth-from_controls">
                    <button className="btn--primary btn-sign">Register</button>
                </div>
                <div className="auth-from_text">
                    <span>I'm have a account: <Link to={'/Login'} >Log in</Link></span>
                </div>
            </form>
        </LayoutLogin>
    )
}
export default SignIn