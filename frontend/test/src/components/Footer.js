import React from "react";
import { Link } from "react-router-dom";
import {FaFacebookF, FaInstagram,FaLinkedinIn, FaTwitter, FaSkype} from "react-icons/fa";

const Footer=()=>{
    return(

        <footer>

        <div className="footer-top">
          <div className="container">
            <div className="row">
    
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>Mentor</h3>
                <p>
                  A108 Adam Street <br/>
                  New York, NY 535022<br/>
                  United States <br/><br/>
                  <strong>Phone:</strong> +1 5589 55488 55<br/>
                  <strong>Email:</strong> info@example.com<br/>
                </p>
              </div>
    
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                </ul>
              </div>
    
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                </ul>
              </div>
    
              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Join Our Newsletter</h4>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                
              </div>
    
            </div>
          </div>
        </div>
    
        <div className="container d-md-flex py-4">
    
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              &copy; Copyright <strong><span>Mentor</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
           Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <Link className="twitter"><FaTwitter className="bx bxl-twitter"></FaTwitter></Link>
            <Link className="facebook"><FaFacebookF className="bx bxl-facebook"></FaFacebookF></Link>
            <Link className="instagram"><FaInstagram className="bx bxl-instagram"></FaInstagram></Link>
            <Link className="google-plus"><FaSkype className="bx bxl-skype"></FaSkype></Link>
            <Link className="linkedin"><FaLinkedinIn className="bx bxl-linkedin"></FaLinkedinIn></Link>
          </div>
        </div>
      </footer>
    
 

    )
}
export default Footer;