export interface Mail {
  tab: string;
  id: string;
  from: {
    name: string;
    id: string;
  };
  subject: string;
  body: string;
  isRead: boolean;
  sentAt: number;
  to: string;
}
