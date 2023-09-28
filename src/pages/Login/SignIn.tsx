import React from 'react'
import '../../assets/css/logInCss.css'
import LayoutLogin from './LayoutLogin'
import { Link, useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { IUser } from '../../interfaces/interfaces'
import server from '../../apis/axios'
import useAuth from '../../hooks/useAuth'

const SignIn = (): JSX.Element => {
    const [error,setError] = React.useState<string>('')
    const navigate = useNavigate();
    const {setProfile} = useAuth()
    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const body = {
            gmail: data.get('gmail'),
            password: data.get('password'),
        }
        const profile: IUser = {
            password: body.password as string,
            gmail: body.gmail as string,
        }

        try {
            await server.post('/User/LoginAccount', profile)
            const respons = await server.get('/User/GetInfoUser')
            setProfile(respons.data)
            navigate("/")
        } catch (error: any) {
            if (error.response && error.response.status === 404) {
                setError("Gmail hoặc mật khẩu không đúng");
            } else {
                console.error(error);
            }
        }
    }
    return (
        <LayoutLogin title='Login'>
            <form onSubmit={handleSubmit}>
                <div className="auth-from_body">
                    <div className="auth-from_group">
                        <input name='gmail' type="text" className="auth-from_input" placeholder="Type your email or your phonenumber" />
                    </div>
                    <div className="auth-from_group">
                        <input name='password' type="password" className="auth-from_input" placeholder="Type your password" />
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
                    <button className="btn--primary btn-sign">Login</button>
                </div>

                <div className="auth-from_text">
                    <span>I'm don't have a account: <Link to="/Register">Register</Link></span>
                </div>
            </form>
        </LayoutLogin>
    )
    }

export default SignIn