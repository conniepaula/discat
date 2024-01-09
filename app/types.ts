export type Icon =
  | "Speakerphone"
  | "Book"
  | "Hashtag"
  | "AddPerson"
  | "Arrow"
  | "Check"
  | "Verified"
  | "Chevron"
  | "Discord"
  | "HashtagWithSpeechBubble"
  | "Bell"
  | "Pin"
  | "People"
  | "Inbox"
  | "QuestionCircle"
  | "Hourglass";

export interface Message {
  user: string;
  avatarUrl: string;
  date: string;
  text: string;
}

export interface Channel {
  id: number;
  label: string;
  description?: string;
  icon?: Icon;
  unread?: boolean;
  messages: Message[];
}

export interface Category {
  id: number;
  label: string;
  channels: Channel[];
}

export interface Server {
  label: string;
  categories: Category[];
}

export interface Data {
  [key: number]: Server;
}
