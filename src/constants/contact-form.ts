export interface ContactForm {
  name: string;
  mobileNo: string;
  email?: string;
  date: {
    startDate: string;
    endDate: string;
  };
  eventType: string;
  message?: string;
}
