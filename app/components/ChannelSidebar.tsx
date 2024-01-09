"use client";

import React, { ButtonHTMLAttributes } from "react";
import NextLink from "next/link";
import { useParams } from "next/navigation";

import * as Icons from "@/components/icons";
import { Category, Channel as ChannelType } from "@/app/types";
import { data } from "@/data";

interface ContainerProps {
  children: React.ReactNode;
}

interface LinkProps {
  channel: ChannelType;
  href: string;
}

interface CategoryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isClosed: boolean;
}

function Channel() {
  const [closedCategories, setClosedCategories] = React.useState<Array<number>>(
    []
  );
  const params = useParams();
  const { id } = params;
  const categories = data["1"].categories as Array<Category>;

  const toggleCategory = (categoryId: number) => () => {
    setClosedCategories((closedCategories) =>
      closedCategories.includes(categoryId)
        ? closedCategories.filter((id) => id !== categoryId)
        : [...closedCategories, categoryId]
    );
  };

  return (
    <>
      {categories.map((category) => (
        <Channel.Container key={category.id}>
          {category.label && (
            <Channel.Category
              onClick={toggleCategory(category.id)}
              isClosed={closedCategories.includes(category.id)}
            >
              {category.label}
            </Channel.Category>
          )}
          <div className="mt-1 space-y-0.5 pt-px">
            {category.channels
              .filter((channel) => {
                const isCategoryOpen = !closedCategories.includes(category.id);
                return isCategoryOpen || channel.unread;
              })
              .map((channel) => (
                <Channel.Link
                  key={channel.id}
                  channel={channel}
                  href={`/servers/${id}/channels/${channel.id}`}
                />
              ))}
          </div>
        </Channel.Container>
      ))}
    </>
  );
}

function Container(props: ContainerProps) {
  const { children } = props;
  return <div>{children}</div>;
}

function Category(props: CategoryProps) {
  const { isClosed, children, ...rest } = props;
  return (
    <button
      className="flex w-full items-center px-1 text-xs uppercase tracking-wide hover:text-gray-100"
      {...rest}
    >
      <Icons.Arrow
        className={`${
          isClosed ? "-rotate-90" : ""
        } mr-0.5 h-3 w-3 transition duration-200`}
      />
      {children}
    </button>
  );
}

function Link(props: LinkProps) {
  const { channel, href } = props;
  const { label, icon, id, unread } = channel;
  const hasInvite = !!icon;
  const Icon = icon ? Icons[icon] : Icons.Hashtag;
  const params = useParams();
  const currentId = params.cid;
  const active = +currentId === +id;
  const state = active ? "active" : unread ? "inactiveUnread" : "inactiveRead";
  const classes = {
    active: "bg-gray-550/[0.32] text-white",
    inactiveUnread:
      "text-white hover:bg-gray-550/[0.16] active:bg-gray-550/[0.24]",
    inactiveRead:
      "text-gray-300  hover:bg-gray-550/[0.16] hover:text-gray-100 active:bg-gray-550/[0.24]",
  };

  return (
    <NextLink
      href={href}
      className={`${classes[state]} group relative mx-2 flex items-center rounded px-2 py-1`}
    >
      {state === "inactiveUnread" && (
        <div className="absolute left-0 -ml-2 h-2 w-1 rounded-r-full bg-white" />
      )}
      <Icon className="mr-1.5 h-5 w-5 text-gray-400" />
      {label}
      {hasInvite && (
        <Icons.AddPerson className="ml-auto h-4 w-4 text-gray-200 opacity-0 hover:text-gray-100 group-hover:opacity-100" />
      )}
    </NextLink>
  );
}

Channel.Container = Container;
Channel.Category = Category;
Channel.Link = Link;

export default Channel;
