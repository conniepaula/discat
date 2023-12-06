"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children?: React.ReactNode;
}

function NavLink(props: NavLinkProps) {
  const { children, href } = props;
  const pathname = usePathname();

  return (
    <Link href={href} className="group relative block">
      <div className="absolute -left-3 flex h-full items-center">
        <div
          className={`${
            pathname === href
              ? "h-10"
              : "h-5 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
          } w-1 origin-left rounded-r bg-white transition-all duration-200`}
        ></div>
      </div>
      <div className="group-active:translate-y-px">
        <div
          className={`${
            pathname === href
              ? "bg-brand rounded-2xl text-white"
              : "group-hover:bg-brand rounded-3xl bg-gray-700 text-gray-100 group-hover:rounded-2xl group-hover:text-white"
          } relative flex h-12 w-12 items-center justify-center overflow-hidden transition-all duration-200`}
        >
          {children}
        </div>
      </div>
    </Link>
  );
}

export default NavLink;
