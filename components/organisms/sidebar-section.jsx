import SidebarContent from "../molecules/sidebar-content";
import SidebarBottom from "../molecules/sidebar-bottom";

export default function SidebarSection() {
  return (
    <aside id="sidebar">
      <SidebarContent />
      <SidebarBottom />
    </aside>
  );
}
