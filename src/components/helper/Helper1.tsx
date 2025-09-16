import { Route } from 'lucide-react'
import DotColor from '../common/DotColor'
import {
  Aaravsharma,
  Adsnot,
  Arlenemccoy,
  Bankaccountnotlinked,
  Catlog,
  Config,
  Creative,
  Darrellsteward,
  FemaleteamCard,
  Floydmiles,
  Getfeat,
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
  Icononapoit,
  Icononbording,
  Icononcamp,
  Iconondigit,
  Icononeasy,
  Icononget,
  Icononpromo,
  Icononreview,
  Icononsals,
  Icononstuido,
  Iconright,
  Iconsales,
  Iconvisits,
  Kathrynmurphy,
  MaleteamCard,
  Msgnot,
  Noapoitment,
  Noeasy,
  Nomonthlytargetset,
  Nopromo,
  Nosale,
  NotFullyOnboarded,
  OffPeakhoursnotset,
  Partnot,
  Priyasingh,
  Product,
  Staffnotadded,
  SubscriptionOverdue,
  Theresawebb,
  Wadearren,
  Wadewarren,
} from './Icon1'
import {
  LocationIcon,
  OveralScoreIcon,
  PhoneSmallIcon,
  SmallCalenderIcon,
} from './Icon2'

