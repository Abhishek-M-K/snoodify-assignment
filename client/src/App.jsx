import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import AnonymousScreen from "./views/anonymousScreen";

function App() {
  return (
    <>
      {/* <div className="w-[390px] h-[844px]">
        <h3 className="gilroy-semibold">Snoodify</h3>
      </div> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/anonymous" element={<AnonymousScreen />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
