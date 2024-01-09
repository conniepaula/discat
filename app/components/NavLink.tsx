"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

interface NavLinkProps {
  serverId?: number;
  initialChannelId?: number;
  children?: React.ReactNode;
}

function NavLink(props: NavLinkProps) {
  const { children, initialChannelId, serverId = 0 } = props;
  const params = useParams();
  const currentServerId = params.id as string;
  const href = !!serverId ? `/servers/${serverId}/channels/${initialChannelId}` : "/";

  const active = !!currentServerId
    ? +currentServerId === +serverId
    : href === "/";

  return (
    <Link href={href} className="group relative block">
      <div className="absolute -left-3 flex h-full items-center">
        <div
          className={`${
            active
              ? "h-10"
              : "h-5 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
          } w-1 origin-left rounded-r bg-white transition-all duration-200`}
        ></div>
      </div>
      <div className="group-active:translate-y-px">
        <div
          className={`${
            active
              ? "rounded-2xl bg-brand text-white"
              : "rounded-3xl bg-gray-700 text-gray-100 group-hover:rounded-2xl group-hover:bg-brand group-hover:text-white"
          } relative flex h-12 w-12 items-center justify-center overflow-hidden transition-all duration-200`}
        >
          {children}
        </div>
      </div>
    </Link>
  );
}

export default NavLink;
