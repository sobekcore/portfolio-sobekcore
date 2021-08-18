import { useEffect, useState } from "react";

export default function SidebarScroll() {
  const [scroll, setScroll] = useState();
  const [height, setHeight] = useState();

  const [about, setAbout] = useState();
  const [projects, setProjects] = useState();
  const [skills, setSkills] = useState();
  const [other, setOther] = useState();

  useEffect(() => {
    setScroll(window.scrollY);
    document.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);

  useEffect(() => {
    setHeight(document.body.scrollHeight - window.innerHeight);

    setAbout((document.querySelector("#about").offsetTop / height) * 100);
    setProjects((document.querySelector("#projects").offsetHeight / height) * 100);
    setSkills((document.querySelector("#skills").offsetHeight / height) * 100);
    setOther((document.querySelector("#other").offsetHeight / height) * 100);
  });

  return (
    <>
      <ul className="sidebar-scroll-list">
        <li className="sidebar-scroll-item" style={{ width: about + "%" }}>
          <a className="sidebar-scroll-link" href="#about">
            <span className="material-icons sidebar-scroll-icon">perm_contact_calendar</span> About
          </a>
        </li>
        <li className="sidebar-scroll-item" style={{ width: projects + "%" }}>
          <a className="sidebar-scroll-link" href="#projects">
            <span className="material-icons sidebar-scroll-icon">insights</span> Projects
          </a>
        </li>
        <li className="sidebar-scroll-item" style={{ width: skills + "%" }}>
          <a className="sidebar-scroll-link" href="#skills">
            <span className="material-icons sidebar-scroll-icon">code</span> Skills
          </a>
        </li>
        <li className="sidebar-scroll-item" style={{ width: other + "%" }}>
          <a className="sidebar-scroll-link" href="#other">
            <span className="material-icons sidebar-scroll-icon">feed</span> Other
          </a>
        </li>
      </ul>
      <div className="sidebar-scroll-wrapper">
        <div
          className="sidebar-scroll"
          style={{ width: Math.round((scroll / height) * 100) + "%" }}></div>
      </div>
    </>
  );
}
