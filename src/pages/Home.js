import React, { useEffect, useRef } from "react";
import Projects from "../components/Projects";
import ProjectsData from "../data/ProjectsData";

const Home = () => {
  const contentRef = useRef(null);

  useEffect(() => {
      const contentElement = contentRef.current;

      // Restore scroll position
      const savedScrollPosition = sessionStorage.getItem("contentScrollPosition");
      if (savedScrollPosition && contentElement) {
          contentElement.scrollTo(0, parseInt(savedScrollPosition, 10));
      }

      // Save scroll position on scroll
      const handleScroll = () => {
          if (contentElement) {
              sessionStorage.setItem("contentScrollPosition", contentElement.scrollTop);
          }
      };

      // Add event listener to .content
      contentElement.addEventListener("scroll", handleScroll);

      return () => {
          // Clean up the event listener
          if (contentElement) {
              contentElement.removeEventListener("scroll", handleScroll);
          }
      };
  }, []);
  
  return (
    <div className="wrapper">
        <div className="main-wrapper">
            <main className="content" ref={contentRef}>
                <Projects projects={ProjectsData} />
            </main>
        </div>
    </div>
  );
};

export default Home;
