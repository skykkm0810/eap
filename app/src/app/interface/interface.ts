import { ThemePalette } from "@angular/material/core"

export const TAGS : Record<string, string> = {
  DASHBOARD: '',
  DEVICELIST: 'devistList',
  SENIORLIST: 'seniorList',
  SENIORPRESENTLIST: 'seniorPresentList',
  ACTIVITYLIST: 'activityList',
  TASKLIST: 'taskList',
  CCTVLIST: 'cctvList',
  NOTICELIST: 'noticeList',
  VIDEOS: 'videos',
  DIETARYS: 'dietary',
  VDETAIL: 'vdetail',
  NOTICEADD: 'noticeAdd',
  SENIORDETAIL: 'seniorDetail/:id',
  SCHEDULE: 'schedule',
  PHOTOBOOK: 'photobook',
  TASKADD: 'taskAdd',
  CCTVDETAIL: 'cctvDetail',
  READY: 'ready',
  TEACHER: 'teacher',
  TECHERDETAIL: 'techerDetail',
  LECTURELIST: 'lectureList',
  LECTUREENROLL : 'lectureEnroll',
  LECTUREDETAIL : 'lectureDetail',
  LECTURECALENDAR : 'lectureCalendar',
  COMPANYLIST: 'companyList',
  COMPANYDETAIL: 'companyDetail',
  COMPANYENROLL: 'companyEnroll',
  CUSTOMERLIST: 'customerList',
  CUSTOMERDETAIL: 'customerDetail',
  SERVICELIST:'serviceList',
  SERVICEDETAIL: 'serviceDetail'
} 

export interface AsideItem {
  path: string;
  name: string;
  icon?: string;
  subItem?: AsideItem[];
}

export const ASIDELISTS: AsideItem[] = [
  {
    path: TAGS.DASHBOARD,
    name: '대시보드',
    icon:"dashboard",
  },
  { 
    path: '', 
    name: '강사 관리',
    icon:"perm_identity",
    subItem: [
      {
        path: TAGS.READY,
        name: '승인대기목록',
        icon:"person_add",
      },
      {
        path: TAGS.TEACHER,
        name: '강사목록',
        icon:"people",
      },
    ] 
  },
  { 
    path: '',
    name: '강의 관리' ,
    icon: "laptop_windows",
    subItem:[
      { 
        path: TAGS.LECTURELIST,
        name: '강의 목록' ,
        icon: "list",
      },
      { 
        path: TAGS.LECTUREENROLL, 
        name: '강의 등록' ,
        icon: "library_add_check",
        
      },
      { 
        path: TAGS.LECTURECALENDAR,
        name: '강의 일정표',
        icon: 'calendar_today',

      },
    ]
  },  
  { 
    path: '', 
    name: '고객사 관리' ,
    icon: "domain",
    subItem: [
      {
        path: TAGS.COMPANYLIST,
        name: '고객사 목록',
        icon: 'list',
      },
      
      { 
        path: TAGS.COMPANYENROLL,
        name: '고객사 등록',
        icon: 'add_business',
      },
    ]
  },
  { 
    path: TAGS.CUSTOMERLIST, 
    name: '수강회원 관리' ,
    icon: 'person_search'
  },
  { 
    path: '',
    name: '고객 센터',
    icon:"support_agent",
    subItem: [
      {
        path: TAGS.SERVICELIST,
        name: '시스템 문의',
        icon:"cast",
      },
    ]
  },
]

export interface Filter {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subFilters?: Filter[];
}
// user
export interface UserData {
  id: number;
  name: string;
  progress: string;
  img?:string;
  color?: string;
};
export const USERS: UserData[] = [
  {id:1,name:"깽미", progress:"관리자",color: "skyblue",img:"2.png" },
]

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

export const deviceHeader: string[] = ['id', 'type', 'name', 'center', 'location', 'inserted', 'status'];

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