export const navItems = [
  {
    url: '/dashboard',
    icon: Icon3rdimg,
    title: 'Dashboard',
  },
  {
    url: '/planner',
    icon: Icon4thimg,
    title: 'Planner',
  },
  {
    url: '/insights',
    icon: Icon5thimg,
    title: 'Insights',
  },
  {
    url: '/partner',
    icon: Icon6thimg,
    title: 'Partner',
  },
  {
    url: '/appointment',
    icon: Icon7thimg,
    title: 'Appointment',
  },
  {
    url: '/sales',
    icon: Icon8thimg,
    title: 'Sales',
  },
  {
    url: '/team',
    icon: Icon9thimg,
    title: 'Team',
  },
  {
    url: '/report',
    icon: Icon10thimg,
    title: 'Report',
  },
  {
    url: '/training',
    icon: Icon11thimg,
    title: 'Training',
  },
  {
    url: '/settings',
    icon: Icon12thimg,
    title: 'Settings',
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
    Route: '/insights',
  },
  {
    icon: <Iconactive />,
    title: 'Active  vs Registered',
    heading: '21 / 90',
    righticon: <Iconright />,
    para: '+2',
    percentage: '+8%',
    Route: '/insights',
  },
  {
    icon: <Iconvisits />,
    title: 'Visits this month',
    heading: '50 / 250',
    righticon: <Iconright />,
    para: '+2%',
    percentage: '+8%',
    Route: '/planner',
  },
  {
    icon: <Iconsales />,
    title: 'Sales',
    heading: '150 / 100',
    righticon: <Iconright />,
    para: '+9%',
    percentage: '+6%',
    Route: '/sales',
  },
  {
    icon: <Iconappointment2 />,
    title: 'Appointment',
    heading: '75 / 100',
    righticon: <Iconright />,
    para: '+9%',
    percentage: '+2%',
    Route: '/appointment',
  },
  {
    icon: <Iconneeds />,
    title: 'Needs attention',
    heading: '15 / 21',
    righticon: <Iconright />,
    para: '+2%',
    percentage: '+2%',
    Route: '/insights',
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
    Icon: <Icononapoit />,
    para1: 'Appointment',
    para2: '+6%',
    para3: '14/20',
    Value: 60,
  },
  {
    Icon: <Icononsals />,
    para1: 'Sales',
    para2: '+22%',
    para3: '16/20',
    Value: 50,
  },
  {
    Icon: <Icononcamp />,
    para1: 'Campaign Message',
    para2: '-5%',
    para3: '8/20',
    Value: 40,
  },
  {
    Icon: <Icononpromo />,
    para1: 'Promo Code',
    para2: '+60%',
    para3: '10/20',
    Value: 70,
  },
  {
    Icon: <Icononget />,
    para1: 'Get Featured',
    para2: '+12%',
    para3: '15/20',
    Value: 30,
  },
  {
    Icon: <Iconondigit />,
    para1: 'Digital Ads',
    para2: '+6%',
    para3: '11/20',
    Value: 80,
  },
  {
    Icon: <Icononstuido />,
    para1: 'Creative Studio',
    para2: '+12%',
    para3: '15/20',
    Value: 90,
  },
  {
    Icon: <Icononeasy />,
    para1: 'Easy Share',
    para2: '+3%',
    para3: '9/20',
    Value: 60,
  },
  {
    Icon: <Icononreview />,
    para1: 'Review',
    para2: '+3%',
    para3: '9/20',
    Value: 50,
  },
]
export const TaskDetail = [
  {
    Icon: <Nosale />,
    title: 'No Sale (7days)',
    pera: '28 salons',
    Route: '/insights',
  },
  {
    Icon: <Noeasy />,
    title: 'No Easy Share (30 days)',
    pera: '28 salons',
    Route: '/insights',
  },
  {
    Icon: <Noapoitment />,
    title: 'No Appointment(7 days)',
    pera: '17 salons',
    Route: '/insights',
  },
  {
    Icon: <Creative />,
    title: 'Creative not used (30 d)',
    pera: '17 salons',
    Route: '/insights',
  },
  {
    Icon: <Catlog />,
    title: 'Catalog Incomplete',
    pera: '13 salons',
    Route: '/insights',
  },
  {
    Icon: <Adsnot />,
    title: 'Ads not used (60 days)',
    pera: '13 salons',
    Route: '/insights',
  },
  {
    Icon: <Config />,
    title: 'Configure Offer Incomplete',
    pera: '21 salons',
    Route: '/insights',
  },
  {
    Icon: <Msgnot />,
    title: 'Msg Center not used (30 d)',
    pera: '21 salons',
    Route: '/insights',
  },
  {
    Icon: <Nopromo />,
    title: 'No Promo code (60 days )',
    pera: '21 salons',
    Route: '/insights',
  },
  {
    Icon: <Getfeat />,
    title: 'Get Feat. not used (60 days)',
    pera: '21 salons',
    Route: '/insights',
  },
  {
    Icon: <Product />,
    title: 'Product not added ',
    pera: '21 salons',
    Route: '/insights',
  },

  {
    Icon: <Partnot />,
    title: 'Partner not visited (30 days)',
    pera: '21 salons',
    Route: '/insights',
  },
]
export const CriticalDetail = [
  {
    Icon: <NotFullyOnboarded />,
    title: 'Not Fully Onboarded',
    pera: '14 salons',
    Route: '/insights',
  },
  {
    Icon: <OffPeakhoursnotset />,
    title: 'Off-Peak hours not set',
    pera: '8 salons',
    Route: '/insights',
  },
  {
    Icon: <Bankaccountnotlinked />,
    title: 'Bank account not linked',
    pera: '10 salons',
    Route: '/insights',
  },
  {
    Icon: <Nomonthlytargetset />,
    title: 'No monthly target set',
    pera: '11 salons',
    Route: '/insights',
  },
  {
    Icon: <Staffnotadded />,
    title: 'Staff not added / incomplete',
    pera: '13 salons',
    Route: '/insights',
  },
  {
    Icon: <SubscriptionOverdue />,
    title: 'Subscription Overdue',
    pera: '5 salons',
    Route: '/insights',
  },
]
export const GrowthData = [
  {
    head: [
      { title: 'Salon Name' },
      { title: 'Address' },
      { title: 'Health' },
      { title: 'Issue(Cr. / Gr.)' },
      { title: 'Sale /d' },
      { title: 'Appt./d' },
      { title: 'Catalog (ser. / pkg)' },
      { title: 'Promo code ( 60d)' },
      { title: 'Get feat.' },
      { title: 'Easy Share' },
      { title: 'Creative Studio' },
      { title: 'Ad manager' },
      { title: 'Comp. Msg In 30 d' },
      { title: 'Next Visit' },
      { title: 'TC Name' },
      { title: 'RM Name' },
      { title: 'FE Name' },
      { title: 'Actions' },
    ],
    body: [
      {
        id: 1,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Glamour Studio',
              },
            ],
          },
          { add: '281 Madison Street,SoHo Dis...' },
          { health: '30' },
          { issue: [{ issu1: '1', issu2: '2' }] },
          { tdData: '₹12,500' },
          { tdData: '5' },
          { tdData: '20/3' },
          { tdData: '0' },
          { tdData: '0' },
          { tdData: '10/2' },
          { tdData: '0' },
          { tdData: '0' },
          { tdData: '0' },
          { lastVisit: '12 Aug 2025' },
          { tcName: 'Ayesha Sharma' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { action: '...' },
        ],
      },
      {
        id: 2,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Chroma Lounge',
              },
            ],
          },
          { add: 'Luxe Layers Lounge, 1285' },
          { health: '12' },
          { issue: [{ issu1: '3', issu2: '2' }] },
          { tdData: '₹15,000' },
          { tdData: '10' },
          { tdData: '20/3' },
          { tdData: '2' },
          { tdData: '2' },
          { tdData: '10/4' },
          { tdData: '2' },
          { tdData: '3' },
          { tdData: '20' },
          { lastVisit: '15 Aug 2025' },
          { tcName: 'Meera Sharma' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { action: '...' },
        ],
      },
      {
        id: 3,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Maison Glow',
              },
            ],
          },
          { add: 'The Styling Suite, 45 Ke....' },
          { health: '25' },
          { issue: [{ issu1: '1', issu2: '3' }] },
          { tdData: '₹18,750' },
          { tdData: '6' },
          { tdData: '20/3' },
          { tdData: '5' },
          { tdData: '4' },
          { tdData: '20/3' },
          { tdData: '4' },
          { tdData: '5' },
          { tdData: '15' },
          { lastVisit: 'July 14 ,2025' },
          { tcName: 'Meera Sharma' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { action: '...' },
        ],
      },
      {
        id: 4,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'The Gilded Comb',
              },
            ],
          },
          { add: 'Blush & Beam Salon, Unit 5...' },
          { health: '16' },
          { issue: [{ issu1: '3', issu2: '4' }] },
          { tdData: '₹20,000' },
          { tdData: '8' },
          { tdData: '20/3' },
          { tdData: '3' },
          { tdData: '6' },
          { tdData: '11/4' },
          { tdData: '5' },
          { tdData: '2' },
          { tdData: '20' },
          { lastVisit: 'July 10 ,2025' },
          { tcName: 'Meera Sharma' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { action: '...' },
        ],
      },
      {
        id: 5,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Luxe Layers',
              },
            ],
          },
          { add: 'Radiance Hair Studio, 3rd f..' },
          { health: '35' },
          { issue: [{ issu1: '4', issu2: '3' }] },
          { tdData: '₹23,400' },
          { tdData: '12' },
          { tdData: '20/3' },
          { tdData: '5' },
          { tdData: '5' },
          { tdData: '12/4' },
          { tdData: '6' },
          { tdData: '8' },
          { tdData: '12' },
          { lastVisit: 'Sep 11 ,2025' },
          { tcName: 'Priya Nair' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { action: '...' },
        ],
      },
      {
        id: 6,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Opal & Shine',
              },
            ],
          },
          { add: 'Blush & Beam Salon, Unit 5...' },
          { health: '16' },
          { issue: [{ issu1: '2', issu2: '2' }] },
          { tdData: '₹25,000' },
          { tdData: '2' },
          { tdData: '20/3' },
          { tdData: '3' },
          { tdData: '4' },
          { tdData: '10/2' },
          { tdData: '6' },
          { tdData: '4' },
          { tdData: '20' },
          { lastVisit: 'July 10 ,2025' },
          { tcName: 'Tanya Sethi' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { action: '...' },
        ],
      },
      {
        id: 7,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'The Hair Bar',
              },
            ],
          },
          { add: 'Mirror & Mane, 61 Orchard road..' },
          { health: '19' },
          { issue: [{ issu1: '1', issu2: '3' }] },
          { tdData: '₹28,900' },
          { tdData: '4' },
          { tdData: '20/3' },
          { tdData: '4' },
          { tdData: '8' },
          { tdData: '8/1' },
          { tdData: '4' },
          { tdData: '3' },
          { tdData: '22' },
          { lastVisit: 'Aug 11 ,2025' },
          { tcName: 'Kavita Menon' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { action: '...' },
        ],
      },
      {
        id: 8,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Curl Me Crazy',
              },
            ],
          },
          { add: 'The Beauty Loft, 98 Sheikh Zayed Road' },
          { health: '24' },
          { issue: [{ issu1: '4', issu2: '2' }] },
          { tdData: '₹30,000' },
          { tdData: '9' },
          { tdData: '20/3' },
          { tdData: '5' },
          { tdData: '6' },
          { tdData: '10/5' },
          { tdData: '3' },
          { tdData: '6' },
          { tdData: '28' },
          { lastVisit: 'July 15 ,2025' },
          { tcName: 'Neha Reddy' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { action: '...' },
        ],
      },
      {
        id: 9,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Crown & Contour',
              },
            ],
          },
          { add: 'Velvet Touch Lounge, 34 Avenue des Champs' },
          { health: '28' },
          { issue: [{ issu1: '1', issu2: '2' }] },
          { tdData: '₹39,999' },
          { tdData: '8' },
          { tdData: '20/3' },
          { tdData: '7' },
          { tdData: '7' },
          { tdData: '10/2' },
          { tdData: '9' },
          { tdData: '0' },
          { tdData: '18' },
          { lastVisit: 'July 19 ,2025' },
          { tcName: 'Ayesha Sharma' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { action: '...' },
        ],
      },
      {
        id: 21,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'The Polished Look',
              },
            ],
          },
          { add: 'Braid & Bloom Studio, 200 King Street,' },
          { health: '25' },
          { issue: [{ issu1: '3', issu2: '2' }] },
          { tdData: '₹12,500' },
          { tdData: '7' },
          { tdData: '20/3' },
          { tdData: '9' },
          { tdData: '8' },
          { tdData: '12/2' },
          { tdData: '4' },
          { tdData: '4' },
          { tdData: '11' },
          { lastVisit: 'July 20 ,2025' },
          { tcName: 'Ishita Bose' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { action: '...' },
        ],
      },
      {
        id: 10,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Braid & Bloom Studio',
              },
            ],
          },
          { add: 'Crown & Contour, 12 Park Street, Ko' },
          { health: '32' },
          { issue: [{ issu1: '2', issu2: '2' }] },
          { tdData: '₹15,000' },
          { tdData: '10' },
          { tdData: '20/3' },
          { tdData: '2' },
          { tdData: '2' },
          { tdData: '11/3' },
          { tdData: '9' },
          { tdData: '2' },
          { tdData: '12' },
          { lastVisit: 'July 30 ,2025' },
          { tcName: 'Divya Malhotra' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { action: '...' },
        ],
      },
      {
        id: 11,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Luxe Layers Lounge',
              },
            ],
          },
          { add: 'Silken Strands Studio, 45 Lincoln Road' },
          { health: '34' },
          { issue: [{ issu1: '1', issu2: '3' }] },
          { tdData: '₹20,000' },
          { tdData: '12' },
          { tdData: '20/3' },
          { tdData: '1' },
          { tdData: '3' },
          { tdData: '14/3' },
          { tdData: '8' },
          { tdData: '5' },
          { tdData: '0' },
          { lastVisit: 'July 23 ,2025' },
          { tcName: 'Divya Malhotra' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { action: '...' },
        ],
      },
      {
        id: 12,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Tress & Tame Salon',
              },
            ],
          },
          { add: 'The Opal Lounge, 18 Swanston Str' },
          { health: '19' },
          { issue: [{ issu1: '2', issu2: '3' }] },
          { tdData: '₹30,000' },
          { tdData: '12' },
          { tdData: '20/3' },
          { tdData: '0' },
          { tdData: '5' },
          { tdData: '15/3' },
          { tdData: '4' },
          { tdData: '6' },
          { tdData: '23' },
          { lastVisit: 'July 24 ,2025' },
          { tcName: 'Divya Malhotra' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { action: '...' },
        ],
      },
      {
        id: 13,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Velvet Touch Lounge',
              },
            ],
          },
          { add: 'Canvas & Curls, 67 Park Avenue, Manhattan' },
          { health: '49' },
          { issue: [{ issu1: '3', issu2: '3' }] },
          { tdData: '₹39,999' },
          { tdData: '11' },
          { tdData: '20/3' },
          { tdData: '4' },
          { tdData: '6' },
          { tdData: '16/4' },
          { tdData: '5' },
          { tdData: '9' },
          { tdData: '32' },
          { lastVisit: 'Aug 10 ,2025' },
          { tcName: 'Divya Malhotra' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { action: '...' },
        ],
      },
      {
        id: 14,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Mirror & Mane',
              },
            ],
          },
          { add: 'Shear Elegance Salon, 301 Crescent Roa' },
          { health: '43' },
          { issue: [{ issu1: '4', issu2: '2' }] },
          { tdData: '₹28,900' },
          { tdData: '12' },
          { tdData: '20/3' },
          { tdData: '3' },
          { tdData: '3' },
          { tdData: '16/4' },
          { tdData: '5' },
          { tdData: '9' },
          { tdData: '32' },
          { lastVisit: 'Aug 10 ,2025' },
          { tcName: 'Divya Malhotra' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { action: '...' },
        ],
      },
      {
        id: 15,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Mirror & Mane',
              },
            ],
          },
          { add: 'Shear Elegance Salon, 301 Crescent Roa' },
          { health: '43' },
          { issue: [{ issu1: '4', issu2: '2' }] },
          { tdData: '₹28,900' },
          { tdData: '12' },
          { tdData: '20/3' },
          { tdData: '3' },
          { tdData: '3' },
          { tdData: '16/4' },
          { tdData: '5' },
          { tdData: '9' },
          { tdData: '32' },
          { lastVisit: 'Aug 10 ,2025' },
          { tcName: 'Divya Malhotra' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { action: '...' },
        ],
      },
      {
        id: 16,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Mirror & Mane',
              },
            ],
          },
          { add: 'Shear Elegance Salon, 301 Crescent Roa' },
          { health: '43' },
          { issue: [{ issu1: '4', issu2: '2' }] },
          { tdData: '₹28,900' },
          { tdData: '12' },
          { tdData: '20/3' },
          { tdData: '3' },
          { tdData: '3' },
          { tdData: '16/4' },
          { tdData: '5' },
          { tdData: '9' },
          { tdData: '32' },
          { lastVisit: 'Aug 10 ,2025' },
          { tcName: 'Divya Malhotra' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { action: '...' },
        ],
      },
      {
        id: 17,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Mirror & Mane',
              },
            ],
          },
          { add: 'Shear Elegance Salon, 301 Crescent Roa' },
          { health: '43' },
          { issue: [{ issu1: '4', issu2: '2' }] },
          { tdData: '₹28,900' },
          { tdData: '12' },
          { tdData: '20/3' },
          { tdData: '3' },
          { tdData: '3' },
          { tdData: '16/4' },
          { tdData: '5' },
          { tdData: '9' },
          { tdData: '32' },
          { lastVisit: 'Aug 10 ,2025' },
          { tcName: 'Divya Malhotra' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { action: '...' },
        ],
      },
      {
        id: 18,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Mirror & Mane',
              },
            ],
          },
          { add: 'Shear Elegance Salon, 301 Crescent Roa' },
          { health: '43' },
          { issue: [{ issu1: '4', issu2: '2' }] },
          { tdData: '₹28,900' },
          { tdData: '12' },
          { tdData: '20/3' },
          { tdData: '3' },
          { tdData: '3' },
          { tdData: '16/4' },
          { tdData: '5' },
          { tdData: '9' },
          { tdData: '32' },
          { lastVisit: 'Aug 10 ,2025' },
          { tcName: 'Divya Malhotra' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { action: '...' },
        ],
      },
      {
        id: 19,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Mirror & Mane',
              },
            ],
          },
          { add: 'Shear Elegance Salon, 301 Crescent Roa' },
          { health: '43' },
          { issue: [{ issu1: '4', issu2: '2' }] },
          { tdData: '₹28,900' },
          { tdData: '12' },
          { tdData: '20/3' },
          { tdData: '3' },
          { tdData: '3' },
          { tdData: '16/4' },
          { tdData: '5' },
          { tdData: '9' },
          { tdData: '32' },
          { lastVisit: 'Aug 10 ,2025' },
          { tcName: 'Divya Malhotra' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { action: '...' },
        ],
      },
      {
        id: 20,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Mirror & Mane',
              },
            ],
          },
          { add: 'Shear Elegance Salon, 301 Crescent Roa' },
          { health: '43' },
          { issue: [{ issu1: '4', issu2: '2' }] },
          { tdData: '₹28,900' },
          { tdData: '12' },
          { tdData: '20/3' },
          { tdData: '3' },
          { tdData: '3' },
          { tdData: '16/4' },
          { tdData: '5' },
          { tdData: '9' },
          { tdData: '32' },
          { lastVisit: 'Aug 10 ,2025' },
          { tcName: 'Divya Malhotra' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { action: '...' },
        ],
      },
    ],
  },
]

