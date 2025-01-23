import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import "./styles/Header.css";

const Header = () => {
    const [menuOpen, setMenuOpen] =useState(false);
    const routerLocation = useLocation(); // Use a different variable name
    const menuRef = useRef(null);

    const  toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleClickOutside = (event) => {
        if (menuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false); // Only close if the menu is open
        }
    };

    // Close menu when route changes
    useEffect(() => {
      setMenuOpen(false); // Automatically close the menu
    }, [routerLocation]); // Dependency: runs whenever the route changes

    useEffect(() => {
        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <header className="header">
            <div className="vertical-menu">
                <div className="button">
                    {/* Hamburger icon */}
                    <button className="hamburger" onClick={toggleMenu}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    </button>

                    {/* Search icon */}
                    <button className="search">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10.5" cy="10.5" r="7.5" stroke="black" strokeWidth="2" />
                        <line x1="16.0156" y1="16.4856" x2="20.4856" y2="20.0156" stroke="black" strokeWidth="2" />
                    </svg>
                    </button>
                </div>
                {/* Vertical Title */}
                <div className="vertical-title">
                    <p>HUI LI</p>
                </div>
            </div>

      {/* Side menu */}
      <aside className={`menu-drawer ${menuOpen ? "open" : ""}`}>
        <div className="menu-header">
          <span>Menu</span>
          <button className="close" onClick={toggleMenu}>✕</button>
        </div>
        <ul className="menu-items">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/computationalprojects">COMPUTATIONAL DESIGN</Link></li>
            <li><Link to="/urbanprojects">URBAN DESIGN</Link></li>
            <li><Link to="/architecturalprojects">ARCHITECTURAL DESIGN</Link></li>
            <li><Link to="/research">RESEARCH</Link></li>
        </ul>
      </aside>
    </header>
    );
};

export default Header;