

import React from "react";
import { useState, useEffect, useRef } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Title from './Title';
import {FcStackOfPhotos}from  "react-icons/fc";

const EditCourse = () => {
  const { id } = useParams();
  const [loadedCourse, setLoadedCourse] = useState();

  useEffect(() => {
    const sendGetCoursesRequest = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/courses/${id}`);
        const responseData = await response.json();
        console.log("response data edit course", responseData);
        setLoadedCourse(responseData.findedCourses);
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
  }, [file]);
  const pickedImageHandler = () => {
    console.log("here picked img from btn");
    filPickerRef.current.click();
  };
  const pickedHandler = (event) => {
    console.log("here picked img", event.target.files);
    let pickedFile = event.target.files[0];
    setFile(pickedFile);
  };

  const submitEditCourseFormHandler = (event) => {
    //annuler reload page
    event.preventDefault();
    console.log("here into add courses");
    //create course object JSON
    if (enteredCourseName.length == 0) {
      enteredCourseName = loadedCourse.name;
    }
    if (enteredPrice.length == 0) {
      enteredPrice = loadedCourse.price;
    }
    if (enteredDuration.length == 0) {
      enteredDuration = loadedCourse.duration;
    }
    if (enteredDescription.length == 0) {
      enteredDescription = loadedCourse.description;
    }
    let course = {
      name: enteredCourseName,
      price: enteredPrice,
      description: enteredDescription,
      duration: enteredDuration
    };
    // let formData = new FormData();
    // // formData.append('teacher',enteredTeacherName);
    // formData.append('name', enteredCourseName);
    // formData.append('price', enteredPrice);
    // formData.append('description', enteredDescription);
    // formData.append('duration', enteredDuration);
    // formData.append('img', file);
    // // formData.append('userId',localStorage.getItem('userConnected'))
    // console.log('formData', formData);

    axios.put(`http://localhost:3001/api/courses/${id}`, course).then((Result) => {
      console.log("Result edit courses = ", Result);
      // Go to
      history.push("/myCourse/:userId");
    });
  };
  return (
    <div>
      <Title titre="Edit Course" />
      <div className="container mt-5">
        {loadedCourse && (
          <div>
            <form onSubmit={submitEditCourseFormHandler}>

              <div className="mb-3">

                <input
                  placeholder="Course name"
                  type="text"
                  className="form-control"
                  defaultValue={loadedCourse.name}
                  onChange={getCourseName}
                />
              </div>
              <div className="mb-3">

                <input
                  placeholder="Course Price"
                  type="text"
                  className="form-control"
                  defaultValue={loadedCourse.price}
                  onChange={getPrice}
                />
              </div>
              <div className="mb-3">

                <input
                  type="text"
                  placeholder="Description"
                  className="form-control"
                  defaultValue={loadedCourse.description}
                  onChange={getDescription}
                />
              </div>
              <div className="mb-3">

                <input
                  placeholder="Duration"
                  type="text"
                  className="form-control"
                  defaultValue={loadedCourse.duration}
                  onChange={getDuration}
                />
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
                {/* <button type="button" className="btn  btn-success" style={{ background: '#5fcf80', border: '#5fcf80' }} onClick={pickedImageHandler}>change img</button> */}
                <FcStackOfPhotos onClick={pickedImageHandler}className="large"></FcStackOfPhotos>
              </div>
              <div className="text-center mt-3">
                {previewUrl && <img src={previewUrl} style={{ width: '150px', height: '150px' }} />}
              </div>
              <div className="text-center mb-5">
                <button type="submit" className="btn btn-primary">
                  Edit course
                </button>
              </div>

            </form>
          </div>
        )}
      </div>
    </div>

  );
};

export default EditCourse;