export const mudalData = [
  {
    img: '/assest/png/glamour-glow-studio.png',
    name: 'Glamour Glow Studio',
    nextVisit: ': 23 June ',
    lastVisit: ' 28 June',
    contacte: [
      {
        icon: <LocationIcon />,
        title: '123 Sparkle Ave, Glam City',
        path: '#',
      },
      {
        icon: <PhoneSmallIcon />,
        title: '55523-32324',
        path: 'tel:55523-32324',
      },
    ],
    condetions: [
      { count: 'Critical : 6' },
      {},
      { count: 'Growth : 4' },
      {},
      { count: 'Health : 8' },
    ],
    lastVisitCotent: [
      {
        heading: 'Last Visit Summary',
        data: [
          {
            icon: <SmallCalenderIcon />,
            title: 'Visit Date: ',
            titleData: ' 11 April 2025',
          },
          {
            icon: <OveralScoreIcon />,
            title: 'Overall Score : ',
            titleData: ' 35 / 50',
          },
        ],
        tableData: [
          {
            th: [{ th: 'Category' }, { th: 'Score' }, { th: 'Remarks' }],
            tdRow: [
              {
                td: [
                  { td: 'Venue Setup' },
                  { td: '9 / 10' },
                  {
                    td: 'All complete, missing cancellation policy. Could add more amenities.',
                  },
                ],
              },
              {
                td: [
                  { td: 'Catalog & Staff' },
                  { td: '8 / 10' },
                  {
                    td: 'Services added, 1 inactive staff still listed. Staff profiles need updating.',
                  },
                ],
              },
              {
                td: [
                  { td: 'Offers' },
                  { td: '6 / 10' },
                  {
                    td: 'Gift card & promo active, no membership setup yet. Explore loyalty programs..',
                  },
                ],
              },
              {
                td: [
                  { td: 'Promote Usage' },
                  { td: '5 / 10' },
                  {
                    td: 'Not yet using Get Featured or Campaign Msg. Easy Share links created but low clicks.',
                  },
                ],
              },
            ],
          },
        ],

        date: [
          { heading: 'Next Follow up date', id: 'nextFollow' },
          { heading: 'Next Visit Date', id: 'nextVisit' },
        ],
      },
    ],
    catalogStaff: [
      {
        heading: 'Last Visit Summar',
        data: [
          {
            icon: <SmallCalenderIcon />,
            title: 'Visit Date: ',
            titleData: ' 11 April 2025',
          },
          {
            icon: <OveralScoreIcon />,
            title: 'Overall Score : ',
            titleData: ' 35 / 50',
          },
        ],
        tableData: [
          {
            th: [
              { th: 'Metric' },
              { th: 'Last visit' },
              { th: 'Current visit' },
            ],
            tdRow: [
              {
                td: [
                  { td: 'Services (Count)' },
                  { td: '50 services' },
                  {
                    td: '40 services',
                  },
                ],
              },
              {
                td: [
                  { td: 'Package (Count)' },
                  { td: '10 Packages' },
                  {
                    td: '14 Packages',
                  },
                ],
              },
              {
                td: [
                  { td: 'Book-a-Look (Count)' },
                  { td: '5 look' },
                  {
                    td: '8 block',
                  },
                ],
              },
              {
                td: [
                  { td: 'Product (Count)' },
                  { td: '5 look' },
                  {
                    td: '22 Products',
                  },
                ],
              },
              {
                td: [
                  { td: 'Staff (Count)' },
                  { td: '5 staff' },
                  {
                    td: '3 staff',
                  },
                ],
              },
            ],
          },
        ],

        date: [
          { heading: 'Next Follow up date', id: 'nextFollow' },
          { heading: 'Next Visit Date', id: 'nextVisit' },
        ],
      },
    ],
    offers: [
      {
        heading: 'Offers',
        data: [
          {
            icon: <SmallCalenderIcon />,
            title: 'Visit Date: ',
            titleData: ' 11 April 2025',
          },
          {
            icon: <OveralScoreIcon />,
            title: 'Overall Score : ',
            titleData: ' 35 / 50',
          },
        ],
        tableData: [
          {
            th: [
              { th: 'Metric' },
              { th: 'Last visit' },
              { th: 'Current visit' },
            ],
            tdRow: [
              {
                td: [
                  { td: 'Voucher (Count)' },
                  { td: '100 vouchers' },
                  {
                    td: '90 Vouchers',
                  },
                ],
              },
              {
                td: [
                  { td: 'Membership (Count)' },
                  { td: '2 Plans' },
                  {
                    td: '4 Plans',
                  },
                ],
              },
              {
                td: [
                  { td: 'Promo code (Count)' },
                  { td: '500 Codes' },
                  {
                    td: '70 Codes',
                  },
                ],
              },
              {
                td: [
                  { td: 'Gift Card (Count)' },
                  { td: '10 Cards' },
                  {
                    td: '12 Cards',
                  },
                ],
              },
              {
                td: [
                  { td: 'Staff (Count)' },
                  { td: '5 staff' },
                  {
                    td: '3 staff',
                  },
                ],
              },
            ],
          },
        ],

        date: [
          { heading: 'Next Follow up date', id: 'nextFollow' },
          { heading: 'Next Visit Date', id: 'nextVisit' },
        ],
      },
    ],
    promoteUse: [
      {
        heading: 'Offers',
        data: [
          {
            icon: <SmallCalenderIcon />,
            title: 'Visit Date: ',
            titleData: ' 11 April 2025',
          },
          {
            icon: <OveralScoreIcon />,
            title: 'Overall Score : ',
            titleData: ' 35 / 50',
          },
        ],
        tableData: [
          {
            th: [
              { th: 'Metric' },
              { th: 'Last visit' },
              { th: 'Current visit' },
            ],
            tdRow: [
              {
                td: [
                  { td: 'promoteUse' },
                  { td: '7 days' },
                  {
                    td: '7 days',
                  },
                ],
              },
              {
                td: [
                  { td: 'Easy Share (No. of Links)' },
                  { td: '7 days' },
                  {
                    td: '6 days',
                  },
                ],
              },
              {
                td: [
                  { td: 'Promo code (Count)' },
                  { td: '500 Codes' },
                  {
                    td: '70 Codes',
                  },
                ],
              },
              {
                td: [
                  { td: 'Easy Share (Clicks)' },
                  { td: '500 clicks' },
                  {
                    td: '510 clicks',
                  },
                ],
              },
              {
                td: [
                  { td: 'Creative St. (No. of Temp.)' },
                  { td: '10 templates' },
                  {
                    td: '12 templates',
                  },
                ],
              },
              {
                td: [
                  { td: 'Ad Manager (No. of Days)' },
                  { td: '10 templates' },
                  {
                    td: '9 templates',
                  },
                ],
              },
              {
                td: [
                  { td: 'Campaign Msg Sent (Count)' },
                  { td: '1000 msgs' },
                  {
                    td: '1002 msgs',
                  },
                ],
              },
            ],
          },
        ],

        date: [
          { heading: 'Next Follow up date', id: 'nextFollow' },
          { heading: 'Next Visit Date', id: 'nextVisit' },
        ],
      },
    ],
    clientEnagagement: [
      {
        heading: 'Client Engagement',
        data: [
          {
            icon: <SmallCalenderIcon />,
            title: 'Visit Date: ',
            titleData: ' 11 April 2025',
          },
          {
            icon: <OveralScoreIcon />,
            title: 'Overall Score : ',
            titleData: ' 35 / 50',
          },
        ],
        tableData: [
          {
            th: [
              { th: 'Metric' },
              { th: 'Last visit' },
              { th: 'Current visit' },
            ],
            tdRow: [
              {
                td: [
                  { td: 'Appointment  Received ' },
                  { td: '150' },
                  {
                    td: '140',
                  },
                ],
              },
              {
                td: [
                  { td: 'Membership (Count)' },
                  { td: '2 Plans' },
                  {
                    td: '4 Plans',
                  },
                ],
              },
              {
                td: [
                  { td: 'Appointment  Complete ' },
                  { td: '140' },
                  {
                    td: '146',
                  },
                ],
              },
              {
                td: [
                  { td: 'Repeat Clients Visit ' },
                  { td: '80' },
                  {
                    td: '510',
                  },
                ],
              },
              {
                td: [
                  { td: 'New Client Add ' },
                  { td: '60' },
                  {
                    td: '62',
                  },
                ],
              },
              {
                td: [
                  { td: 'Total Client ' },
                  { td: '500' },
                  {
                    td: '400',
                  },
                ],
              },
              {
                td: [
                  { td: 'Review Received  ' },
                  { td: '20' },
                  {
                    td: '30',
                  },
                ],
              },
              {
                td: [
                  { td: 'Review Received ' },
                  { td: '30' },
                  {
                    td: '40',
                  },
                ],
              },
              {
                td: [
                  { td: 'Sales  ' },
                  { td: '₹50,000' },
                  {
                    td: '₹45,000',
                  },
                ],
              },
            ],
          },
        ],

        date: [
          { heading: 'Next Follow up date', id: 'nextFollow' },
          { heading: 'Next Visit Date', id: 'nextVisit' },
        ],
      },
    ],
    setUp: [
      {
        heading: 'Set UP',
        data: [
          {
            icon: <SmallCalenderIcon />,
            title: 'Visit Date: ',
            titleData: ' 11 April 2025',
          },
          {
            icon: <OveralScoreIcon />,
            title: 'Overall Score : ',
            titleData: ' 35 / 50',
          },
        ],
        tableData: [
          {
            th: [
              { th: 'Metric' },
              { th: 'Last visit' },
              { th: 'Current visit' },
            ],
            tdRow: [
              {
                td: [
                  { td: 'Appointment  Received ' },
                  { td: '150' },
                  {
                    td: '140',
                  },
                ],
              },
              {
                td: [
                  { td: 'Membership (Count)' },
                  { td: '2 Plans' },
                  {
                    td: '4 Plans',
                  },
                ],
              },
              {
                td: [
                  { td: 'Appointment  Complete ' },
                  { td: '140' },
                  {
                    td: '146',
                  },
                ],
              },
              {
                td: [
                  { td: 'Repeat Clients Visit ' },
                  { td: '80' },
                  {
                    td: '510',
                  },
                ],
              },
              {
                td: [
                  { td: 'New Client Add ' },
                  { td: '60' },
                  {
                    td: '62',
                  },
                ],
              },
              {
                td: [
                  { td: 'Total Client ' },
                  { td: '500' },
                  {
                    td: '400',
                  },
                ],
              },
              {
                td: [
                  { td: 'Review Received  ' },
                  { td: '20' },
                  {
                    td: '30',
                  },
                ],
              },
              {
                td: [
                  { td: 'Review Received ' },
                  { td: '30' },
                  {
                    td: '40',
                  },
                ],
              },
              {
                td: [
                  { td: 'Sales  ' },
                  { td: '₹50,000' },
                  {
                    td: '₹45,000',
                  },
                ],
              },
            ],
          },
        ],

        date: [
          { heading: 'Next Follow up date', id: 'nextFollow' },
          { heading: 'Next Visit Date', id: 'nextVisit' },
        ],
      },
    ],
    submit: [
      {
        heading: 'Set UP',
        data: [
          {
            icon: <SmallCalenderIcon />,
            title: 'Visit Date: ',
            titleData: ' 11 April 2025',
          },
          {
            icon: <OveralScoreIcon />,
            title: 'Overall Score : ',
            titleData: ' 35 / 50',
          },
        ],

        date: [
          { heading: 'Next Follow up date', id: 'nextFollow' },
          { heading: 'Next Visit Date', id: 'nextVisit' },
        ],
      },
    ],
  },
]

