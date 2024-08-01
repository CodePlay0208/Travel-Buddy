import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { UserLoginContext } from "../../Utils/Context/UserLoginContext";
import { ChatContext } from "../../Utils/Context/ChatContext";

const Navbar = (props) => {
    const { loggedInUserValues, setLoggedInUserValues } = useContext(UserLoginContext);
    console.log("the user is logged in navbar", loggedInUserValues);
    const isUserLoggedIn = false;
    const userProfileDropDownData = [
        { value: "My Profile", path: "/userProfile" },
        { value: "My Trips", path: "/userTrips" },
        { value: "Sign Out", path: "signOut" }];
    const [showUserProfileDropDownList, setShowUserProfileDropDownList] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const removeDropDownList = (event) => {
            const isUserProfile = document.getElementById("imgForUserProfile");
            const hasTheUserClickedOnProfilePic = isUserProfile && document.getElementById("imgForUserProfile").contains(event.target);
            if (!hasTheUserClickedOnProfilePic) {
                setShowUserProfileDropDownList(false);
            }
        }

        document.addEventListener('click', removeDropDownList);
        return () => document.removeEventListener('click', removeDropDownList);
    }, []);
    const handleClickOnProfilePic = () => {
        console.log("login status", loggedInUserValues);
        if (loggedInUserValues._id != "") {
            console.log("hehe");
            setShowUserProfileDropDownList((currentValue) => !currentValue);
        }
        else {
            sessionStorage.setItem('redirectUrl', "/userProfile");
            navigate("/login-page");
        }
    }
    const handleSignOutLogic = () => {
        console.log("Rrrr");
        //TODO: do all the necessary stuff
        fetch('http://localhost:4000/login/logout', {
            method: 'POST',
            credentials: 'include', // Ensure cookies are sent with the request
        })
            .then(response => {
                if (response.ok) {
                    console.log('Logged out successfully');
                    setLoggedInUserValues({
                        _id: "",
                        username: "",
                        emailId: "",
                        profilePic: ""
                    });
                    // Optionally redirect or update UI after logout
                } else {
                    console.error('Logout failed:', response.statusText);
                    // Handle logout failure, if needed
                    if (!response.ok) {
                        return response.json().then(error => {
                            throw new Error(error);
                        });
                    }
                }
            })
            .catch(error => {
                console.error('Error logging out:', error);
                // Handle network errors or other issues
            });
        navigate("/")
    }
    const { userChatValues, setUserChatValues } = useContext(ChatContext);
    const accessChat = async (userId) => {
        console.log(userId);
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            const { data } = await axios.post(`http://localhost:4000/chat/fetchOrCreateChats`, { userId }, {
                ...config,
                withCredentials: true
            }
            );
            if (!userChatValues.chats.find((c) => c._id === data._id)) {
                setUserChatValues((currentValues) => ({
                    ...currentValues, chats: [data, ...currentValues.chats]
                }))
            }
            setUserChatValues((currentValues) => ({
                ...currentValues, selectedChat: data
            }))
            console.log(userChatValues);

        } catch (error) {
            console.log(error);
        }
    };
    function handleChat() {
        console.log("current user is", UserLoginContext);
        accessChat("6690ab18c2d9d0a71a4533da");
        navigate("/chats");
    }
    return (
        <div className={props.isImageNavbar ? "navContainer" : "rootDiv"}>
            <nav className="nav">
                <div
                    className="webAppNameAndLogo"
                    onClick={() => {
                        localStorage.removeItem("inputValues");
                        navigate("/");
                    }}
                    style={{ color: props.isLandingPage ? "white" : "" }}
                >
                    Travmigoz
                </div>
                <div>
                    {isUserLoggedIn ?
                        <div className="otherContentsOfNavBar">
                            <div className="chatButton nav-button" onClick={() => {

                                navigate("/Chats");
                            }}>
                                <svg width="51" height="39" viewBox="0 0 51 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M43.2915 17.028C43.1381 16.9792 42.9715 16.9934 42.8285 17.0674C42.6855 17.1414 42.5777 17.2692 42.5289 17.4226C42.4801 17.5761 42.4943 17.7426 42.5683 17.8857C42.6423 18.0287 42.7701 18.1364 42.9236 18.1852C47.669 19.697 49.7855 21.9519 49.7855 25.5001C49.7855 28.656 46.9065 31.1053 45.1919 32.2855C45.1107 32.3413 45.0442 32.416 44.9983 32.5031C44.9524 32.5903 44.9284 32.6873 44.9284 32.7858V37.4281C43.4704 36.8751 42.168 35.9772 41.1325 34.8113C41.0623 34.7331 40.9731 34.6743 40.8736 34.6405C40.7741 34.6067 40.6675 34.599 40.5642 34.6182C40.2181 34.685 39.8648 34.7797 39.5066 34.8756C38.8873 35.042 38.2486 35.2144 37.6426 35.2144C34.5243 35.2144 32.341 34.5441 30.1092 32.9036C29.9794 32.8081 29.817 32.7681 29.6577 32.7924C29.4984 32.8166 29.3553 32.9032 29.2598 33.0329C29.1643 33.1627 29.1243 33.3251 29.1485 33.4844C29.1728 33.6437 29.2593 33.7869 29.3891 33.8823C31.8505 35.6916 34.2414 36.4287 37.6426 36.4287C38.4088 36.4287 39.1277 36.2356 39.8223 36.0486C40.0384 35.9891 40.2534 35.9308 40.4659 35.8811C42.7354 38.2781 45.3024 38.8233 45.4141 38.8451C45.5023 38.8635 45.5935 38.8618 45.6809 38.8401C45.7683 38.8185 45.8498 38.7774 45.9192 38.7201C45.9891 38.6633 46.0454 38.5917 46.0841 38.5104C46.1227 38.4291 46.1427 38.3402 46.1427 38.2501V33.1028C49.278 30.8673 50.9998 28.1764 50.9998 25.5001C50.9998 21.3946 48.5506 18.7025 43.2915 17.028Z" fill={props.isImageNavbar ? "white" : "black"} />
                                    <path d="M40.0716 16.3929C40.0716 7.04774 31.5497 0 20.2507 0C8.89468 0 0 7.20196 0 16.3953C0 21.907 3.89909 25.8559 7.28574 28.2456V36.3036C7.28637 36.4048 7.31216 36.5042 7.36077 36.5929C7.40939 36.6816 7.47932 36.7568 7.56424 36.8117C7.64917 36.8666 7.74643 36.8996 7.84726 36.9075C7.94809 36.9155 8.04931 36.8983 8.14182 36.8574C8.3191 36.7784 12.4635 34.8951 16.0092 31.0178C17.5453 31.3032 19.2829 31.5776 20.8591 31.5776C32.3499 31.5776 40.0716 25.4746 40.0716 16.3929ZM20.8579 30.3633C19.2671 30.3633 17.4591 30.0585 15.8999 29.761C15.7966 29.7421 15.6901 29.7498 15.5907 29.7836C15.4912 29.8174 15.402 29.8761 15.3316 29.9541C12.8423 32.7616 9.91711 34.5453 8.50003 35.314V27.9287C8.49999 27.8302 8.47598 27.7331 8.43008 27.646C8.38417 27.5588 8.31774 27.4841 8.23653 27.4284C5.03323 25.2245 1.21429 21.5233 1.21429 16.3953C1.21429 7.88196 9.57589 1.21429 20.2507 1.21429C30.8588 1.21429 38.8573 7.73989 38.8573 16.3929C38.8573 24.7497 31.6238 30.3633 20.8579 30.3633Z" fill={props.isImageNavbar ? "white" : "black"} />
                                    <path d="M20.036 13.9644C18.6967 13.9644 17.6075 15.0536 17.6075 16.3929C17.6075 17.7323 18.6967 18.8215 20.036 18.8215C21.3754 18.8215 22.4646 17.7323 22.4646 16.3929C22.4646 15.0536 21.3754 13.9644 20.036 13.9644ZM20.036 17.6072C19.7234 17.5932 19.4282 17.4592 19.2119 17.233C18.9956 17.0068 18.8748 16.7059 18.8748 16.3929C18.8748 16.08 18.9956 15.7791 19.2119 15.5529C19.4282 15.3267 19.7234 15.1926 20.036 15.1786C20.3487 15.1926 20.6439 15.3267 20.8602 15.5529C21.0765 15.7791 21.1972 16.08 21.1972 16.3929C21.1972 16.7059 21.0765 17.0068 20.8602 17.233C20.6439 17.4592 20.3487 17.5932 20.036 17.6072ZM28.5361 13.9644C27.1967 13.9644 26.1075 15.0536 26.1075 16.3929C26.1075 17.7323 27.1967 18.8215 28.5361 18.8215C29.8754 18.8215 30.9646 17.7323 30.9646 16.3929C30.9646 15.0536 29.8754 13.9644 28.5361 13.9644ZM28.5361 17.6072C28.2234 17.5932 27.9282 17.4592 27.7119 17.233C27.4956 17.0068 27.3749 16.7059 27.3749 16.3929C27.3749 16.08 27.4956 15.7791 27.7119 15.5529C27.9282 15.3267 28.2234 15.1926 28.5361 15.1786C28.8487 15.1926 29.1439 15.3267 29.3602 15.5529C29.5765 15.7791 29.6973 16.08 29.6973 16.3929C29.6973 16.7059 29.5765 17.0068 29.3602 17.233C29.1439 17.4592 28.8487 17.5932 28.5361 17.6072ZM11.536 14.0797C10.1966 14.0797 9.10742 15.1689 9.10742 16.5083C9.10742 17.8477 10.1966 18.9369 11.536 18.9369C12.8754 18.9369 13.9646 17.8477 13.9646 16.5083C13.9646 15.1689 12.8754 14.0797 11.536 14.0797ZM11.536 17.7226C11.2233 17.7086 10.9281 17.5746 10.7118 17.3484C10.4955 17.1222 10.3748 16.8213 10.3748 16.5083C10.3748 16.1953 10.4955 15.8944 10.7118 15.6682C10.9281 15.442 11.2233 15.308 11.536 15.294C11.8487 15.308 12.1439 15.442 12.3602 15.6682C12.5765 15.8944 12.6972 16.1953 12.6972 16.5083C12.6972 16.8213 12.5765 17.1222 12.3602 17.3484C12.1439 17.5746 11.8487 17.7086 11.536 17.7226Z" fill={props.isImageNavbar ? "white" : "black"} />
                                </svg>

                            </div>
                            <div
                                className="nav-link nav-button"
                                onClick={() => {
                                    localStorage.removeItem("inputValues");
                                    navigate("/publish-trip");
                                }}
                                style={{ color: props.isLandingPage ? "white" : "" }}
                            >
                                Publish Trip
                            </div>
                            <div id="imgForUserProfile" onClick={handleClickOnProfilePic}>
                                {// TODO: Write logic to display user profile pic instead of svg if the user is logged in
                                }
                                <svg className="profilePicSvg" xmlns="http://www.w3.org/2000/svg"
                                    version="1.1" x="0px" y="0px" viewBox="0 0 100 125" style={{ enableBackground: "new 0 0 100 100" }}>
                                    <g><g><path d="M50,95.5c25.1,0,45.5-20.4,45.5-45.5S75.1,4.5,50,4.5S4.5,24.9,4.5,50S24.9,95.5,50,95.5z M50,27.6   
          c8.3,0,15.1,6.8,15.1,15.1c0,8.3-6.8,15.1-15.1,15.1S34.9,51,34.9,42.7C34.9,34.3,41.7,27.6,50,27.6z M24.3,86.3    
          C28,73,38.3,63.4,50.4,63.4c12,0,22.2,9.4,25.9,22.5c-7.4,5.4-16.5,8.6-26.3,8.6C40.4,94.5,31.6,91.5,24.3,86.3z" /></g></g>
                                </svg>
                                {showUserProfileDropDownList && (
                                    <div className="userProfileDropDownList">
                                        {userProfileDropDownData.map((data) => (
                                            <li
                                                key={data.value}
                                                className="listItemValueForIdx"
                                                onClick={() => {
                                                    setShowUserProfileDropDownList(false);
                                                    const path = `${data.path}`;
                                                    if (path == "signOut") {
                                                        setShowUserProfileDropDownList((currentValue) => !currentValue);
                                                        handleSignOutLogic();
                                                    }
                                                    else {
                                                        setShowUserProfileDropDownList((currentValue) => !currentValue);
                                                        navigate(path);
                                                    }
                                                }}
                                            >
                                                <p className="listItemValueForUserProfileData" id="listItemValueForUserProfileData">{data.value}</p>
                                            </li>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div> : <div className="otherContentsOfNavBar">
                            <div className="NavContents login" onClick={()=>{navigate("/login-page")}}>Login</div>
                            <div className="NavContents signup" onClick={()=>{navigate("/publish-trip")}}>Publish Trip</div>
                        </div>}
                </div>

            </nav>
        </div>
    );
};
export default Navbar;