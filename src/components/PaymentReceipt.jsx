import React from "react";
import "./paymentReceipt.css"; // Make sure to create a separate CSS file for the styles

const Receipt = () => {
  return (
    <div className="payment-receipt">
      <div className="navbar">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Standard_Chartered_%282021%29.svg/2560px-Standard_Chartered_%282021%29.svg.png"
          alt="Company Logo"
          className="logo"
        />
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Log out</a>
          </li>
          
        </ul>
      </div>
      <div className="container">
        <h1>Payment Receipt</h1>
        <p>
          <strong>Reference Number:</strong> REF123456789
        </p>
        <p>
          <strong>Transfer ID:</strong> TRF987654321
        </p>
        <p>
          <strong>Account Type:</strong> Savings Account
        </p>
        <p>
          <strong>Account Number:</strong> 1234567890
        </p>
        <p>
          <strong>Account Name:</strong> ABC
        </p>
        <p>
          <strong>Transfer From:</strong> SCB
        </p>
        <p>
          <strong>Amount:</strong> $100.00
        </p>
        <p>
          <strong>Transfer When:</strong> August 6, 2023
        </p>
        <p>
          <strong>Purpose:</strong> Payment for Services
        </p>
        <p>
          <strong>Note:</strong> Thank you for your payment.
        </p>
        <button className="btn-download">Download Receipt</button>
      </div>
    </div>
  );
};

export default Receipt;
