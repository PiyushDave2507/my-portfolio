export type FormField = {
  type: 'text' | 'textarea';
  placeholder: string;
  required: boolean;
  rows?: number; 
};

export const formFields: FormField[] = [
  { type: 'text', placeholder: 'Name', required: true },
  { type: 'text', placeholder: 'Mobile Number', required: true },
  { type: 'text', placeholder: 'Email', required: true },
  { type: 'textarea', placeholder: 'Message', required: true, rows: 5 }
];

export const contactDetails = [
  {
    label: "Phone",
    value: "+917043463338",
    icon: "📞",
  },
  {
    label: "Email",
    value: "piyushdave2023@gmail.com",
    icon: "✉️",
  },
  {
    label: "GitHub",
    value: "https://github.com/PiyushDave2507",
    icon: "💻",
  },
];