export const DEVICES: Device[] = [
  { id: 1, name: 'RB-01', type: '로봇', center: '시설A', inserted: '2020.10.15', location: '활동실', status: '정상', color: 'blue'},
  { id: 2, name: 'ST-04', type: '센서', center: '시설B', inserted: '2020.11.25', location: '주방', status: '정상', color: 'blue'},
  { id: 3, name: 'ST-01', type: '센서', center: '시설C', inserted: '2020.11.16', location: '활동실', status: '정상', color: 'blue'},
  { id: 4, name: 'RB-01', type: '로봇', center: '시설B', inserted: '2020.10.05', location: '휴게실', status: '이상', color: 'red'},
  { id: 5, name: 'ST-02', type: '센서', center: '시설C', inserted: '2020.10.15', location: '출입구', status: '수리', color: 'orange'},
]
// log
export interface log {
  id:number;
  name:string;
  type:string;
  center:string;
  time:string;
  desc:string;
  who?:string;
}
export const LOG : log[] =[
  { id: 1, name: 'RB-01', type: '로봇', center: '시설A', time: '12/22 14:05', desc: '플랫폼에 데이터 전송', },
  { id: 2, name: 'ST-04', type: '센서', center: '시설B', time: '12/22 12:12', desc: '대화', },
  { id: 3, name: 'ST-01', type: '센서', center: '시설C', time: '12/22 09:25', desc: '출석 확인', },
  { id: 4, name: 'RB-01', type: '로봇', center: '시설B', time: '12/21 14:02', desc: '안부 전달',},
  { id: 5, name: 'ST-02', type: '센서', center: '시설C', time: '12/21 11:30', desc: '이동 불가 : 확인요청', },
]
// weather
export interface weather {
  id:number;
  center:string;
  todayT:string;
  todayW: string;
  tmrrwT:string;
  tmrrwW:string;
}
export const WEATHER : weather[] =[
  { id: 1, center: '시설A', todayT: '8/-3', todayW: '40%', tmrrwT: '10/3', tmrrwW: '41%' },
  { id: 2, center: '시설B', todayT: '9/1', todayW: '56%', tmrrwT: '3/-5', tmrrwW: '51%' },
  { id: 3, center: '시설C', todayT: '4/-4', todayW: '39%', tmrrwT: '10/1', tmrrwW: '25%' },
  { id: 4, center: '시설D', todayT: '7/-4', todayW: '44%', tmrrwT: '6/1', tmrrwW: '24%' },
  { id: 5, center: '시설E', todayT: '-1/-12', todayW: '65%', tmrrwT: '7/-2', tmrrwW: '26%' },
]
// covid
export interface covid {
  id:number;
  date:string;
  location:string;
  new:number;
  total:number;
  desc?:string;
}
export const COVID : covid[]=[
  { id: 1, date: '20/12/22', location: '의정부시 녹양동', new: 0, total: 0, desc:'' },
  { id: 2, date: '20/12/22', location: '아산시 염치읍', new: 0, total: 0, desc:'' },
  { id: 3, date: '20/12/22', location: '서울시 강남구', new: 15, total: 826, desc:'수도권 3단계 발령' },
  { id: 4, date: '20/12/22', location: '제주도 서귀포', new: 20, total: 272, desc:'' },
  { id: 5, date: '20/12/22', location: '대구시 달서구', new: 5, total: 10, desc:'' },
  { id: 6, date: '20/12/21', location: '의정부시 녹양동', new: 0, total: 0, desc:'' },
  { id: 7, date: '20/12/21', location: '아산시 염치읍', new: 0, total: 0, desc:'' },
  { id: 8, date: '20/12/21', location: '서울시 강남구', new: 1, total: 811, desc:'' },
  { id: 9, date: '20/12/21', location: '제주도 서귀포', new: 21, total: 252, desc:'연속 20명대' },

]

export interface Senior {
  id : number;
  photo? : string;
  name : string;
  contact?: string;
  gender : string;
  age : number;
  desc : string;
  latest : string;
  center : string;
  temp? : string;
  guardian : string;
  guardianContact : string;
  
}

export const SENIORS: Senior[] = [
  { id: 1, photo: '1.jpg', name: '김모모', contact:"010-9550-8470" ,gender: '남', age: 74, temp: '36.5',  desc: '', guardian: '김경민', latest: '어제', center: '시설A' ,guardianContact:"010-9550-8470"},
  { id: 2, photo: '2.jpg', name: '윤모모', contact:"010-9550-8470" ,gender: '남', age: 68, temp: '36.5',  desc: '장애 5급', guardian: '김경민', latest: '어제', center: '시설A',guardianContact:"010-9550-8470"},
  { id: 3, photo: '3.jpg', name: '박모모', contact:"010-9550-8470" ,gender: '여', age: 64, temp: '36.5',  desc: '', guardian: '김경민', latest: '어제', center: '시설B' ,guardianContact:"010-9550-8470"},
  { id: 4, photo: '4.jpg', name: '임모모', contact:"010-9550-8470" ,gender: '남', age: 72, temp: '36.5',  desc: '휠체어', guardian: '김경민', latest: '어제', center: '시설A',guardianContact:"010-9550-8470"},
  { id: 5, photo: '5.jpg', name: '정모모', contact:"010-9550-8470" ,gender: '남', age: 80, temp: '36.5',  desc: '', guardian: '김경민', latest: '어제', center: '시설A' ,guardianContact:"010-9550-8470"},
  { id: 6, photo: '6.jpg', name: '설모모', contact:"010-9550-8470" ,gender: '남', age: 78, temp: '36.5',  desc: '', guardian: '김경민', latest: '어제', center: '시설B' ,guardianContact:"010-9550-8470"},
  { id: 7, photo: '7.jpg', name: '이모모', contact:"010-9550-8470" ,gender: '여', age: 71, temp: '36.5',  desc: '', guardian: '김경민', latest: '어제', center: '시설A' ,guardianContact:"010-9550-8470"},
  { id: 8, photo: '8.jpg', name: '김모모', contact:"010-9550-8470" ,gender: '남', age: 66, temp: '36.5',  desc: '', guardian: '김경민', latest: '3일 전', center: '시설B',guardianContact:"010-9550-8470"},
  { id: 9, photo: '1.jpg', name: '최모모', contact:"010-9550-8470" ,gender: '여', age: 61, temp: '36.5',  desc: '', guardian: '김경민', latest: '5일 전', center: '시설B',guardianContact:"010-9550-8470"},
  { id: 10, photo: '2.jpg', name: '진모모', contact:"010-9550-8470" ,gender: '남', age: 63, temp: '36.5',  desc: '', guardian: '김경민', latest: '지난 달', center: '시설B',guardianContact:"010-9550-8470"},
]



