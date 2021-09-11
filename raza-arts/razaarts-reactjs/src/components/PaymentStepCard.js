import React from 'react'
import './PaymentStepCard.css'
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

export default function PaymentStepCard({text1, text2, icon}) {
    console.log(icon)
    return (
        <div className="payment-card">
            <FontAwesomeIcon
            className="payment-fontawesome-icons"
            icon={icon}
            size="4x"
            />
            <div className="payemnt-steps-text">
                <p>{text1}</p>
                <p>{text2}</p>
            </div>
        </div>
    )
}
