import React from 'react'
import { useState } from "react";
import Input from "./Input";
function OtpForm() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [showOtpInput, setShowOtpInput] = useState(false);

    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handlePhoneSubmit = (event) => {
        event.preventDefault();

        // phone validations
        const regex = /[^0-9]/g;
        if (phoneNumber.length < 10
            || regex.test(phoneNumber)) {
            alert("Invalid Phone Number");
            return;
        }

        // Call BE API
        // show OTP Field
        setShowOtpInput(true);
    };

    const onOtpSubmit = (otp) => {
        console.log("Login Successful", otp);
    };
    return (
        <div>
           
                <div>
                    <h1 className='text-xl text-center text-white'>Enter OTP</h1>
                    <Input length={4}
                        onOtpSubmit={onOtpSubmit} />
                </div>
        </div>
    )
}

export default OtpForm
