import type { NextPage } from "next";

export const metadata = {
  title: "About",
  description: "About this site",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const About: NextPage = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

export default About;