export const some = [
  {
    avatar: <Aaravsharma />,
    name: 'Aarav Sharma',
    icon: <MaleteamCard />,
    gender: 'Male',
    tag: 'TC',
    phone: '+919876500101',
    email: 'aarav.sharma@example.com',
    manages: ' 2 RM & 3 FE',
    totalSalons: 1100,
    dotclass: 'bg-green-500',
    tagclass: 'border-[#FFAB47] bg-[#FFEFDB]',
    ganderclass: 'bg-[#E4E7EB] border-[#808188]',
  },
  {
    avatar: <Priyasingh />,
    name: 'Priya Singh',
    icon: <FemaleteamCard />,
    gender: 'Female',
    tag: 'TC',
    phone: '+919876500101',
    email: 'tanya.hill@example.com',
    manages: ' 2 RM & 3 FE',
    totalSalons: 1100,
    dotclass: 'bg-red-500',
    tagclass: 'border-[#FFAB47] bg-[#FFEFDB]',
    ganderclass: 'bg-[#E4E7EB] border-[#808188]',
  },
]
export const some2 = [
  {
    avatar: <Wadewarren />,
    name: 'Wade Warren',
    icon: <MaleteamCard />,
    gender: 'Male',
    tag: 'RM',
    phone: '+919876500101',
    email: 'curtis.weaver@example.com',
    manages: ' 6FE',
    totalSalons: 1100,
    dotclass: 'bg-green-500',
    tagclass: 'border-[#8EBAF6] bg-[rgba(207,226,252,0.2)]',
    ganderclass: 'bg-[#E4E7EB] border-[#808188]',
  },
  {
    avatar: <Theresawebb />,
    name: 'Theresa Webb',
    icon: <MaleteamCard />,
    gender: 'Male',
    tag: 'RM',
    phone: '+919876500101',
    email: 'kenzi.lawson@example.com',
    manages: '6FE',
    totalSalons: 1100,
    dotclass: 'bg-red-500',
    tagclass: 'border-[#8EBAF6] bg-[rgba(207,226,252,0.2)]',
    ganderclass: 'bg-[#E4E7EB] border-[#808188]',
  },
  {
    avatar: <Darrellsteward />,
    name: 'Darrell Steward',
    icon: <FemaleteamCard />,
    gender: 'Female',
    tag: 'RM',
    phone: '+919876500101',
    email: 'michael.mitc@example.com',
    manages: '6FE',
    totalSalons: 1100,
    dotclass: 'bg-green-500',
    tagclass: 'border-[#8EBAF6] bg-[rgba(207,226,252,0.2)]',
    ganderclass: 'bg-[#E4E7EB] border-[#808188]',
  },
  {
    avatar: <Kathrynmurphy />,
    name: 'Kathryn Murphy',
    icon: <FemaleteamCard />,
    gender: 'Female',
    tag: 'RM',
    phone: '+919876500101',
    email: 'tanya.hill@example.com',
    manages: '6FE',
    totalSalons: 1100,
    dotclass: 'bg-red-500',
    tagclass: 'border-[#8EBAF6] bg-[rgba(207,226,252,0.2)]',
    ganderclass: 'bg-[#E4E7EB] border-[#808188]',
  },
]
export const some3 = [
  {
    avatar: <Wadearren />,
    name: 'Wade Warren',
    icon: <MaleteamCard />,
    gender: 'Male',
    tag: 'FE',
    phone: '+919876500101',
    email: 'bill.sanders@example.com',
    totalSalons: 1100,
    dotclass: 'bg-green-500',
    tagclass: 'border-[#31A553] bg-[#E3F7E9]',
    ganderclass: 'bg-[#E4E7EB] border-[#808188]',
  },
  {
    avatar: <Floydmiles />,
    name: 'Floyd Miles',
    icon: <FemaleteamCard />,
    gender: 'Female',
    tag: 'FE',
    phone: '+919876500101',
    email: 'tanya.hill@example.com',
    totalSalons: 1100,
    dotclass: 'bg-green-500',
    tagclass: 'border-[#31A553] bg-[#E3F7E9]',
    ganderclass: 'bg-[#E4E7EB] border-[#808188]',
  },
  {
    avatar: <Arlenemccoy />,
    name: 'Arlene McCoy',
    icon: <MaleteamCard />,
    gender: 'Male',
    tag: 'FE',
    phone: '+919876500101',
    email: 'debbie.baker@example.com',
    totalSalons: 1100,
    dotclass: 'bg-red-500',
    tagclass: 'border-[#31A553] bg-[#E3F7E9]',
    ganderclass: 'bg-[#E4E7EB] border-[#808188]',
  },
  {
    avatar: <Arlenemccoy />,
    name: 'Arlene McCoy',
    icon: <MaleteamCard />,
    gender: 'Male',
    tag: 'FE',
    phone: '+919876500101',
    email: 'sara.cruz@example.com',
    totalSalons: 1100,
    dotclass: 'bg-green-500',
    tagclass: 'border-[#31A553] bg-[#E3F7E9]',
    ganderclass: 'bg-[#E4E7EB] border-[#808188]',
  },
  {
    avatar: <Wadearren />,
    name: 'Wade Warren',
    icon: <MaleteamCard />,
    gender: 'Male',
    tag: 'FE',
    phone: '+919876500101',
    email: 'bill.sanders@example.com',
    totalSalons: 1100,
    dotclass: 'bg-green-500',
    tagclass: 'border-[#31A553] bg-[#E3F7E9]',
    ganderclass: 'bg-[#E4E7EB] border-[#808188]',
  },
  {
    avatar: <Floydmiles />,
    name: 'Darrell Steward',
    icon: <MaleteamCard />,
    gender: 'Male',
    tag: 'FE',
    phone: '+919876500101',
    email: 'tanya.hill@example.com',
    totalSalons: 1100,
    dotclass: 'bg-red-500',
    tagclass: 'border-[#31A553] bg-[#E3F7E9]',
    ganderclass: 'bg-[#E4E7EB] border-[#808188]',
  },
  {
    avatar: <Arlenemccoy />,
    name: 'Jane Cooper',
    icon: <MaleteamCard />,
    gender: 'Male',
    tag: 'FE',
    phone: '+919876500101',
    email: 'jessica.hanson@example.com',
    totalSalons: 1100,
    dotclass: 'bg-green-500',
    tagclass: 'border-[#31A553] bg-[#E3F7E9]',
    ganderclass: 'bg-[#E4E7EB] border-[#808188]',
  },
  {
    avatar: <Arlenemccoy />,
    name: 'Kathryn Murphy',
    icon: <FemaleteamCard />,
    gender: 'FeMale',
    tag: 'FE',
    phone: '+919876500101',
    email: 'kenzi.lawson@example.com',
    totalSalons: 1100,
    dotclass: 'bg-red-500',
    tagclass: 'border-[#31A553] bg-[#E3F7E9]',
    ganderclass: 'bg-[#E4E7EB] border-[#808188]',
  },
  {
    avatar: <Arlenemccoy />,
    name: 'Courtney Henry',
    icon: <MaleteamCard />,
    gender: 'Male',
    tag: 'FE',
    phone: '+919876500101',
    email: 'michelle.rivera@example..com',
    totalSalons: 1100,
    dotclass: 'bg-green-500',
    tagclass: 'border-[#31A553] bg-[#E3F7E9]',
    ganderclass: 'bg-[#E4E7EB] border-[#808188]',
  },
  {
    avatar: <Arlenemccoy />,
    name: 'Guy Hawkins',
    icon: <MaleteamCard />,
    gender: 'Male',
    tag: 'FE',
    phone: '+919876500101',
    email: 'kenzi.lawson@example.com',
    totalSalons: 1100,
    dotclass: 'bg-green-500',
    tagclass: 'border-[#31A553] bg-[#E3F7E9]',
    ganderclass: 'bg-[#E4E7EB] border-[#808188]',
  },
]
export const serviceData = [
  { name: 'Mon', value: 40000 },
  { name: 'Tue', value: 28000 },
  { name: 'Wed', value: 46000 },
  { name: 'Thu', value: 33000 },
  { name: 'Fri', value: 19000 },
  { name: 'Sat', value: 26000 },
  { name: 'Sun', value: 42000 },
]
export const packageData = [
  { name: 'Mon', value: 340000 },
  { name: 'Tue', value: 190000 },
  { name: 'Wed', value: 430000 },
  { name: 'Thu', value: 260000 },
  { name: 'Fri', value: 310000 },
  { name: 'Sat', value: 490000 },
  { name: 'Sun', value: 120000 },
]
export const productData = [
  { name: 'Mon', value: 31000 },
  { name: 'Tue', value: 14000 },
  { name: 'Wed', value: 28000 },
  { name: 'Thu', value: 48000 },
  { name: 'Fri', value: 37000 },
  { name: 'Sat', value: 19000 },
  { name: 'Sun', value: 42000 },
]
export const voucherData = [
  { name: 'Mon', value: 25000 },
  { name: 'Tue', value: 34000 },
  { name: 'Wed', value: 46000 },
  { name: 'Thu', value: 33000 },
  { name: 'Fri', value: 19000 },
  { name: 'Sat', value: 26000 },
  { name: 'Sun', value: 12000 },
]
export const membershipData = [
  { name: 'Mon', value: 26000 },
  { name: 'Tue', value: 13000 },
  { name: 'Wed', value: 30000 },
  { name: 'Thu', value: 46000 },
  { name: 'Fri', value: 19500 },
  { name: 'Sat', value: 36000 },
  { name: 'Sun', value: 12000 },
]
export const giftcardData = [
  { name: 'Mon', value: 35000 },
  { name: 'Tue', value: 19000 },
  { name: 'Wed', value: 42000 },
  { name: 'Thu', value: 11000 },
  { name: 'Fri', value: 30500 },
  { name: 'Sat', value: 48000 },
  { name: 'Sun', value: 38000 },
]
export const top10Services = [
  { name: 'Hair Spa', value: 8.8 },
  { name: 'Hair Color', value: 7.0 },
  { name: 'Cutting', value: 5.0 },
  { name: 'Face Wash', value: 3.8 },
  { name: 'Nail art', value: 9.4 },
  { name: 'Blow out', value: 6.6 },
  { name: 'Manicure', value: 8.8 },
  { name: 'Keratin', value: 7.8 },
  { name: 'Waxing', value: 4.7 },
  { name: 'Threading', value: 3.0 },
]
export const top10SellingProducts = [
  { name: 'Skin Care', value: 9.4 },
  { name: 'Makeup', value: 4.4 },
  { name: 'Masks', value: 7.0 },
  { name: 'Aloe Vera', value: 6.3 },
  { name: 'Retional', value: 9.8 },
  { name: 'Perfumes', value: 3.0 },
  { name: 'Scrubs', value: 3.9 },
  { name: 'Lakme', value: 6.0 },
  { name: 'Clinique', value: 8.8 },
  { name: 'Fragrances', value: 7.1 },
]
export const RegisteredData = [
  {
    head: [
      { title: 'Salon Name' },
      { title: 'City / Area' },
      { title: 'Health' },
      { title: 'Issue' },
      { title: 'Appt. ' },
      { title: 'Sales' },
      { title: 'TC Name' },
      { title: 'RM Name' },
      { title: 'FE Name' },
      { title: 'Last Visit' },
      { title: 'Next Visit' },
      { title: 'Actions' },
    ],
    body: [
      {
        id: 1,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Chroma Lounge',
              },
            ],
          },
          { add: 'MG Road, Banglore' },
          { health: '45' },
          { issue: [{ issu1: '2', issu2: '3' }] },
          { tdData: '₹150' },
          { tdData: '80' },
          { tcName: 'Amitabh Bachan' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { lastVisit: '12 Aug 2025' },
          { nextVisit: '12 Aug 2025' },
          { action: '...' },
        ],
      },
      {
        id: 2,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Chroma Lounge',
              },
            ],
          },
          { add: 'MG Road, Banglore' },
          { health: '45' },
          { issue: [{ issu1: '2', issu2: '3' }] },
          { tdData: '₹150' },
          { tdData: '80' },
          { tcName: 'Amitabh Bachan' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { lastVisit: '12 Aug 2025' },
          { nextVisit: '12 Aug 2025' },
          { action: '...' },
        ],
      },
      {
        id: 3,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Chroma Lounge',
              },
            ],
          },
          { add: 'MG Road, Banglore' },
          { health: '45' },
          { issue: [{ issu1: '2', issu2: '3' }] },
          { tdData: '₹150' },
          { tdData: '80' },
          { tcName: 'Amitabh Bachan' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { lastVisit: '12 Aug 2025' },
          { nextVisit: '12 Aug 2025' },
          { action: '...' },
        ],
      },
      {
        id: 4,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Chroma Lounge',
              },
            ],
          },
          { add: 'MG Road, Banglore' },
          { health: '45' },
          { issue: [{ issu1: '2', issu2: '3' }] },
          { tdData: '₹150' },
          { tdData: '80' },
          { tcName: 'Amitabh Bachan' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { lastVisit: '12 Aug 2025' },
          { nextVisit: '12 Aug 2025' },
          { action: '...' },
        ],
      },
      {
        id: 5,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Chroma Lounge',
              },
            ],
          },
          { add: 'MG Road, Banglore' },
          { health: '45' },
          { issue: [{ issu1: '2', issu2: '3' }] },
          { tdData: '₹150' },
          { tdData: '80' },
          { tcName: 'Amitabh Bachan' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { lastVisit: '12 Aug 2025' },
          { nextVisit: '12 Aug 2025' },
          { action: '...' },
        ],
      },
      {
        id: 6,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Chroma Lounge',
              },
            ],
          },
          { add: 'MG Road, Banglore' },
          { health: '45' },
          { issue: [{ issu1: '2', issu2: '3' }] },
          { tdData: '₹150' },
          { tdData: '80' },
          { tcName: 'Amitabh Bachan' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { lastVisit: '12 Aug 2025' },
          { nextVisit: '12 Aug 2025' },
          { action: '...' },
        ],
      },
      {
        id: 7,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Chroma Lounge',
              },
            ],
          },
          { add: 'MG Road, Banglore' },
          { health: '45' },
          { issue: [{ issu1: '2', issu2: '3' }] },
          { tdData: '₹150' },
          { tdData: '80' },
          { tcName: 'Amitabh Bachan' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { lastVisit: '12 Aug 2025' },
          { nextVisit: '12 Aug 2025' },
          { action: '...' },
        ],
      },
      {
        id: 8,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Chroma Lounge',
              },
            ],
          },
          { add: 'MG Road, Banglore' },
          { health: '45' },
          { issue: [{ issu1: '2', issu2: '3' }] },
          { tdData: '₹150' },
          { tdData: '80' },
          { tcName: 'Amitabh Bachan' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { lastVisit: '12 Aug 2025' },
          { nextVisit: '12 Aug 2025' },
          { action: '...' },
        ],
      },
      {
        id: 9,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Chroma Lounge',
              },
            ],
          },
          { add: 'MG Road, Banglore' },
          { health: '45' },
          { issue: [{ issu1: '2', issu2: '3' }] },
          { tdData: '₹150' },
          { tdData: '80' },
          { tcName: 'Amitabh Bachan' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { lastVisit: '12 Aug 2025' },
          { nextVisit: '12 Aug 2025' },
          { action: '...' },
        ],
      },
      {
        id: 18,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Chroma Lounge',
              },
            ],
          },
          { add: 'MG Road, Banglore' },
          { health: '45' },
          { issue: [{ issu1: '2', issu2: '3' }] },
          { tdData: '₹150' },
          { tdData: '80' },
          { tcName: 'Amitabh Bachan' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { lastVisit: '12 Aug 2025' },
          { nextVisit: '12 Aug 2025' },
          { action: '...' },
        ],
      },
      {
        id: 10,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Chroma Lounge',
              },
            ],
          },
          { add: 'MG Road, Banglore' },
          { health: '45' },
          { issue: [{ issu1: '2', issu2: '3' }] },
          { tdData: '₹150' },
          { tdData: '80' },
          { tcName: 'Amitabh Bachan' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { lastVisit: '12 Aug 2025' },
          { nextVisit: '12 Aug 2025' },
          { action: '...' },
        ],
      },
      {
        id: 11,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Chroma Lounge',
              },
            ],
          },
          { add: 'MG Road, Banglore' },
          { health: '45' },
          { issue: [{ issu1: '2', issu2: '3' }] },
          { tdData: '₹150' },
          { tdData: '80' },
          { tcName: 'Amitabh Bachan' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { lastVisit: '12 Aug 2025' },
          { nextVisit: '12 Aug 2025' },
          { action: '...' },
        ],
      },
      {
        id: 12,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Chroma Lounge',
              },
            ],
          },
          { add: 'MG Road, Banglore' },
          { health: '45' },
          { issue: [{ issu1: '2', issu2: '3' }] },
          { tdData: '₹150' },
          { tdData: '80' },
          { tcName: 'Amitabh Bachan' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { lastVisit: '12 Aug 2025' },
          { nextVisit: '12 Aug 2025' },
          { action: '...' },
        ],
      },
      {
        id: 13,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Chroma Lounge',
              },
            ],
          },
          { add: 'MG Road, Banglore' },
          { health: '45' },
          { issue: [{ issu1: '2', issu2: '3' }] },
          { tdData: '₹150' },
          { tdData: '80' },
          { tcName: 'Amitabh Bachan' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { lastVisit: '12 Aug 2025' },
          { nextVisit: '12 Aug 2025' },
          { action: '...' },
        ],
      },
      {
        id: 14,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Chroma Lounge',
              },
            ],
          },
          { add: 'MG Road, Banglore' },
          { health: '45' },
          { issue: [{ issu1: '2', issu2: '3' }] },
          { tdData: '₹150' },
          { tdData: '80' },
          { tcName: 'Amitabh Bachan' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { lastVisit: '12 Aug 2025' },
          { nextVisit: '12 Aug 2025' },
          { action: '...' },
        ],
      },
      {
        id: 15,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Chroma Lounge',
              },
            ],
          },
          { add: 'MG Road, Banglore' },
          { health: '45' },
          { issue: [{ issu1: '2', issu2: '3' }] },
          { tdData: '₹150' },
          { tdData: '80' },
          { tcName: 'Amitabh Bachan' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { lastVisit: '12 Aug 2025' },
          { nextVisit: '12 Aug 2025' },
          { action: '...' },
        ],
      },
      {
        id: 16,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Chroma Lounge',
              },
            ],
          },
          { add: 'MG Road, Banglore' },
          { health: '45' },
          { issue: [{ issu1: '2', issu2: '3' }] },
          { tdData: '₹150' },
          { tdData: '80' },
          { tcName: 'Amitabh Bachan' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { lastVisit: '12 Aug 2025' },
          { nextVisit: '12 Aug 2025' },
          { action: '...' },
        ],
      },
      {
        id: 17,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Chroma Lounge',
              },
            ],
          },
          { add: 'MG Road, Banglore' },
          { health: '45' },
          { issue: [{ issu1: '2', issu2: '3' }] },
          { tdData: '₹150' },
          { tdData: '80' },
          { tcName: 'Amitabh Bachan' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { lastVisit: '12 Aug 2025' },
          { nextVisit: '12 Aug 2025' },
          { action: '...' },
        ],
      },
    ],
  },
]
export const ProspectiveData = [
  {
    head: [
      { title: 'Salon Name' },
      { title: 'City / Area' },
      { title: 'Contact Person' },
      { title: 'Phone no.' },
      { title: 'Size(seats)' },
      { title: 'Manage' },
      { title: 'Grow' },
      { title: 'Promote ' },
      { title: 'Overall Interest' },
      { title: 'Last Visit' },
      { title: 'Follow up' },
      { title: 'Remarks' },
      { title: 'TC Name' },
      { title: 'RM Name' },
      { title: 'FE Name' },
      { title: 'Actions' },
    ],
    body: [
      {
        id: 1,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Radiance Hair Studio',
              },
            ],
          },
          { add: 'Brigade Road, Bangalore' },
          { health: 'John Smith (owner)' },
          { tdData: '23249-39212' },
          { tdData: '0-3' },
          { tdData: '4.5' },
          { tdData: '3.0' },
          { tdData: '3.5' },
          { tdData: '1/5' },
          { lastVisit: 'July 14 ,2025' },
          { tdData: 'July 19 ,2025' },
          { tdData: 'Wants to onboard ASAP. F' },
          { tcName: 'Ayesha Sharma' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { action: '...' },
        ],
      },
      {
        id: 2,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Urban Trendz',
              },
            ],
          },
          { add: 'Linking Road, Mumbai' },
          { health: 'Varun Mehta (owner)' },
          { tdData: '91234-56789' },
          { tdData: '4-7' },
          { tdData: '3.0' },
          { tdData: '4.0' },
          { tdData: '3.0' },
          { tdData: '2/5' },
          { lastVisit: 'July 14 ,2025' },
          { tdData: 'July 19 ,2025' },
          { tdData: 'Wants to onboard ASAP. F' },
          { tcName: 'Ayesha Sharma' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { action: '...' },
        ],
      },
      {
        id: 3,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Radiance Hair Studio',
              },
            ],
          },
          { add: 'Brigade Road, Bangalore' },
          { health: 'John Smith (owner)' },
          { tdData: '23249-39212' },
          { tdData: '0-3' },
          { tdData: '4.5' },
          { tdData: '3.0' },
          { tdData: '3.5' },
          { tdData: '1/5' },
          { lastVisit: 'July 14 ,2025' },
          { tdData: 'July 19 ,2025' },
          { tdData: 'Wants to onboard ASAP. F' },
          { tcName: 'Ayesha Sharma' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { action: '...' },
        ],
      },
      {
        id: 4,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Radiance Hair Studio',
              },
            ],
          },
          { add: 'Brigade Road, Bangalore' },
          { health: 'John Smith (owner)' },
          { tdData: '23249-39212' },
          { tdData: '0-3' },
          { tdData: '4.5' },
          { tdData: '3.0' },
          { tdData: '3.5' },
          { tdData: '1/5' },
          { lastVisit: 'July 14 ,2025' },
          { tdData: 'July 19 ,2025' },
          { tdData: 'Wants to onboard ASAP. F' },
          { tcName: 'Ayesha Sharma' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { action: '...' },
        ],
      },
      {
        id: 5,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Radiance Hair Studio',
              },
            ],
          },
          { add: 'Brigade Road, Bangalore' },
          { health: 'John Smith (owner)' },
          { tdData: '23249-39212' },
          { tdData: '0-3' },
          { tdData: '4.5' },
          { tdData: '3.0' },
          { tdData: '3.5' },
          { tdData: '1/5' },
          { lastVisit: 'July 14 ,2025' },
          { tdData: 'July 19 ,2025' },
          { tdData: 'Wants to onboard ASAP. F' },
          { tcName: 'Ayesha Sharma' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { action: '...' },
        ],
      },
      {
        id: 6,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Radiance Hair Studio',
              },
            ],
          },
          { add: 'Brigade Road, Bangalore' },
          { health: 'John Smith (owner)' },
          { tdData: '23249-39212' },
          { tdData: '0-3' },
          { tdData: '4.5' },
          { tdData: '3.0' },
          { tdData: '3.5' },
          { tdData: '1/5' },
          { lastVisit: 'July 14 ,2025' },
          { tdData: 'July 19 ,2025' },
          { tdData: 'Wants to onboard ASAP. F' },
          { tcName: 'Ayesha Sharma' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { action: '...' },
        ],
      },
      {
        id: 7,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Radiance Hair Studio',
              },
            ],
          },
          { add: 'Brigade Road, Bangalore' },
          { health: 'John Smith (owner)' },
          { tdData: '23249-39212' },
          { tdData: '0-3' },
          { tdData: '4.5' },
          { tdData: '3.0' },
          { tdData: '3.5' },
          { tdData: '1/5' },
          { lastVisit: 'July 14 ,2025' },
          { tdData: 'July 19 ,2025' },
          { tdData: 'Wants to onboard ASAP. F' },
          { tcName: 'Ayesha Sharma' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { action: '...' },
        ],
      },
      {
        id: 8,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Radiance Hair Studio',
              },
            ],
          },
          { add: 'Brigade Road, Bangalore' },
          { health: 'John Smith (owner)' },
          { tdData: '23249-39212' },
          { tdData: '0-3' },
          { tdData: '4.5' },
          { tdData: '3.0' },
          { tdData: '3.5' },
          { tdData: '1/5' },
          { lastVisit: 'July 14 ,2025' },
          { tdData: 'July 19 ,2025' },
          { tdData: 'Wants to onboard ASAP. F' },
          { tcName: 'Ayesha Sharma' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { action: '...' },
        ],
      },
      {
        id: 9,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Radiance Hair Studio',
              },
            ],
          },
          { add: 'Brigade Road, Bangalore' },
          { health: 'John Smith (owner)' },
          { tdData: '23249-39212' },
          { tdData: '0-3' },
          { tdData: '4.5' },
          { tdData: '3.0' },
          { tdData: '3.5' },
          { tdData: '1/5' },
          { lastVisit: 'July 14 ,2025' },
          { tdData: 'July 19 ,2025' },
          { tdData: 'Wants to onboard ASAP. F' },
          { tcName: 'Ayesha Sharma' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { action: '...' },
        ],
      },

      {
        id: 10,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Radiance Hair Studio',
              },
            ],
          },
          { add: 'Brigade Road, Bangalore' },
          { health: 'John Smith (owner)' },
          { tdData: '23249-39212' },
          { tdData: '0-3' },
          { tdData: '4.5' },
          { tdData: '3.0' },
          { tdData: '3.5' },
          { tdData: '1/5' },
          { lastVisit: 'July 14 ,2025' },
          { tdData: 'July 19 ,2025' },
          { tdData: 'Wants to onboard ASAP. F' },
          { tcName: 'Ayesha Sharma' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { action: '...' },
        ],
      },
      {
        id: 11,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Radiance Hair Studio',
              },
            ],
          },
          { add: 'Brigade Road, Bangalore' },
          { health: 'John Smith (owner)' },
          { tdData: '23249-39212' },
          { tdData: '0-3' },
          { tdData: '4.5' },
          { tdData: '3.0' },
          { tdData: '3.5' },
          { tdData: '1/5' },
          { lastVisit: 'July 14 ,2025' },
          { tdData: 'July 19 ,2025' },
          { tdData: 'Wants to onboard ASAP. F' },
          { tcName: 'Ayesha Sharma' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { action: '...' },
        ],
      },
      {
        id: 12,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Radiance Hair Studio',
              },
            ],
          },
          { add: 'Brigade Road, Bangalore' },
          { health: 'John Smith (owner)' },
          { tdData: '23249-39212' },
          { tdData: '0-3' },
          { tdData: '4.5' },
          { tdData: '3.0' },
          { tdData: '3.5' },
          { tdData: '1/5' },
          { lastVisit: 'July 14 ,2025' },
          { tdData: 'July 19 ,2025' },
          { tdData: 'Wants to onboard ASAP. F' },
          { tcName: 'Ayesha Sharma' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { action: '...' },
        ],
      },
      {
        id: 13,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Radiance Hair Studio',
              },
            ],
          },
          { add: 'Brigade Road, Bangalore' },
          { health: 'John Smith (owner)' },
          { tdData: '23249-39212' },
          { tdData: '0-3' },
          { tdData: '4.5' },
          { tdData: '3.0' },
          { tdData: '3.5' },
          { tdData: '1/5' },
          { lastVisit: 'July 14 ,2025' },
          { tdData: 'July 19 ,2025' },
          { tdData: 'Wants to onboard ASAP. F' },
          { tcName: 'Ayesha Sharma' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { action: '...' },
        ],
      },
      {
        id: 14,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Radiance Hair Studio',
              },
            ],
          },
          { add: 'Brigade Road, Bangalore' },
          { health: 'John Smith (owner)' },
          { tdData: '23249-39212' },
          { tdData: '0-3' },
          { tdData: '4.5' },
          { tdData: '3.0' },
          { tdData: '3.5' },
          { tdData: '1/5' },
          { lastVisit: 'July 14 ,2025' },
          { tdData: 'July 19 ,2025' },
          { tdData: 'Wants to onboard ASAP. F' },
          { tcName: 'Ayesha Sharma' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { action: '...' },
        ],
      },
      {
        id: 15,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Radiance Hair Studio',
              },
            ],
          },
          { add: 'Brigade Road, Bangalore' },
          { health: 'John Smith (owner)' },
          { tdData: '23249-39212' },
          { tdData: '0-3' },
          { tdData: '4.5' },
          { tdData: '3.0' },
          { tdData: '3.5' },
          { tdData: '1/5' },
          { lastVisit: 'July 14 ,2025' },
          { tdData: 'July 19 ,2025' },
          { tdData: 'Wants to onboard ASAP. F' },
          { tcName: 'Ayesha Sharma' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { action: '...' },
        ],
      },
      {
        id: 16,
        td: [
          {
            saloneName: [
              {
                img: '/assest/png/salone-small-img.png',
                name: 'Radiance Hair Studio',
              },
            ],
          },
          { add: 'Brigade Road, Bangalore' },
          { health: 'John Smith (owner)' },
          { tdData: '23249-39212' },
          { tdData: '0-3' },
          { tdData: '4.5' },
          { tdData: '3.0' },
          { tdData: '3.5' },
          { tdData: '1/5' },
          { lastVisit: 'July 14 ,2025' },
          { tdData: 'July 19 ,2025' },
          { tdData: 'Wants to onboard ASAP. F' },
          { tcName: 'Ayesha Sharma' },
          { rmName: 'Rhea Malhotra' },
          { feName: 'Neha Singh' },
          { action: '...' },
        ],
      },
    ],
  },
]

