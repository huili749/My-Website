import React, { useState, useRef, useEffect } from "react";
import "./styles/Footer.css";

const Footer = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const emailRef = useRef(null);
    const socialRef = useRef(null);

    const toggleMenu = (menu) => {
        setActiveMenu((prevMenu) => (prevMenu === menu ? null : menu));
    };

    const scrollToMenu = (ref) => {
        if (ref.current) {
            // 确保滚动到元素时包含平滑效果
            ref.current.scrollIntoView({ behavior: "smooth"});
        }
    };

    useEffect(() => {
        if (activeMenu === "email") {
            scrollToMenu(emailRef);
        } else if (activeMenu === "social") {
            scrollToMenu(socialRef);
        }
    }, [activeMenu]);

    return (
        <footer className="footer">
            <div className="footer-menus">
                {/* Email Section */}
                <div className="footer-menu" ref={emailRef}>
                    <button onClick={() => toggleMenu("email")} className="footer-menu-button">
                        EMAIL {activeMenu === "email" ? "✕" : "+"}
                    </button>
                    {activeMenu === "email" && (
                        <div className="footer-submenu">
                            <a href="mailto:hui_li@gsd.harvard.edu">hui_li@gsd.harvard.edu</a>
                        </div>
                    )}
                </div>

                {/* Social Section */}
                <div className="footer-menu" ref={socialRef}>
                    <button onClick={() => toggleMenu("social")} className="footer-menu-button">
                        SOCIAL {activeMenu === "social" ? "✕" : "+"}
                    </button>
                    {activeMenu === "social" && (
                        <div className="footer-submenu">
                            <a href="https://www.instagram.com/huiii_li?igsh=eTI2ZWs0ZGh1bmJ5&utm_source=qr" target="_blank" rel="noopener noreferrer">INSTAGRAM ↗</a>
                            <a href="https://www.linkedin.com/in/hui-li-414341275/" target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a>
                        </div>
                    )}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
