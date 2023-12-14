"use client";

import Link from "next/link";
import * as Icons from "@/components/icons";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { Channel } from "../types";

interface ChannelLinkProps {
  channel: Channel;
  href: string;
}

function ChannelLink(props: ChannelLinkProps) {
  const { channel, href } = props;
  const { label, icon, id } = channel;
  const hasInvite = !!icon;
  const Icon = icon ? Icons[icon] : Icons.Hashtag;
  const params = useParams();
  const currentId = params.cid;
  const active = +currentId === +id;

  return (
    <Link
      href={href}
      className={`${
        active
          ? "bg-gray-550/[0.32] text-white"
          : "text-gray-300  hover:bg-gray-550/[0.16] hover:text-gray-100"
      } group mx-2 flex items-center rounded px-2 py-1  `}
    >
      <Icon className="mr-1.5 h-5 w-5" />
      {label}
      {hasInvite && (
        <Icons.AddPerson className="ml-auto h-4 w-4 text-gray-200 opacity-0 hover:text-gray-100 group-hover:opacity-100" />
      )}
    </Link>
  );
}

export default ChannelLink;
