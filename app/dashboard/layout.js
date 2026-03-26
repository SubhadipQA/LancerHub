import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      {/* Sidebar here */}
      <aside>
        <LeftSidebar />
      </aside>
      {/* Page content here */}
      <main className="flex-1 p-4 newdashboard-part">
        {children}
      </main>
    </div>
  )
}