export interface Activity {
  task : string;
  teacher : string;
  contact : string;
  center : string;
  color : string;
  progress : string;
  datetime : string;
  photo : string;
}

export const activityHeader: string[] = ['task', 'teacher', 'contact', 'center', 'progress', 'datetime'];

export const activityFilter: Filter = {
  name: '전체',
  completed: false,
  color: 'primary',
  subFilters: [
    {name: '예정', completed: false, color: 'primary'},
    {name: '진행중', completed: false, color: 'primary'},
    {name: '완료', completed: false, color: 'primary'},
    {name: '취소', completed: false, color: 'primary'},
  ]
}

export const ACTIVITIES: Activity[] = [
  { teacher : '김모모', progress: '예정', center : '시설A', contact: '010-0000-0000', photo: '1.jpg', datetime: '2020.10.15 14:13', task : '스트레칭', color: 'info'},
  { teacher : '윤모모', progress: '진행', center : '시설B', contact: '010-0000-0000', photo: '2.jpg', datetime: '2020.10.17 10:15', task : '노래교실', color: 'warning'},
  { teacher : '박모모', progress: '예정', center : '시설C', contact: '010-0000-0000', photo: '3.jpg', datetime: '2020.10.19 16:24', task : '실버스포츠', color: 'info'},
  { teacher : '임모모', progress: '완료', center : '시설A', contact: '010-0000-0000', photo: '4.jpg', datetime: '2020.10.22 14:13', task : '댄스스포츠', color: 'success'},
  { teacher : '정모모', progress: '완료', center : '시설B', contact: '010-0000-0000', photo: '5.jpg', datetime: '2020.10.26 14:13', task : '볼링', color: 'success'},
  { teacher : '설모모', progress: '취소', center : '시설C', contact: '010-0000-0000', photo: '6.jpg', datetime: '2020.11.01 14:13', task : '볼링', color: 'danger'},
  { teacher : '이모모', progress: '예정', center : '시설A', contact: '010-0000-0000', photo: '7.jpg', datetime: '2020.11.05 14:13', task : '스트레칭', color: 'info'},
  { teacher : '김모모', progress: '진행', center : '시설B', contact: '010-0000-0000', photo: '8.jpg', datetime: '2020.11.17 14:13', task : '노래교실', color: 'warning'},
  { teacher : '최모모', progress: '완료', center : '시설C', contact: '010-0000-0000', photo: '1.jpg', datetime: '2020.11.20 14:13', task : '댄스스포츠', color: 'success'},
  { teacher : '진모모', progress: '예정', center : '시설A', contact: '010-0000-0000', photo: '2.jpg', datetime: '2020.12.01 14:13', task : '볼링', color: 'info'},
]

export interface Task {
  id : string;
  name : string;
  event : string;
  center : string;
  present : number;
  datetime : string;
}

export const taskHeader: string[] = ['id', 'name', 'event', 'center', 'present', 'datetime'];

export const taskFilter: Filter = {
  name: '전체',
  completed: false,
  color: 'primary',
  subFilters: [
    {name: '화재', completed: false, color: 'primary'},
    {name: '낙상', completed: false, color: 'primary'},
    {name: '배화', completed: false, color: 'primary'},
    {name: '체온이상자', completed: false, color: 'primary'},
    {name: '무단 결석자', completed: false, color: 'primary'},
    {name: '기타 사건사고', completed: false, color: 'primary'},
  ]
}

export const TASKS: Task[] = [
  { id : '#REQ001', center : '시설A', present: 40, datetime: '2020.10.15 14:13', name : '김모모', event: '낙상'},
  { id : '#REQ002', center : '시설B', present: 40, datetime: '2020.10.17 10:15', name : '윤모모', event: '무'},
  { id : '#REQ003', center : '시설C', present: 40, datetime: '2020.10.19 16:24', name : '박모모', event: '무'},
  { id : '#REQ004', center : '시설A', present: 40, datetime: '2020.10.22 14:13', name : '임모모', event: '기타 사건사고'},
  { id : '#REQ005', center : '시설B', present: 40, datetime: '2020.10.26 14:13', name : '정모모', event: '화재'},
  { id : '#REQ006', center : '시설C', present: 40, datetime: '2020.11.01 14:13', name : '설모모', event: '낙상'},
  { id : '#REQ007', center : '시설A', present: 40, datetime: '2020.11.05 14:13', name : '이모모', event: '무'},
  { id : '#REQ008', center : '시설B', present: 40, datetime: '2020.11.17 14:13', name : '김모모', event: '무'},
  { id : '#REQ009', center : '시설C', present: 40, datetime: '2020.11.20 14:13', name : '최모모', event: '무'},
  { id : '#REQ0010', center : '시설A', present: 39, datetime: '2020.12.01 14:13', name : '진모모', event: '무단 결석'},
]

