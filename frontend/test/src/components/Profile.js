import { useEffect, useState } from "react";
import Title from "./Title";
const Profile=()=>{
    const id=localStorage.getItem('userConnected');
    console.log("id",id)
    const [loadedUser, setLoadedUser] = useState();
    //updata  without refresh/la mise à jour
    useEffect(() => {
        
        const sendGetuserRequest = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/users/${id}`)
                const responseData = await response.json();
                console.log('response from BE finded user connected', responseData);
                setLoadedUser(responseData.findedUser);
            } catch (error) {
                console.log('here error', error);
            }
        };
        //appel
        sendGetuserRequest();
    }, []);

return(
    <div>
    <Title titre="My Profil" />

    <section id="course-details" className="course-details">
        <div className="container" data-aos="fade-up">

            <div className="row">
                {loadedUser &&
                    <div className="col-lg-6">
                        <img src={loadedUser.img} className="img-fluid" />
                       
                    </div>}
                {loadedUser &&
                    <div className="col-lg-4">

                        <div className="course-info d-flex justify-content-between align-items-center">
                            <h5>teacher's name</h5>
                            <p>{loadedUser.lastName} {loadedUser.firstName}</p>
                        </div>
                        <div className="course-info d-flex justify-content-between align-items-center">
                            <h5>speciality</h5>
                            <p>{loadedUser.role}</p>
                        </div>

                        <div className="course-info d-flex justify-content-between align-items-center">
                            <h5>Gmail</h5>
                            <p>{loadedUser.email}</p>
                        </div>
                        <div className="course-info d-flex justify-content-between align-items-center">
                            <h5>Telephone</h5>
                            <p>{loadedUser.tel}</p>
                        </div>

                    </div>
                }

            </div>

        </div>
    </section>
</div>
)
}
export default Profile;
