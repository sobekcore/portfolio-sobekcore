import SidebarTitle from "@/components/atoms/SidebarTitle";
import SidebarDesc from "@/components/atoms/SidebarDesc";
import ContactIcons from "@/components/atoms/ContactIcons";

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
