import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { ErrorPage } from "../pages/error/ErrorPage";

export const router = createBrowserRouter([
  {
    path: '/', 
    element: <Layout />,
    errorElement: <ErrorPage />
  }
])