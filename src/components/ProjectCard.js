import React, {useRef, useState} from "react";
import "./styles/ProjectCard.css";

const ProjectCard = ({ project }) => {
    const galleryRef = useRef(null);
    const [selectedMedia, setSelectedMedia] = useState(null); // Track selected image or video

    const scrollGallery = (direction) => {
        if (galleryRef.current) {
            const scrollAmount = galleryRef.current.clientWidth / 2; // Scroll by half the gallery width
            galleryRef.current.scrollBy({
                left: direction === "right" ? scrollAmount : -scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const handleGalleryClick = (event) => {
        const { left, width } = event.target.getBoundingClientRect();
        const clickPosition = event.clientX - left;
        const thirdWidth = width / 8;

        if (clickPosition > 7 * thirdWidth) {
            scrollGallery("right"); // Clicked on the right third
        } else if (clickPosition < thirdWidth) {
            scrollGallery("left"); // Clicked on the left third
        }
    };

    const openModal = (media) => {
        setSelectedMedia(media); // Set the clicked media (image/video) as selected
    };

    const closeModal = () => {
        setSelectedMedia(null); // Close the modal
    };

    return (
        <div className="project-card">
            {/* Project Header */}
            <div className="project-header">
                <h1 className="project-title">{project.name}</h1>
                <div className="basic-info">
                    <p>{project.institute} | </p>
                    <p>{project.year} | </p>
                    <p>{project.school} | </p>
                    <p>{project.team} | </p>
                    <a
                        href={project.instructorLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {project.instructor}
                    </a>
                </div>
                <div className="link">
                    <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        {project.linkname}
                    </a>
                    <a 
                        href={project.link2} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        {project.link2name}
                    </a>
                </div>
            </div>

            {/* Scrollable Image Gallery */}
            <div 
                className="project-gallery"
                ref={galleryRef}
                onClick={handleGalleryClick}
            >
                {project.images.map((item, index) => {
                    if (item.type === "image") {
                        return (
                            <img
                                key={index}
                                src={item.src}
                                alt={`${project.name} gallery ${index}`}
                                className="gallery-item"
                                onClick={() => openModal(item)} // Open modal on click

                            />
                        );
                    } else if (item.type === "video") {
                        return (
                            <video
                                key={index}
                                src={item.src}
                                className="gallery-item"
                                autoPlay={item.autoplay || false}
                                loop={item.loop || false}
                                controls
                                onClick={() => openModal(item)} // Open modal on click
                            >
                                Your browser does not support the video tag.
                            </video>
                        );
                    } else if (item.type === "text") {
                        return (
                            <div key={index} className="gallery-text">
                                <p>{item.content}</p>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>

            {/* Modal for Enlarged Media */}
            {selectedMedia && (
                <div className="media-modal" onClick={closeModal}>
                    <div className="modal-content">
                        {selectedMedia.type === "image" && (
                            <img src={selectedMedia.src} alt="Enlarged view" />
                        )}
                        {selectedMedia.type === "video" && (
                            <video
                                src={selectedMedia.src}
                                controls
                                autoPlay
                                loop
                            />
                        )}
                    </div>
                </div>
            )}

        </div>
    );
};

export default ProjectCard;