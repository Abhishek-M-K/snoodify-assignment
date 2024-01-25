import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Navigation from "./components/navigation";

export default function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Outlet />
      <Navigation />
    </div>
  );
}
