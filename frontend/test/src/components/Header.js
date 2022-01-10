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

  // if (connectedUserId) {
    
    return (<header className="fixed-top">

    <div className="container d-flex align-items-center">

      <h1 className="logo me-auto"><a href="index.html">Mentor</a></h1>

      <nav className="navbar order-last order-lg-0">
        <ul>
          <li><Link to="/home"className="nav-link" >Home</Link></li>
          
          <li><Link to="/profile/:id"className="nav-link">My Profil</Link></li>
          <li><Link to="/myEvents/:userId"className="nav-link" >My Events</Link></li>
          <li><Link to="/myCourse/:userId"className="nav-link">My Courses</Link></li>

          <li><Link onClick={logout} className="nav-link" to="/login">Logout</Link></li>


          <li><a href="contact.html" className="nav-link">Contact</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

      <a href="courses.html" className="get-started-btn nav-link">Get Started</a>

    </div>
  </header>)
  // } else {
  //   return (<header className="fixed-top">

  //     <div className="container d-flex align-items-center">

  //       <h1 className="logo me-auto"><a href="index.html">Mentor</a></h1>

  //       <nav className="navbar order-last order-lg-0">
  //         <ul>
  //           <li><Link to="/home" className="nav-link">Home</Link></li>
  //           <li><Link className="nav-link" >About</Link></li>
  //           <li><Link to="/courses"  className="nav-link">Courses</Link></li>
  //           <li><Link to="/trainers" className="nav-link">Trainers</Link></li>
  //           <li><Link to="/events"  className="nav-link">Events</Link></li>
  //           <li><Link to="/login" className="nav-link">Login</Link></li>
  //           <li><Link to="/signup" className="nav-link">Signup</Link></li>


  //           <li><a href="contact.html">Contact</a></li>
  //         </ul>
  //         <i className="bi bi-list mobile-nav-toggle"></i>
  //       </nav>

  //       <a href="courses.html" className="get-started-btn">Get Started</a>

  //     </div>
  //   </header>)
  // }

}
export default Header;


