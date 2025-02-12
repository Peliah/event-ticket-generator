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
  formData: FormData;
  setFormData: (data: FormData) => void;
};