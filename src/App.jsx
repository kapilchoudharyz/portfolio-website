import Home from "./pages/home/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Work from "./pages/work/Work.jsx";
import Navbar from "./components/navbar/Navbar.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "work",
    element: <Work />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
