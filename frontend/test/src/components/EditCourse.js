

import React from "react";
import { useState, useEffect,  } from "react";
import { useParams,useHistory } from "react-router-dom";
import axios from "axios";

const EditCourse = () => {
  const { id } = useParams();
  const [loadedCourse, setLoadedCourse] = useState();

  useEffect(() => {
    const sendGetCoursesRequest = async () => {
        try {
            const response = await fetch(`http://localhost:3001/api/courses/${id}`);
            const responseData = await response.json();
            console.log("response data", responseData);
            setLoadedCourse(responseData.findedCourse);
        } catch (error) {
            console.log('Failed to load data', error)
        }

    };
    sendGetCoursesRequest();
}, []);
  let history = useHistory();
  let [enteredCourseName, setEnteredCourseName] = useState("");
  let [enteredPrice, setEnteredPrice] = useState("");
  let [enteredDescription, setEnteredDescription] = useState("");
  let [enteredDuration, setEnteredDuration] = useState("");

  const getCourseName = (event) => {
    setEnteredCourseName(event.target.value);
  };
  const getPrice = (event) => {
    setEnteredPrice(event.target.value);
  };
  const getDescription = (event) => {
    setEnteredDescription(event.target.value);
  };
  const getDuration = (event) => {
    setEnteredDuration(event.target.value);
  };
  const submitEditCourseFormHandler = (event) => {
    //annuler reload page
    event.preventDefault();
    console.log("here into add courses");
    //create course object JSON
    if (enteredCourseName.length==0) {
        enteredCourseName=loadedCourse.name;
    }
    if (enteredPrice.length==0) {
        enteredPrice=loadedCourse.price;
    }
    if (enteredDuration.length==0) {
        enteredDuration=loadedCourse.duration;
    }
    if (enteredDescription.length==0) {
        enteredDescription=loadedCourse.description;
    }
    let course = {
      name: enteredCourseName,
      price: enteredPrice,
      description: enteredDescription,
      duration: enteredDuration
    };
   
    axios.put(`http://localhost:3001/api/courses/${id}`, course).then((Result) => {
      console.log("Result = ", Result);
      // Go to
      history.push("/courses");
    });
  };
  return (
    <div className="container">
      {loadedCourse && (
        <div>
          <form onSubmit={submitEditCourseFormHandler}>
            <h3>Edit courses</h3>
            <div className="mb-3">
              <label className="form-label float-start fw-bold">
                 name :
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={loadedCourse.name}
                onChange={getCourseName}
              />
            </div>
            <div className="mb-3">
              <label className="form-label float-start fw-bold">
                Course Price :
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={loadedCourse.price}
                onChange={getPrice}
              />
            </div>
            <div className="mb-3">
              <label className="form-label float-start fw-bold">
                Description :
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={loadedCourse.description}
                onChange={getDescription}
              />
            </div>
            <div className="mb-3">
              <label className="form-label float-start fw-bold">
                Duration :
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={loadedCourse.duration}
                onChange={getDuration}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Edit course
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditCourse;


