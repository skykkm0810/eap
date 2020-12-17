export interface Robot {
  id: number;
  type: string;
  name: string;
  where?: string;
  status: string;
  color?: string;
  center?: string;
  inserted?: Date;
};

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
};
