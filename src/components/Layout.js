import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./styles/Layout.css"

const Layout = ({ children}) => {
    return (
        <div className="wrapper">
            <Header />
            <div className="main-wrapper">
                <main className="content">
                    {children}
                </main> 
            </div>
            <Footer />
        </div>
    );
};

export default Layout;