export interface Request {
  id : number;
  color : string;
  progress : string;
  from : string;
  desc : string;
  who : string;
}

export const REQUESTS: Request[] = [
  { id: 1, color: 'info', progress: '진행 중', from: '관리자', desc: '택시 호출', who: '김모모'},
  { id: 2, color: 'info', progress: '진행 중', from: '관리자', desc: '병원 동행', who: '윤모모'},
  { id: 3, color: 'danger', progress: '취소', from: '로봇', desc: '노래 검색', who: '박모모'},
  { id: 4, color: 'success', progress: '완료', from: '로봇', desc: '병원 동행', who: '임모모'},
  { id: 5, color: 'info', progress: '진행 중', from: '로봇', desc: '택시 호출', who: '정모모'},
  { id: 6, color: 'success', progress: '완료', from: '앱', desc: '택시 호출', who: '설모모'},
  { id: 7, color: 'success', progress: '완료', from: '로봇', desc: '노래 검색', who: '이모모'},
  { id: 8, color: 'danger', progress: '취소', from: '관리자', desc: '병원 동행', who: '김모모'},
  { id: 9, color: 'success', progress: '완료', from: '앱', desc: '관공서 서비스', who: '최모모'},
  { id: 10, color: 'success', progress: '완료', from: '관리자', desc: '관공서 서비스', who: '진모모'},
]

export interface Timeline {
  img : string;
  event : string;
  timelog : string;
  desc : string;
}

export const TIMELINES: Timeline[] = [
  { img: '1.jpg', event: '반찬 배달 요청', timelog: '3분 전', desc: '반찬 배달 요청 / 김모모' },
  { img: '2.jpg', event: '낙상 사고 발생', timelog: '12/7 10:12', desc: '낙상 발생 및 응급 호출 / 윤모모' },
  { img: '3.jpg', event: '신규 이용자 등록', timelog: '11/15 15:10', desc: '박모모 / 여성 / 64세' },
  { img: '4.jpg', event: '로본 이상 감지', timelog: '10/30 14:23', desc: '로봇A 구동부 이상 감지' },
]

// dietary
export interface Dietary {
  year:number;
  month:number;
  day:number;
  meals?:string[];
  info?:string;
  url?:string;
}

export const DIETARYS : Dietary[] =[
  {year:2020, month:12, day:1, meals:["밥","국","반찬1","반찬2","반찬3","반찬4"], info:"", url:"dietary.jpg"},
  {year:2020, month:12, day:2, meals:["밥","국","반찬1","반찬2","반찬3","반찬4"], info:"", url:"dietary.jpg"},
  {year:2020, month:12, day:3, meals:["밥","국","반찬1","반찬2","반찬3","반찬4"], info:"", url:"dietary.jpg"},
  {year:2020, month:12, day:4, meals:["밥","국","반찬1","반찬2","반찬3","반찬4"], info:"", url:"dietary.jpg"},
  {year:2020, month:12, day:7, info:"나들이 도시락 대체", url:"dietary.jpg"},
  {year:2020, month:12, day:8, meals:["밥","국","반찬1","반찬2","반찬3","반찬4"], info:"", url:"dietary.jpg"},
  {year:2020, month:12, day:9, meals:["밥","국","반찬1","반찬2","반찬3","반찬4"], info:"", url:"dietary.jpg"},
  {year:2020, month:12, day:10, meals:["밥","국","반찬1","반찬2","반찬3","반찬4"], info:"", url:"dietary.jpg"},
  {year:2020, month:12, day:11, meals:["밥","국","반찬1","반찬2","반찬3","반찬4"], info:"", url:"dietary.jpg"},
  {year:2020, month:12, day:14, meals:["밥","국","반찬1","반찬2","반찬3","반찬4"], info:"특식 제공", url:"dietary.jpg"},
  {year:2020, month:12, day:15, meals:["밥","국","반찬1","반찬2","반찬3","반찬4"], info:"", url:"dietary.jpg"},
  {year:2020, month:12, day:16, meals:["밥","국","반찬1","반찬2","반찬3","반찬4"], info:"", url:"dietary.jpg"},
  {year:2020, month:12, day:17, meals:["밥","국","반찬1","반찬2","반찬3","반찬4"], info:"", url:"dietary.jpg"},
  {year:2020, month:12, day:18, meals:["밥","국","반찬1","반찬2","반찬3","반찬4"], info:"", url:"dietary.jpg"},
  {year:2020, month:12, day:21, meals:["밥","국","반찬1","반찬2","반찬3","반찬4"], info:"추가 간식", url:"dietary.jpg"},
  {year:2020, month:12, day:22, meals:["밥","국","반찬1","반찬2","반찬3","반찬4"], info:"", url:"dietary.jpg"},
  {year:2020, month:12, day:23, meals:["밥","국","반찬1","반찬2","반찬3","반찬4"], info:"", url:"dietary.jpg"},
  {year:2020, month:12, day:24, meals:["밥","국","반찬1","반찬2","반찬3","반찬4"], info:"", url:"dietary.jpg"},
  {year:2020, month:12, day:28, meals:["밥","국","반찬1","반찬2","반찬3","반찬4"], info:"", url:"dietary.jpg"},
  {year:2020, month:12, day:29, meals:["밥","국","반찬1","반찬2","반찬3","반찬4"], info:"", url:"dietary.jpg"},
  {year:2020, month:12, day:30, meals:["밥","국","반찬1","반찬2","반찬3","반찬4"], info:"", url:"dietary.jpg"},
  {year:2020, month:12, day:31, meals:["밥","국","반찬1","반찬2","반찬3","반찬4"], info:"", url:"dietary.jpg"},
]

