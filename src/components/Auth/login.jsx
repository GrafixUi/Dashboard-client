import * as React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/checklist.gif'
import { FiEye } from 'react-icons/fi'

export default function Login() {
    const navigate = useNavigate()

    const handleSubmit = () => {
        navigate('/dashboard')
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
                                Please sign-in to your account and start the adventure
                            </p>
                            <form id="formAuthentication" className="mb-3 text-sm" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email or Username
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control placeholder:text-sm placeholder:opacity-25"
                                        id="email"
                                        name="email-username"
                                        placeholder="Enter your email or username"
                                        autoFocus
                                    />
                                </div>
                                <div className="mb-3 form-password-toggle">
                                    <div className="d-flex justify-content-between ">
                                        <label className="form-label" htmlFor="password">
                                            Password
                                        </label>
                                    </div>
                                    <div className="input-group input-group-merge">
                                        <input
                                            type="password"
                                            id="password"
                                            className="form-control placeholder:text-sm placeholder:opacity-25"
                                            name="password"
                                            placeholder="Enter your Password"
                                            aria-describedby="password"
                                        />
                                        <span className="input-group-text cursor-pointer">
                                            <FiEye />
                                        </span>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <Link to=''>
                                        <small>Forgot Password?</small>
                                    </Link>
                                </div>
                                <div className="mb-3 flex justify-center">
                                    <button
                                        className="bg-green-600 rounded-lg p-2 text-white text-center w-52"
                                        type="submit"
                                    >
                                        Sign in
                                    </button>
                                </div>
                            </form>

                            <p className="text-center text-sm">
                                <span>New on our platform?</span>
                                <Link to="/">
                                    <span className="cursor-pointer"> Create an account</span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
