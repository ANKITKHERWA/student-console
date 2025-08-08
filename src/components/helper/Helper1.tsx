import { Icon } from 'lucide-react'
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
  Icononbording,
  Iconright,
  Iconsales,
  Iconvisits,
} from './Icon1'
import { Value } from '@radix-ui/react-select'

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
export const performDetail = [
  {
    Icon: <Icononbording />,
    para1: 'Onboarding',
    para2: '+34%',
    para3: '12/20',
    Value: 82,
  },
  {
    Icon: <Icononbording />,
    para1: 'Appointment',
    para2: '+6%',
    para3: '14/20',
    Value: 60,
  },
  {
    Icon: <Icononbording />,
    para1: 'Sales',
    para2: '+22%',
    para3: '16/20',
    Value: 50,
  },
  {
    Icon: <Icononbording />,
    para1: 'Campaign Message',
    para2: '-5%',
    para3: '8/20',
    Value: 40,
  },
  {
    Icon: <Icononbording />,
    para1: 'Promo Code',
    para2: '+60%',
    para3: '10/20',
    Value: 70,
  },
  {
    Icon: <Icononbording />,
    para1: 'Get Featured',
    para2: '+12%',
    para3: '15/20',
    Value: 30,
  },
  {
    Icon: <Icononbording />,
    para1: 'Digital Ads',
    para2: '+6%',
    para3: '11/20',
    Value: 80,
  },
  {
    Icon: <Icononbording />,
    para1: 'Creative Studio',
    para2: '+12%',
    para3: '15/20',
    Value: 90,
  },
  {
    Icon: <Icononbording />,
    para1: 'Easy Share',
    para2: '+3%',
    para3: '9/20',
    Value: 60,
  },
  {
    Icon: <Icononbording />,
    para1: 'Review',
    para2: '+3%',
    para3: '9/20',
    Value: 50,
  },
]