// video
export interface Video {
  id: number;
  kind?: string;
  thum: string;
  update : string;
  title: string;
  desc?: string;

}

export const VIDEOS : Video[] = [
  {id:1, kind:'운동', thum:'1.jpg', update:"20/12/20" , title:"아침운동A", desc:""},
  {id:2, kind:'운동', thum:'2.jpg', update:"20/12/20" , title:"아침운동B", desc:"아침에 하는 맨손운동"},
  {id:3, kind:'교육', thum:'3.jpg', update:"20/12/19" , title:"교육A", desc:"도움이 되는 교육영상"},
  {id:4, kind:'코로나', thum:'4.jpg', update:"20/12/05" , title:"코로나지침A", desc:"이 시국에 알아야할 지침"},
  {id:5, kind:'코로나', thum:'5.jpg', update:"20/11/20" , title:"코로나지침B", desc:"이 시국에 알아야할 지침"},
  {id:6, kind:'운동', thum:'6.jpg', update:"20/10/12" , title:"아침운동C", desc:"아침에 하는 맨손운동"},
  {id:7, kind:'교육', thum:'7.jpg', update:"20/10/10" , title:"교육B", desc:"도움이 되는 교육영상"},
  {id:8, kind:'교육', thum:'8.jpg', update:"20/10/02" , title:"교육C", desc:"도움이 되는 교육영상"},
  {id:9, kind:'프로그램', thum:'1.jpg', update:"20/9/20" , title:"프로그램A", desc:"프로그램 영상"},
  {id:10, kind:'명상', thum:'2.jpg', update:"20/8/20" , title:"명상A", desc:"명상에 쓰이는 영상"},

]
// cctv
export interface cctv {
  id: number;
  kind?: string;
  thum: string;
  update : string;
  title: string;
  desc?: string;

}
export const CCTVLIST : cctv[] = [
  {id:1, kind:'사고', thum:'1.jpg', update:"20/12/20 18:46" , title:"사고", desc:""},
  {id:2, kind:'요청', thum:'2.jpg', update:"20/12/20 18:46" , title:"사고", desc:""},
  {id:3, kind:'요청', thum:'3.jpg', update:"20/12/19 18:46" , title:"요청", desc:""},
  {id:4, kind:'요청', thum:'4.jpg', update:"20/12/05 18:46" , title:"요청", desc:""},
  {id:5, kind:'요청', thum:'5.jpg', update:"20/11/20 18:46" , title:"요청", desc:""},
  {id:6, kind:'요청', thum:'6.jpg', update:"20/10/12 18:46" , title:"요청", desc:""},
  {id:7, kind:'요청', thum:'7.jpg', update:"20/10/10 18:46" , title:"요청", desc:""},
  {id:8, kind:'요청', thum:'8.jpg', update:"20/10/02 18:46" , title:"요청", desc:""},
  {id:9, kind:'사고', thum:'1.jpg', update:"20/9/20 18:46" , title:"사고", desc:""},
  {id:10, kind:'사고', thum:'2.jpg', update:"20/8/20 18:46" , title:"사고", desc:""},

]
// noticeList
export interface NoticeList{
  id:number;
  paperNum:string;
  title:string;
  update:string;
}
export const NOTICELIST : NoticeList[] =[
  {id:1, paperNum:"CNN-020-011", title: "12월 시설A 복지센터 시설 공사안내", update:"20/12/3"},
  {id:2, paperNum:"CNN-019-010", title: "12월 시설A 가정통신문", update:"20/12/1"},
  {id:3, paperNum:"CNN-020-008", title: "12월 시설B 프로그램 안내", update:"20/12/1"},
  {id:4, paperNum:"CNN-020-009", title: "12월 시설B 복지센터 시설 공사안내", update:"20/12/1"},
  {id:5, paperNum:"CNN-020-010", title: "12월 시설A 진행 예정 프로그램 안내", update:"20/11/30"},
  {id:6, paperNum:"CNN-020-007", title: "코로나 주의 안내", update:"20/11/26"},
  {id:7, paperNum:"CNN-020-006", title: "손씻기 교육 안내", update:"20/11/25"},
  {id:8, paperNum:"CNN-020-011", title: "11월 시설A 복지센터 시설 공사안내", update:"20/11/3"},
  {id:9, paperNum:"CNN-019-010", title: "11월 시설A 가정통신문", update:"20/11/1"},
  {id:10, paperNum:"CNN-020-008", title: "11월 시설B 프로그램 안내", update:"20/11/1"},
  {id:11, paperNum:"CNN-020-009", title: "11월 시설B 복지센터 시설 공사안내", update:"20/10/1"},
  {id:12, paperNum:"CNN-020-010", title: "11월 시설A 진행 예정 프로그램 안내", update:"20/10/30"},
  {id:13, paperNum:"CNN-020-007", title: "코로나 주의 안내", update:"20/11/26"},
  {id:14, paperNum:"CNN-020-006", title: "손씻기 교육 안내", update:"20/11/25"},
  {id:15, paperNum:"CNN-020-005", title: "화장실 리모델링 안내", update:"20/12/1"},
  {id:16, paperNum:"CNN-020-004", title: "위탁업체 변경 안내", update:"20/12/1"},
  {id:17, paperNum:"CNN-019-011", title: "외부 일정 알림", update:"20/12/1"},
  {id:19, paperNum:"CNN-020-003", title: "10월 가정 통신문", update:"20/12/1"},
]

