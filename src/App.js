import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Blogs from "./blogs";

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
    </Routes >
  );
}