import React, { useState, useEffect, useRef } from "react";
import { Building } from "lucide-react";
import "./Buildings.css";

const buildings = [
  {
    id: 1,
    name: "Block 1",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&h=300",
    rooms: [
      { type: "2 Sharing", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=400&h=300" },
      { type: "3 Sharing", image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=400&h=300" },
      { type: "4 Sharing", image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=400&h=300" }
    ],
  },
  {
    id: 2,
    name: "Block 2",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=400&h=300",
    rooms: [
      { type: "2 Sharing", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=400&h=300" },
      { type: "3 Sharing", image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=400&h=300" },
      { type: "4 Sharing", image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=400&h=300" }
    ],
  },
  {
    id: 3,
    name: "Block 3",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&h=300",
    rooms: [
      { type: "2 Sharing", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=400&h=300" },
      { type: "3 Sharing", image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=400&h=300" },
      { type: "4 Sharing", image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=400&h=300" }
    ],
  },
];

const Buildings = () => {
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const roomsRef = useRef(null); // 🔥 Reference for scrolling to rooms

  // 🔥 Auto-scroll when rooms appear
  useEffect(() => {
    if (selectedBuilding && roomsRef.current) {
      roomsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedBuilding]); // Runs whenever `selectedBuilding` is updated

  return (
    <div id="rooms" className="container mt-5 pt-5">
      <h2 className="text-center text-primary fw-bold mt-5">PG Blocks</h2>
      
      <div className={`main-content ${selectedBuilding ? "expanded" : "collapsed"}`}>
        {/* Buildings List */}
        <div className={`buildings-container ${selectedBuilding ? "buildings-small" : ""}`}>
          {buildings.map((building) => (
            <div key={building.id} className="building-card">
              <div className="building-image">
                <img src={building.image} alt={building.name} />
                <div className="building-overlay">
                  <h3>{building.name}</h3>
                </div>
              </div>
              <button
                className="view-rooms-btn"
                onClick={() => setSelectedBuilding(building)}
              >
                View Rooms
              </button>
            </div>
          ))}
        </div>

        {/* Rooms Section */}
        {selectedBuilding && (
          <div ref={roomsRef} className="rooms-container"> {/* 🔥 Attach ref here */}
            {selectedBuilding.rooms.map((room, index) => (
              <div key={index} className="room-card">
                <div className="room-image">
                  <img src={room.image} alt={room.type} />
                  <div className="room-overlay">
                    <h4>{room.type}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Buildings;
