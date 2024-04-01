import React, { useContext, useState, useRef } from 'react';
import './register.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { validateCollege, validateEmail } from '../../helpers';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../Api/api';
import { Globalinfo } from '../../App';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

const Register = () => {
    const navigate = useNavigate();
    const { userDetail, getUserDetails, GetCart } = useContext(Globalinfo);
    const [showPassword, setShowPassword] = useState(false);
    const [btnLoader, setBtnLoader] = useState(false);

    const emailRef = useRef(null);
    const collegeRef = useRef(null);
    const passwordRef = useRef(null);

    const [user, setUser] = useState({
        college: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleKeyDown = (e, nextRef) => {
        if (e.key === "Enter") {
            e.preventDefault();
            if (nextRef) {
                nextRef.current.focus();
            } else {
                handleRegister();
            }
        }
    };

    const handleRegister = async () => {
        if (!validateEmail(user.email)) {
            toast.error('Enter valid Email');
            return;
        }
        if (!validateCollege(user.college)) {
            toast.error('Enter valid College Name');
            return;
        }

        if (!user.password || !user.email || !user.college) {
            toast.error("Enter Valid Credentials");
            return;
        }
        setBtnLoader(true);
        try {
            const res = await axios.post(`${BASE_URL}/register`, {
                password: user.password,
                email: user.email,
                college: user.college,
            });

            toast.success("Registered Successfully");

            setTimeout(() => {
                navigate('/login');
            }, 1000);

        } catch (error) {
            toast.error(error.response.data.error.error);
        } finally {
            setBtnLoader(false);
        }
    };

    return (
        <>
            <div className='flex overflow-hidden'>
                <div className='w-[50%] flex items-center justify-center relative xsm:hidden'>
                    <img className='w-[60%] object-cover absolute top-10' src='../login_bg.png' />
                </div>
                <div className='flex flex-col items-center my-16 w-[45%] gap-4 xsm:w-full'>
                    <p className='font-pop text-[14px]'>Welcome to Hoping Minds</p>
                    <div className='flex flex-col w-[65%] gap-4 xsm:w-[95%]'>
                        <div className='flex justify-between bg-[#e2fff1] rounded-full py-2 mx-16 '>
                            <button className='bg-transparent cursor-pointer Logininactive' onClick={() => navigate('/login')} >Login</button>
                            <button className='bg-transparent cursor-pointer Loginactive' >Register</button>
                        </div>
                        {/* inputs */}
                        <div className='flex flex-col gap-4'>
                            <div>
                                <p className='text-[14px] font-pop'>Email</p>
                                <input
                                    ref={emailRef}
                                    className='w-full border-[1px] border-[#1dbf73] py-[10px] px-[24px] text-[14px] font-pop font-light rounded-full outline-none'
                                    type="text"
                                    placeholder="Enter Your Email"
                                    name="email"
                                    value={user.email}
                                    onChange={handleChange}
                                    onKeyDown={(e) => handleKeyDown(e, collegeRef)}
                                />
                            </div>
                            <div>
                                <p className='text-[14px] font-pop'>College/University</p>
                                <input
                                    ref={collegeRef}
                                    className='w-full border-[1px] border-[#1dbf73] py-[10px] px-[24px] text-[14px] font-pop font-light rounded-full outline-none'
                                    type="text"
                                    placeholder="Enter Your College/University"
                                    name="college"
                                    value={user.college}
                                    onChange={handleChange}
                                    onKeyDown={(e) => handleKeyDown(e, passwordRef)}
                                />
                            </div>
                            <div style={{ position: "relative" }}>
                                <p className='text-[14px] font-pop'>Password</p>
                                <input
                                    ref={passwordRef}
                                    className='w-full border-[1px] border-[#1dbf73] py-[10px] px-[24px] text-[14px] font-pop font-light rounded-full outline-none'
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter Your Password"
                                    name="password"
                                    value={user.password}
                                    onChange={handleChange}
                                    onKeyDown={(e) => handleKeyDown(e, null)}
                                />
                                <span style={{ position: "absolute", bottom: "12px", right: "15px" }}> {
                                    showPassword ? <IoEyeOutline color="#1dbf73" size={18} onClick={() => setShowPassword((prev) => !prev)} /> : <IoEyeOffOutline color='#1dbf73' size={18} onClick={() => setShowPassword((prev) => !prev)} />
                                }
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-col items-center gap-4'>
                            <div className=''>
                                <button className="bg-[#1DBF73] py-2 px-7 rounded-full text-white font-nu font-bold" onClick={handleRegister}>{btnLoader ? "Loading..." : "Sign Up"}</button>
                            </div>
                            <div className='flex items-center '>
                                <p className='font-pop text-[14px]'>Already registered ?</p>
                                {/* Sign up link */}
                                <Link to={'/login'}>  <h5 className='text-[#1dbf73]'>Login</h5></Link>
                                {/* Social media login buttons */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster position="top-right" />
        </>
    );
};

export default Register;
