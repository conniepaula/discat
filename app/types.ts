export interface Channel {
  id: number;
  label: string;
  icon?:
    | "Speakerphone"
    | "Book"
    | "Hashtag"
    | "AddPerson"
    | "Arrow"
    | "Check"
    | "Verified"
    | "Chevron"
    | "Discord";
  unread?: boolean;
}

export interface Category {
  id: number;
  label: string;
  channels: Channel[];
}
