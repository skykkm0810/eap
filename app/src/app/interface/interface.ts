import { ThemePalette } from "@angular/material/core"

export interface Filter {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subFilters?: Filter[];
}

// Device
export interface Device {
  id: number;
  type: string;
  name: string;
  location?: string;
  status: string;
  color?: string;
  center?: string;
  inserted?: string;
};

export const DEVICES: Device[] = [
  { id: 1, name: 'RB-01', type: '로봇', center: '시설A', inserted: '2020.10.15', location: '활동실', status: '정상', color: 'blue'},
  { id: 2, name: 'ST-04', type: '센서', center: '시설B', inserted: '2020.11.25', location: '주방', status: '정상', color: 'blue'},
  { id: 3, name: 'ST-01', type: '센서', center: '시설C', inserted: '2020.11.16', location: '활동실', status: '정상', color: 'blue'},
  { id: 4, name: 'RB-01', type: '로봇', center: '시설B', inserted: '2020.10.05', location: '휴게실', status: '이상', color: 'red'},
  { id: 5, name: 'ST-02', type: '센서', center: '시설C', inserted: '2020.10.15', location: '출입구', status: '수리', color: 'orange'},
]

export const deviceFilter: Filter = {
  name: '전체',
  completed: false,
  color: 'primary',
  subFilters: [
    {name: '정상', completed: false, color: 'primary'},
    {name: '이상', completed: false, color: 'primary'},
    {name: '수리 중', completed: false, color: 'primary'},
    {name: '로봇', completed: false, color: 'primary'},
    {name: '센서류', completed: false, color: 'primary'},
    {name: '스마트 스피커', completed: false, color: 'primary'},
  ]
}

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
  colors: string;
};