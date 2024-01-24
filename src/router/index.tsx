import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { ErrorPage } from "../pages/error/ErrorPage";
import { Contact } from "../pages/contect/Contact";

export const router = createBrowserRouter([
  {
    path: '/', 
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />
      }
    ]
  },
  
])