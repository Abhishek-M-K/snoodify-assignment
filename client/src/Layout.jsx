import { Outlet } from "react-router-dom";
import Navigation from "./components/navigation";
import Header from "./components/header";

export default function Layout() {
  return (
    <div className="flex flex-grow max-w-[390px] max-h-[844px]">
      {/* <Header /> */}
      <Outlet />
      <Navigation />
    </div>
  );
}
