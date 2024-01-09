import Image from "next/image";

interface Message {
  user: string;
  avatarUrl: string;
  date: string;
  text: string;
  renderUser: boolean;
}

function Message(props: Message) {
  const { user, avatarUrl, date, renderUser } = props;
  return renderUser ? (
    <Message.WithUser {...props} />
  ) : (
    <Message.WithoutUser {...props} />
  );
}

function WithUser(props: Omit<Message, "renderUser">) {
  const { user, avatarUrl, date, text } = props;
  return (
    <div>
      <div className="mt-[17px] flex py-0.5 pl-4 pr-16 leading-[22px] hover:bg-gray-950/[0.07]">
        <div className="relative mr-4 h-10 w-10 shrink-0 overflow-hidden rounded-full">
          <Image
            className="object-cover"
            src={avatarUrl}
            fill={true}
            alt={`User ${user}'s profile image`}
          />
        </div>
        <div>
          <p className="flex items-baseline">
            <span className="mr-2 font-medium text-green-400">{user}</span>
            <span className="text-xs font-medium text-gray-400">{date}</span>
          </p>
          <p className="text-gray-100">{text}</p>
        </div>
      </div>
    </div>
  );
}

function WithoutUser(props: Pick<Message, "text">) {
  const { text } = props;
  return (
    <div className="py-0.5 pl-4 pr-16 leading-[22px] hover:bg-gray-950/[0.07]">
      <p className="pl-14 text-gray-100">{text}</p>
    </div>
  );
}

Message.WithoutUser = WithoutUser;
Message.WithUser = WithUser;

export default Message;
