import Title from "./Title";

import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
const Courses = () => {
    const [loadedCourses, setLoadedCourses] = useState();
    //updata  without refresh/la mise à jour
    useEffect(() => {
        //sendGetAllCoursesRequest est un request
        const sendGetAllCoursesRequest = async () => {
            try {
                const response = await fetch("http://localhost:3001/api/courses")
                const responseData = await response.json();
                console.log('response from BE', responseData.courses);
                setLoadedCourses(responseData.courses);
            } catch (error) {
                console.log('here error', error);
            }
        };
        //appel
        sendGetAllCoursesRequest();
    }, []);

    // const [loadedUser, setLoadedUser] = useState();
    // //updata  without refresh/la mise à jour
    // useEffect(() => {
    //     //sendGetAllCoursesRequest est un request
    //     const sendGetAllUserRequest = async () => {
    //         try {
    //             const response = await fetch({`http://localhost:3001/api/users/${loadedCourses.userId}`)
    //             const responseData = await response.json();
    //             console.log('response from BE', responseData.findedUser);
    //             setLoadedUser(responseData.findedUser);
    //         } catch (error) {
    //             console.log('here error', error);
    //         }
    //     };
    //     //appel
    //     sendGetAllUserRequest();
    // }, []);

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
            <Title titre="Courses" />
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

                                            <h3><Link to={`/course-info/${course._id}`}>{course.name}</Link></h3>

                                            <p>{course.description}</p>
                                            <div className="trainer d-flex justify-content-between align-items-center">
                                                <div className="trainer-profile d-flex align-items-center">
                                                    <img src="/images/trainers/trainer-1.jpg" className="img-fluid" />
                                                    <span>{course.teacher}</span>
                                                </div>
                                                {/* <div className="trainer-rank d-flex align-items-center">
                    <i className="bx bx-user"></i>&nbsp;50
                    &nbsp;&nbsp;
                    <i className="bx bx-heart"></i>&nbsp;65
                  </div> */}<button type="button" className="btn btn-danger" value={course._id} onClick={deleteCourse}>delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}


                        </div>
                    </div>
                </section>
            </main>
        </div>

    )
}
export default Courses;
{/*<div>
     <Link to={`/course-info/${course._id}`} className="btn btn-success">Display</Link>
     <button type="button" className="btn btn-danger" value={course._id} onClick={deleteCourse}>delete</button>
     <Link to={`/edit-course/${course._id}`} className="btn btn-info">edit</Link>
 </div> */}