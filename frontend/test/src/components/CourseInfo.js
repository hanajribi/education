import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Title from "./Title";
import { Link } from 'react-router-dom';

const CourseInfo = () => {
  const { id } = useParams();
  const [loadedCourses, setLoadedCourses] = useState();
  useEffect(() => {
    const sendGetCoursesRequest = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/courses/${id}`);
        const responseData = await response.json();
        console.log("response data", responseData);
        setLoadedCourses(responseData.findedCourses);
      } catch (error) {
        console.log('Failed to load data', error)
      }

    };
    sendGetCoursesRequest();
  }, []);

  return (

    <div>
      <Title titre="Plus info" />

      <section id="course-details" className="course-details">
        <div className="container" data-aos="fade-up">

          <div className="row">
            { loadedCourses&& 
              <div className="col-lg-8">
                <img src={loadedCourses.img} className="img-fluid" />
                <h3>Description</h3>
                <p>
                {loadedCourses.description}
                </p>
              </div>}
              { loadedCourses&& 
              <div className="col-lg-4">

                <div className="course-info d-flex justify-content-between align-items-center">
                  <h5>Trainer</h5>
                  <p><Link to="#">{loadedCourses.teacher}</Link></p>
                </div>

                <div className="course-info d-flex justify-content-between align-items-center">
                  <h5>Course Fee</h5>
                  <p>${loadedCourses.price}</p>
                </div>

                <div className="course-info d-flex justify-content-between align-items-center">
                  <h5>course's name</h5>
                  <p>{loadedCourses.name}</p>
                </div>

                <div className="course-info d-flex justify-content-between align-items-center">
                  <h5>Duration</h5>
                  <p>{loadedCourses.duration}</p>
                </div>

              </div>
              }
              
            </div>

            
         



        </div>
      </section>
    </div>

  )
}
export default CourseInfo;
{/* <div>
                <p>Course Name:{loadedCourses.name} </p>
                <p>Course Price:{loadedCourses.price} </p>
                <p>Course description:{loadedCourses.description} </p>

            </div> */}