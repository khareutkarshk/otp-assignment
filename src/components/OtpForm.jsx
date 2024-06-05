import React from 'react'
import { useState } from "react";
import Input from "./Input";
function OtpForm() {

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
