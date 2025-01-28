import React, { useState } from "react";
import Modal from "react-modal";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

Modal.setAppElement("#root"); 

const LoginSignupModal = () => {
  const [isSignup, setIsSignup] = useState(false); 
  const [modalOpen, setModalOpen] = useState(false); 
  const [loginType, setLoginType] = useState("Customer");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const openModal = () => {
    setIsSignup(false); 
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  
  const sendOtp = () => {
    if (phone.trim() === "") {
      alert("Please enter a valid phone number.");
      return;
    }
    const generated = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(generated);
    setOtpSent(true);
    alert(`OTP sent to ${phone}: ${generated}`);
  };

  
  const handleLoginSignup = () => {
    if (!otpSent) {
      alert("Please request OTP first.");
      return;
    }
    if (otp.trim() === "") {
      alert("Please enter the OTP.");
      return;
    }
    if (otp !== generatedOtp) {
      alert("Invalid OTP. Please try again.");
      return;
    }

    if (isSignup) {
      if (!name.trim() || !email.trim()) {
        alert("Please fill all fields for signup.");
        return;
      }
      alert(
        `Successfully signed up as ${loginType} with Name: ${name}, Email: ${email}, and Phone: ${phone}.`
      );
    } else {
      alert(`Successfully logged in as ${loginType}.`);
    }
    closeModal();
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-rose-500 text-white font-bold py-2 px-4 rounded"
      >
        Open Login/Signup
      </button>

      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        contentLabel="Login or Signup Modal"
        style={{
          overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
          content: {
            width: "400px",
            margin: "auto",
            borderRadius: "10px",
            padding: "20px",
          },
        }}
      >
        <h1 className="font-bold text-lg text-center">
          {isSignup ? "Signup" : "Login"}{" "}
          <span className="font-normal text-sm">or</span>{" "}
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-rose-500 font-bold text-sm"
          >
            {isSignup ? "Login" : "Signup"}
          </button>
        </h1>

        {/* Login Type Dropdown */}
        <div className="mt-4">
          <label htmlFor="loginType" className="block text-sm font-medium text-gray-700">
            Select {isSignup ? "Signup" : "Login"} Type
          </label>
          <select
            id="loginType"
            value={loginType}
            onChange={(e) => setLoginType(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none"
          >
            <option value="Customer">Customer</option>
            <option value="Vendor">Vendor</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        {isSignup && (
          <>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="mt-4 block w-full p-2 border border-gray-300 rounded-md"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="mt-4 block w-full p-2 border border-gray-300 rounded-md"
            />
          </>
        )}

        <PhoneInput
          country={"US"}
          value={phone}
          onChange={setPhone}
          placeholder="Mobile Number"
          className="mt-4"
          buttonStyle={{ backgroundColor: "white" }}
          inputStyle={{ width: "100%" }}
        />

        {!otpSent ? (
          <button
            onClick={sendOtp}
            className="mt-4 bg-rose-500 text-white font-bold py-2 px-4 w-full"
          >
            Send OTP
          </button>
        ) : (
          <>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="mt-4 block w-full p-2 border border-gray-300 rounded-md"
            />
            <button
              onClick={handleLoginSignup}
              className="mt-4 bg-rose-500 text-white font-bold py-2 px-4 w-full"
            >
              {isSignup ? "Signup" : "Continue"}
            </button>=
          </>
        )}

        <button
          onClick={closeModal}
          className="mt-4 text-sm text-gray-500 underline"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default LoginSignupModal;
