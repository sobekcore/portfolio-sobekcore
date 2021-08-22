import ScrollItem from "../atoms/scroll-item";
import { useEffect, useState } from "react";

export default function SidebarScroll() {
  const [scroll, setScroll] = useState();
  const [height, setHeight] = useState();

  const [about, setAbout] = useState();
  const [projects, setProjects] = useState();
  const [skills, setSkills] = useState();
  const [other, setOther] = useState();

  useEffect(() => {
    let content = document.querySelector("#content-scrolable");
    setScroll(window.scrollY - content.offsetTop + window.innerHeight / 1.5);
    document.addEventListener("scroll", () => {
      setScroll(window.scrollY - content.offsetTop + window.innerHeight / 1.5);
    });
  }, []);

  useEffect(() => {
    let content = document.querySelector("#content-scrolable");
    setHeight(content.scrollHeight);

    let aboutItem = document.querySelector("#about");
    let projectsItem = document.querySelector("#projects");
    let skillsItem = document.querySelector("#skills");
    let otherItem = document.querySelector("#other");

    setAbout((aboutItem.offsetHeight / height) * 100);
    setProjects((projectsItem.offsetHeight / height) * 100);
    setSkills((skillsItem.offsetHeight / height) * 100);
    setOther((otherItem.offsetHeight / height) * 100);

    function scrollItemClassName(type) {
      return `.sidebar-scroll-item.${type} .sidebar-scroll-link`;
    }

    let aboutScrollItem = document.querySelector(scrollItemClassName("about"));
    let projectsScrollItem = document.querySelector(scrollItemClassName("projects"));
    let skillsScrollItem = document.querySelector(scrollItemClassName("skills"));
    let otherScrollItem = document.querySelector(scrollItemClassName("other"));
    let scrollItems = [
      {
        element: aboutScrollItem,
        value: 0,
      },
      {
        element: projectsScrollItem,
        value: Math.round(about),
      },
      {
        element: skillsScrollItem,
        value: Math.round(about + projects),
      },
      {
        element: otherScrollItem,
        value: Math.round(about + projects + skills),
      },
    ];

    let sidebarScroll = Number(document.querySelector(".sidebar-scroll").style.width.slice(0, -1));
    let toHighlight;

    let i = 0;
    scrollItems.forEach((item) => {
      item.element.style.color = "#263238";
      if (sidebarScroll > item.value) {
        toHighlight = item.element;
      }

      if (++i === scrollItems.length) {
        if (toHighlight) {
          toHighlight.style.color = "#8AB4F8";
        }
      }
    });
  });

  return (
    <>
      <ul className="sidebar-scroll-list">
        <ScrollItem type="about" width={about} />
        <ScrollItem type="projects" width={projects} />
        <ScrollItem type="skills" width={skills} />
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
