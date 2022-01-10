import "./Home.css";
import { Link } from 'react-router-dom';
import {FaRegCheckCircle, FaReceipt,FaCube,FaImages,FaChevronRight, FaStore,FaCalendarAlt,FaPaintRoller,FaDatabase,FaListAlt,FaAnchor,FaFingerprint} from "react-icons/fa";
import {FcComboChart} from "react-icons/fc";
import {RiGradienterLine,RiPriceTag2Fill,RiDiscLine,RiBaseStationFill} from "react-icons/ri";
const Home = () => {
    return (
        <div>
            <section class="d-flex justify-content-center align-items-center herotest">
                <div className="container position-relative" data-aos="zoom-in" data-aos-delay="100">
                    <h1>Learning Today,<br />Leading Tomorrow</h1>
                    <h2>We are team of talented designers making websites with Bootstrap</h2>
                    <Link to="/courses" className="btn-get-started nav-link">Get Started</Link>
                </div>
            </section>
            <main id="main">
                <section class="about">
                    <div className="container" data-aos="fade-up">

                        <div className="row">
                            <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                                <img src="images/about.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                                <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                                <p className="fst-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                                <ul>
                                    <li><FaRegCheckCircle className="vert "></FaRegCheckCircle> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    <li><FaRegCheckCircle className="vert"></FaRegCheckCircle> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                    <li><FaRegCheckCircle className="vert"></FaRegCheckCircle> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                                </ul>
                                <p>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                </p>

                            </div>
                        </div>

                    </div>
                </section>
                <section id="counts" className="counts section-bg">
                    <div className="container">

                        <div class="row counters">

                            <div className="col-lg-3 col-6 text-center">
                                <span data-purecounter-start="0" data-purecounter-end="1232" data-purecounter-duration="1" class="purecounter">132</span>
                                <p>Students</p>
                            </div>

                            <div className="col-lg-3 col-6 text-center">
                                <span data-purecounter-start="0" data-purecounter-end="64" data-purecounter-duration="1" class="purecounter">64</span>
                                <p>Courses</p>
                            </div>

                            <div className="col-lg-3 col-6 text-center">
                                <span data-purecounter-start="0" data-purecounter-end="42" data-purecounter-duration="1" class="purecounter">41</span>
                                <p>Events</p>
                            </div>

                            <div className="col-lg-3 col-6 text-center">
                                <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" class="purecounter">20</span>
                                <p>Trainers</p>
                            </div>

                        </div>

                    </div>
                </section>
                <section id="why-us" className="why-us">
                    <div className="container" data-aos="fade-up">

                        <div className="row">
                            <div className="col-lg-4 d-flex align-items-stretch">
                                <div className="content">
                                    <h3>Why Choose Mentor?</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                                        Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                                    </p>
                                    <div className="text-center">
                                        <Link to="about.html" className="more-btn nav-link">Learn More <FaChevronRight className="vert"></FaChevronRight></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div className="icon-boxes d-flex flex-column justify-content-center">
                                    <div className="row">
                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="icon-box mt-4 mt-xl-0">
                                                <FaReceipt className="vert1"></FaReceipt>
                                                <h4 className="mt-3">The pleasures of the body sit</h4>
                                                <p>Result are either as a result of any of these resultant employment objectives</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="icon-box mt-4 mt-xl-0">
                                                <FaCube className="vert1"></FaCube>
                                                <h4 className="mt-3">School district</h4>
                                                <p>Those who crave blacks do not see, they are at fault for abandoning their duties</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="icon-box mt-4 mt-xl-0">
                                                <FaImages className="vert1"></FaImages>
                                                <h4 className="mt-3">Hard work consequences</h4>
                                                <p>Either accepts or when no one avoids or everyone. All the pains that make them greater</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <section id="features" className="features">
                    <div className="container" data-aos="fade-up">

                        <div className="row" data-aos="zoom-in" data-aos-delay="100">
                            <div className="col-lg-3 col-md-4">
                                <div className="icon-box">
                                    <FaStore className="large" style={{ color: ' #ffbb2c' }}></FaStore>
                                    <h3><a href="" className="nav-link "style={{color:'grey'}}>Lorem Ipsum</a></h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                <div className="icon-box">
                                    <FcComboChart className="large" style={{ color: '#5578ff' }}></FcComboChart>
                                    <h3><a className="nav-link "style={{color:'grey'}}>Dolor Sitema</a></h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                <div className="icon-box">
                                    <FaCalendarAlt className="large" style={{ color: '#e80368' }}></FaCalendarAlt>
                                    <h3><a href=""className="nav-link "style={{color:'grey'}}>Sed perspiciatis</a></h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                                <div className="icon-box">
                                    <FaPaintRoller className="large" style={{ color: '#e361ff' }}></FaPaintRoller>
                                    <h3><a href="" className="nav-link "style={{color:'grey'}}>Magni Dolores</a></h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <FaDatabase className="ri-database-2-line" style={{ color: '#47aeff' }}></FaDatabase>
                                    <h3><a href="" className="nav-link "style={{color:'grey'}}>Nemo Enim</a></h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <RiGradienterLine className="large" style={{ color: '#ffa76e' }}></RiGradienterLine>
                                    <h3><a href="" className="nav-link "style={{color:'grey'}}>Eiusmod Tempor</a></h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <FaListAlt className="large" style={{ color: '#11dbcf' }}></FaListAlt>
                                    <h3><a href="" className="nav-link "style={{color:'grey'}}>Midela Teren</a></h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <RiPriceTag2Fill className="large" style={{ color: '#4233ff' }}></RiPriceTag2Fill>
                                    <h3><a href="" className="nav-link "style={{color:'grey'}}>Pira Neve</a></h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <FaAnchor className="large" style={{ color: '#b2904f' }}></FaAnchor>
                                    <h3><a href="" className="nav-link "style={{color:'grey'}}>Dirada Pack</a></h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <RiDiscLine className="large" style={{ color: '#b20969' }}></RiDiscLine>
                                    <h3><a href="" className="nav-link "style={{color:'grey'}}>Moton Ideal</a></h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <RiBaseStationFill className="large" style={{ color: '#ff5828' }}></RiBaseStationFill>
                                    <h3><a href=""className="nav-link "style={{color:'grey'}}>Verdo Park</a></h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <FaFingerprint className="large" style={{ color: '#29cc61' }}></FaFingerprint>
                                    <h3><a href=""className="nav-link "style={{color:'grey'}}>Flavor Nivelanda</a></h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <section id="popular-courses" className="courses">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>Courses</h2>
                            <p>Popular Courses</p>
                        </div>

                        <div className="row" data-aos="zoom-in" data-aos-delay="100">

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="course-item">
                                    <img src="images/course-1.jpg" className="img-fluid" alt="..." />
                                    <div className="course-content">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h4>Web Development</h4>
                                            <p className="price">$169</p>
                                        </div>

                                        <h3><a href="course-details.html">Website Design</a></h3>
                                        <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                                        <div className="trainer d-flex justify-content-between align-items-center">
                                            <div className="trainer-profile d-flex align-items-center">
                                                <img src="images/trainers/trainer-1.jpg" className="img-fluid" alt="" />
                                                <span>Antonio</span>
                                            </div>
                                            <div className="trainer-rank d-flex align-items-center">
                                                <i className="bx bx-user"></i>&nbsp;50
                                                &nbsp;&nbsp;
                                                <i className="bx bx-heart"></i>&nbsp;65
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                                <div className="course-item">
                                    <img src="images/course-2.jpg" className="img-fluid" alt="..." />
                                    <div className="course-content">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h4>Marketing</h4>
                                            <p className="price">$250</p>
                                        </div>

                                        <h3><a href="course-details.html">Search Engine Optimization</a></h3>
                                        <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                                        <div className="trainer d-flex justify-content-between align-items-center">
                                            <div className="trainer-profile d-flex align-items-center">
                                                <img src="images/trainers/trainer-2.jpg" className="img-fluid" alt="" />
                                                <span>Lana</span>
                                            </div>
                                            {/* <div className="trainer-rank d-flex align-items-center">
                <i className="bx bx-user"></i>&nbsp;35
                &nbsp;&nbsp;
                <i className="bx bx-heart"></i>&nbsp;42
              </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                                <div className="course-item">
                                    <img src="images/course-3.jpg" className="img-fluid" alt="..." />
                                    <div className="course-content">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h4>Content</h4>
                                            <p className="price">$180</p>
                                        </div>

                                        <h3><a href="course-details.html">Copywriting</a></h3>
                                        <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                                        <div className="trainer d-flex justify-content-between align-items-center">
                                            <div className="trainer-profile d-flex align-items-center">
                                                <img src="assets/img/trainers/trainer-3.jpg" className="img-fluid" alt="" />
                                                <span>Brandon</span>
                                            </div>
                                            <div className="trainer-rank d-flex align-items-center">
                                                <i className="bx bx-user"></i>&nbsp;20
                                                &nbsp;&nbsp;
                                                <i className="bx bx-heart"></i>&nbsp;85
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                <section id="trainers" className="trainers">
                    <div className="container" data-aos="fade-up">

                        <div className="row" data-aos="zoom-in" data-aos-delay="100">
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="member">
                                    <img src="images/trainers/trainer-1.jpg" className="img-fluid" alt="" />
                                    <div className="member-content">
                                        <h4>Walter White</h4>
                                        <span>Web Development</span>
                                        <p>
                                            Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
                                        </p>
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="member">
                                    <img src="images/trainers/trainer-2.jpg" className="img-fluid" alt="" />
                                    <div className="member-content">
                                        <h4>Sarah Jhinson</h4>
                                        <span>Marketing</span>
                                        <p>
                                            Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus
                                        </p>
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="member">
                                    <img src="images/trainers/trainer-3.jpg" className="img-fluid" alt="" />
                                    <div className="member-content">
                                        <h4>William Anderson</h4>
                                        <span>Content</span>
                                        <p>
                                            Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
                                        </p>
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

            </main>
        </div>

    );
}
export default Home;