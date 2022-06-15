import React, { useEffect, useState } from "react";
import './form.css'
import loginImage from '../assets/login.png'
import { Link } from "react-router-dom";
const Form = ({ title, handleClick }) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [heightPage, setHeightPage] = useState('')

    useEffect(() => {
        setHeightPage(window.innerHeight)
    }, [])

    return (
        <div className="form-section" style={{ height: heightPage }}>
            <div className="form-container">
                <div className="form-image-section">
                    <div className="form-image-container">
                        <img src={loginImage} alt="" />
                    </div>
                </div>
                <div className="form-main-section">
                    <div className="form-main-container">
                        <div className="form-main-input">
                            <div className="form-main-input-cont">
                                <div className="div-input">
                                    <label htmlFor="name-input">Name</label>
                                    <input className="name-input" type="text" placeholder="   Name" />
                                </div>
                                <div className="div-input">
                                    <label htmlFor="email-input">Email</label>
                                    <input className="email-input" type="email" placeholder="   Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>

                                <div className="div-input">
                                    <label htmlFor="password-input">Password</label>
                                    <input className="password-input" type="password" placeholder="   Password" value={pass} onChange={(e) => setPass(e.target.value)} />

                                </div>
                            </div>
                        </div>
                        <div className="form-main-button">
                            <div className="form-main-button-cont">
                                <button onClick={() => handleClick(email, pass)}>{title}</button>
                                <p>
                                    Or <Link to='/register'>Register</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export { Form }
