
import { Link } from "react-router";
import loginBg from "../assets/cover.png";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import ActionButton from "../components/ActionButton.jsx";
import { useNavigate } from "react-router";

function Login() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const storedLogin = localStorage.getItem("login");
    console.log(storedLogin);
    if (storedLogin) {
      navigate("/dashboard"); // Redirect to dashboard if user is logged in
    }
  }, [navigate]);

  const handleChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Fetch data pengguna dari server
      const response = await fetch("http://localhost:3000/users");
      const users = await response.json();
  
      // Cari pengguna berdasarkan email dan password
      const user = users.find(
        ({ email, password }) =>
          email === loginForm.email && password === loginForm.password
      );
  
      if (user) {
        // Jika pengguna ditemukan, simpan data login di localStorage
        localStorage.setItem("loginForm", JSON.stringify(user.email));
        navigate("/dashboard");
      } else {
        // Jika tidak ditemukan, tampilkan pesan error
        alert("Email atau password salah!");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      alert("Terjadi kesalahan saat mencoba login. Silakan coba lagi.");
    }
  };

  return (
    <section className="flex w-screen h-screen bg-white">
      <div className="flex flex-col w-1/2 items-center justify-center">
        <div>
          <img className="w-[290px] mx-auto" src={logo} alt="logo" />
          <form className="flex flex-col mt-24 gap-y-5">
            <input
              className="bg-[#FAFBFD] pl-7 py-4 min-w-[400px] rounded-[10px] text-black"
              name="email"
              type="email"
              placeholder="Email"
              onChange={(e) => handleChange(e)}
            />
            <input
              className="bg-[#FAFBFD] pl-7 py-4 min-w-[400px] rounded-[10px] text-black"
              name="password"
              type="password"
              placeholder="Password"
              onChange={(e) => handleChange(e)}
            />
            <ActionButton
              disabled={!loginForm.email || !loginForm.password}
              onClick={handleSubmit}
            >
              Login
            </ActionButton>
          </form>
          <div className="w-full mt-4 text-black">
            Belum punya akun?{" "}
            <Link to="/register" className="text-[#19918F] text-left">
              Daftar di sini
            </Link>
          </div>
        </div>
      </div>
      <img
        src={loginBg}
        alt="login background"
        className="w-1/2 object-cover"
      />
    </section>
  );
}

export default Login;
