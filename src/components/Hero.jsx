import { useEffect, useState } from "react";
import Avatar from "./Avatar";
import viewIcon from "../assets/view.png";
import Send from "../assets/send.png";
import Add from "../assets/add.png";
import TableComponent from "../components/Table";


function Hero() {
  const [showBalance, setShowBalance] = useState(true);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getData() {
      const url = "http://localhost:3000/users";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setUsers(json);
        console.log(json);
      } catch (error) {
        console.error(error.message);
      }
    }
    getData();
  }, []);

  return (
    <section className="w-full px-16 mt-12">
      <div className="flex items-center justify-center">
        <div className="mr-auto">
          <h1 className="text-black text-6xl font-bold">
            {`Good Morning, ${users[0]?.fullName}!`}
          </h1>
          <p className="text-black text-2xl mt-3">
            Check all your incoming and outgoing transactions here
          </p>
        </div>
        <Avatar />
      </div>
      <div className="flex mt-[4.5rem] gap-x-12">
        <div className="bg-[#19918F] p-12 rounded-2xl w-1/5">
          <p>Account No.</p>
          <p className="mt-3 font-bold">100899</p>
        </div>
        <div className="bg-white p-12 rounded-2xl w-full text-black">
          <p>Balance</p>
          <span className="flex items-center mt-3 gap-x-2">
            <p className="font-bold">
              {showBalance ? "Rp10.000.000,00" : "Rp ****"}
            </p>
            <img
              src={viewIcon}
              alt="view"
              className="w-4 h-4 object-cover cursor-pointer"
              onClick={() => setShowBalance((prev) => !prev)}
            />

            <div className="bg-[#19918F] p-2 rounded-lg w-8 h-8 flex items-center justify-center ml-auto">
              <img
                src={Add}
                alt="add"
                className="w-4 h-4"
              />
            </div>
            <div className="bg-[#19918F] p-2 rounded-lg w-8 h-8 flex items-center justify-center">
              <img
                src={Send}
                alt="send"
                className="w-4 h-4"
              />
            </div>
          </span>
        </div>
      </div>
      <TableComponent />
    </section>
  );
}

export default Hero;