// emergency
export interface Emergency{
  id:number;
  date: string;
  situation: string;
  process: string;
  add?:string;
}
export const EMERGENCY : Emergency[] =[
  {id:1,date:'20/12/01', situation:"넘어짐", process: "시설응급처치"},
  {id:2,date:'20/11/30', situation:"넘어짐", process: "시설응급처치"},
  {id:3,date:'20/11/28', situation:"끼임", process: "시설응급처치"},
  {id:4,date:'20/11/15', situation:"쓰러짐", process: "병원 이송" ,add:"급성 빈혈"},
  {id:5,date:'20/11/01', situation:"부딪힘", process: "병원 이송"},
]
// 투약정보
export interface Medicine{
  id:number;
  date:string;
  reason:string;
  guard: string;
  mediName: string;
}
export const MEDICINE : Medicine[] = [
  {id:1,date:'20/12/01',reason:"신장기능", guard:"김근찬", mediName: "루비날 75"},
  {id:2,date:'20/11/30',reason:"신장기능", guard:"김근찬", mediName: "루비날 75"},
  {id:3,date:'20/11/28',reason:"신장기능", guard:"김근찬", mediName: "루비날 75"},
  {id:4,date:'20/11/15',reason:"고혈압", guard:"김근찬", mediName: "누트리라이프"},
  {id:5,date:'20/11/01',reason:"고혈압", guard:"김근찬", mediName: "누트리라이프"},
]
// 출석
export interface Attendance {
  id:number;
  date:string;
  attand:number;
  strange:number;
  center:string;
}
export const ATTENDANCE: Attendance[] = [
  {id:1,date:'20/12/01',attand:40, strange:0, center: "녹양주간보호센터"},
  {id:2,date:'20/12/01',attand:40, strange:0, center: "요셉주간보호센터"},
  {id:3,date:'20/12/01',attand:40, strange:0, center: "녹양주간보호센터"},
  {id:4,date:'20/12/01',attand:40, strange:0, center: "요셉주간보호센터"},
  {id:5,date:'20/12/01',attand:40, strange:0, center: "녹양주간보호센터"},
  {id:6,date:'20/12/01',attand:40, strange:0, center: "요셉주간보호센터"},
  {id:7,date:'20/12/01',attand:40, strange:0, center: "녹양주간보호센터"},
  {id:8,date:'20/12/01',attand:40, strange:0, center: "요셉주간보호센터"},
  {id:9,date:'20/12/01',attand:40, strange:0, center: "녹양주간보호센터"},
  {id:10,date:'20/12/01',attand:40, strange:0, center: "요셉주간보호센터"},
  {id:11,date:'20/12/01',attand:40, strange:0, center: "녹양주간보호센터"},
  {id:12,date:'20/12/01',attand:40, strange:0, center: "요셉주간보호센터"},

]
// 강의 
export interface dashlecture {
  id : number;
  title : string;
  teacher : string;
  students : number;
  date : string;
  point? : number;
  
}
export const TODAYLECTURE : dashlecture[] = [
  {id:1,title:"마음챙김 영상", teacher:'유재석', students: 8 ,date:'20.12.01 14:00',point : 8.2},
  {id:2,title:"아로마 힐링 핸드 터치", teacher:'이효리', students: 15 ,date:'20.12.01 17:00',point : 8.3},
  {id:3,title:"잠 잘 자기 수면교육", teacher:'정재훈', students: 8 ,date:'20/12/01 10:00',point : 7.5},
  
]

