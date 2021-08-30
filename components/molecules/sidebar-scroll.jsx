import ScrollItem from "../atoms/scroll-item";
import { useEffect, useState } from "react";
import ENUMS from "../enums";

export default function SidebarScroll() {
  const [scroll, setScroll] = useState();
  const [height, setHeight] = useState();

  const [projects, setProjects] = useState();
  const [skills, setSkills] = useState();
  const [about, setAbout] = useState();
  const [other, setOther] = useState();

  useEffect(() => {
    let content = document.querySelector("#content-scrolable");
    setScroll(window.scrollY - content.offsetTop + window.innerHeight / 1.5);
    document.addEventListener("scroll", () => {
      setScroll(window.scrollY - content.offsetTop + window.innerHeight / 1.5);
    });
  }, []);

  useEffect(() => {
    // Scroll effects initialization
    let content = document.querySelector("#content-scrolable");
    setHeight(content.scrollHeight);

    let projectsItem = document.querySelector("#projects");
    let skillsItem = document.querySelector("#skills");
    let aboutItem = document.querySelector("#about");
    let otherItem = document.querySelector("#other");

    setProjects((projectsItem.offsetHeight / height) * 100);
    setSkills((skillsItem.offsetHeight / height) * 100);
    setAbout((aboutItem.offsetHeight / height) * 100);
    setOther((otherItem.offsetHeight / height) * 100);

    function scrollItemClassName(type) {
      return `.sidebar-scroll-item.${type} .sidebar-scroll-link`;
    }

    let projectsScrollItem = document.querySelector(scrollItemClassName("projects"));
    let skillsScrollItem = document.querySelector(scrollItemClassName("skills"));
    let aboutScrollItem = document.querySelector(scrollItemClassName("about"));
    let otherScrollItem = document.querySelector(scrollItemClassName("other"));
    let scrollItems = [
      {
        element: projectsScrollItem,
        value: 0,
      },
      {
        element: skillsScrollItem,
        value: Math.round(projects),
      },
      {
        element: aboutScrollItem,
        value: Math.round(projects + skills),
      },
      {
        element: otherScrollItem,
        value: Math.round(projects + skills + about),
      },
    ];

    let sidebarScroll = Number(document.querySelector(".sidebar-scroll").style.width.slice(0, -1));
    let toHighlight;

    // Calculating correct sections
    let i = 0;
    scrollItems.forEach((item) => {
      item.element.style.color = ENUMS.MAIN_GRAY_COLOR;
      if (sidebarScroll > item.value) {
        toHighlight = item.element;
      }

      if (++i === scrollItems.length) {
        if (toHighlight) {
          toHighlight.style.color = ENUMS.MAIN_ACTION_COLOR;
        }
      }
    });

    // Mobile optimization
    if (sidebarScroll >= 100 && window.innerWidth <= 899) {
      document.querySelector(".sidebar-bottom").style.opacity = 0;
    } else {
      document.querySelector(".sidebar-bottom").style.opacity = 1;
    }
  });

  return (
    <>
      <ul className="sidebar-scroll-list">
        <ScrollItem type="projects" width={projects} />
        <ScrollItem type="skills" width={skills} />
        <ScrollItem type="about" width={about} />
        <ScrollItem type="other" width={other} />
      </ul>
      <div className="sidebar-scroll-wrapper">
        <div
          className="sidebar-scroll"
          style={{ width: Math.round((scroll / height) * 100) + "%" }}></div>
      </div>
    </>
  );
}
