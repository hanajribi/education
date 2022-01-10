import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Title from "./Title";
import { useHistory} from "react-router-dom";

const AddEvent = () => {
  //useState Declaration
  let [enteredName, setEnteredName] = useState("");
  let [enteredDescription, setEnteredDescription] = useState("");
  let [enteredDate, setEnteredDate] = useState("");
  let [enteredPrice, setEnteredPrice] = useState("");
  let history = useHistory();

  //ref to input (select image)
  const filePickerRef = useRef();
  //useState for choose file (add image to event)
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);
  //Get event name
  const nameHandler = (event) => {
    let name = event.target.value;
    setEnteredName(name);
  };
  //Get event description
  const descriptionHandler = (event) => {
    const description = event.target.value;
    setEnteredDescription(description);
  };
  //Get event price
  const priceHandler = (event) => {
    const price = event.target.value;
    setEnteredPrice(price);
  };
  //Get event date
  const dateHandler = (event) => {
    const dateEvent = event.target.value;
    setEnteredDate(dateEvent);
  };
  //Select Image
  const pickedImageHandler = () => {
    filePickerRef.current.click();
  };
  const pickedHandler = (event) => {
    let pickedFile = event.target.files[0];
    setFile(pickedFile);
  };

  //Function to send content of Form when click in the button
  const submitAddEventsFormHandler = (event) => {
    event.preventDefault();
 
    let eventAdded = new FormData();
    eventAdded.append("name", enteredName);
    eventAdded.append("description", enteredDescription);
    eventAdded.append("price", enteredPrice);
    eventAdded.append("date", enteredDate);
    eventAdded.append("img", file);
    eventAdded.append('userId',localStorage.getItem('userConnected'));

    console.log("Here Into Add Event", eventAdded);
    axios
      .post("http://localhost:3001/api/events", eventAdded)
      .then((result) => {
        console.log("Response after adding event", result);
        history.push("/myEvents/:userId");
      });
  };
  return (
    
    <div>
            <Title titre="Events" />
            <div className="row mt-5">
                <div className="col-lg-6 order-1 order-lg-2 mb-3" data-aos="fade-left" data-aos-delay="100">
                    <img src="images/about.jpg" className="img-fluid" alt="" />
                </div>
                <div className="col-lg-5 pt-4 pt-lg-0 order-2 order-lg-1 content ms-5" >


                    <form onSubmit={submitAddEventsFormHandler}>

                        <div className="col-md-12 form-group mt-3">
                            <input type="text" className="form-control"   placeholder="Event's name" value={enteredName} onChange={nameHandler} />
                        </div>
                        <div className="col-md-12 form-group mt-3">
                            <input type="text" className="form-control"   placeholder="price" value={enteredPrice} onChange={priceHandler} />
                        </div>
                        <div className="col-md-12 form-group mt-3">
                            <input type="text" className="form-control"   placeholder="date" value={enteredDate} onChange={dateHandler} />
                        </div>
                        <div className="col-md-12 form-group mt-3">
                            <textarea type="text" className="form-control"   placeholder="description" value={enteredDescription} onChange={descriptionHandler} />
                        </div>
                        <div className="mb-3">

                            <input
                                ref={filePickerRef}
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

                        <div className="mt-3 text-center">
                            <button type="submit" value="submit" className="btn btn-primary center" >add Event</button>
                        </div>


                    </form>

                </div>
            </div>
        </div>
  );
};
export default AddEvent;



