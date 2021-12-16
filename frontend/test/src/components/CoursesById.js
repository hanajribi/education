//hook: fonction prédéfinie pour la manipulation de l'état d’un components
import { useState, useEffect } from "react";
import Title from './Title';
import { Link } from 'react-router-dom';

const CoursesById=()=>{
    const userId=localStorage.getItem("userConnected");
    console.log('use connected is :',userId);
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
    return(
      <main id="main" data-aos="fade-in">
      <section className="courses" >
          <Title titre="My Courses" />
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
            </div> */}          </div>
                              </div>
                          </div>
                      </div>
                  ))}


              </div>
          </div>
      </section>
  </main>
    )

}
export default CoursesById;