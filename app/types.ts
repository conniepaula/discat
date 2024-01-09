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
  | "Spyglass";

export interface Message {
  id: string;
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
  id: number;
  label: string;
  img: string;
  categories: Category[];

}
