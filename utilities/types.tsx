export interface ChildrenProps {
  children?: JSX.Element;
}

export interface SidebarProps {
  showAside?: (data: boolean) => void;
}

export interface CardProps<T> {
  icon: T;
  title: string;
  clicks: string | number;
  className?: string;
}

export interface UrlProps {
  id: number;
  long_url: string;
  short_url: string;
  date_created: string;
  clicks: string;
}

export interface TableProps {
  data: any[];
  columns: { key: string; header: string; link?: string }[];
  pageSize: number;
  className?: string;
}

export interface ModalProps {
  modalMessage: string;
  modalOpen: boolean;
  closeModal: () => void;
  actionBtn: () => void;
  actionText: string;
}

export interface GuestProps {
  setIsAuthenticated: (value: boolean) => void;
}

export type DashboardStatsType = {
  total_clicked: number;
  total_unclicked: number;
  total_deleted: number;
  total_shortened: number;
}
