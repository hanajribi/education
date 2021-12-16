import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useHistory } from 'react-router';
import Title from './Title';

const Signup = () => {
    let [enterFirstName, setEnterFirstName] = useState('');
    let [enterLastName, setEnterLastName] = useState('');
    let [enterTel, setEnterTel] = useState('');
    let [enterEmail, setEnterEmail] = useState('');
    let [enterPwd, setEnterPwd] = useState('');
    let [enterRole, setEnterRole] = useState('');

    const [file, setFile] = useState();
    const [previewUrl, setPreviewUrl] = useState();
    const filPickerRef = useRef();
    useEffect(() => {
        if (!file) {
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreviewUrl(fileReader.result);
        }
        fileReader.readAsDataURL(file);
    }, [file])
    const getFirstName = (event) => {
        const firstName = event.target.value;
        setEnterFirstName(firstName);

    }
    const getLastName = (event) => {
        const lasttName = event.target.value;
        setEnterLastName(lasttName);
    }
    const getTel = (event) => {
        const tel = event.target.value;
        setEnterTel(tel);
    }
    const getEmail = (event) => {
        const email = event.target.value;
        setEnterEmail(email);
    }
    const getPwd = (event) => {
        const pwd = event.target.value;
        setEnterPwd(pwd);
    }
    const getRole = (event) => {
        const role = event.target.value;
        setEnterRole(role);
    }
    const pickedImageHandler = () => {
        console.log("here picked img from btn");
        filPickerRef.current.click();
    };
    const pickedHandler = (event) => {
        console.log("here picked img", event.target.files);
        let pickedFile = event.target.files[0];
        setFile(pickedFile);
    };
    let history = useHistory();

    const submitFormHandler = (event) => {
        //disable page reload
        event.preventDefault();
        // let user = {
        //     firstName: enterFirstName,
        //     lastName: enterLastName,
        //     tel: enterTel,
        //     role: enterRole,
        //     email: enterEmail,
        //     pwd: enterPwd
        // };
        let formData = new FormData();
        formData.append('firstName', enterFirstName);
        formData.append('lastName', enterLastName);
        formData.append('tel', enterTel);
        formData.append('role', enterRole);
        formData.append('email', enterEmail);
        formData.append('img', file);
        formData.append('pwd', enterPwd)
        console.log('formData', formData);
        //console.log('here user signup to send to BE',user)
        axios.post('http://localhost:3001/api/users/signup', formData).then((result) => { console.log('response', result); })
        history.push('/login')

    }
    return (

        <div className="row ">
            <Title titre="Signup" />

            <div className="col-lg-6 ms-5 order-1 order-lg-2 mb-3 mt-5" data-aos="fade-left" data-aos-delay="100">
                <h4>Take care to fill in each field below:</h4>

                <form onSubmit={submitFormHandler} >

                    <div className="col-md-10 mt-3 text-center">
                        <input type="text" className="form-control" placeholder="Last name" onChange={getLastName} value={enterLastName} />

                    </div>
                    <div className="col-md-10 mt-3">
                        <input type="text" className="form-control" placeholder="First name" onChange={getFirstName} value={enterFirstName} />

                    </div>
                    <div className="col-md-10 mt-3">
                        <select class="form-select" aria-label="Default select example" onChange={getRole} value={enterRole}>
                            <option selected>Rôle</option>
                            <option value="student" >student</option>
                            <option value="teacher">teacher</option>
                            <option value="president of an event">president of an event</option>
                        </select>

                    </div>

                    <div className="col-md-10 mt-3">
                        <input type="text" className="form-control" placeholder="Telephone" onChange={getTel} value={enterTel} />

                    </div>


                    <div className="col-md-10 mt-3">
                        <input type="email" className="form-control" placeholder="@Email.com" value={enterEmail} onChange={getEmail} />

                    </div>

                    <div class="col-md-10 mt-3">
                        <input type="password" className="form-control" placeholder="Password" value={enterPwd} onChange={getPwd} />

                    </div>
                    <div className="mb-3">

                        <input
                            ref={filPickerRef}
                            type="file"
                            style={{ display: "none" }}
                            className="form-control"
                            accecpt=".jpg, .png, .jpeg"
                            onChange={pickedHandler}
                        />
                    </div>
                    <div className="text-center">
                        <button type="button" className="btn  btn-success" onClick={pickedImageHandler}>imageUpload</button>
                    </div>
                    <div className="text-center mt-3">
                        {previewUrl && <img src={previewUrl} style={{ width: '150px', height: '150px' }} />}
                    </div>


                    <div className="col-md-12 form-group mt-3">
                        <button type="submit" className="btn btn-primary" >Create an account</button>
                    </div>

                </form>

            </div>
            <div className="col-lg-5 order-1 order-lg-2 mb-3" data-aos="fade-left" data-aos-delay="100">
                <img src="./images/course-details-tab-1.png" className="img-fluid" />
            </div>
        </div>


    )
}

export default Signup;
