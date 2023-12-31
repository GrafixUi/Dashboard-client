import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/checklist.gif'
import { FiEye } from 'react-icons/fi'

export default function Login() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch('https://dashboard-server-j55a.onrender.com/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                navigate('/')
            } else {
                console.error('Registration failed')
            }
        } catch (error) {
            console.error('Error during registration:', error)
        }
    }

    return (
        <div className=" login-main">
            <div className="authentication-wrapper authentication-basic ">
                <div className="authentication-inner py-4">
                    <div className="card">
                        <div className="card-body card-custom">
                            <div className="flex flex-col text-center justify-center align-items-center gap-2">
                                <img src={logo} alt="" className="w-24 h-24" />
                                <h2 className="text-body text-[30px]  font-semibold mt-2 mb-2">Dashboard</h2>
                            </div>
                            <p className="mb-4 text-center text-sm">
                                Please Register-in to your account and start the adventure
                            </p>
                            <form id="formAuthentication" className="mb-3 text-sm" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control placeholder:text-sm placeholder:opacity-25"
                                        id="username"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        placeholder="Enter your username"
                                        autoFocus
                                    />
                                </div>
                                <div className="mb-3 form-password-toggle">
                                    <div className="d-flex justify-content-between ">
                                        <label className="form-label" htmlFor="password">
                                            Create Password
                                        </label>
                                    </div>
                                    <div className="input-group input-group-merge">
                                        <input
                                            type="password"
                                            id="password"
                                            className="form-control placeholder:text-sm placeholder:opacity-25"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="Enter your Password"
                                            aria-describedby="password"
                                        />
                                        <span className="input-group-text cursor-pointer">
                                            <FiEye />
                                        </span>
                                    </div>
                                </div>
                                <div className="mb-3 form-password-toggle">
                                    <div className="d-flex justify-content-between ">
                                        <label className="form-label" htmlFor="confirmPassword">
                                            Re-Enter Password
                                        </label>
                                    </div>
                                    <div className="input-group input-group-merge">
                                        <input
                                            type="password"
                                            id="confirmPassword"
                                            className="form-control placeholder:text-sm placeholder:opacity-25"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            placeholder="Re-enter your Password"
                                            aria-describedby="confirmPassword"
                                        />
                                        <span className="input-group-text cursor-pointer">
                                            <FiEye />
                                        </span>
                                    </div>
                                </div>
                                <div className="mb-3 flex justify-center">
                                    <button
                                        className="bg-green-600 rounded-lg p-2 text-white text-center w-52"
                                        type="submit"
                                    >
                                        Register
                                    </button>
                                </div>
                            </form>

                            <p className="text-center text-sm">
                                <span>Already have an Account </span>
                                <Link to="/">
                                    <span className="cursor-pointer"> Sign In</span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
