import HeaderComp from "../header/header";
import ProtectedRoute from "./protectedRoute";

export default function DashboardLayout() {
  return (
    <>
      <HeaderComp />
      <div className="container">
      <ProtectedRoute />
      </div>
      {/* Footer */}
    </>
  )
}
