import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import RootLayout from "./routes/RootLayout";
import ErrorPage from "./routes/ErrorPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Dashboard /> },
    ],
    errorElement: <ErrorPage />
  }
]);

function App() {

  return <RouterProvider router={router} />
}

export default App
