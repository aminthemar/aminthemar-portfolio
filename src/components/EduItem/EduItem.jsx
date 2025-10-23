import { AiOutlineLink } from "react-icons/ai";
import "./EduItem.scss";

const EduItem = ({ edu_data }) => {
  return (
    <div className="edu__item">
      <span>
        <p className="p-title">{edu_data.title}</p>
        <div className="app__edu-grade app__flex-start">
          {edu_data.rank && <p className="p-small">{edu_data.rank}</p>}
          {edu_data.grade && <p className="p-small">{edu_data.grade}</p>}
        </div>
        <p className="p-text">{edu_data.description}</p>
        <a href={edu_data.websiteurl} key={`edu-${edu_data.websiteurl}`} target="_blank" rel="noreferrer" className="app__flex-start">
          <div className="app__edu-external app__flex">
            <p className="p-text p-link">{edu_data.place}</p>
            <AiOutlineLink />
          </div>
        </a>
      </span>
      <section className="app__edu-card">
        <img src={edu_data.logo} alt={edu_data.place} />
        <p className="p-text app__yeartag">
          {edu_data.yearend && `${edu_data.yearend} - `} {edu_data.yearstart}
        </p>
      </section>
    </div>
  );
};

export default EduItem;