export const tcOptions = [
  { id: 1, label: 'Aarav Sharma', avatar: 'https://i.pravatar.cc/40?img=1' },
  { id: 2, label: 'Priya Patel', initials: 'PP' },
  { id: 3, label: 'Ananya Iyer', initials: 'AI' },
  { id: 4, label: 'Rohan Gupta', initials: 'RG' },
  { id: 5, label: 'Saanvi Kapoor', initials: 'SK' },
  { id: 6, label: 'Karan Mehra', initials: 'KM' },
  { id: 7, label: 'Nisha Desai', initials: 'ND' },
  { id: 8, label: 'Rahul Singh', initials: 'RS' },
  { id: 9, label: 'Pooja Verma', initials: 'PV' },
  { id: 10, label: 'Vikram Joshi', initials: 'VJ' },
]
export const VisiteReportData = [
  {
    head: [
      { title: 'Partner' },
      { title: 'Visit Id' },
      { title: 'Salon Name' },
      { title: 'Address & Contact' },
      { title: 'Date & Time' },
      { title: 'Status' },
      { title: 'TC Name' },
      { title: 'RM Name' },
      { title: 'FE Name' },
      { title: 'Actions' },
    ],
    body: [
      {
        id: 1,
        td: [
          { tdData: <DotColor className="bg-[green] " title="" /> },
          { add: 'VISIT-09999' },
          { health: 'Glamistry Salon' },
          { tdData: '1234 Glamour St, City, State' },
          { tdData: '12 Aug 2025, 10:00 AM' },
          { tdData: <DotColor className="bg-[green] " title="Completed" /> },
          { tcName: 'Aditi Singh' },
          { rmName: 'Bessie Cooper' },
          { feName: 'Leslie Alexander' },
          { action: '...' },
        ],
      },
      {
        id: 2,
        td: [
          { tdData: <DotColor className="bg-[#8EBAF6] " title="" /> },
          { add: 'VIS-009' },
          { health: 'Looks Salon' },
          { tdData: '2715 Ash Dr. San Jose, South Dakota 83475' },
          { tdData: '16/07/2024' },
          { tdData: <DotColor className="bg-[#FFAB47] " title="Planned" /> },
          { tcName: 'Floyd Miles' },
          { rmName: 'Esther Howard' },
          { feName: 'Ronald Richards' },
          { action: '...' },
        ],
      },
      {
        id: 3,
        td: [
          { tdData: <DotColor className="bg-[green]" title="" /> },
          { add: 'SVST-025' },
          { health: 'The Blow Bar' },
          { tdData: '8502 Preston Rd. Inglewood, M' },
          { tdData: '17/07/2024 ' },
          { tdData: <DotColor className="bg-[red] " title="Expired" /> },
          { tcName: 'Albert Flores' },
          { rmName: 'Albert Flores' },
          { feName: 'Marvin McKinney' },
          { action: '...' },
        ],
      },
      {
        id: 4,
        td: [
          { tdData: <DotColor className="bg-[#8EBAF6] " title="" /> },
          { add: 'CL-V001' },
          { health: 'Mirror & Mane' },
          { tdData: '3517 W. Gray St. Utica, Pennsylvania 57867' },
          { tdData: '18/07/2024 ' },
          { tdData: <DotColor className="bg-[green] " title="Completed" /> },
          { tcName: 'Floyd Miles' },
          { rmName: 'Esther Howard' },
          { feName: 'Ronald Richards' },
          { action: '...' },
        ],
      },
      {
        id: 5,
        td: [
          { tdData: <DotColor className="bg-[#8EBAF6] " title="" /> },
          { add: 'CL-V001' },
          { health: 'Mirror & Mane' },
          { tdData: '3517 W. Gray St. Utica, Pennsylvania 57867' },
          { tdData: '18/07/2024 ' },
          { tdData: <DotColor className="bg-[green] " title="Completed" /> },
          { tcName: 'Floyd Miles' },
          { rmName: 'Esther Howard' },
          { feName: 'Ronald Richards' },
          { action: '...' },
        ],
      },
      {
        id: 6,
        td: [
          { tdData: <DotColor className="bg-[#8EBAF6] " title="" /> },
          { add: 'CL-V001' },
          { health: 'Mirror & Mane' },
          { tdData: '3517 W. Gray St. Utica, Pennsylvania 57867' },
          { tdData: '18/07/2024 ' },
          { tdData: <DotColor className="bg-[green] " title="Completed" /> },
          { tcName: 'Floyd Miles' },
          { rmName: 'Esther Howard' },
          { feName: 'Ronald Richards' },
          { action: '...' },
        ],
      },
      {
        id: 7,
        td: [
          { tdData: <DotColor className="bg-[#8EBAF6] " title="" /> },
          { add: 'CL-V001' },
          { health: 'Mirror & Mane' },
          { tdData: '3517 W. Gray St. Utica, Pennsylvania 57867' },
          { tdData: '18/07/2024 ' },
          { tdData: <DotColor className="bg-[green] " title="Completed" /> },
          { tcName: 'Floyd Miles' },
          { rmName: 'Esther Howard' },
          { feName: 'Ronald Richards' },
          { action: '...' },
        ],
      },
      {
        id: 8,
        td: [
          { tdData: <DotColor className="bg-[#8EBAF6] " title="" /> },
          { add: 'CL-V001' },
          { health: 'Mirror & Mane' },
          { tdData: '3517 W. Gray St. Utica, Pennsylvania 57867' },
          { tdData: '18/07/2024 ' },
          { tdData: <DotColor className="bg-[green] " title="Completed" /> },
          { tcName: 'Floyd Miles' },
          { rmName: 'Esther Howard' },
          { feName: 'Ronald Richards' },
          { action: '...' },
        ],
      },
      {
        id: 9,
        td: [
          { tdData: <DotColor className="bg-[#8EBAF6] " title="" /> },
          { add: 'CL-V001' },
          { health: 'Mirror & Mane' },
          { tdData: '3517 W. Gray St. Utica, Pennsylvania 57867' },
          { tdData: '18/07/2024 ' },
          { tdData: <DotColor className="bg-[green] " title="Completed" /> },
          { tcName: 'Floyd Miles' },
          { rmName: 'Esther Howard' },
          { feName: 'Ronald Richards' },
          { action: '...' },
        ],
      },
      {
        id: 10,
        td: [
          { tdData: <DotColor className="bg-[#8EBAF6] " title="" /> },
          { add: 'CL-V001' },
          { health: 'Mirror & Mane' },
          { tdData: '3517 W. Gray St. Utica, Pennsylvania 57867' },
          { tdData: '18/07/2024 ' },
          { tdData: <DotColor className="bg-[green] " title="Completed" /> },
          { tcName: 'Floyd Miles' },
          { rmName: 'Esther Howard' },
          { feName: 'Ronald Richards' },
          { action: '...' },
        ],
      },
      {
        id: 11,
        td: [
          { tdData: <DotColor className="bg-[#8EBAF6] " title="" /> },
          { add: 'CL-V001' },
          { health: 'Mirror & Mane' },
          { tdData: '3517 W. Gray St. Utica, Pennsylvania 57867' },
          { tdData: '18/07/2024 ' },
          { tdData: <DotColor className="bg-[green] " title="Completed" /> },
          { tcName: 'Floyd Miles' },
          { rmName: 'Esther Howard' },
          { feName: 'Ronald Richards' },
          { action: '...' },
        ],
      },
      {
        id: 12,
        td: [
          { tdData: <DotColor className="bg-[#8EBAF6] " title="" /> },
          { add: 'CL-V001' },
          { health: 'Mirror & Mane' },
          { tdData: '3517 W. Gray St. Utica, Pennsylvania 57867' },
          { tdData: '18/07/2024 ' },
          { tdData: <DotColor className="bg-[green] " title="Completed" /> },
          { tcName: 'Floyd Miles' },
          { rmName: 'Esther Howard' },
          { feName: 'Ronald Richards' },
          { action: '...' },
        ],
      },
      {
        id: 13,
        td: [
          { tdData: <DotColor className="bg-[#8EBAF6] " title="" /> },
          { add: 'CL-V001' },
          { health: 'Mirror & Mane' },
          { tdData: '3517 W. Gray St. Utica, Pennsylvania 57867' },
          { tdData: '18/07/2024 ' },
          { tdData: <DotColor className="bg-[green] " title="Completed" /> },
          { tcName: 'Floyd Miles' },
          { rmName: 'Esther Howard' },
          { feName: 'Ronald Richards' },
          { action: '...' },
        ],
      },
      {
        id: 14,
        td: [
          { tdData: <DotColor className="bg-[#8EBAF6] " title="" /> },
          { add: 'CL-V001' },
          { health: 'Mirror & Mane' },
          { tdData: '3517 W. Gray St. Utica, Pennsylvania 57867' },
          { tdData: '18/07/2024 ' },
          { tdData: <DotColor className="bg-[green] " title="Completed" /> },
          { tcName: 'Floyd Miles' },
          { rmName: 'Esther Howard' },
          { feName: 'Ronald Richards' },
          { action: '...' },
        ],
      },
    ],
  },
]

