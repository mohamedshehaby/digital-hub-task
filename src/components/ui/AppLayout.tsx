import Header from "@/components/ui/Header.tsx";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[auto-1fr]">
      <Header />
      <main className="p-4 w-full max-w-screen-xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
