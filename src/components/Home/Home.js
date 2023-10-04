import Hero from "../Hero/Hero";
import List from "../List/List";
import Lists from "../Lists/Lists";
import { Route, Routes } from "react-router-dom";

function Home() {
  return (
    <>
      <Hero />
      <Routes>
        <Route path="/" element={<Lists />}></Route>
        <Route path="/lists/:listId" element={<List />}></Route>
      </Routes>
    </>
  );
}

export default Home;
