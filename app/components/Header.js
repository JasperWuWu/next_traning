"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const paths = [
  {
    name: "關於",
    href: "/about",
    id: 1,
  },
  {
    name: "發送",
    href: "/posts",
    id: 2,
  },
  {
    name: "錯誤",
    href: "/wrong",
    id: 3,
  },
  {
    name: "儀錶板",
    href: "/dashboard",
    id: 3,
  },
];

const Header = () => {
  let pathname = usePathname();
  return (
    <div className="flex gap-2">
      {paths.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.id}
            className={isActive ? "text-yellow-400" : ""}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Header;
