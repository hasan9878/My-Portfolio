export interface ContactField {
  id: number;
  name: string;
  type: string;
  placeholder: string;
}

const contactForm: ContactField[] = [
  {
    id: 1,
    name: "name",
    type: "text",
    placeholder: "Name",
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "Email",
  },
  {
    id: 3,
    name: "subject",
    type: "text",
    placeholder: "Subject",
  },
];

export default contactForm;
