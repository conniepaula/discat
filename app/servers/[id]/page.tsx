import { CheckIcon, ChevronIcon, VerifiedIcon } from "@/app/components/icons";
import Message from "@/components/Message";
import { FC } from "react";

interface ProductPageProps {
  params: { id: string };
}

const page: FC<ProductPageProps> = async (props) => {
  const { params } = props;
  const { id } = params;

  return (
    <>
      <div className="flex w-60 flex-col bg-gray-800">
        <button className="hover:bg-gray-550/[0.16] flex h-12 items-center px-4 text-[15px] font-medium text-white shadow-sm transition">
          <div className="relative mr-1 h-4 w-4">
            <VerifiedIcon className="text-gray-550 absolute h-4 w-4" />
            <CheckIcon className="absolute h-4 w-4" />
          </div>
          Server {id}
          <ChevronIcon className="ml-auto h-[18px] w-[18px] opacity-80" />
        </button>
        <div className=" flex-1 space-y-2 overflow-y-scroll p-3 font-medium text-gray-300">
          <p className="text-white">Channel (unread)</p>
          <p className="text-white">Channel (unread)</p>
          {[...Array(40)].map((_, i) => (
            <p key={i} className="">
              Channel {i}
            </p>
          ))}
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
