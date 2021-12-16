import Title from "./Title";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
const Trainers = () => {
  const [loadedUsers, setLoadedUsers] = useState();
  //updata  without refresh/la mise à jour
  useEffect(() => {
    //sendGetAllUsersRequest est un request
    const sendGetAllUsersRequest = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/users/signup")
        const responseData = await response.json();
        console.log('response from BE', responseData.users);
        setLoadedUsers(responseData.users);
      } catch (error) {
        console.log('here error', error);
      }
    };
    //appel
    sendGetAllUsersRequest();
  }, []);
  const deleteUser = async (event) => {

    let id = event.target.value;
    console.log('here btn id', id);
    try {
      const response = await fetch(`http://localhost:3001/api/users/signup/${id}`, {
        method: "DELETE"
      });
      const responseData = await response.json();
      console.log("response from BE", responseData);
      setLoadedUsers(responseData.users);
    } catch (error) {
      console.log('here error', error);
    }
  }



  return (
    <div>
      <Title titre="Trainers" />
      <main id="main" data-aos="fade-in">
        <section className="trainers">
          <div className="container" data-aos="fade-up">

            <div className="row" data-aos="zoom-in" data-aos-delay="100">
              {loadedUsers && loadedUsers.map(user => (

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch">

                  <div className="member">
                    <img src={user.img} className="img-fluid" />
                    <div className="member-content">
                      <h4>{user.firstName} {user.lastName} </h4>
                      <span> {user.role}</span>
                      <p>
                        Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
                      </p>
                      <div className="social">
                        <Link>
                          <FaTwitter className="bi bi-twitter" />
                        </Link>
                        <Link>
                          <FaFacebookF className="bi bi-facebook ms-2" />
                        </Link>

                        <Link>
                          <FaInstagram className="bi bi-instagram ms-2" />
                        </Link>
                        <Link>
                          <FaLinkedinIn className="bi bi-linkedin ms-2" />
                        </Link>

                      </div>
                      <button type="button" className="btn btn-danger" value={user._id} onClick={deleteUser}>delete</button>

                    </div>
                  </div>

                </div>


              ))};

            </div>

          </div>
        </section>

      </main>
    </div>

  )
}
export default Trainers;
