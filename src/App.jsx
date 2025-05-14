import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/Home/HomePage";
import Layout from "./Components/layout/Layout";
import BlogPage from "./Components/Bloge/BlogPage";
import AuthorPage from "./Components/Author/AuthorPage";

function App() {
 
  return (
    <>
   <Layout>
   <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/blogs/:slug" element={<BlogPage />} />
    <Route path="/authors/:slug" element={<AuthorPage />} />
   </Routes>
   </Layout>
    </>
  );
}

export default App;
