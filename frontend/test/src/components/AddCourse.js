import React from "react";
import { useState  ,useRef,useEffect } from "react";
import axios from "axios";
import { useHistory} from "react-router-dom";
import Title from "./Title";
const AddCourse = () => {
  let history = useHistory();
  let [enteredTeacherName, setEnteredTeacherName] = useState("");
  let [enteredCourseName, setEnteredCourseName] = useState("");
  let [enteredPrice, setEnteredPrice] = useState("");
  let [enteredDescription, setEnteredDescription] = useState("");
  let [enteredDuration, setEnteredDuration] = useState("");
  
  const [file,setFile]=useState();
  const [previewUrl,setPreviewUrl]=useState();
  const filPickerRef = useRef();
  useEffect(() => {
      if (!file) {
          return;
      }
      const fileReader = new FileReader();
      fileReader.onload=()=>{
        setPreviewUrl(fileReader.result);
      }
      fileReader.readAsDataURL(file);
  }, [file])
  const getTeacherName = (event) => {
    setEnteredTeacherName(event.target.value);
  };
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
  const pickedImageHandler = () => {
    console.log("here picked img from btn");
    filPickerRef.current.click();
  };
  const pickedHandler = (event) => {
    console.log("here picked img",event.target.files);
    let pickedFile = event.target.files[0];
    setFile(pickedFile);
  };

  const submitAddCourseFormHandler = (event) => {
    //annuler reload page
    event.preventDefault();
    console.log("here into add courses");
    //create course object JSON
    // let course = {
    //   teacher: enteredTeacherName,
    //   name: enteredCourseName,
    //   price: enteredPrice,
    //   description: enteredDescription,
    //   duration: enteredDuration,
    // };
    let formData = new FormData();
    formData.append('teacher',enteredTeacherName);
    formData.append('name',enteredCourseName);
    formData.append('price',enteredPrice);
    formData.append('description',enteredDescription);
    formData.append('duration',enteredDuration);
    formData.append('img',file);
    formData.append('userId',localStorage.getItem('userConnected'))
    console.log('formData',formData);
    axios.post("http://localhost:3001/api/courses", formData).then(
      (Result) => {
      console.log("Result = ", Result);
      // Go to
      history.push("/courses");
    });
  };
  return (
    <div>
      <Title titre="Add Courses" />
      <div className="container mt-5">
      <form onSubmit={submitAddCourseFormHandler}>
        <div className="mb-3">
         <input
            type="text"
            className="form-control" placeholder="Teacher's name"
            value={enteredTeacherName}
            onChange={getTeacherName}
          />
        </div>
        <div className="mb-3">
          
          <input
            type="text"
            className="form-control" placeholder="Course's name"
            value={enteredCourseName}
            onChange={getCourseName}
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"placeholder="Price"
            value={enteredPrice}
            onChange={getPrice}
          />
        </div>
       
        <div className="mb-3">
          <input
            type="text"
            className="form-control" placeholder="Duration"
            value={enteredDuration}
            onChange={getDuration}
          />
        </div>
        <div className="mb-3">
          
          <textarea
            type="text"
            className="form-control" placeholder="Description"
            value={enteredDescription}
            onChange={getDescription}
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
          <button type="button" className="btn  btn-success" onClick={pickedImageHandler}>imageUpload</button>
        </div>
        <div className="text-center mt-3">
            {previewUrl &&  <img src={previewUrl} style={{width:'150px',height:'150px'}} />}
        </div>
        <div className="text-center">
        <button type="submit" className="btn btn-primary my-3">
          Add course
        </button>
        </div>

        
      </form>
    </div>
    </div>
    
  );
};
export default AddCourse;
