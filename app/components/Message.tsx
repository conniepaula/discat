import Image from "next/image";

function Message() {
  return (
    <div className="flex-grow">
      <div className="flex px-4 py-1 hover:bg-gray-800/30">
        <div className="relative mr-4 h-10 w-10 shrink-0 overflow-hidden rounded-full">
          <Image
            className="object-cover"
            src="/cat.avif"
            fill={true}
            alt="Next.js Logo"
          />
        </div>
        <div>
          <p className="flex items-baseline">
            <span className="mr-2 text-sm font-medium text-green-500">
              conniebtw
            </span>
            <span className="text-xs text-gray-500">01/12/2023</span>
          </p>
          <p className="text-gray-300">
            Reprehenderit ullamco labore in velit quis mollit. Eiusmod elit quis
            laboris in consequat laboris ex aliquip fugiat deserunt nulla est
            commodo ea. Dolore et eiusmod laborum aliqua commodo enim. Anim quis
            est ut aute ea aliquip tempor et minim.
          </p>
        </div>
      </div>
      <div className="mt-1 flex px-4 py-1 hover:bg-gray-800/30">
        <p className="pl-14 text-gray-300">
          Culpa quis aliquip dolore aliqua et magna eu duis consequat tempor
          voluptate aliquip consectetur. Excepteur pariatur excepteur eu veniam
          nostrud.
        </p>
      </div>
      <div className="mt-1 flex px-4 py-1 hover:bg-gray-800/30">
        <p className="pl-14 text-gray-300">
          Dolore eu ea Lorem voluptate aute et cillum.
        </p>
      </div>
    </div>
  );
}

export default Message;
