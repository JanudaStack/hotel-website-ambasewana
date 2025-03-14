const Form = () => {
    return (
        <>
            <div className="container">
                <div className="title">Booking</div>
                <form action="#">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Full Name</span>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="input-box">
                            <span className="details">Username</span>
                            <input
                                type="text"
                                placeholder="Enter your username"
                                required
                            />
                        </div>
                        <div className="input-box">
                            <span className="details">Email</span>
                            <input
                                type="text"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="input-box">
                            <span className="details">Phone Number</span>
                            <input
                                type="text"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>
                        <div className="input-box">
                            <span className="details">Password</span>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="input-box">
                            <span className="details">Confirm Password</span>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                    </div>
                    <div className="gender-details">
                        <input type="radio" name="gender" id="dot-1" />
                        <input type="radio" name="gender" id="dot-2" />
                        <span className="gender-title">Gender</span>
                        <div className="category">
                            <label htmlFor="dot-1">
                                <span className="dot one"></span>
                                <span className="gender">Male</span>
                            </label>
                            <label htmlFor="dot-2">
                                <span className="dot two"></span>
                                <span className="gender">Female</span>
                            </label>
                        </div>
                    </div>
                    <div className="submit-button">
                        <input type="submit" value={'Register'} />
                    </div>
                </form>
            </div>
        </>
    );
};

export default Form;
