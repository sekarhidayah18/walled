import { useNavigate } from "react-router";
import ActionButton from "../components/ActionButton";

function NotFound() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('login');
    localStorage.removeItem('loginForm');
    navigate('/');
  }

  return (
    <section className="flex flex-col gap-y-4 justify-center items-center w-screen h-screen">
      <p className="text-xl font-bold text-black">Are you lost?</p>
      <ActionButton onClick={logout}>Go Back</ActionButton>
    </section>
  );
}

export default NotFound;