export const Ti = [
  { Header: 'Ids', accessor: 'id' },
  { Header: 'Salon Name', accessor: 'salon' },
  { Header: 'Date & Time', accessor: 'dateTime' },
  { Header: 'Issue', accessor: 'issue' },
  { Header: 'Catalog & Staff', accessor: 'catalogStaff' },
  { Header: 'Offer', accessor: 'offer' },
  { Header: 'Promote', accessor: 'promote' },
  { Header: 'Client', accessor: 'client' },
  { Header: 'Set Up', accessor: 'setUp' },
  { Header: 'Status', accessor: 'status' },
  { Header: 'Remarks', accessor: 'remarks' },
  { Header: 'Action', accessor: 'action' },
]

export const Ankit = [
  {
    id: 'VIS-009',
    salon: 'Luxe Locks Studio',
    dateTime: '15/07/2024\n11am - 12pm',
    issue: '2, 3',
    catalogStaff: '9',
    offer: '5',
    promote: '5',
    client: '6',
    setUp: '7',
    status: '7',
    remarks: 'Planned',
    action: 'Interested in collaborating...',
  },
  {
    id: 'VISIT-09999',
    salon: 'Divine Glow Studio',
    dateTime: '18/08/2024\n11am - 12pm',
    issue: '2, 3',
    catalogStaff: '8',
    offer: '6',
    promote: '6',
    client: '5',
    setUp: '6',
    status: '5',
    remarks: 'Expired',
    action: 'Not very responsive, follow...',
  },
  // Add more rows as needed
]
export const ActiveData = [
  { month: 'Jan', desktop: 1500, active: 200 },
  { month: 'Feb', desktop: 1300, active: 600 },
  { month: 'Mar', desktop: 2400, active: 620 },
  { month: 'Apr', desktop: 1800, active: 300 },
  { month: 'May', desktop: 1700, active: 850 },
  { month: 'Jun', desktop: 2100, active: 1250 },
  { month: 'Jul', desktop: 2150, active: 1450 },
  { month: 'Aug', desktop: 1500, active: 1200 },
  { month: 'Sep', desktop: 1100, active: 1000 },
  { month: 'Oct', desktop: 1700, active: 1600 },
  { month: 'Nov', desktop: 950, active: 500 },
  { month: 'Dec', desktop: 900, active: 900 },
]
export const Aaravdata = {
  id: '1',
  avatar: '/assest/png/aarav.png',
  name: 'Aarav Sharma',
  gender: 'Male' as const,
  bank: 'HDFC Bank',
  accountNo: 'XXXX XXXX 5423',
  ifscCode: 'HDFC0001234',
  addedDate: '02 June 2025',
  status: 'Verified' as const,
}
export const Rameshdata = {
  id: '1',
  avatar: '/assest/png/ramesh.png',
  name: 'Ramesh Patel',
  gender: 'Male' as const,
  bank: 'ICICI Bank',
  accountNo: 'XXXX XXXX 5423',
  ifscCode: 'ICIC0004567',
  addedDate: '02 June 2025',
  status: 'Pending' as const,
}
export const priyadata = {
  id: '1',
  avatar: '/assest/png/priya.png',
  name: 'Priya Sharma',
  gender: 'Female' as const,
  bank: 'ICICI Bank',
  accountNo: 'XXXX XXXX 5423',
  ifscCode: 'AXIS0000945',
  addedDate: '02 June 2025',
  status: 'Rejected' as const,
}
export const modalData = [
  {
    img: '/assest/png/glamour-glow-studio.png',
    name: 'Glamour Glow Studio',
    nextVisit: ': 23 June ',
    lastVisit: ' 28 June',
    contacte: [
      {
        icon: <LocationIcon />,
        title: '123 Sparkle Ave, Glam City',
        path: '#',
      },
      {
        icon: <PhoneSmallIcon />,
        title: '55523-32324',
        path: 'tel:55523-32324',
      },
    ],
    condetions: [
      { count: 'Manage : 3' },
      {},
      { count: 'Grow : 2' },
      {},
      { count: 'Promote : 4' },
      {},
      { count: 'Overall : 2' },
    ],
    lastVisitCotent: [
      {
        heading: 'profile',
        data: [
          {
            id: '1',
            icon: <SmallCalenderIcon />,
            title: 'Visit Date: ',
            titleData: ' 11 April 2025',
          },
          {
            id: '2',
            icon: <OveralScoreIcon />,
            title: 'Overall Score : ',
            titleData: ' 35 / 50',
          },
        ],
        tableData: [
          {
            th: [{ th: 'Category' }, { th: 'Score' }, { th: 'Remarks' }],
            tdRow: [
              {
                td: [
                  { td: 'Venue Setup' },
                  { td: '9 / 10' },
                  {
                    td: 'All complete, missing cancellation policy. Could add more amenities.',
                  },
                ],
              },
              {
                td: [
                  { td: 'Catalog & Staff' },
                  { td: '8 / 10' },
                  {
                    td: 'Services added, 1 inactive staff still listed. Staff profiles need updating.',
                  },
                ],
              },
              {
                td: [
                  { td: 'Offers' },
                  { td: '6 / 10' },
                  {
                    td: 'Gift card & promo active, no membership setup yet. Explore loyalty programs..',
                  },
                ],
              },
              {
                td: [
                  { td: 'Promote Usage' },
                  { td: '5 / 10' },
                  {
                    td: 'Not yet using Get Featured or Campaign Msg. Easy Share links created but low clicks.',
                  },
                ],
              },
            ],
          },
        ],
        nextFollow: 'Next Follow up date',
        nexFollowtId: 'nextFollow',
        nextVisit: 'Next Visit Date',
        nextVisitId: 'nextVisit',
      },
    ],
    catalogStaff: [
      {
        heading: 'Last Visit Summar',
        data: [
          {
            icon: <SmallCalenderIcon />,
            title: 'Visit Date: ',
            titleData: ' 11 April 2025',
          },
          {
            icon: <OveralScoreIcon />,
            title: 'Overall Score : ',
            titleData: ' 35 / 50',
          },
        ],
        tableData: [
          {
            th: [
              { th: 'Metric' },
              { th: 'Last visit' },
              { th: 'Current visit' },
            ],
            tdRow: [
              {
                td: [
                  { td: 'Services (Count)' },
                  { td: '50 services' },
                  {
                    td: '40 services',
                  },
                ],
              },
              {
                td: [
                  { td: 'Package (Count)' },
                  { td: '10 Packages' },
                  {
                    td: '14 Packages',
                  },
                ],
              },
              {
                td: [
                  { td: 'Book-a-Look (Count)' },
                  { td: '5 look' },
                  {
                    td: '8 block',
                  },
                ],
              },
              {
                td: [
                  { td: 'Product (Count)' },
                  { td: '5 look' },
                  {
                    td: '22 Products',
                  },
                ],
              },
              {
                td: [
                  { td: 'Staff (Count)' },
                  { td: '5 staff' },
                  {
                    td: '3 staff',
                  },
                ],
              },
            ],
          },
        ],

        date: [
          { heading: 'Next Follow up date', id: 'nextFollow' },
          { heading: 'Next Visit Date', id: 'nextVisit' },
        ],
      },
    ],
    offers: [
      {
        heading: 'Offers',
        data: [
          {
            icon: <SmallCalenderIcon />,
            title: 'Visit Date: ',
            titleData: ' 11 April 2025',
          },
          {
            icon: <OveralScoreIcon />,
            title: 'Overall Score : ',
            titleData: ' 35 / 50',
          },
        ],
        tableData: [
          {
            th: [
              { th: 'Metric' },
              { th: 'Last visit' },
              { th: 'Current visit' },
            ],
            tdRow: [
              {
                td: [
                  { td: 'Voucher (Count)' },
                  { td: '100 vouchers' },
                  {
                    td: '90 Vouchers',
                  },
                ],
              },
              {
                td: [
                  { td: 'Membership (Count)' },
                  { td: '2 Plans' },
                  {
                    td: '4 Plans',
                  },
                ],
              },
              {
                td: [
                  { td: 'Promo code (Count)' },
                  { td: '500 Codes' },
                  {
                    td: '70 Codes',
                  },
                ],
              },
              {
                td: [
                  { td: 'Gift Card (Count)' },
                  { td: '10 Cards' },
                  {
                    td: '12 Cards',
                  },
                ],
              },
              {
                td: [
                  { td: 'Staff (Count)' },
                  { td: '5 staff' },
                  {
                    td: '3 staff',
                  },
                ],
              },
            ],
          },
        ],

        date: [
          { heading: 'Next Follow up date', id: 'nextFollow' },
          { heading: 'Next Visit Date', id: 'nextVisit' },
        ],
      },
    ],
    promoteUse: [
      {
        heading: 'Offers',
        data: [
          {
            icon: <SmallCalenderIcon />,
            title: 'Visit Date: ',
            titleData: ' 11 April 2025',
          },
          {
            icon: <OveralScoreIcon />,
            title: 'Overall Score : ',
            titleData: ' 35 / 50',
          },
        ],
        tableData: [
          {
            th: [
              { th: 'Metric' },
              { th: 'Last visit' },
              { th: 'Current visit' },
            ],
            tdRow: [
              {
                td: [
                  { td: 'promoteUse' },
                  { td: '7 days' },
                  {
                    td: '7 days',
                  },
                ],
              },
              {
                td: [
                  { td: 'Easy Share (No. of Links)' },
                  { td: '7 days' },
                  {
                    td: '6 days',
                  },
                ],
              },
              {
                td: [
                  { td: 'Promo code (Count)' },
                  { td: '500 Codes' },
                  {
                    td: '70 Codes',
                  },
                ],
              },
              {
                td: [
                  { td: 'Easy Share (Clicks)' },
                  { td: '500 clicks' },
                  {
                    td: '510 clicks',
                  },
                ],
              },
              {
                td: [
                  { td: 'Creative St. (No. of Temp.)' },
                  { td: '10 templates' },
                  {
                    td: '12 templates',
                  },
                ],
              },
              {
                td: [
                  { td: 'Ad Manager (No. of Days)' },
                  { td: '10 templates' },
                  {
                    td: '9 templates',
                  },
                ],
              },
              {
                td: [
                  { td: 'Campaign Msg Sent (Count)' },
                  { td: '1000 msgs' },
                  {
                    td: '1002 msgs',
                  },
                ],
              },
            ],
          },
        ],

        date: [
          { heading: 'Next Follow up date', id: 'nextFollow' },
          { heading: 'Next Visit Date', id: 'nextVisit' },
        ],
      },
    ],
    clientEnagagement: [
      {
        heading: 'Client Engagement',
        data: [
          {
            icon: <SmallCalenderIcon />,
            title: 'Visit Date: ',
            titleData: ' 11 April 2025',
          },
          {
            icon: <OveralScoreIcon />,
            title: 'Overall Score : ',
            titleData: ' 35 / 50',
          },
        ],
        tableData: [
          {
            th: [
              { th: 'Metric' },
              { th: 'Last visit' },
              { th: 'Current visit' },
            ],
            tdRow: [
              {
                td: [
                  { td: 'Appointment  Received ' },
                  { td: '150' },
                  {
                    td: '140',
                  },
                ],
              },
              {
                td: [
                  { td: 'Membership (Count)' },
                  { td: '2 Plans' },
                  {
                    td: '4 Plans',
                  },
                ],
              },
              {
                td: [
                  { td: 'Appointment  Complete ' },
                  { td: '140' },
                  {
                    td: '146',
                  },
                ],
              },
              {
                td: [
                  { td: 'Repeat Clients Visit ' },
                  { td: '80' },
                  {
                    td: '510',
                  },
                ],
              },
              {
                td: [
                  { td: 'New Client Add ' },
                  { td: '60' },
                  {
                    td: '62',
                  },
                ],
              },
              {
                td: [
                  { td: 'Total Client ' },
                  { td: '500' },
                  {
                    td: '400',
                  },
                ],
              },
              {
                td: [
                  { td: 'Review Received  ' },
                  { td: '20' },
                  {
                    td: '30',
                  },
                ],
              },
              {
                td: [
                  { td: 'Review Received ' },
                  { td: '30' },
                  {
                    td: '40',
                  },
                ],
              },
              {
                td: [
                  { td: 'Sales  ' },
                  { td: '₹50,000' },
                  {
                    td: '₹45,000',
                  },
                ],
              },
            ],
          },
        ],

        date: [
          { heading: 'Next Follow up date', id: 'nextFollow' },
          { heading: 'Next Visit Date', id: 'nextVisit' },
        ],
      },
    ],
    setUp: [
      {
        heading: 'Set UP',
        data: [
          {
            icon: <SmallCalenderIcon />,
            title: 'Visit Date: ',
            titleData: ' 11 April 2025',
          },
          {
            icon: <OveralScoreIcon />,
            title: 'Overall Score : ',
            titleData: ' 35 / 50',
          },
        ],
        tableData: [
          {
            th: [
              { th: 'Metric' },
              { th: 'Last visit' },
              { th: 'Current visit' },
            ],
            tdRow: [
              {
                td: [
                  { td: 'Appointment  Received ' },
                  { td: '150' },
                  {
                    td: '140',
                  },
                ],
              },
              {
                td: [
                  { td: 'Membership (Count)' },
                  { td: '2 Plans' },
                  {
                    td: '4 Plans',
                  },
                ],
              },
              {
                td: [
                  { td: 'Appointment  Complete ' },
                  { td: '140' },
                  {
                    td: '146',
                  },
                ],
              },
              {
                td: [
                  { td: 'Repeat Clients Visit ' },
                  { td: '80' },
                  {
                    td: '510',
                  },
                ],
              },
              {
                td: [
                  { td: 'New Client Add ' },
                  { td: '60' },
                  {
                    td: '62',
                  },
                ],
              },
              {
                td: [
                  { td: 'Total Client ' },
                  { td: '500' },
                  {
                    td: '400',
                  },
                ],
              },
              {
                td: [
                  { td: 'Review Received  ' },
                  { td: '20' },
                  {
                    td: '30',
                  },
                ],
              },
              {
                td: [
                  { td: 'Review Received ' },
                  { td: '30' },
                  {
                    td: '40',
                  },
                ],
              },
              {
                td: [
                  { td: 'Sales  ' },
                  { td: '₹50,000' },
                  {
                    td: '₹45,000',
                  },
                ],
              },
            ],
          },
        ],

        date: [
          { heading: 'Next Follow up date', id: 'nextFollow' },
          { heading: 'Next Visit Date', id: 'nextVisit' },
        ],
      },
    ],
    submit: [
      {
        heading: 'Set UP',
        data: [
          {
            icon: <SmallCalenderIcon />,
            title: 'Visit Date: ',
            titleData: ' 11 April 2025',
          },
          {
            icon: <OveralScoreIcon />,
            title: 'Overall Score : ',
            titleData: ' 35 / 50',
          },
        ],

        date: [
          { heading: 'Next Follow up date', id: 'nextFollow' },
          { heading: 'Next Visit Date', id: 'nextVisit' },
        ],
      },
    ],
  },
]
export const Managequestions = [
  { label: 'Appointment management', key: 'appointment' },
  { label: 'Catalog management', key: 'catalog' },
  { label: 'Client management', key: 'client' },
  { label: 'Staff management', key: 'staff' },
]

