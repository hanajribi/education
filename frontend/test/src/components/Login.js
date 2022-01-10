import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router';
import Title from "./Title";


const Login = () => {
    // geré etat input losque le taper vers enterEmail
    //on se trouve la dernier valeur à enterEmail
    let [enterEmail, setEnterEmail] = useState('');
    const getEmail = (event) => {
        const email = event.target.value;
        setEnterEmail(email);
    }
    let [enterPwd, setEnterPwd] = useState('');
    const getPwd = (event) => {
        const pwd = event.target.value;
        setEnterPwd(pwd);
    }
    let history = useHistory();

    const submitFormHandler = (event) => {
        //disable page reload
        event.preventDefault();
        console.log('Submit form ...');
        let user = {
            email: enterEmail,
            pwd: enterPwd
        }

        console.log('here user login to send to BE', user)
        axios.post('http://localhost:3001/api/users/login', user).then((result) => {
            console.log('response login', result);
            console.log('done with succes');
            localStorage.setItem("userConnected", result.data.user.id)
            console.log('user Connected', result.data.user.id);

        })
        //  history.push('/profile/:id');
       history.push('/home');


    }
    return (
        <div>
            <Title titre="Login" />
            <section >
                <div className="row">
                    <div className="col-4">

                        <img className="wave" src="./images/hero-bg.jpg" />
                        <h1 className="ms-5">Learning Today,<br />Leading Tomorrow</h1>

                    </div>
              
                    
                    <div className="col-lg-4">
                      
                        <div className="login_form_inner ms-5 me-5 " >

                            <form onSubmit={submitFormHandler}>

                                <div className="col-md-12 form-group mt-3">
                                    <input type="text" className="form-control" id="loginemailId" name="name" placeholder="E-mail.com" value={enterEmail} onChange={getEmail}></input>
                                </div>
                                <div className="col-md-12 form-group mt-3">
                                    <input type="password" className="form-control" id="loginpwdId" name="name" placeholder="Mot de passe" value={enterPwd} onChange={getPwd} ></input>
                                </div>

                                <div className="center">
                                    <button type="submit" className="btn btn-primary mt-2 px-5">Login</button>
                                    <p className="forgot-password text-right">
                                        Forgot <a href="#">password?</a>
                                    </p>
                                </div>



                            </form>

                        </div>
                    </div>

                </div>

            </section>

        </div>


    )
}

export default Login;
