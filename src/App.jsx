import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/home/Home.jsx"));
const About = lazy(() => import("./pages/about/About.jsx"));
const Contact = lazy(() => import("./pages/contact/Contact.jsx"));
const Work = lazy(() => import("./pages/work/Work.jsx"));

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
      <Suspense
        fallback={
          <div
            className={
              "h-screen w-screen text-8xl text-stone-900 flex items-center justify-center bg-primary_dark_bg"
            }
          >
            Loading...
          </div>
        }
      >
        <RouterProvider router={router}></RouterProvider>
      </Suspense>
    </>
  );
}

export default App;
