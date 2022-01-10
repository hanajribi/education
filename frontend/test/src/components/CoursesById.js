//hook: fonction prédéfinie pour la manipulation de l'état d’un components
import { useState, useEffect } from "react";
import Title from './Title';
import { Link } from 'react-router-dom';
import { RiDeleteBin5Line, RiFileEditFill } from "react-icons/ri";
import { FcAddDatabase } from "react-icons/fc";
const CoursesById = () => {
    const userId = localStorage.getItem("userConnected");
    console.log('use connected is :', userId);
    const [loadedCourses, setLoadedCourses] = useState();
    useEffect(() => {
        //sendGetAllCoursesRequest est un request
        const sendGetAllCoursesRequest = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/courses/myCourse/${userId}`)
                const responseData = await response.json();
                console.log('response from BE get by id', responseData.findedCoursesbyUser);
                setLoadedCourses(responseData.findedCoursesbyUser);
            } catch (error) {
                console.log('here error', error);
            }
        };
        //appel
        sendGetAllCoursesRequest();
    }, []);
    const id = localStorage.getItem('userConnected');
    console.log("id", id)
    const [loadedUser, setLoadedUser] = useState();
    //updata  without refresh/la mise à jour
    useEffect(() => {

        const sendGetuserRequest = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/users/myCourse/${id}`)
                const responseData = await response.json();
                setLoadedUser(responseData.findedCoursesbyUser);
            } catch (error) {
                console.log('here error', error);
            }
        };
        //appel
        sendGetuserRequest();
    }, []);
    const deleteCourse = async (event) => {
        let id = event.target.value;
        console.log('here btn id', id);
        try {
            const response = await fetch(`http://localhost:3001/api/courses/${id}`, {
                method: "DELETE"
            });
            const responseData = await response.json();
            console.log("response from BE", responseData);
            setLoadedCourses(responseData.courses);
        } catch (error) {
            console.log('here error', error);
        }
    }
    return (
        <div>
            <Title titre="My Courses" />
            <main id="main" data-aos="fade-in">
                <section className="courses" >

                    <div className="container mt-5" data-aos="fade-up">
                        <div className="row" data-aos="zoom-in" data-aos-delay="100">
                            {loadedCourses && loadedCourses.map(course => (
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                    <div className="course-item">
                                        <img src={course.img} className="img-fluid" />
                                        <div className="course-content">
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <h4>duration : {course.duration}</h4>
                                                <p className="price">${course.price}</p>
                                            </div>

                                            <h3><Link to={`/course-info/${course._id}`} className="nav-link">{course.name}</Link></h3>

                                            {/* <p>{course.description}</p> */}
                                            <div className="trainer d-flex justify-content-between align-items-center">
                                                <div className="trainer-profile d-flex align-items-center">
                                                    {loadedUser &&
                                                        <img src={loadedUser.img} className="img-fluid" />
                                                    }
                                                    {loadedUser && <span>{loadedUser.firstName} {loadedUser.lastName}</span>}


                                                </div>
                                               
                                                    <div className="trainer-rank d-flex align-items-center">

                                                        {/* <button type="button" className="btn btn-danger" value={course._id} onClick={deleteCourse}>delete</button>
                                                        <a type="button" value={course._id} onClick={deleteCourse}><RiDeleteBin5Line  ></RiDeleteBin5Line></a> */}
                                                        <Link to={`/edit-course/${course._id}`} ><RiFileEditFill className="ms-2"></RiFileEditFill></Link>
                                                    </div>
                                                

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}


                        </div>

                    </div >
                    <div className="text-center fs-1">
                        <Link to={'/add-course'}> <FcAddDatabase></FcAddDatabase></Link>


                    </div>
                </section>
            </main>
        </div>

    )

}
export default CoursesById;