export const BESTLECTURE : dashlecture[] = [
  {id:1,title:"슬기로운 아빠 생활", teacher:'이슬기', students: 8 ,date:'20.12.01 14:00',point : 10},
  {id:2,title:"MBTI로 나를 알아가기", teacher:'박엠비', students: 15 ,date:'20.12.01 17:00',point : 9.9},
  {id:3,title:"다름으로 완성하는 팀 빌딩", teacher:'김빌딩', students: 8 ,date:'20/12/01 10:00',point : 9.9},
]

// 승인대기
export interface ready {
  id:number;
  name: string;
  divCause:string;
  divResult:string;
  date: string;
  ready?:string;
  delete?:string;
}
export const READY : ready[] = [
  {id:1,name:'김모모', divCause:"업무", divResult:'정서정 증상', date:'20.12.01'},
  {id:2,name:'윤모모', divCause:"힐링", divResult:'행동적 증상', date:'20.12.01'},
  {id:3,name:'박모모', divCause:"라이프", divResult:'정서적 증상', date:'20.12.01'},
  {id:4,name:'최모모', divCause:"라이프", divResult:'정서적 증상', date:'20.12.01'},
  {id:5,name:'김깽미', divCause:"업무", divResult:'인지적 증상', date:'20.12.01'},
]
//강사
export interface teacher {
  id:number;
  name: string;
  divCause:string;
  divResult:string;
  lectureNum: number;
  lastdate: string;
  student: number;
  point? : number;
  delete?:string;
}

