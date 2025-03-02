import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./feedback.css";

const Feedback = () => {
  const reviews = [
    {
      name: "John Doe",
      review:
        "The service exceeded my expectations! The staff was incredibly helpful, and the process was seamless. Highly recommended for anyone looking for quality service.",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Jane Smith",
      review:
        "I had a fantastic experience! The team was professional, and the support I received was top-notch. I will definitely be using their services again in the future.",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Alice Johnson",
      review:
        "The staff was extremely friendly and made everything so easy. From start to finish, the process was smooth and stress-free. Thank you for the great service!",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Bob Williams",
      review:
        "I was looking for something affordable yet reliable, and this was the perfect choice. The quality and efficiency were beyond my expectations. Great job!",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Emma Brown",
      review:
        "The level of professionalism and dedication shown by the team was remarkable. Their attention to detail and customer service is truly exceptional.",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      name: "Michael Lee",
      review:
        "Fast, efficient, and highly satisfactory! I was impressed by the quick turnaround time and the overall quality of the service. Keep up the great work!",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ];

  const CustomPrevArrow = ({ onClick }) => (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      <FaChevronLeft size={30} />
    </div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div className="custom-arrow custom-next" onClick={onClick}>
      <FaChevronRight size={30} />
    </div>
  );

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="feedback-container">
      <div className="feedback-header">
        <h1 className="feedback-title">Customer Reviews</h1>
        <p className="feedback-subtitle">
          Here's what our customers have to say about us....
        </p>
      </div>
      <div className="feedback-slider-wrapper">
        <Slider {...settings} className="feedback-slider">
          {reviews.map((review, index) => (
            <div key={index} className="feedback-card-wrapper">
              <div className="feedback-card">
                <div className="feedback-icon-name">
                  <img
                    className="feedback-icon"
                    src={review.image}
                    alt={review.name}
                    style={{
                      borderRadius: "50%",
                      width: "35px",
                      height: "35px",
                      objectFit: "cover",
                    }}
                  />
                  <h4 className="feedback-name">{review.name}</h4>
                </div>
                <p className="feedback-text">"{review.review}"</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Feedback;
