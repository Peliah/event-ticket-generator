export type FormData = {
  ticketType: string;
  ticketQuantity: number;
  fullName: string;
  email: string;
  avatar: string;
  specialRequest?: string;
};

export type StepProps = {
  nextStep?: () => void;
  prevStep?: () => void;
  cancel?: ()=> void;
  errors?: Record<string, string>;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};