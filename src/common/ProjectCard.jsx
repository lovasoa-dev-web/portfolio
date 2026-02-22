import React from 'react';

function ProjectCard({ src, link, h3, p }) {
  return (
    <>
      <img src={src} alt={h3} />
      <div className="portfolio-layer">
        <h4>{h3}</h4>
        <p>{p}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <i className='bx bx-link-external'></i>
        </a>
      </div>
    </>
  );
}

export default ProjectCard;
