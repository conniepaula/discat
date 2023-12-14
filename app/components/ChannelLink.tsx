import Link from "next/link";
import { AddPersonIcon, HashtagIcon } from "./icons";
import React from "react";

interface ChannelLinkProps {
  hasInvite?: boolean;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  name: string;
  href: string;
}

function ChannelLink(props: ChannelLinkProps) {
  const { hasInvite, icon: Icon = HashtagIcon, name, href } = props;
  return (
    <Link
      href={href}
      className="group mx-2 flex items-center rounded px-2 py-1  text-gray-300 hover:bg-gray-550/[0.16] hover:text-gray-100"
    >
      <Icon className="mr-1.5 h-5 w-5" />
      {name}
      {hasInvite && (
        <AddPersonIcon className="ml-auto h-4 w-4 text-gray-200 opacity-0 hover:text-gray-100 group-hover:opacity-100" />
      )}
    </Link>
  );
}

export default ChannelLink;