export const TEACHER : teacher[] = [
  {id:1,name:'김모모', divCause:"업무", divResult:'정서정 증상', lectureNum: 5, lastdate:"20.12.30", student: 30, point : 10},
  {id:2,name:'윤모모', divCause:"힐링", divResult:'행동적 증상', lectureNum: 5, lastdate:"20.12.30", student: 30, point : 10},
  {id:3,name:'박모모', divCause:"라이프", divResult:'정서적 증상', lectureNum: 5, lastdate:"20.12.30", student: 30, point : 10},
  {id:4,name:'최모모', divCause:"라이프", divResult:'정서적 증상', lectureNum: 5, lastdate:"20.12.30", student: 30, point : 10},
  {id:5,name:'김깽미', divCause:"업무", divResult:'인지적 증상', lectureNum: 5, lastdate:"20.12.30", student: 30, point : 10},
]
// 강의
export interface lecturelist {
  id:number;
  date:string;
  divCause: string;
  divResult: string;
  title: string;
  name: string;
  point : string;
  good: number;
  number: number;
  delete?: string;
}
export const LECTURELIST : lecturelist[] = [
  {id:1, date:'12.7', divCause:"업무", divResult:'정서정 증상', title:'마음챙김 영상' ,name: '김모모', point:'18,000', good:8.2, number:15},
  {id:2, date:'12.7', divCause:"업무", divResult:'정서정 증상', title:'마음챙김 영상' ,name: '김모모', point:'18,000', good:8.2, number:15},
  {id:3, date:'12.7', divCause:"업무", divResult:'정서정 증상', title:'마음챙김 영상' ,name: '김모모', point:'18,000', good:8.2, number:15},
  {id:4, date:'12.7', divCause:"업무", divResult:'정서정 증상', title:'마음챙김 영상' ,name: '김모모', point:'18,000', good:8.2, number:15},
  {id:5, date:'12.7', divCause:"업무", divResult:'정서정 증상', title:'마음챙김 영상' ,name: '김모모', point:'18,000', good:8.2, number:15},
  {id:6, date:'12.7', divCause:"업무", divResult:'정서정 증상', title:'마음챙김 영상' ,name: '김모모', point:'18,000', good:8.2, number:15},
  {id:7, date:'12.7', divCause:"업무", divResult:'정서정 증상', title:'마음챙김 영상' ,name: '김모모', point:'18,000', good:8.2, number:15},
]
//수강자
export interface student {
  id:number;
  name: string;
  belong : string;
  enrollDate : string;
  condition : string;
  cancel: string;
}
export const STUDENTSLIST : student[] = [
  {id:1, name:'김모모',belong: '한국공항공사', enrollDate:'11.27', condition:"수강 중" , cancel:""},
  {id:2, name:'김모모',belong: '한국철도공사', enrollDate:'11.27', condition:"수강 중" , cancel:""},
  {id:3, name:'김모모',belong: '경찰청', enrollDate:'11.27', condition:"수강 중" , cancel:""},
  {id:4, name:'김모모',belong: '수자원공사', enrollDate:'11.27', condition:"수강 중" , cancel:""},
  {id:5, name:'김모모',belong: '한국공항공사', enrollDate:'11.27', condition:"수강 중" , cancel:""},
]
// 고객사
export interface company {
  id:number;
  name:string;
  start:string;
  end: string;
  totalPoint:string;
  alivePoint:string;
  personalPoint: string;
  workerNum: number;
  manager: string;
  contact: string;
  email?: string;
}
export const COMPANYLIST : company[] = [
  {id:1, name:'한국공항공사',start: '2020.2.11', end:'2020.11.27', totalPoint:'12,000,000' , alivePoint:"2,750,000",personalPoint:"75,000", workerNum:27,manager:'깽미',contact:'010-000-0000'},
  {id:2, name:'한국철도공사',start: '2020.2.11', end:'2020.11.27', totalPoint:'12,000,000' , alivePoint:"2,750,000",personalPoint:"75,000", workerNum:27,manager:'깽미',contact:'010-000-0000'},
  {id:3, name:'경찰청',start: '2020.2.11', end:'2020.11.27', totalPoint:'12,000,000' , alivePoint:"2,750,000",personalPoint:"75,000", workerNum:27,manager:'깽미',contact:'010-000-0000'},
  {id:4, name:'소방청',start: '2020.2.11', end:'2020.11.27', totalPoint:'12,000,000' , alivePoint:"2,750,000",personalPoint:"75,000", workerNum:27,manager:'깽미',contact:'010-000-0000'},

]
// 포인트 사용
export interface point {
  id:number;
  date:string;
  name:string;
  price?:string;
  point:string;
  title?:string;
  desc?:string;
  condition?:string;
  good?:number;
}
export const POINTCHARGE : point[] = [
  {id:1, date:'12.7',name: '깽미', price:'6,000,000 원', point:'6,000,000 p' , desc:"12월 7일 - 바우처 활용 포인트 충전", condition:"승인"},
]
export const POINTUSEAGE : point[] = [
  {id:1, date:'12.7',name: '김모모', point:'20,000 p' , title:"바쁠수록 차분하게, 마음챙김 영상", good:10},
  {id:2, date:'12.7',name: '이모모', point:'20,000 p' , title:"바쁠수록 차분하게, 마음챙김 영상", good:10},
  {id:3, date:'12.7',name: '박모모', point:'20,000 p' , title:"바쁠수록 차분하게, 마음챙김 영상", good:10},
  {id:4, date:'12.7',name: '최모모', point:'20,000 p' , title:"바쁠수록 차분하게, 마음챙김 영상", good:10},
  {id:5, date:'12.7',name: '문모모', point:'20,000 p' , title:"바쁠수록 차분하게, 마음챙김 영상", good:10},
]
// 직원
export interface worker {
  id:number;
  name:string;
  part:string;
  grade:string;
  gender:string;
  TotalUsePoint:string;
  remainPoint?:string;
  workLocation:string;
  contact?:string;
  delete?:string;
  age?: number;
  studyNum?:number;
  interest?:string;
  dateIn?:string;
  belong?:string;
}
export const WORKERLIST : worker[] = [
  {id:1, name: '김모모',age:27,belong: '한국공항공사', part:"연구개발", grade:"연구원", gender:"남", TotalUsePoint:'20,000 p' ,remainPoint:'5,000 p',studyNum:1 ,workLocation:"경기도", dateIn:'20.12.30'},
  {id:2, name: '이모모',age:34,belong: '한국철도공사', part:"홍보", grade:"팀장", gender:"여", TotalUsePoint:'20,000 p' ,remainPoint:'5,000 p',studyNum:1 ,workLocation:"경기도", dateIn:'20.12.30'},
  {id:3, name: '박모모',age:50,belong: '경찰청', part:"기획", grade:"부장", gender:"여", TotalUsePoint:'20,000 p' ,remainPoint:'5,000 p',studyNum:1 ,workLocation:"경기도", dateIn:'20.12.30'},
  {id:4, name: '최모모',age:38,belong: '수자원공사', part:"총무", grade:"과장", gender:"남", TotalUsePoint:'20,000 p' ,remainPoint:'5,000 p',studyNum:1 ,workLocation:"경기도", dateIn:'20.12.30'},
  {id:5, name: '문모모',age:27,belong: '한국공항공사', part:"영업", grade:"대리", gender:"남", TotalUsePoint:'20,000 p' ,remainPoint:'5,000 p',studyNum:1 ,workLocation:"경기도", dateIn:'20.12.30'},
]

// 수강내역 
export interface studyinfo {
id:number;
date:string;
point:string;
title:string;
name:string;
condition:string;
good:string;

}
export const STUDYINFO : studyinfo[] = [
 {id:1,date:'12.17', point:'20,000 p', title:'바쁠수록 차분하게, 마음챙김 영상',name:'김모모',condition:'수강 대기', good:'10'},
 {id:2,date:'12.17', point:'20,000 p', title:'바쁠수록 차분하게, 마음챙김 영상',name:'이모모',condition:'수강 대기', good:'10'},
 {id:3,date:'12.17', point:'20,000 p', title:'바쁠수록 차분하게, 마음챙김 영상',name:'박모모',condition:'수강 대기', good:'10'},
]