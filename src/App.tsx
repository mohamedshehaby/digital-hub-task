import { AuthProvider } from "@/context/authContext.tsx";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Login from "@/pages/Login.tsx";
import AppLayout from "@/components/ui/AppLayout.tsx";
import ProtectedRoute from "@/components/ui/ProtectedRoute.tsx";
import Tasks from "@/pages/Tasks.tsx";

const router = createBrowserRouter([
  {
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="tasks" />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
    ],
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
