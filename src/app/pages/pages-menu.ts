import {NbMenuItem} from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'home-outline',
    link: '/pages/home',
    home: true,
  },
  {
    title: 'Patients',
    icon: 'people-outline',
    link: '/pages/patients',
  },
  {
    title: 'Doctors',
    icon: 'activity-outline',
    link: '/pages/doctors',
  },
  {
    title: 'Hospitals',
    icon: 'activity-outline',
    link: '/pages/hospital',
  },
  {
    title: 'Reports',
    icon: 'clipboard-outline',
    link: '/pages/reports',
  },
];
