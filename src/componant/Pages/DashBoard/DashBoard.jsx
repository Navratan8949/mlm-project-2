import { Fragment, useEffect, useRef, useState } from "react";
import './DashBoardPage.css'
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import NorthIcon from '@mui/icons-material/North';
import { FaCopy } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import { CiShare1 } from "react-icons/ci";
import { FaWallet } from "react-icons/fa6";
import UnknownUser from "../../../assets/images/UnknownUser.webp"
import CountUp from "react-countup";
import { CopyAll, Home } from "@mui/icons-material";
import { toast } from "react-toastify";
import axios from "axios";
import { Breadcrumbs, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";

const DashBoard = () => {

    const [visibleItems, setVisibleItems] = useState(15); // Number of items to display initially

    const [isSeeMoreVisible, setIsSeeMoreVisible] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(true);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate('')

    useEffect(() => {
        const userEmail = JSON.parse(localStorage.getItem('user')).email;

        if (userEmail) {
            axios.get(`/users?email=${userEmail}`)
                .then(res => {
                    if (res.data.length > 0) {
                        setUser(res.data[0]);
                    } else {
                        setError('User not found');
                    }

                })
                .catch(err => {
                    setError(err.message);

                });
        } else {
            setError('User email not found in localStorage');
        }
    }, []);

    setTimeout(() => {
        setLoading(false)
    }, 1500);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsButtonVisible(true);
            } else {
                setIsButtonVisible(false);
                setIsSeeMoreVisible(false); // Reset visibility on larger screens
            }
        };

        // Initial check on component mount
        handleResize();

        // Listen for window resize events
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleSeeMoreClick = () => {
        setIsSeeMoreVisible(true);
        setIsButtonVisible(false);
    };


    const textToCopyRef = useRef(null);

    const handleCopyClick = () => {
        // Select the text inside the span
        textToCopyRef.current.select();
        // Copy the selected text to the clipboard
        document.execCommand('copy');
        // Deselect the text after copying
        window.getSelection().removeAllRanges();

        toast.success('Copy Successfully')
    };

    const platformdata = [
        {
            usericon: (<PersonAddAltRoundedIcon sx={{ fontSize: "15px" }} />),
            newuser: 'New User Join',
            UserId: '869255',
            jioningtiming: '7 minutes',
            className: 'NewUser'
        },
        {
            usericon: (<FaWallet style={{ color: 'green' }} />),
            newuser: '+5 $ in x4',
            UserId: '869255',
            jioningtiming: '7 minutes',
            className: 'transaction'
        },
        {
            usericon: (<FaWallet style={{ color: 'green' }} />),
            newuser: '+5 $ in x4',
            UserId: '869255',
            jioningtiming: '7 minutes',
            className: 'transaction'
        },
        {
            usericon: (<PersonAddAltRoundedIcon sx={{ fontSize: "15px" }} />),
            newuser: 'New User Join',
            UserId: '869255',
            jioningtiming: '7 minutes',
            className: 'NewUser'
        },
        {
            usericon: (<FaWallet style={{ color: 'green' }} />),
            newuser: '+5 $ in x4',
            UserId: '869255',
            jioningtiming: '7 minutes',
            className: 'transaction'
        },
        {
            usericon: (<FaWallet style={{ color: 'green' }} />),
            newuser: '+5 $ in x4',
            UserId: '869255',
            jioningtiming: '7 minutes',
            className: 'transaction'
        },
        {
            usericon: (<PersonAddAltRoundedIcon sx={{ fontSize: "15px" }} />),
            newuser: 'New User Join',
            UserId: '869255',
            jioningtiming: '7 minutes',
            className: 'NewUser'
        },
        {
            usericon: (<FaWallet style={{ color: 'green' }} />),
            newuser: '+5 $ in x4',
            UserId: '869255',
            jioningtiming: '7 minutes',
            className: 'transaction'
        },
        {
            usericon: (<FaWallet style={{ color: 'green' }} />),
            newuser: '+5 $ in x4',
            UserId: '869255',
            jioningtiming: '7 minutes',
            className: 'transaction'
        },
        {
            usericon: (<PersonAddAltRoundedIcon sx={{ fontSize: "15px" }} />),
            newuser: 'New User Join',
            UserId: '869255',
            jioningtiming: '7 minutes',
            className: 'NewUser'
        },
        {
            usericon: (<FaWallet style={{ color: 'green' }} />),
            newuser: '+5 $ in x4',
            UserId: '869255',
            jioningtiming: '7 minutes',
            className: 'transaction'
        },
        {
            usericon: (<FaWallet style={{ color: 'green' }} />),
            newuser: '+5 $ in x4',
            UserId: '869255',
            jioningtiming: '7 minutes',
            className: 'transaction'
        },
        {
            usericon: (<PersonAddAltRoundedIcon sx={{ fontSize: "15px" }} />),
            newuser: 'New User Join',
            UserId: '869255',
            jioningtiming: '7 minutes',
            className: 'NewUser'
        },
        {
            usericon: (<FaWallet style={{ color: 'green' }} />),
            newuser: '+5 $ in x4',
            UserId: '869255',
            jioningtiming: '7 minutes',
            className: 'transaction'
        },
        {
            usericon: (<FaWallet style={{ color: 'green' }} />),
            newuser: '+5 $ in x4',
            UserId: '869255',
            jioningtiming: '7 minutes',
            className: 'transaction'
        },
        {
            usericon: (<PersonAddAltRoundedIcon sx={{ fontSize: "15px" }} />),
            newuser: 'New User Join',
            UserId: '869255',
            jioningtiming: '7 minutes',
            className: 'NewUser'
        },
        {
            usericon: (<FaWallet style={{ color: 'green' }} />),
            newuser: '+5 $ in x4',
            UserId: '869255',
            jioningtiming: '7 minutes',
            className: 'transaction'
        },
        {
            usericon: (<FaWallet style={{ color: 'green' }} />),
            newuser: '+5 $ in x4',
            UserId: '869255',
            jioningtiming: '7 minutes',
            className: 'transaction'
        },


    ]

    const showMoreItems = () => {
        setVisibleItems(visibleItems + 15); // Increase the number of visible items
    };

    const boxdata3 = [
        { name: 'x3/x4', link: ' 0x5ac...B97' },
        { name: 'x3/x4', link: ' 0x5ac...B97' },
        { name: 'x3/x4', link: ' 0x5ac...B97' },
        { name: 'x3/x4', link: ' 0x5ac...B97' },
        { name: 'x3/x4', link: ' 0x5ac...B97' }
    ]

    return (
        <>
            <div className="mb-6">

                <Breadcrumbs aria-label="breadcrumb">
                    <Typography
                        onClick={() => navigate('/')}
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                        color="inherit"
                    >
                        <Home sx={{ mr: 0.5 }} fontSize="medium" />
                        DashBoard
                    </Typography>
                    <Typography
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="text.primary"
                    >
                        Breadcrumb
                    </Typography>
                </Breadcrumbs>
            </div>

            <div className="dashboard-container">

                {
                    loading ? (
                        <div className="loading_spinner_container">
                            <PulseLoader color="#36d7b7" size={30} className="loading_spinner" />
                        </div>
                    ) :
                        (
                            <Fragment>

                                <div >



                                    <div style={{ marginBottom: '50px' }}>


                                        <div className="dashboard-main-container">
                                            <div className="dashboard-inner-container">

                                                <div className="main-upper-left-div">

                                                    <div className="user-img-box">
                                                        <img width={'120px'} src={UnknownUser} alt="" />
                                                    </div>
                                                    <div>
                                                        <span style={{ color: '#8B9FA8', fontSize: '23px', fontWeight: '800' }}>ID :  <span style={{ color: "blue" }}>{user && (user.id)}</span></span>
                                                    </div>
                                                    <div className={`see-more ${isSeeMoreVisible ? 'visible' : ''}`}>

                                                        {/* <div>
                                            <span style={{ color: '#black', fontSize: '16px', fontWeight: '600' }}>0xb37e...0868</span>
                                        </div> */}
                                                        <div>
                                                            <span style={{ color: '#black', fontSize: '16px', fontWeight: '600' }}>{
                                                                user && (user.name)
                                                            }</span>
                                                        </div>
                                                        <div style={{ color: 'gray' }}>
                                                            Invited 01.06.2023 by <span className="ID-box">ID 1</span>
                                                        </div>
                                                    </div>

                                                    {isButtonVisible && <button className="see-more-1" onClick={handleSeeMoreClick}><IoEyeSharp /> Show See More</button>}

                                                </div>
                                                <div className="main-upper-right-div">
                                                    <div className="right-inner-row">
                                                        <div>
                                                            <span className="right-box-1-heading"> Referral link </span>
                                                        </div>
                                                        <div className="right-inner-flex-box">
                                                            <div>
                                                                <input
                                                                    ref={textToCopyRef}
                                                                    type="text"
                                                                    value="metablocktechnologies.io"
                                                                    readOnly
                                                                    style={{ fontSize: '18px', fontWeight: '800', border: 'none', outline: 'none', background: 'transparent' }}
                                                                />
                                                            </div>
                                                            <div className="copy-button" onClick={handleCopyClick}>

                                                                <CopyAll />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>


                                        <div className="dashboard_row-1_inner pb-10">
                                            <div className="counter_number_div_1 counter-div">
                                                <div className="counter_number">
                                                    + $<CountUp start={0} end={+540.45} duration={5}></CountUp>
                                                </div>
                                                <h2>Team </h2>
                                            </div>
                                            <div className="counter_number_div_2 counter-div">
                                                <div className="counter_number">
                                                    + $<CountUp start={+200} end={+320.00} duration={5}></CountUp>
                                                </div>
                                                <h2>Total Refferal </h2>
                                            </div>
                                            <div className="counter_number_div_3 counter-div">
                                                <div className="counter_number">
                                                    + $<CountUp start={+100} end={+740.89} duration={5}></CountUp>
                                                </div>
                                                <h2>Total Profit</h2>
                                            </div>
                                            <div className="counter_number_div_4 counter-div">
                                                <div className="counter_number">
                                                    + $<CountUp start={+1200} end={+5499.99} duration={5}></CountUp>
                                                </div>
                                                <h2>Today Profit</h2>
                                            </div>
                                        </div>

                                        <div className="announsment">
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <div className="Announcment-text" >
                                                    Announcment :
                                                </div>
                                                <div style={{ width: '80%', paddingLeft: '15px' }}>
                                                    <marquee className="hurryup" behavior="smooth" direction="left" >
                                                        User New For OFF 50% !Up Hurry.
                                                        {/* Hurry up! 50% OFF For New User */}
                                                    </marquee>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="m-0">
                                            <div className="dashboard-main-box">
                                                <div className="dashboard-container-3">

                                                    <div className="dashboard-container-box dashboard-boxes"  >
                                                        <div>
                                                            <div> <span style={{ fontSize: '34px', fontWeight: '500' }}>
                                                                0
                                                            </span>
                                                            </div>
                                                            <div> <span>
                                                                Referral Income
                                                            </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="dashboard-container-box dashboard-boxes" >
                                                        <div>
                                                            <div> <span style={{ fontSize: '34px', fontWeight: '500' }}>
                                                                0
                                                            </span>
                                                            </div>
                                                            <div> <span>
                                                                Level Income
                                                            </span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="dashboard-container-box dashboard-boxes" >
                                                        <div>
                                                            <div> <span style={{ fontSize: '34px', fontWeight: '500' }}>
                                                                0
                                                            </span>
                                                            </div>
                                                            <div> <span>
                                                                Package Upgrade Income
                                                            </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="dashboard-container-box dashboard-boxes" >
                                                        <div>
                                                            <div> <span style={{ fontSize: '34px', fontWeight: '500' }}>
                                                                0
                                                            </span>
                                                            </div>
                                                            <div> <span>
                                                                Slot Income
                                                            </span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="dashboard-container-box dashboard-boxes" >
                                                        <div>
                                                            <div> <span style={{ fontSize: '34px', fontWeight: '500' }}>
                                                                0
                                                            </span>
                                                            </div>
                                                            <div> <span>
                                                                Total Income
                                                            </span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>

                                        <div className="m-0">
                                            <div className="main-package-slot-container">
                                                <div className="inner-package-slot-container">
                                                    <div className="inner-left-package-container">
                                                        <div className="package-first-flex">
                                                            <div>
                                                                <div>
                                                                    <span className="package-header">
                                                                        Package
                                                                    </span>
                                                                </div>

                                                            </div>

                                                            <div>
                                                                <div>
                                                                    <span className="package-header">
                                                                        10 $
                                                                    </span>
                                                                </div>
                                                                <div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="empty-div-row">
                                                            <div className="empty-main-div">
                                                                <div className="empty-row-1-div">
                                                                    <div className="empty-div empty-div-2-1"></div>
                                                                    <div className="empty-div empty-div-1-1">
                                                                        <svg
                                                                            className="fill-current text-white"
                                                                            width="24"
                                                                            height="24"
                                                                            viewBox="0 0 20 20"
                                                                            fill="white" // Set the fill property to "white"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                fillRule="evenodd"
                                                                                clipRule="evenodd"
                                                                                d="M10 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Zm0-11.334a.5.5 0 0 1 .5.5V10a.5.5 0 0 1-1 0V6.667a.5.5 0 0 1 .5-.5Zm0 6.668a.5.5 0 0 0 0 1h.01a.5.5 0 0 0 0-1H10Z"
                                                                            ></path>
                                                                        </svg>

                                                                    </div>
                                                                    <div className="empty-div empty-div-1-1">
                                                                        <svg
                                                                            className="fill-current text-white"
                                                                            width="24"
                                                                            height="24"
                                                                            viewBox="0 0 20 20"
                                                                            fill="white" // Set the fill property to "white"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                fillRule="evenodd"
                                                                                clipRule="evenodd"
                                                                                d="M10 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Zm0-11.334a.5.5 0 0 1 .5.5V10a.5.5 0 0 1-1 0V6.667a.5.5 0 0 1 .5-.5Zm0 6.668a.5.5 0 0 0 0 1h.01a.5.5 0 0 0 0-1H10Z"
                                                                            ></path>
                                                                        </svg>
                                                                    </div>
                                                                    <div className="empty-div"></div>
                                                                </div>
                                                                <div className="empty-row-1-div">
                                                                    <div className="empty-div"></div>
                                                                    <div className="empty-div"></div>
                                                                    <div className="empty-div"></div>
                                                                    <div className="empty-div"></div>
                                                                </div>
                                                                <div className="empty-row-1-div">
                                                                    <div className="empty-div"></div>
                                                                    <div className="empty-div"></div>
                                                                    <div className="empty-div"></div>
                                                                    <div className="empty-div"></div>
                                                                </div>
                                                            </div>
                                                            <div className="empty-right-div">
                                                                <div>
                                                                    <span style={{ color: '#E1444D', fontSize: '14px' }}>
                                                                        Missed Profits
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span style={{ color: '#E1444D', fontSize: '20px', fontWeight: '700' }}>
                                                                        40 USD</span>
                                                                </div>
                                                                <div className="preview-button">
                                                                    <button>Preview</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="inner-left-package-container inner-right-slot-container">
                                                        <div className="package-first-flex">
                                                            <div>
                                                                <div>
                                                                    <span className="package-header">
                                                                        Slot
                                                                    </span>
                                                                </div>

                                                            </div>

                                                            <div>
                                                                <div>
                                                                    <span className="package-header">
                                                                        10 $
                                                                    </span>
                                                                </div>
                                                                <div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="empty-div-row">
                                                            <div className="empty-main-div">
                                                                <div className="empty-row-1-div">
                                                                    <div className="empty-div empty-div-2-1"></div>
                                                                    <div className="empty-div empty-div-2-1"></div>
                                                                    <div className="empty-div empty-div-2-1"></div>
                                                                    <div className="empty-div"></div>
                                                                </div>
                                                                <div className="empty-row-1-div">
                                                                    <div className="empty-div"></div>
                                                                    <div className="empty-div"></div>
                                                                    <div className="empty-div"></div>
                                                                    <div className="empty-div"></div>
                                                                </div>
                                                                <div className="empty-row-1-div">
                                                                    <div className="empty-div"></div>
                                                                    <div className="empty-div"></div>
                                                                    <div className="empty-div"></div>
                                                                    <div className="empty-div"></div>
                                                                </div>
                                                            </div>
                                                            <div className="empty-right-div-box-2">
                                                                <div className="preview-button-right-box ">
                                                                    <button>Preview</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* inner-right-slot-container */}
                                                </div>
                                            </div>
                                        </div>



                                        <div className="platform-heading">
                                            <span>Platform recent activity</span>
                                        </div>
                                        <div className="platform-container-main overscroll-y-container">
                                            <div className="platform-left-container">
                                                <div className="platform-left-box" >
                                                    <div></div>
                                                    {platformdata.slice(0, visibleItems).map((data, index) => (
                                                        <div className="table-in-row-1" key={index}>
                                                            <div className="table-left-div">
                                                                <div className="table-user-icon" style={{ fontSize: '15px' }}>
                                                                    {data.usericon}
                                                                </div>
                                                                <div className={data.className}>

                                                                    <div className="new-user-heading">
                                                                        <span>{data.newuser}</span>
                                                                    </div>
                                                                    <div className="ID-box">ID {data.UserId}</div>
                                                                </div>
                                                            </div>

                                                            <div className="table-right-div">
                                                                <span>
                                                                    <CiShare1 size={'18px'} style={{ fontWeight: '800' }} />
                                                                </span>
                                                                <span>{data.jioningtiming}</span>
                                                            </div>
                                                        </div>

                                                    ))}





                                                    {platformdata.length > visibleItems && (
                                                        <div className="see-more-div">
                                                            <div className="see-more-button" onClick={showMoreItems}>

                                                                <IoEyeSharp />  See More
                                                            </div>
                                                        </div>
                                                    )}

                                                </div>

                                            </div>

                                            <div className="platform-right-container">
                                                <div className="platform-right-box-1" >
                                                    <div>
                                                        <span className="right-box-1-heading">
                                                            Members total
                                                        </span>
                                                    </div>

                                                    <div>
                                                        <div style={{ fontSize: '23px', fontWeight: '700' }}>
                                                            <span>1452 555</span>
                                                        </div>
                                                        <div style={{ color: 'green', fontSize: '17px' }}>
                                                            <span><NorthIcon sx={{ fontSize: '16px' }} />554</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="platform-right-box-2">
                                                    <div>
                                                        <span className="right-box-1-heading">
                                                            Members received
                                                        </span>
                                                    </div>

                                                    <div style={{ borderBottom: '1px solid #363737', paddingBottom: '5px' }}>
                                                        <div style={{ fontSize: '23px', fontWeight: '700' }}>
                                                            <span>1452 555</span>
                                                        </div>
                                                        <div style={{ color: 'green', fontSize: '17px' }}>
                                                            <span><NorthIcon sx={{ fontSize: '16px' }} />554</span>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div style={{ fontSize: '23px', fontWeight: '700' }}>
                                                            <span>1452 555</span>
                                                        </div>
                                                        <div style={{ color: 'green', fontSize: '17px' }}>
                                                            <span><NorthIcon sx={{ fontSize: '16px' }} />554</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="platform-right-box-3">
                                                    <div>
                                                        <span className="right-box-3-heading-main">
                                                            Forsage $ Contracts
                                                        </span>
                                                    </div>
                                                    {boxdata3.map((data1, index) => {
                                                        return (
                                                            <>
                                                                <div className="right-box-3-data-div">
                                                                    <div className="right-box-3-data-div-left">
                                                                        <span >
                                                                            {data1.name}
                                                                        </span>
                                                                    </div>

                                                                    <div className="right-box-3-data-div-right">
                                                                        <span >
                                                                            {data1.link}
                                                                        </span>
                                                                        <span style={{ cursor: 'pointer' }} title="copy link"><FaCopy /></span>
                                                                        <span ><FaLink fontSize={'medium'} /></span>
                                                                    </div>
                                                                </div>
                                                            </>

                                                        )
                                                    })}

                                                    <div>
                                                        <span className="right-box-1-heading">
                                                            Transactions made
                                                        </span>
                                                    </div>

                                                    <div style={{ borderBottom: '1px solid #363737', paddingBottom: '5px' }}>
                                                        <div style={{ fontSize: '23px', fontWeight: '700' }}>
                                                            <span>1452 555</span>
                                                        </div>
                                                        <div style={{ color: 'green', fontSize: '17px' }}>
                                                            <span><NorthIcon sx={{ fontSize: '16px' }} />554</span>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <span className="right-box-1-heading">
                                                            Turnover, $
                                                        </span>
                                                    </div>

                                                    <div style={{ borderBottom: '1px solid #363737', paddingBottom: '5px' }}>
                                                        <div style={{ fontSize: '23px', fontWeight: '700' }}>
                                                            <span>1452 555</span>
                                                        </div>
                                                        <div style={{ color: 'green', fontSize: '17px' }}>
                                                            <span><NorthIcon sx={{ fontSize: '16px' }} />554</span>
                                                        </div>
                                                    </div>

                                                </div>


                                            </div>

                                        </div>

                                    </div>
                                </div >
                            </Fragment >
                        )
                }


            </div >
        </>
    );
};

export default DashBoard;
