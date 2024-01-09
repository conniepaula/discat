import { FC } from "react";

import ChannelSidebar from "@/app/components/ChannelSidebar";
import * as Icons from "@/app/components/icons";
import { Category } from "@/app/types";
import Message from "@/components/Message";
import { data } from "@/data";

interface ProductPageProps {
  params: { id: number; cid: number };
}

const page: FC<ProductPageProps> = async (props) => {
  const { params } = props;
  const { id, cid } = params;

  const server = data[id - 1];
  const channel = server?.categories
    .map((c) => c.channels)
    .flat()
    .find((channel) => +channel.id === +cid);

  return (
    <>
      <div className="flex w-60 flex-col bg-gray-800">
        <button className="flex h-12 items-center px-4 text-[15px] font-medium text-white shadow-sm transition hover:bg-gray-550/[0.16]">
          <div className="relative mr-1 h-4 w-4">
            <Icons.Verified className="absolute h-4 w-4 text-gray-550" />
            <Icons.Check className="absolute h-4 w-4" />
          </div>
          {server.label}
          <Icons.Chevron className="ml-auto h-[18px] w-[18px] opacity-80" />
        </button>
        <div className="flex-1 space-y-[21px] overflow-y-scroll pt-3 font-medium text-gray-300">
          <ChannelSidebar />
        </div>
      </div>
      <div className="flex min-w-0 flex-1 flex-shrink flex-col bg-gray-700">
        <div className="flex h-12 items-center px-3 shadow-sm">
          <div className="flex items-center">
            <Icons.Hashtag className="mx-2 h-6 w-6 font-semibold text-gray-400" />
            <span className="font-title mr-2 whitespace-nowrap text-white">
              {channel?.label}
            </span>
          </div>
          {channel?.description && (
            <>
              <div className="mx-2 h-6 w-px bg-white/[.06]"></div>
              <div className="mx-2 truncate text-sm font-medium text-gray-200">
                {channel?.description}
              </div>
            </>
          )}
          <div className="overflow- ml-auto flex items-center">
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.HashtagWithSpeechBubble className="mx-2 h-6 w-6" />
            </button>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.Bell className="mx-2 h-6 w-6" />
            </button>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.Pin className="mx-2 h-6 w-6" />
            </button>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.People className="mx-2 h-6 w-6" />
            </button>
            <div className="relative mx-2">
              <input
                type="text"
                placeholder="Search"
                className="h-6 w-36 rounded border-none bg-gray-900 px-1.5 text-sm font-medium placeholder-gray-400"
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <Icons.Spyglass className="mr-1.5 h-4 w-4 text-gray-400" />
              </div>
            </div>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.Inbox className="mx-2 h-6 w-6" />
            </button>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.QuestionCircle className="mx-2 h-6 w-6" />
            </button>
          </div>
        </div>
        <div className=" flex-1 overflow-y-scroll">
          {channel?.messages.map((message, i) => {
            const renderUser =
              i === 0 || message.user !== channel?.messages[i - 1]?.user
                ? true
                : false;
            return (
              <Message key={message.id} renderUser={renderUser} {...message} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default page;
