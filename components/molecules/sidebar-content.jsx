import SidebarTitle from "../atoms/sidebar-title";
import SidebarDesc from "../atoms/sidebar-desc";
import ContactIcons from "../atoms/contact-icons";

export default function SidebarContent() {
  return (
    <section id="sidebar-content">
      <SidebarTitle />
      <SidebarDesc />
      <div id="sidebar-icons">
        <ContactIcons />
      </div>
    </section>
  );
}
