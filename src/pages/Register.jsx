import { Link } from "react-router";
import loginBg from "../assets/cover.png";
import logo from "../assets/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router";
import ActionButton from "../components/ActionButton";

function Daftar() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    namaLengkap: "",
    noHp: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <section className="flex w-screen h-screen bg-white">
      <div className="flex flex-col w-1/2 items-center justify-center">
        <div>
          <img className="w-[290px] mx-auto" src={logo} alt="logo" />
          <form className="flex flex-col mt-24 gap-y-5">
            <input
              className="bg-[#FAFBFD] pl-7 py-4 min-w-[400px] rounded-[10px] text-black"
              name="Nama"
              type="Nama"
              placeholder="Nama"
              onChange={(e) => handleChange(e)}
            />
            <input
              className="bg-[#FAFBFD] pl-7 py-4 min-w-[400px] rounded-[10px] text-black"
              name="Email"
              type="Email"
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
            <input
              className="bg-[#FAFBFD] pl-7 py-4 min-w-[400px] rounded-[10px] text-black"
              name="No Hp"
              type="No Hp"
              placeholder="No Hp"
              onChange={(e) => handleChange(e)}
            />
            <ActionButton
              disabled={!loginForm.email && !loginForm.namaLengkap && !loginForm.password && !loginForm.noHp}
              onClick={handleSubmit}
            >
              Register
            </ActionButton>
          </form>
          <div className="w-full mt-4 text-black">
            Sudah punya akun?{" "}

            <Link to="/login" className="text-[#19918F] text-left">
              Login di sini
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

export default Daftar;