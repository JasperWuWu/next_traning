import { Noto_Serif_TC } from "next/font/google";

const noto_serif = Noto_Serif_TC({ weight: ["400"], subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function PostLayout({ children }) {
  return (
    <div className={noto_serif.className}>
      <p>POST Layout</p>
      {children}
    </div>
  );
}
