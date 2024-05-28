import React from "react";

const ProjectBox = ({ img, src, text, name, skills }) => {
  console.log(skills);
  return (
    <div className="project-container">
      <a href={src} target="_blank">
        <div className="image-wrapper">
          <img src={img} alt="" />
        </div>
      </a>
      <div className="project-description">
        <a href={src} target="_blank">
          {name}
        </a>
        <p>{text}</p>
        <div className="project-skills">
          {skills.map((item) => (
            <img key={item.id} src={item.img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
