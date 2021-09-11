import React from "react";
import "./Payment.css";
import Heading from "../Heading";
import HireMeBtn from "../HireMeBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpload,
  faPallet,
  faCheckCircle,
  faTruck,
  faCreditCard,
  faMehBlank,
  faBuilding,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";
import PaymentStepCard from "../PaymentStepCard";


export default function Payment() {
  return (
    <div className="payment-container">
      <Heading title="How It's Work" />

      <div className="payment-steps-container">

        
            <div className="payment-card">
                <FontAwesomeIcon
                className="payment-fontawesome-icons"
                icon={faUpload}
                size="4x"
                />
                <div className="payemnt-steps-text">
                    <p>Upload Photo & Order</p>
                    <p>No hidden charges.</p>
                </div>
            </div>
        
            <div className="payment-card">
                <FontAwesomeIcon
                className="payment-fontawesome-icons"
                icon={faPallet}
                size="4x"
                />
                <div className="payemnt-steps-text">
                    <p>Painting Starts</p>
                    <p>Enjoy support along the process.</p>
                </div>
            </div>
        
            <div className="payment-card">
                <FontAwesomeIcon
                className="payment-fontawesome-icons"
                icon={faCheckCircle}
                size="4x"
                />
                <div className="payemnt-steps-text">
                    <p>Preview your Painting</p>
                    <p>Get unlimited revisions.</p>
                </div>
            </div>
        
            <div className="payment-card">
                <FontAwesomeIcon
                className="payment-fontawesome-icons"
                icon={faTruck}
                size="4x"
                />
                <div className="payemnt-steps-text">
                    <p>Framed & Delivered</p>
                    <p>Shipping is super fast and free.</p>
                </div>
            </div>

      </div>

      <div className="payment-options-container">

        <div className="payment-options">
          <h1>Payment Options</h1>
        </div>

        <div className="payment-options-row">

          <div className="upi-container">
            
            <div className="upi-card">
              <img src="/images/tez.png" alt="" />
            </div>

            <div className="upi-card">
              <img src="/images/phonepe.png" alt="" />
            </div>

            <div className="upi-card">
              <img src="/images/bhim.png" alt="" />
            </div>

            <div className="upi-card">
              <img src="/images/paytm.png" alt="" />
            </div>
          
          </div>


          <div className="net-banking-container">

            <div className="net-banking-card">
              <FontAwesomeIcon icon={faCreditCard} size="4x"/>
              <div className="net-banking-text">
                <p className="net-banking-text-bold">
                  Credit Card / Debit Card
                </p>
                <p>We support card payments.</p>
              </div>
            </div>

            <div className="net-banking-card">
              <FontAwesomeIcon icon={faUniversity} size="4x" />
              <div className="net-banking-text">
                <p className="net-banking-text-bold">
                  Credit Card / Debit Card
                </p>
                <p>We support card payments.</p>
              </div>
            </div>

          </div>


        </div>
      </div>

      <div className="start-my-portrait-btn-container">
        <HireMeBtn text="Let's Start My Portrait 👋" />
      </div>
    </div>
  );
}
