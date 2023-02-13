import React from "react";
import thank_you_image from "../assets/icon-thank-you.svg";

export default function Complete() {
  return (
    <div className="thank-you-section">
      <img className="thank-you-icon" src={thank_you_image} alt="" />
      <h2 className="thank-you-title">Thank you!</h2>
      <p className="thank-you-desc">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loregaming.com
      </p>
    </div>
  );
}
