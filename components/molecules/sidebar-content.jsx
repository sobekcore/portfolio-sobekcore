import SidebarTitle from "../atoms/sidebar-title";
import SidebarDesc from "../atoms/sidebar-desc";
import ContactIcons from "../atoms/contact-icons";

export default function SidebarContent() {
  return (
    <section className="sidebar-content">
      <SidebarTitle />
      <SidebarDesc />
      <div className="sidebar-icons">
        <ContactIcons />
      </div>
    </section>
  );
}
