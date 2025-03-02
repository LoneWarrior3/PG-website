import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import pgLogo from "../assets/logo.png";
import pgPP from "../assets/pamplate.png";

const ContactUs = () => {
  return (
    <div id="contact-us" className="container my-5 py-5">
      <h2 className="text-center text-primary fw-bold mb-4">Contact Us</h2>

      <div className="row d-flex text-center text-md-start align-items-start">
        {/* Section 1: PG Intro */}
        <div className="col-md-4 p-4">
          <h5 className="text-uppercase text-primary fw-bold mb-3">
            Why Choose Vinayaka PG?
          </h5>
          <p className="text-muted">
            Enjoy a <strong>comfortable & secure</strong> stay with modern
            amenities, <strong>24/7 support</strong>, and a peaceful
            environment. Your <strong>home away from home</strong> at an
            affordable price.
          </p>
          {/* Centered Logo Below Description */}
          <div className="d-flex justify-content-center">
            <img
              src={pgLogo}
              alt="Vinayaka PG Logo"
              className="img-fluid mt-3"
              style={{ maxHeight: "200px" }} // Adjusted size
            />
          </div>
        </div>

        {/* Section 2: Contact Details */}
        <div className="col-md-4 p-4 ">
          <h5 className="text-uppercase text-primary fw-bold mb-3">
            Get in Touch
          </h5>
          <p className="d-flex align-items-center">
            <FaPhoneAlt
              className="me-2 text-success"
              style={{ fontSize: "1.5rem" }}
            />
            <strong>+91 88861 48989</strong>
          </p>
          <p>
            <a
              href="https://wa.me/918886148989"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex align-items-center text-decoration-none text-dark mb-3"
            >
              <FaWhatsapp
                className="me-2 text-success"
                style={{ fontSize: "1.5rem" }}
              />
              <strong>WhatsApp</strong>
            </a>
            {/* <img
              src={pgPP}
              alt="Vinayaka PG Logo"
              className="img-fluid mt-5"
              style={{ maxHeight: "200px" }} // Adjusted size
            /> */}
          </p>
        </div>

        {/* Section 3: Location with Google Map */}
        <div className="col-md-4 p-4">
          <h5 className="text-uppercase text-primary fw-bold mb-3">
            Find Us Here
          </h5>
          <p className="d-flex align-items-center mb-5">
            <FaMapMarkerAlt
              className="me-2 text-danger mb-5"
              style={{ fontSize: "1.8rem" }}
            />
            <strong>
              1-55, Kuragallu Kuragallu - Malkapuram Road, Main, Road,
              Kuragallu, Amaravati, Andhra Pradesh 522503
            </strong>
          </p>
          <iframe
            title="Vinayaka PG Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.442850149274!2d80.52286877356033!3d16.453098929050256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f385932ceedb%3A0x4f50e9b62be74f6c!2sSri%20Vinayaka%20Boys%20Hostel%20%26%20PG!5e0!3m2!1sen!2sin!4v1739137703185!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{
              borderRadius: "10px",
              border: "0",
              boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
            }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
