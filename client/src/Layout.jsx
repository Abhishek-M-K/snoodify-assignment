import { Outlet } from "react-router-dom";
import Navigation from "./components/navigation";
import Header from "./components/header";

export default function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Outlet />
      <Navigation />
    </div>
  );
}
