import { title } from 'process'
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
  GreenRightIcon,
  LocationIcon,
  OveralScoreIcon,
  PhoneSmallIcon,
  RedWrongtIcon,
  SmallCalenderIcon,
} from './Icon2'
import TableMeatbalMenu from '../pages/insights/TableMeatbalMenu'

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
  },
  {
    Icon: <Noeasy />,
    title: 'No Easy Share (30 days)',
    pera: '28 salons',
  },
  {
    Icon: <Noapoitment />,
    title: 'No Appointment(7 days)',
    pera: '17 salons',
  },
  {
    Icon: <Creative />,
    title: 'Creative not used (30 d)',
    pera: '17 salons',
  },
  {
    Icon: <Catlog />,
    title: 'Catalog Incomplete',
    pera: '13 salons',
  },
  {
    Icon: <Adsnot />,
    title: 'Ads not used (60 days)',
    pera: '13 salons',
  },
  {
    Icon: <Config />,
    title: 'Configure Offer Incomplete',
    pera: '21 salons',
  },
  {
    Icon: <Msgnot />,
    title: 'Msg Center not used (30 d)',
    pera: '21 salons',
  },
  {
    Icon: <Nopromo />,
    title: 'No Promo code (60 days )',
    pera: '21 salons',
  },
  {
    Icon: <Getfeat />,
    title: 'Get Feat. not used (60 days)',
    pera: '21 salons',
  },
  {
    Icon: <Product />,
    title: 'Product not added ',
    pera: '21 salons',
  },

  {
    Icon: <Partnot />,
    title: 'Partner not visited (30 days)',
    pera: '21 salons',
  },
]
export const CriticalDetail = [
  {
    Icon: <NotFullyOnboarded />,
    title: 'Not Fully Onboarded',
    pera: '14 salons',
  },
  {
    Icon: <OffPeakhoursnotset />,
    title: 'Off-Peak hours not set',
    pera: '8 salons',
  },
  {
    Icon: <Bankaccountnotlinked />,
    title: 'Bank account not linked',
    pera: '10 salons',
  },
  {
    Icon: <Nomonthlytargetset />,
    title: 'No monthly target set',
    pera: '11 salons',
  },
  {
    Icon: <Staffnotadded />,
    title: 'Staff not added / incomplete',
    pera: '13 salons',
  },
  {
    Icon: <SubscriptionOverdue />,
    title: 'Subscription Overdue',
    pera: '5 salons',
  },
]
export const criticalData = [
  {
    head: [
      { title: 'Salone Name' },
      { title: 'Address' },
      { title: 'Health' },
      { title: 'Issue(Cr. / Gr.)' },
      { title: 'Sale /d' },
      { title: 'Appt./d' },
      { title: 'Catalog (ser. / pkg)' },
      { title: 'Promo code ( 60d)' },
      { title: 'Get feat. ' },
      { title: 'Easy Share' },
      { title: 'Creative Studio' },
      { title: 'Ad manager' },
      { title: 'Comp. Msg In 30 d' },
      { title: 'Next Visit' },
      { title: 'TC Name' },
      { title: 'RM Name' },
      { title: 'FE Name' },
      { title: 'Action' },
    ],
    body: [
      {
        id: 1,
        saloneName: [
          {
            img: '/assest/png/salone-small-img.png',
            name: 'Chroma Lounge',
          },
        ],
        add: '281 Madison Street, SoHo District, NY',
        health: '30',
        issue: [{ issu1: '2', issu2: '3' }],
        staff: '₹12,500',
        onboarding: 5,
        bankAcc: '20 / 3',
        monthlyTarget: 0,
        subscription: '0',
        lastVisit: '10/2',
        nextVisit: '0',
        tcName: '0',
        rmName: '0',
        feName: 'July 14 ,2025',
        action: <TableMeatbalMenu />,
        sidebarData: [
          {
            img: '/assest/png/salone-small-img.png',
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
            ownerName: ' John Walley',
            ownerNo: ' 23246-93902',
            manager: ' Esther Howard',
            managerNo: ' 78363-47438',
            fe: ' Aditi Singh',
            feNo: ' 32456-39432',
            rm: '  23348-32948',
            rmNo: ' 78363-47438',
            tc: '  Priya Kumari',
            tcNo: ' 84950-34859',
            actionData: [
              {
                heaing: 'Visit on April 10th, 2024',
                persone: 'by Ajay Singh (FE)',
                pera: [
                  { stronText: 'Overall Score:', text: ' 30/50' },
                  {
                    stronText: 'Remarks: ',
                    text: ' Showed keen interest in CRM and membership features. Demo scheduled.',
                  },
                ],
              },
              {
                heaing: 'Visit on April 10th, 2024',
                persone: 'by Ajay Singh (FE)',
                pera: [
                  {
                    stronText: 'Reason: ',
                    text: ' Task from previous visit not completed',
                  },
                  {
                    stronText: 'Remarks: ',
                    text: ' Showed keen interest in CRM and membership features. Demo scheduled.',
                  },
                ],
              },
              {
                heaing: 'Visit on April 10th, 2024',
                persone: 'by Ajay Singh (FE)',
                pera: [
                  { stronText: 'Overall Score:', text: ' 30/50' },
                  {
                    stronText: 'Remarks: ',
                    text: ' Showed keen interest in CRM and membership features. Demo scheduled.',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        saloneName: [
          {
            img: '/assest/png/salone-small-img.png',
            name: 'Maison Glow',
          },
        ],
        add: 'Luxe Layers Lounge, 1285',
        health: '12',
        issue: [{ issu1: '3', issu2: '1' }],
        staff: '5',
        onboarding: <RedWrongtIcon />,
        bankAcc: <RedWrongtIcon />,
        monthlyTarget: <GreenRightIcon />,
        subscription: 'expired',
        lastVisit: '11 days ago',
        nextVisit: 'Aug 10 ,2025',
        tcName: 'Meera Sharma',
        rmName: 'Rhea Malhotra',
        feName: 'Neha Singh',
        action: <TableMeatbalMenu />,
      },
      {
        id: 3,
        saloneName: [
          {
            img: '/assest/png/salone-small-img.png',
            name: 'The Gilded Comb',
          },
        ],
        add: 'The Styling Suite, 45 Ke....',
        health: '25',
        issue: [{ issu1: '3', issu2: '2' }],
        staff: '3',
        onboarding: <RedWrongtIcon />,
        bankAcc: <RedWrongtIcon />,
        monthlyTarget: <RedWrongtIcon />,
        subscription: 'due',
        lastVisit: '6 days ago',
        nextVisit: 'July 14 ,2025',
        tcName: 'Ritika Verma',
        rmName: 'Rhea Malhotra',
        feName: 'Neha Singh',
        action: <TableMeatbalMenu />,
      },
      {
        id: 4,
        saloneName: [
          {
            img: '/assest/png/salone-small-img.png',
            name: 'Chroma Lounge',
          },
        ],
        add: '281 Madison Street, SoHo District, NY',
        health: '80',
        issue: [{ issu1: '2', issu2: '3' }],
        staff: '15',
        onboarding: <GreenRightIcon />,
        bankAcc: <GreenRightIcon />,
        monthlyTarget: <RedWrongtIcon />,
        subscription: 'active',
        lastVisit: '3 days ago',
        nextVisit: 'July 10, 2025',
        tcName: 'Ayesha Sharma',
        rmName: 'Rhea Malhotra',
        feName: 'Neha Singh',
        action: <TableMeatbalMenu />,
      },
      {
        id: 5,
        saloneName: [
          {
            img: '/assest/png/salone-small-img.png',
            name: 'Maison Glow',
          },
        ],
        add: 'Luxe Layers Lounge, 1285',
        health: '12',
        issue: [{ issu1: '3', issu2: '1' }],
        staff: '5',
        onboarding: <RedWrongtIcon />,
        bankAcc: <RedWrongtIcon />,
        monthlyTarget: <GreenRightIcon />,
        subscription: 'expired',
        lastVisit: '11 days ago',
        nextVisit: 'Aug 10 ,2025',
        tcName: 'Meera Sharma',
        rmName: 'Rhea Malhotra',
        feName: 'Neha Singh',
        action: <TableMeatbalMenu />,
      },
      {
        id: 6,
        saloneName: [
          {
            img: '/assest/png/salone-small-img.png',
            name: 'The Gilded Comb',
          },
        ],
        add: 'The Styling Suite, 45 Ke....',
        health: '25',
        issue: [{ issu1: '3', issu2: '2' }],
        staff: '3',
        onboarding: <RedWrongtIcon />,
        bankAcc: <RedWrongtIcon />,
        monthlyTarget: <RedWrongtIcon />,
        subscription: 'due',
        lastVisit: '6 days ago',
        nextVisit: 'July 14 ,2025',
        tcName: 'Ritika Verma',
        rmName: 'Rhea Malhotra',
        feName: 'Neha Singh',
        action: <TableMeatbalMenu />,
      },
      {
        id: 7,
        saloneName: [
          {
            img: '/assest/png/salone-small-img.png',
            name: 'Chroma Lounge',
          },
        ],
        add: '281 Madison Street, SoHo District, NY',
        health: '80',
        issue: [{ issu1: '2', issu2: '3' }],
        staff: '15',
        onboarding: <GreenRightIcon />,
        bankAcc: <GreenRightIcon />,
        monthlyTarget: <RedWrongtIcon />,
        subscription: 'active',
        lastVisit: '3 days ago',
        nextVisit: 'July 10, 2025',
        tcName: 'Ayesha Sharma',
        rmName: 'Rhea Malhotra',
        feName: 'Neha Singh',
        action: <TableMeatbalMenu />,
      },
      {
        id: 8,
        saloneName: [
          {
            img: '/assest/png/salone-small-img.png',
            name: 'Maison Glow',
          },
        ],
        add: 'Luxe Layers Lounge, 1285',
        health: '12',
        issue: [{ issu1: '3', issu2: '1' }],
        staff: '5',
        onboarding: <RedWrongtIcon />,
        bankAcc: <RedWrongtIcon />,
        monthlyTarget: <GreenRightIcon />,
        subscription: 'expired',
        lastVisit: '11 days ago',
        nextVisit: 'Aug 10 ,2025',
        tcName: 'Meera Sharma',
        rmName: 'Rhea Malhotra',
        feName: 'Neha Singh',
        action: <TableMeatbalMenu />,
      },
      {
        id: 9,
        saloneName: [
          {
            img: '/assest/png/salone-small-img.png',
            name: 'The Gilded Comb',
          },
        ],
        add: 'The Styling Suite, 45 Ke....',
        health: '25',
        issue: [{ issu1: '3', issu2: '2' }],
        staff: '3',
        onboarding: <RedWrongtIcon />,
        bankAcc: <RedWrongtIcon />,
        monthlyTarget: <RedWrongtIcon />,
        subscription: 'due',
        lastVisit: '6 days ago',
        nextVisit: 'July 14 ,2025',
        tcName: 'Ritika Verma',
        rmName: 'Rhea Malhotra',
        feName: 'Neha Singh',
        action: <TableMeatbalMenu />,
      },
      {
        id: 10,
        saloneName: [
          {
            img: '/assest/png/salone-small-img.png',
            name: 'Chroma Lounge',
          },
        ],
        add: '281 Madison Street, SoHo District, NY',
        health: '80',
        issue: [{ issu1: '2', issu2: '3' }],
        staff: '15',
        onboarding: <GreenRightIcon />,
        bankAcc: <GreenRightIcon />,
        monthlyTarget: <RedWrongtIcon />,
        subscription: 'active',
        lastVisit: '3 days ago',
        nextVisit: 'July 10, 2025',
        tcName: 'Ayesha Sharma',
        rmName: 'Rhea Malhotra',
        feName: 'Neha Singh',
        action: <TableMeatbalMenu />,
      },
      {
        id: 11,
        saloneName: [
          {
            img: '/assest/png/salone-small-img.png',
            name: 'Maison Glow',
          },
        ],
        add: 'Luxe Layers Lounge, 1285',
        health: '12',
        issue: [{ issu1: '3', issu2: '1' }],
        staff: '5',
        onboarding: <RedWrongtIcon />,
        bankAcc: <RedWrongtIcon />,
        monthlyTarget: <GreenRightIcon />,
        subscription: 'active',
        lastVisit: '11 days ago',
        nextVisit: 'Aug 10 ,2025',
        tcName: 'Meera Sharma',
        rmName: 'Rhea Malhotra',
        feName: 'Neha Singh',
        action: <TableMeatbalMenu />,
      },
      {
        id: 12,
        saloneName: [
          {
            img: '/assest/png/salone-small-img.png',
            name: 'The Gilded Comb',
          },
        ],
        add: 'The Styling Suite, 45 Ke....',
        health: '25',
        issue: [{ issu1: '3', issu2: '2' }],
        staff: '3',
        onboarding: <RedWrongtIcon />,
        bankAcc: <RedWrongtIcon />,
        monthlyTarget: <RedWrongtIcon />,
        subscription: 'due',
        lastVisit: '6 days ago',
        nextVisit: 'July 14 ,2025',
        tcName: 'Ritika Verma',
        rmName: 'Rhea Malhotra',
        feName: 'Neha Singh',
        action: <TableMeatbalMenu />,
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

export const some = [
  {
    avatar: <Aaravsharma />,
    name: 'Aarav Sharma',
    icon: <MaleteamCard />,
    gender: 'Male',
    tag: 'TC',
    phone: '+919876500101',
    email: 'aarav.sharma@example.com',
    manages: ' 2 RM & 3 FE',
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
    manages: ' 2 RM & 3 FE',
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
