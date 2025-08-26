export interface ContactInfoType {
  id: number;
  title: string;
  value: string;
  icon: "phone" | "email" | "location";
  color: string;
}

const contactInfo: ContactInfoType[] = [
  {
    id: 1,
    title: "Phone",
    value: "+1 234 567 890",
    icon: "phone",
    color: "text-red-500",   // ফোন আইকন লাল
  },
  {
    id: 2,
    title: "Email",
    value: "contact@example.com",
    icon: "email",
    color: "text-green-500", // ইমেইল আইকন সবুজ
  },
  {
    id: 3,
    title: "Location",
    value: "123 Street, New York, USA",
    icon: "location",
    color: "text-blue-500",  // লোকেশন আইকন নীল
  },
];

export default contactInfo;
