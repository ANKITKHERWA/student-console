import {
  Icon10thimg,
  Icon11thimg,
  Icon12thimg,
  Icon3rdimg,
  Icon4thimg,
  Icon5thimg,
  Icon6thimg,
  Icon7thimg,
  Icon8thimg,
  Icon9thimg,
  Iconactive,
  Iconapointment,
  Iconappointment2,
  Iconneeds,
  Iconright,
  Iconsales,
  Iconvisits,
} from './Icon1'

export const navber = [
  { path: '#', pera: 'Home' },
  { path: '#', pera: 'Presale Benefits' },
  { path: '#', pera: 'How it works' },
  { path: '#', pera: 'Tokenomics' },
  { path: '#', pera: 'Staking Rewards' },
  { path: '#', pera: 'How to buy' },
  { path: '#', pera: 'FAQ' },
]
export const items = [
  {
    url: '/dashboard',
    icon: Icon3rdimg,
  },
  {
    url: '/planner',
    icon: Icon4thimg,
  },
  {
    url: '/insights',
    icon: Icon5thimg,
  },
  {
    url: '/partner',
    icon: Icon6thimg,
  },
  {
    url: '/appointment',
    icon: Icon7thimg,
  },
  {
    url: '/sales',
    icon: Icon8thimg,
  },
  {
    url: '/team',
    icon: Icon9thimg,
  },
  {
    url: '/report',
    icon: Icon10thimg,
  },
  {
    url: '/training',
    icon: Icon11thimg,
  },
  {
    url: '/settings',
    icon: Icon12thimg,
  },
]
export const cardsDetail = [
  {
    icon: <Iconapointment />,
    title: 'Registered vs Assigned',
    heading: '90 / 270',
    righticon: <Iconright />,
    para: '+9%',
    percentage: '+12%',
  },
  {
    icon: <Iconactive />,
    title: 'Active  vs Registered',
    heading: '21 / 90',
    righticon: <Iconright />,
    para: '+2',
    percentage: '+8%',
  },
  {
    icon: <Iconvisits />,
    title: 'Visits this month',
    heading: '50 / 250',
    righticon: <Iconright />,
    para: '+2%',
    percentage: '+8%',
  },
  {
    icon: <Iconsales />,
    title: 'Sales',
    heading: '150 / 100',
    righticon: <Iconright />,
    para: '+9%',
    percentage: '+6%',
  },
  {
    icon: <Iconappointment2 />,
    title: 'Appointment',
    heading: '75 / 100',
    righticon: <Iconright />,
    para: '+9%',
    percentage: '+2%',
  },
  {
    icon: <Iconneeds />,
    title: 'Needs attention',
    heading: '15 / 21',
    righticon: <Iconright />,
    para: '+2%',
    percentage: '+2%',
  },
]
