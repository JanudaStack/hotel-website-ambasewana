// import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        address: '',
        bookingDate: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'http://localhost:4000/customerController',
                formData
            );
            console.log(response.data);
            alert('Booking Successfully!');
            
        } catch (error) {
            console.error(
                'Error submitting form: ',
                error.response?.data || error.message
            );
            alert('Booking not successfull!');
        }
    };
    return (
        <>
            <StyledWrapper>
                <div className="area">
                    <section className="container">
                        <header>
                            <i className="ri-edit-2-line"></i>{' '}
                            <span>Booking Form</span>
                        </header>
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="input-box">
                                <label>Full Name</label>
                                <input
                                    required
                                    name="fullName"
                                    placeholder="Enter full name"
                                    type="text"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="column">
                                <div className="input-box">
                                    <label>Phone Number</label>
                                    <input
                                        required
                                        name="phone"
                                        placeholder="Enter phone number"
                                        type="telephone"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="input-box">
                                    <label>Booking Date</label>
                                    <input
                                        required
                                        name="bookingDate"
                                        placeholder="Enter birth date"
                                        type="date"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            {/* <div className="gender-box">
                            <label>Gender</label>
                            <div className="gender-option">
                                <div className="gender">
                                    <input
                                        defaultChecked
                                        name="gender"
                                        id="check-male"
                                        type="radio"
                                    />
                                    <label htmlFor="check-male">Male</label>
                                </div>
                                <div className="gender">
                                    <input
                                        name="gender"
                                        id="check-female"
                                        type="radio"
                                    />
                                    <label htmlFor="check-female">Female</label>
                                </div>
                                <div className="gender">
                                    <input
                                        name="gender"
                                        id="check-other"
                                        type="radio"
                                    />
                                    <label htmlFor="check-other">
                                        Prefer not to say
                                    </label>
                                </div>
                            </div>
                        </div> */}
                            <div className="input-box address">
                                <label>Address</label>
                                <input
                                    required
                                    name="address"
                                    placeholder="Enter street address"
                                    type="text"
                                    onChange={handleChange}
                                />
                                {/* <div className="column">
                                <div className="select-box">
                                    <select>
                                        <option hidden>Country</option>
                                        <option>USA</option>
                                        <option>UK</option>
                                        <option>Germany</option>
                                        <option>Japan</option>
                                    </select>
                                </div>
                                <input
                                    required
                                    placeholder="Enter your city"
                                    type="text"
                                />
                            </div> */}
                            </div>
                            <button type="submit">Book Now</button>
                        </form>
                    </section>
                </div>
            </StyledWrapper>
        </>
    );
};

const StyledWrapper = styled.div`
    .container {
        font-family: 'Montserrat', sans-serif;
        position: relative;
        max-width: 500px;
        width: 100%;
        background: #1e1e1e;
        padding: 25px;
        border-radius: 8px;
        border: 2px solid #d4c56d;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    }

    .container header {
        font-size: 1.2rem;
        color: #fff;
        font-weight: 600;
        text-align: center;
    }

    .container .form {
        margin-top: 15px;
    }

    .form .input-box {
        width: 100%;
        margin-top: 10px;
    }

    .input-box label {
        color: #fff;
    }

    .form :where(.input-box input, .select-box) {
        position: relative;
        height: 35px;
        width: 100%;
        outline: none;
        font-size: 1rem;
        color: #808080;
        margin-top: 5px;
        // border: 1px solid #ee4e34;
        border-radius: 6px;
        padding: 0 15px;
        background: rgb(255, 255, 255);
    }

    .input-box input:focus {
        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
    }

    .form .column {
        display: flex;
        column-gap: 15px;
    }

    .form .gender-box {
        margin-top: 10px;
    }

    .form :where(.gender-option, .gender) {
        display: flex;
        align-items: center;
        column-gap: 50px;
        flex-wrap: wrap;
    }

    .form .gender {
        column-gap: 5px;
    }

    .gender input {
        accent-color: #ee4e34;
    }

    .form :where(.gender input, .gender label) {
        cursor: pointer;
    }

    .gender label {
        color: #000;
    }

    .address :where(input, .select-box) {
        margin-top: 10px;
    }

    .select-box select {
        height: 100%;
        width: 100%;
        outline: none;
        border: none;
        color: #808080;
        font-size: 1rem;
        background: #fcedda;
    }

    .form button {
        height: 40px;
        width: 100%;
        color: #000;
        font-size: 1rem;
        font-weight: 400;
        margin-top: 15px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.2s ease;
        background: #d4c56d;
    }

    .form button:hover {
        background: rgb(138, 129, 79);
    }
`;

export default BookingForm;
