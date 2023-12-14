import ChannelLink from "@/app/components/ChannelLink";
import {
  BookIcon,
  CheckIcon,
  ChevronIcon,
  SpeakerphoneIcon,
  VerifiedIcon,
} from "@/app/components/icons";
import Message from "@/components/Message";
import Link from "next/link";
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
        <button className="flex h-12 items-center px-4 text-[15px] font-medium text-white shadow-sm transition hover:bg-gray-550/[0.16]">
          <div className="relative mr-1 h-4 w-4">
            <VerifiedIcon className="absolute h-4 w-4 text-gray-550" />
            <CheckIcon className="absolute h-4 w-4" />
          </div>
          Server {id}
          <ChevronIcon className="ml-auto h-[18px] w-[18px] opacity-80" />
        </button>
        <div className=" mt-4 flex-1 overflow-y-scroll pt-px font-medium text-gray-300">
          <div className="space-y-0.5">
          <ChannelLink hasInvite name="welcome" href="#" icon={BookIcon}/>
          <ChannelLink hasInvite name="welcome" href="#" icon={SpeakerphoneIcon}/>
          </div>
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
