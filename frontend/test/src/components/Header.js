import React from "react";
import { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";


const Header = () => {
  const history = useHistory();
  let connectedUserId = localStorage.getItem("userConnected");
  // const isMounted = useRef(false);
  // console.log(isMounted);
  const [loadedUser, setLoadedUser] = useState();
  useEffect(() => {
    console.log("Here into connected user ID Header", connectedUserId);
    const sendGetUserRequest = async () => {
      try {
        const response = await fetch(
          `http//localhost:3001/api/users/${connectedUserId}`
        );
        const responseData = await response.json();
        console.log("responseData (connected user header)", responseData);
        setLoadedUser(responseData.findedUser);
      } catch (error) {
        console.log("Failed to load data from BE (Connected user)", error);
      }
      console.log(loadedUser);
    };
    sendGetUserRequest();
    // isMounted.current = true;
  }, []);

  const logout = () => {
    localStorage.clear();
    history.push("/");
  };

  if (connectedUserId) {
    return (<header className="fixed-top">

      <div className="container d-flex align-items-center">

        <h1 className="logo me-auto"><a href="index.html">Mentor</a></h1>

        <nav className="navbar order-last order-lg-0">
          <ul>
            <li><Link >Home</Link></li>
            <li><Link >About</Link></li>
            <li><Link to="/courses" >Courses</Link></li>
            <li><Link to="/trainers">Trainers</Link></li>
            <li><Link to="/events" >Events</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>


            <li><a href="contact.html">Contact</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <a href="courses.html" className="get-started-btn">Get Started</a>

      </div>
    </header>)
  } else {
    return (<header className="fixed-top">

      <div className="container d-flex align-items-center">

        <h1 className="logo me-auto"><a href="index.html">Mentor</a></h1>

        <nav className="navbar order-last order-lg-0">
          <ul>
            <li><Link >Home</Link></li>
            <li><Link >About</Link></li>
            <li><Link to="/add-course" >Add course</Link></li>
            <li><Link to="">Trainers</Link></li>
            <li><Link to="/add-event" >Add Events</Link></li>
            <li><Link to="/myCourse/:userId">my course</Link></li>

            <li><Link onClick={logout} to="/login">Logout</Link></li>


            <li><a href="contact.html">Contact</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <a href="courses.html" className="get-started-btn">Get Started</a>

      </div>
    </header>)
  }

}
export default Header;


