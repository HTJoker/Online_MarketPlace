import Form from "@/components/Form";
import type { NextPage } from "next";

export const metadata = {
  title: "Sell",
  description: "Sell your stuff",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const Sell: NextPage = () => {
  return (
    <div>
      <h1 className="p-2 text-2xl font-semibold">List An Item To Sell</h1>
      <div className="flex h-screen items-start justify-center">
        <Form />
      </div>
    </div>
  );
};

export default Sell;
