import type { NextPage } from "next";
import LoginButton from "@/components/LoginButton";

const Home: NextPage = () => {
  return (
    <div className="flex w-full items-center justify-between p-3 shadow-md">
      <h1 className="text-2xl font-bold">Online Market Place</h1>
      <LoginButton />
    </div>
  );
};

export default Home;
