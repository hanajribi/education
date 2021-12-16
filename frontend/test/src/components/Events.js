import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";

const Events = () => {
    const [loadedEvents, setLoadedEvents] = useState();
    //useEffect to update page when send request
    //async await =>asynchronous function (await: dont go to the next instruction until get response)
    useEffect(() => {
        const sendGetAllEventsRequest = async () => {
            try {
                const response = await fetch("http://localhost:3001/api/events");
                const responseData = await response.json();
                setLoadedEvents(responseData.events);
            } catch (error) {
                console.log("Here Error", error);
            }
        };
        sendGetAllEventsRequest();
    }, []);
    const deleteEvent = async (event) => {
        let id = event.target.value;
        console.log("here into delete event ", id);
        try {
            const response = await fetch(`http://localhost:3001/api/events/${id}`, {
                method: "DELETE",
            });
            const responseData = await response.json();
            console.log("Response from BE", responseData.events);
            setLoadedEvents(responseData.events);
        } catch (error) {
            console.log("Here Error ", error);
        }
    };
    return (
        <div>
            <Title titre="Events" />
            <section className="events">
            
            <div className="container mt-5" data-aos="fade-up">

                <div className="row">
                    {loadedEvents && loadedEvents.map(event => (
                        <div className="col-md-6 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={event.img} />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><Link to={`/Event-Info/${event._id}`}>{event.name}</Link></h5>
                                    <p className="fst-italic text-center">{event.date}</p>
                                    <p className="card-text">{event.description}</p>
                                    <button value={event._id}
                                        className="btn btn-danger"
                                        onClick={deleteEvent}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>

            </div>
        </section>

        </div>
       
    );
};
export default Events;


    //     <td>
    //     <Link
    //       to={`/Event-Info/${evt._id}`}
    //       className="btn btn-success"
    //     >
    //       Display
    //     </Link>
    //     <Link
    //       to={`/Edit-Event/${evt._id}`}
    //       className="btn btn-warning"
    //     >
    //       Edit
    //     </Link>
    //     <button
    //       value={evt._id}
    //       className="btn btn-danger"
    //       onClick={deleteEvent}
    //     >
    //       Delete
    //     </button>
    //   </td>
