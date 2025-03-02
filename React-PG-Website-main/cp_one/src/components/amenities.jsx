// src/Amenities.jsx
import React from "react";
import "./Amenities.css"; // Import the CSS for styling
import "bootstrap-icons/font/bootstrap-icons.css";

// Array of amenities with their icon names, labels, and links
const amenities = [
  { icon: "router-fill", label: "24x7 Wi-Fi" },
  { icon: "house-lock-fill", label: "Locker Facility" },
  { icon: "cup-hot-fill", label: "Hot Water" },
  { icon: "badge-wc-fill", label: "Washing Machine" },
  { icon: "droplet-fill", label: "Pure Drinking Water" },
  { icon: "bicycle", label: "2-Wheeler Parking" },
  { icon: "snow", label: "AC/Non-AC Rooms" },
  { icon: "lightning-charge-fill", label: "24/7 Power Backup" },
  { icon: "camera-video-fill", label: "24/7 CCTV Surveillance" },
  { icon: "archive-fill", label: "Refrigerator" },
  { icon: "segmented-nav", label: "Bed & Pillow" },
  { icon: "person-wheelchair", label: "Western Attached Toilets" },
];

const Amenities = () => {
  return (
    <>
      <br></br>
      <br></br>
      <h1 className="heading">PG Amenities</h1>
      <div className="amenities-container">
        {amenities.map((amenity, index) => (
          <a key={index} className="amenity-item">
            <div className="icon-box">
              <i className={`bi bi-${amenity.icon}`}></i>
            </div>
            <div className="amenity-label">{amenity.label}</div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Amenities;