export const ManageratingLabels = [
  'Rate the following from 1 - 5 ',
  '1 - not needed',
  '2 - not sure',
  '3 - needed but not immediately',
  '4 - needed',
  '5 - strongly needed',
]

export const Growquestions = [
  { label: 'Voucher system', key: 'Voucher ' },
  { label: 'Memberships Programs', key: 'Memberships' },
  { label: 'Gift Cards', key: 'Gift' },
  { label: 'Promo Codes', key: 'Promo' },
]

export const GrowratingLabels = [
  'Rate the following from 1 - 5 ',
  '1 - not needed',
  '2 - not sure',
  '3 - needed but not immediately',
  '4 - needed',
  '5 - strongly needed',
]

export const Promotequestions = [
  { label: 'Social Media Ads', key: 'Social Media' },
  { label: 'Creatives (Design Support)', key: 'Creatives' },
  { label: 'WhatsApp Marketing', key: 'WhatsApp Marketing' },
  { label: 'Automated Messaging', key: 'Automated' },
]

export const PromoteratingLabels = [
  'Rate the following from 1 - 5 ',
  '1 - not needed',
  '2 - not sure',
  '3 - needed but not immediately',
  '4 - needed',
  '5 - strongly needed',
]
export const tabOrder = ['Profile', 'Manage', 'Grow', 'Promote', 'Outcome']
