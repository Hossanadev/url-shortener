export interface ChildrenProps {
  children?: JSX.Element;
}

export interface SidebarProps {
  showAside?: (data: boolean) => void;
}

export interface CardProps<T> {
  icon: T;
  title: string;
  totalClicks: string;
  className?: string;
}

export interface TableProps {
  data: any[];
  columns: { key: string; header: string; link?: string }[];
  pageSize: number;
  className?: string;
}
