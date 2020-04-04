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
    title: 'Reports',
    icon: 'clipboard-outline',
    link: '/pages/reports',
  },
];
