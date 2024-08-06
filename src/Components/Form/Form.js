import React, { useState } from "react";
import "./Form.css";

const Form = ({ title, formId, className }) => {
    // State to manage form input values, submitted values, and validation errors
    const initialFormData = {
        company_name: "",
        user_name: "",
        user_email: "",
        first_name: "",
        last_name: "",
        address: "",
        city: "",
        country: "",
        postal_code: "",
        about: "",
    };

    const [formData, setFormData] = useState(initialFormData);
    const [submittedData, setSubmittedData] = useState(null);
    const [errors, setErrors] = useState({});

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: "" }); // Clear errors as user types
        }
    };

    // Validate form data
    const validate = () => {
        const newErrors = {};

        if (!formData.company_name) {
            newErrors.company_name = "Company name is required.";
        }
        if (!formData.user_name) {
            newErrors.user_name = "User name is required.";
        }
        if (!formData.user_email) {
            newErrors.user_email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
            newErrors.user_email = "Email address is invalid.";
        }
        if (!formData.first_name) {
            newErrors.first_name = "First name is required.";
        }
        if (!formData.last_name) {
            newErrors.last_name = "Last name is required.";
        }
        if (!formData.address) {
            newErrors.address = "Address is required.";
        }
        if (!formData.city) {
            newErrors.city = "City is required.";
        }
        if (!formData.country) {
            newErrors.country = "Country is required.";
        }
        if (!formData.postal_code) {
            newErrors.postal_code = "Postal code is required.";
        }
        if (!formData.about) {
            newErrors.about = "About section is required.";
        }

        return newErrors;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setSubmittedData(formData); // Save form data to submittedData state
            setErrors({});
            setFormData(initialFormData); // Reset form fields
        }
    };

    return (
        <div className={`${className ? className : 'form_wrap'}`}>
            <div>{title}</div>
            <div>
                <form id={formId} onSubmit={handleSubmit}>
                    <div className="d_flex">
                        <div className="col_3">
                            <label className="d_block" htmlFor="company_name">Company</label>
                            <input
                                type="text"
                                name="company_name"
                                id="company_name"
                                value={formData.company_name}
                                onChange={handleChange}
                                placeholder=""
                            />
                            {errors.company_name && <p className="error">{errors.company_name}</p>}
                        </div>
                        <div className="col_3">
                            <label className="d_block" htmlFor="user_name">User Name</label>
                            <input
                                type="text"
                                name="user_name"
                                id="user_name"
                                value={formData.user_name}
                                onChange={handleChange}
                                placeholder=""
                            />
                            {errors.user_name && <p className="error">{errors.user_name}</p>}
                        </div>
                        <div className="col_3">
                            <label htmlFor="user_email">Email Address</label>
                            <input
                                className="d_block"
                                type="email"
                                name="user_email"
                                id="user_email"
                                value={formData.user_email}
                                onChange={handleChange}
                                placeholder=""
                            />
                            {errors.user_email && <p className="error">{errors.user_email}</p>}
                        </div>
                    </div>
                    <div className="d_flex">
                        <div className="col_2">
                            <label className="d_block" htmlFor="first_name">First Name</label>
                            <input
                                className="col"
                                type="text"
                                id="first_name"
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleChange}
                            />
                            {errors.first_name && <p className="error">{errors.first_name}</p>}
                        </div>
                        <div className="col_2">
                            <label className="d_block" htmlFor="last_name">Last Name</label>
                            <input
                                className="col"
                                type="text"
                                id="last_name"
                                name="last_name"
                                value={formData.last_name}
                                onChange={handleChange}
                            />
                            {errors.last_name && <p className="error">{errors.last_name}</p>}
                        </div>
                    </div>
                    <div className="col">
                        <label className="d_block" htmlFor="address">Address</label>
                        <input
                            className="col"
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                        {errors.address && <p className="error">{errors.address}</p>}
                    </div>
                    <div className="d_flex">
                        <div className="col_3">
                            <label className="d_block" htmlFor="city">City</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                            />
                            {errors.city && <p className="error">{errors.city}</p>}
                        </div>
                        <div className="col_3">
                            <label className="d_block" htmlFor="country">Country</label>
                            <input
                                type="text"
                                id="country"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                            />
                            {errors.country && <p className="error">{errors.country}</p>}
                        </div>
                        <div className="col_3">
                            <label className="d_block" htmlFor="postal_code">Postal Code</label>
                            <input
                                type="number"
                                id="postal_code"
                                name="postal_code"
                                value={formData.postal_code}
                                onChange={handleChange}
                            />
                            {errors.postal_code && <p className="error">{errors.postal_code}</p>}
                        </div>
                    </div>
                    <div>
                        <div className="col">
                            <label className="d_block" htmlFor="about">About Me</label>
                            <textarea
                                className="col"
                                id="about"
                                name="about"
                                value={formData.about}
                                onChange={handleChange}
                            />
                            {errors.about && <p className="error">{errors.about}</p>}
                        </div>
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
            {/* Display submitted data */}
            {submittedData && (
                <div className="submitted_data">
                    <h3>Submitted Data:</h3>
                    <p>Company: {submittedData.company_name}</p>
                    <p>User Name: {submittedData.user_name}</p>
                    <p>Email: {submittedData.user_email}</p>
                    <p>First Name: {submittedData.first_name}</p>
                    <p>Last Name: {submittedData.last_name}</p>
                    <p>Address: {submittedData.address}</p>
                    <p>City: {submittedData.city}</p>
                    <p>Country: {submittedData.country}</p>
                    <p>Postal Code: {submittedData.postal_code}</p>
                    <p>About: {submittedData.about}</p>
                </div>
            )}
        </div>
    );
};

export default Form;