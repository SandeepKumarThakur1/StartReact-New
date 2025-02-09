import { createRoot } from "react-dom/client";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router";
import "./index.css";
import Layout from "./Layout";
import { About, Contact, Github, Home, User } from "./components";
import { GithubuserDetails } from "./components/Github/Github";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: "about", element: <About /> },
//       { path: "contact", element: <Contact /> },
//       { path: "user/:userId", element: <User /> },
//       { path: "github", element: <Github />},
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="user/:userId" element={<User/>}/>
      <Route path="github" element={<Github/>} loader={GithubuserDetails}/>
    </Route>
    
  )
)

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
