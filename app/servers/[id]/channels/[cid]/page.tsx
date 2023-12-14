import { FC } from "react";

import ChannelSidebar from "@/app/components/ChannelSidebar";
import * as Icons from "@/app/components/icons";
import { Category } from "@/app/types";
import Message from "@/components/Message";
import data from "@/data.json";

interface ProductPageProps {
  params: { id: string };
}

const page: FC<ProductPageProps> = async (props) => {
  const { params } = props;
  const { id } = params;

  const categories = data["1"].categories as Array<Category>;

  return (
    <>
      <div className="flex w-60 flex-col bg-gray-800">
        <button className="flex h-12 items-center px-4 text-[15px] font-medium text-white shadow-sm transition hover:bg-gray-550/[0.16]">
          <div className="relative mr-1 h-4 w-4">
            <Icons.Verified className="absolute h-4 w-4 text-gray-550" />
            <Icons.Check className="absolute h-4 w-4" />
          </div>
          Server {id}
          <Icons.Chevron className="ml-auto h-[18px] w-[18px] opacity-80" />
        </button>
        <div className="flex-1 space-y-[21px] overflow-y-scroll pt-3 font-medium text-gray-300">
          <ChannelSidebar />
        </div>
      </div>
      <div className="flex flex-1 flex-col bg-gray-700">
        <div className="flex h-12 items-center px-3 shadow-sm">general</div>
        <div className=" flex-1 space-y-4 overflow-y-scroll p-3">
          {[...Array(40)].map((_, i) => (
            <Message key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
