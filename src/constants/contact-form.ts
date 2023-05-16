export interface ContactForm {
  name: string;
  mobileNo: string;
  email?: string;
  date: {
    startDate: string;
    endDate: string;
  };
  subject?: string;
  eventType: string;
  message?: string;
}
