import { useAuth, useUser } from "@/context/authContext.tsx";
import { Button } from "@/components/ui/button.tsx";

const Header = () => {
  const { user } = useUser();
  const { logout } = useAuth();
  const username = user?.email.split("@")[0];

  return (
    <header className={"flex justify-between items-center py-4 px-4 shadow-md"}>
      <p className={""}>{username}</p>
      <Button variant={"destructive"} onClick={logout}>
        Logout
      </Button>
    </header>
  );
};

export default Header;
