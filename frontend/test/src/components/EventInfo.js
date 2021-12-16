import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Title from "./Title";

const CourseInfo = () => {
    const { id } = useParams();
    const [loadedEvents, setLoadedEvents] = useState();
    useEffect(() => {
        const sendGetEventsRequest = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/events/all/${id}`);
                const responseData = await response.json();
                console.log("response data", responseData);
                setLoadedEvents(responseData.findedEvent);
            } catch (error) {
                console.log('Failed to load data', error)
            }

        };
        sendGetEventsRequest();
    }, []);

    return (

        <div>
            <Title titre="Events" />

            <section id="course-details" className="course-details">
                <div className="container" data-aos="fade-up">

                    <div className="row">
                        {loadedEvents &&
                            <div className="col-lg-8">
                                <img src={loadedEvents.img} className="img-fluid" />
                                <h3>Description</h3>
                                <p>
                                    {loadedEvents.description}
                                </p>
                            </div>}
                        {loadedEvents &&
                            <div className="col-lg-4">

                                <div className="course-info d-flex justify-content-between align-items-center">
                                    <h5>event's name</h5>
                                    <p>{loadedEvents.name}</p>
                                </div>

                                <div className="course-info d-flex justify-content-between align-items-center">
                                    <h5>Event Fee</h5>
                                    <p>${loadedEvents.price}</p>
                                </div>



                                <div className="course-info d-flex justify-content-between align-items-center">
                                    <h5>date</h5>
                                    <p>{loadedEvents.date}</p>
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