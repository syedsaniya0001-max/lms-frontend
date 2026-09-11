import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./StudentSignup.css";

function StudentSignup() {

    const navigate = useNavigate();


    /* =========================
       EMPTY FORM
    ========================= */

    const emptyFormData = {
        name: "",
        rollNumber: "",
        email: "",
        department: "",
        section: "",
        studentType: "",
        password: "",
        confirmPassword: ""
    };


    const [formData, setFormData] =
        useState(emptyFormData);


    /* =========================
       INPUT CHANGE
    ========================= */

    const handleChange = (e) => {

        const {
            name,
            value
        } = e.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value
        }));
    };


    /* =========================
       REGISTER
    ========================= */

    const handleRegister = (e) => {

        e.preventDefault();


        /* =========================
           EMPTY FIELD CHECK
        ========================= */

        if (
            !formData.name.trim() ||
            !formData.rollNumber.trim() ||
            !formData.email.trim() ||
            !formData.department.trim() ||
            !formData.section.trim() ||
            !formData.studentType ||
            !formData.password ||
            !formData.confirmPassword
        ) {

            alert(
                "Please fill all the fields."
            );

            return;
        }


        /* =========================
           PASSWORD CHECK
        ========================= */

        if (
            formData.password !==
            formData.confirmPassword
        ) {

            alert(
                "Passwords do not match."
            );

            return;
        }


        /* =========================
           CREATE AUTHORITY RECORD
        ========================= */

        const registrationDetails = {

            name:
                formData.name.trim(),

            rollNumber:
                formData.rollNumber.trim(),

            email:
                formData.email.trim(),

            department:
                formData.department.trim(),

            section:
                formData.section.trim(),

            studentType:
                formData.studentType,

            status:
                "Pending Approval",

            submittedAt:
                new Date().toISOString()
        };


        /* =========================
           GET EXISTING DATA
        ========================= */

        let pendingStudents = [];

        try {

            const existingData =
                localStorage.getItem(
                    "pendingStudentRegistrations"
                );

            if (existingData) {

                pendingStudents =
                    JSON.parse(existingData);
            }

        } catch (error) {

            console.error(error);

            pendingStudents = [];
        }


        /* =========================
           ADD REGISTRATION
        ========================= */

        pendingStudents.push(
            registrationDetails
        );


        /* =========================
           SAVE
        ========================= */

        try {

            localStorage.setItem(
                "pendingStudentRegistrations",
                JSON.stringify(
                    pendingStudents
                )
            );

        } catch (error) {

            console.error(error);
        }


        /* =========================
           SUCCESS ALERT
        ========================= */

        alert(
            "Details sent successfully!\n\n" +
            "Your registration has been submitted " +
            "to the Class Teacher / Authority.\n\n" +
            "Please wait for approval."
        );


        /* =========================
           CLEAR USER DETAILS
        ========================= */

        setFormData(
            emptyFormData
        );


        /* =========================
           GO TO LOGIN
        ========================= */

        navigate("/student");
    };


    return (

        <div className="signup-page">

            <div className="signup-card">


                {/* =========================
                   TITLE
                ========================= */}

                <h2>
                    Student Registration
                </h2>


                {/* =========================
                   INTRO
                ========================= */}

                <p className="signup-intro">
                    Submit your details for
                    Student Portal approval.
                </p>


                <form
                    onSubmit={handleRegister}
                >


                    {/* NAME */}

                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete="name"
                    />


                    {/* ROLL */}

                    <input
                        type="text"
                        name="rollNumber"
                        placeholder="Roll Number"
                        value={formData.rollNumber}
                        onChange={handleChange}
                    />


                    {/* EMAIL */}

                    <input
                        type="email"
                        name="email"
                        placeholder="Email ID"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                    />


                    {/* DEPARTMENT */}

                    <input
                        type="text"
                        name="department"
                        placeholder="Department"
                        value={formData.department}
                        onChange={handleChange}
                    />


                    {/* SECTION */}

                    <input
                        type="text"
                        name="section"
                        placeholder="Section"
                        value={formData.section}
                        onChange={handleChange}
                    />


                    {/* DAY SCHOLAR / HOSTELER */}

                    <select
                        name="studentType"
                        value={formData.studentType}
                        onChange={handleChange}
                    >

                        <option value="">
                            Select Student Type
                        </option>

                        <option value="Day Scholar">
                            Day Scholar
                        </option>

                        <option value="Hosteler">
                            Hosteler
                        </option>

                    </select>


                    {/* PASSWORD */}

                    <input
                        type="password"
                        name="password"
                        placeholder="Create Password"
                        value={formData.password}
                        onChange={handleChange}
                        autoComplete="new-password"
                    />


                    {/* CONFIRM PASSWORD */}

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        autoComplete="new-password"
                    />


                    {/* REGISTER */}

                    <button type="submit">
                        Register
                    </button>

                </form>


                {/* LOGIN */}

                <p className="account-text">

                    Already have an account?

                    <button
                        type="button"
                        className="login-link"
                        onClick={() =>
                            navigate("/student")
                        }
                    >
                        Login
                    </button>

                </p>


                {/* BACK */}

                <button
                    type="button"
                    className="back-login-btn"
                    onClick={() =>
                        navigate("/student")
                    }
                >
                    ← Back to Login
                </button>

            </div>

        </div>
    );
}

export default StudentSignup;