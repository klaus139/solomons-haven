import React from "react";
import "./Service.css";

const Service = () => {
  return (
    <div className="service-container">
      <div className="service-header">
        <h1>We serve for people</h1>
        <p>
          To restore back hope, dignity and Joy to the hurting. Goals:
          -Entrepreneurship scheme for youths. -Street Outreach to the homeless.
          -Supply of Medical utilities for the less priviledged.
        </p>
      </div>
      <div className="service-down">
        <div className="service-item">
          <img
            src="https://preview.colorlib.com/theme/chariter/assets/img/icon/services1.svg"
            alt="food"
            className="service-img"
          />
          <h1>Pure Food & Water</h1>
          <p>
            We provide nutritious food and clean water to those in need,
            ensuring no one goes to bed hungry or thirsty.
          </p>
        </div>
        <div className="service-item">
          <img
            src="https://preview.colorlib.com/theme/chariter/assets/img/icon/services2.svg"
            alt="health"
            className="service-img"
          />
          <h1>Health & Medicine</h1>
          <p>
            Access to proper healthcare and essential medicines is vital. We
            support the health and well-being of communities.
          </p>
        </div>
        <div className="service-item">
          <img
            src="https://preview.colorlib.com/theme/chariter/assets/img/icon/services3.svg"
            alt="education"
            className="service-img"
          />
          <h1>Education</h1>
          <p>
            Education is a powerful tool for empowerment. We work to ensure that
            children have access to quality education and a brighter future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
