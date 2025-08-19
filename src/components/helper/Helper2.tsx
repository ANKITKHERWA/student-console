import {
  CardDateIcon,
  DetailsIcon,
  DollerIcon,
  EarningIcon,
  FileIcon,
  GreenRightIcon,
  LocationIcon,
  LockIcon,
  MaleIcon,
  MemberIcon,
  OveralScoreIcon,
  ParsoneIcon,
  PhoneSmallIcon,
  ProfileIcon,
  RedWrongtIcon,
  ShowPassIcon,
  SmallCalenderIcon,
  StarIcon,
  WatchIcon,
} from "./Icon2";
import PaymentModal from "../pages/settings/earning/PaymentMudal";
import { Iconactive, Iconapointment, Iconright } from "./Icon1";

export const loginFormData = [
  {
    label: "Email",
    type: "email",
    id: "email",
    placeholder: "ex. dasalon@gmail.com",
  },
  {
    label: "Password",
    type: "text", //change to pass after comple project
    id: "password",
    placeholder: "Password",
    icon: <ShowPassIcon />,
  },
];

export const criticalFiltersData = [
  { title: "Today" },
  { title: "Yesterday" },
  { title: "Next 7 days" },
  { title: "Next 30 days" },
  { title: "This Month" },
  { title: "Next Month" },
  { title: "This year" },
];

export const saloneData = [
  {
    id: 1,
    saloneName: [
      {
        img: "/assest/png/salone-small-img.png",
        name: "Chroma Lounge",
      },
    ],
    add: "281 Madison Street, SoHo District, NY",
    health: "80",
    issue: [{ issu1: "Power outage", issu2: "Water leak" }],
    staff: "15",
    onboarding: <GreenRightIcon />,
    bankAcc: <GreenRightIcon />,
    monthlyTarget: <RedWrongtIcon />,
    subscription: "active",
    lastVisit: "3 days ago",
    nextVisit: "July 10, 2025",
    tcName: "Ayesha Sharma",
    rmName: "Rhea Malhotra",
    feName: "Neha Singh",
    action: "...",
  },
];

// export const criticalData = [
//   {
//     head: [
//       { title: "Salone Name" },
//       { title: "Address" },
//       { title: "Health" },
//       { title: "Issue" },
//       { title: "Staff" },
//       { title: "OnBoarding" },
//       { title: "Bank Acc." },
//       { title: "Monthly Target" },
//       { title: "Subscription" },
//       { title: "Last Visit" },
//       { title: "Next Visit" },
//       { title: "TC Name" },
//       { title: "RM Name" },
//       { title: "FE Name" },
//       { title: "Action" },
//     ],
//     body: [
//       {
//         id: 1,
//         td: [
//           {
//             saloneName: [
//               {
//                 img: "/assest/png/salone-small-img.png",
//                 name: "Chroma Lounge",
//               },
//             ],
//           },
//           { add: "281 Madison Street, SoHo District, NY" },
//           { health: "80" },
//           { issue: [{ issu1: "2", issu2: "3" }] },
//           { staff: "15" },
//           { onboarding: "true" },
//           { bankAcc: "false" },
//           { monthlyTarget: "true" },
//           { subscription: "active" },
//           { lastVisit: "3 days ago" },
//           { nextVisit: "July 10, 2025" },
//           { tcName: "Ayesha Sharma" },
//           { rmName: "Rhea Malhotra" },
//           { feName: "Neha Singh" },
//           { action: "-" },
//         ],
//       },
//       {
//         id: 2,
//         td: [
//           {
//             saloneName: [
//               {
//                 img: "/assest/png/salone-small-img.png",
//                 name: "Chroma Lounge",
//               },
//             ],
//           },
//           { add: "281 Madison Street, SoHo District, NY" },
//           { health: "80" },
//           { issue: [{ issu1: "2", issu2: "3" }] },
//           { staff: "15" },
//           { onboarding: "true" },
//           { bankAcc: "false" },
//           { monthlyTarget: "true" },
//           { subscription: "due" },
//           { lastVisit: "3 days ago" },
//           { nextVisit: "July 10, 2025" },
//           { tcName: "Ayesha Sharma" },
//           { rmName: "Rhea Malhotra" },
//           { feName: "Neha Singh" },
//           { action: "Neha Singh" },
//         ],
//         // sidebarData: [
//         //   {
//         //     img: "/assest/png/salone-small-img.png",
//         //     name: "Glamour Glow Studio",
//         //     nextVisit: ": 23 June ",
//         //     lastVisit: " 28 June",
//         //     contacte: [
//         //       {
//         //         icon: <LocationIcon />,
//         //         title: "123 Sparkle Ave, Glam City",
//         //         path: "#",
//         //       },
//         //       {
//         //         icon: <PhoneSmallIcon />,
//         //         title: "55523-32324",
//         //         path: "tel:55523-32324",
//         //       },
//         //     ],
//         //     condetions: [
//         //       { count: "Critical : 6" },
//         //       {},
//         //       { count: "Growth : 4" },
//         //       {},
//         //       { count: "Health : 8" },
//         //     ],
//         //     ownerName: " John Walley",
//         //     ownerNo: " 23246-93902",
//         //     manager: " Esther Howard",
//         //     managerNo: " 78363-47438",
//         //     fe: " Aditi Singh",
//         //     feNo: " 32456-39432",
//         //     rm: "  23348-32948",
//         //     rmNo: " 78363-47438",
//         //     tc: "  Priya Kumari",
//         //     tcNo: " 84950-34859",
//         //     actionData: [
//         //       {
//         //         heaing: "Visit on April 10th, 2024",
//         //         persone: "by Ajay Singh (FE)",
//         //         pera: [
//         //           { stronText: "Overall Score:", text: " 30/50" },
//         //           {
//         //             stronText: "Remarks: ",
//         //             text: " Showed keen interest in CRM and membership features. Demo scheduled.",
//         //           },
//         //         ],
//         //       },
//         //       {
//         //         heaing: "Visit on April 10th, 2024",
//         //         persone: "by Ajay Singh (FE)",
//         //         pera: [
//         //           {
//         //             stronText: "Reason: ",
//         //             text: " Task from previous visit not completed",
//         //           },
//         //           {
//         //             stronText: "Remarks: ",
//         //             text: " Showed keen interest in CRM and membership features. Demo scheduled.",
//         //           },
//         //         ],
//         //       },
//         //       {
//         //         heaing: "Visit on April 10th, 2024",
//         //         persone: "by Ajay Singh (FE)",
//         //         pera: [
//         //           { stronText: "Overall Score:", text: " 30/50" },
//         //           {
//         //             stronText: "Remarks: ",
//         //             text: " Showed keen interest in CRM and membership features. Demo scheduled.",
//         //           },
//         //         ],
//         //       },
//         //     ],
//         //   },
//         // ],
//       },
//       {
//         id: 3,
//         td: [
//           {
//             saloneName: [
//               {
//                 img: "/assest/png/salone-small-img.png",
//                 name: "Chroma Lounge",
//               },
//             ],
//           },
//           { add: "281 Madison Street, SoHo District, NY" },
//           { health: "80" },
//           { issue: [{ issu1: "2", issu2: "3" }] },
//           { staff: "15" },
//           { onboarding: "true" },
//           { bankAcc: "false" },
//           { monthlyTarget: "false" },
//           { subscription: "expired" },
//           { lastVisit: "3 days ago" },
//           { nextVisit: "July 10, 2025" },
//           { tcName: "Ayesha Sharma" },
//           { rmName: "Rhea Malhotra" },
//           { feName: "Neha Singh" },
//           { action: "Neha Singh" },
//         ],
//         // sidebarData: [
//         //   {
//         //     img: "/assest/png/salone-small-img.png",
//         //     name: "Glamour Glow Studio",
//         //     nextVisit: ": 23 June ",
//         //     lastVisit: " 28 June",
//         //     contacte: [
//         //       {
//         //         icon: <LocationIcon />,
//         //         title: "123 Sparkle Ave, Glam City",
//         //         path: "#",
//         //       },
//         //       {
//         //         icon: <PhoneSmallIcon />,
//         //         title: "55523-32324",
//         //         path: "tel:55523-32324",
//         //       },
//         //     ],
//         //     condetions: [
//         //       { count: "Critical : 6" },
//         //       {},
//         //       { count: "Growth : 4" },
//         //       {},
//         //       { count: "Health : 8" },
//         //     ],
//         //     ownerName: " John Walley",
//         //     ownerNo: " 23246-93902",
//         //     manager: " Esther Howard",
//         //     managerNo: " 78363-47438",
//         //     fe: " Aditi Singh",
//         //     feNo: " 32456-39432",
//         //     rm: "  23348-32948",
//         //     rmNo: " 78363-47438",
//         //     tc: "  Priya Kumari",
//         //     tcNo: " 84950-34859",
//         //     actionData: [
//         //       {
//         //         heaing: "Visit on April 10th, 2024",
//         //         persone: "by Ajay Singh (FE)",
//         //         pera: [
//         //           { stronText: "Overall Score:", text: " 30/50" },
//         //           {
//         //             stronText: "Remarks: ",
//         //             text: " Showed keen interest in CRM and membership features. Demo scheduled.",
//         //           },
//         //         ],
//         //       },
//         //       {
//         //         heaing: "Visit on April 10th, 2024",
//         //         persone: "by Ajay Singh (FE)",
//         //         pera: [
//         //           {
//         //             stronText: "Reason: ",
//         //             text: " Task from previous visit not completed",
//         //           },
//         //           {
//         //             stronText: "Remarks: ",
//         //             text: " Showed keen interest in CRM and membership features. Demo scheduled.",
//         //           },
//         //         ],
//         //       },
//         //       {
//         //         heaing: "Visit on April 10th, 2024",
//         //         persone: "by Ajay Singh (FE)",
//         //         pera: [
//         //           { stronText: "Overall Score:", text: " 30/50" },
//         //           {
//         //             stronText: "Remarks: ",
//         //             text: " Showed keen interest in CRM and membership features. Demo scheduled.",
//         //           },
//         //         ],
//         //       },
//         //     ],
//         //   },
//         // ],
//       },
//       // {
//       //   id: 2,
//       //   saloneName: [
//       //     {
//       //       img: "/assest/png/salone-small-img.png",
//       //       name: "Maison Glow",
//       //     },
//       //   ],
//       //   add: "Luxe Layers Lounge, 1285",
//       //   health: "12",
//       //   issue: [{ issu1: "3", issu2: "1" }],
//       //   staff: "5",
//       //   onboarding: <RedWrongtIcon />,
//       //   bankAcc: <RedWrongtIcon />,
//       //   monthlyTarget: <GreenRightIcon />,
//       //   subscription: "expired",
//       //   lastVisit: "11 days ago",
//       //   nextVisit: "Aug 10 ,2025",
//       //   tcName: "Meera Sharma",
//       //   rmName: "Rhea Malhotra",
//       //   feName: "Neha Singh",
//       //   action: <TableMeatbalMenu />,
//       // },
//       // {
//       //   id: 3,
//       //   saloneName: [
//       //     {
//       //       img: "/assest/png/salone-small-img.png",
//       //       name: "The Gilded Comb",
//       //     },
//       //   ],
//       //   add: "The Styling Suite, 45 Ke....",
//       //   health: "25",
//       //   issue: [{ issu1: "3", issu2: "2" }],
//       //   staff: "3",
//       //   onboarding: <RedWrongtIcon />,
//       //   bankAcc: <RedWrongtIcon />,
//       //   monthlyTarget: <RedWrongtIcon />,
//       //   subscription: "due",
//       //   lastVisit: "6 days ago",
//       //   nextVisit: "July 14 ,2025",
//       //   tcName: "Ritika Verma",
//       //   rmName: "Rhea Malhotra",
//       //   feName: "Neha Singh",
//       //   action: <TableMeatbalMenu />,
//       // },
//       // {
//       //   id: 4,
//       //   saloneName: [
//       //     {
//       //       img: "/assest/png/salone-small-img.png",
//       //       name: "Chroma Lounge",
//       //     },
//       //   ],
//       //   add: "281 Madison Street, SoHo District, NY",
//       //   health: "80",
//       //   issue: [{ issu1: "2", issu2: "3" }],
//       //   staff: "15",
//       //   onboarding: <GreenRightIcon />,
//       //   bankAcc: <GreenRightIcon />,
//       //   monthlyTarget: <RedWrongtIcon />,
//       //   subscription: "active",
//       //   lastVisit: "3 days ago",
//       //   nextVisit: "July 10, 2025",
//       //   tcName: "Ayesha Sharma",
//       //   rmName: "Rhea Malhotra",
//       //   feName: "Neha Singh",
//       //   action: <TableMeatbalMenu />,
//       // },
//       // {
//       //   id: 5,
//       //   saloneName: [
//       //     {
//       //       img: "/assest/png/salone-small-img.png",
//       //       name: "Maison Glow",
//       //     },
//       //   ],
//       //   add: "Luxe Layers Lounge, 1285",
//       //   health: "12",
//       //   issue: [{ issu1: "3", issu2: "1" }],
//       //   staff: "5",
//       //   onboarding: <RedWrongtIcon />,
//       //   bankAcc: <RedWrongtIcon />,
//       //   monthlyTarget: <GreenRightIcon />,
//       //   subscription: "expired",
//       //   lastVisit: "11 days ago",
//       //   nextVisit: "Aug 10 ,2025",
//       //   tcName: "Meera Sharma",
//       //   rmName: "Rhea Malhotra",
//       //   feName: "Neha Singh",
//       //   action: <TableMeatbalMenu />,
//       // },
//       // {
//       //   id: 6,
//       //   saloneName: [
//       //     {
//       //       img: "/assest/png/salone-small-img.png",
//       //       name: "The Gilded Comb",
//       //     },
//       //   ],
//       //   add: "The Styling Suite, 45 Ke....",
//       //   health: "25",
//       //   issue: [{ issu1: "3", issu2: "2" }],
//       //   staff: "3",
//       //   onboarding: <RedWrongtIcon />,
//       //   bankAcc: <RedWrongtIcon />,
//       //   monthlyTarget: <RedWrongtIcon />,
//       //   subscription: "due",
//       //   lastVisit: "6 days ago",
//       //   nextVisit: "July 14 ,2025",
//       //   tcName: "Ritika Verma",
//       //   rmName: "Rhea Malhotra",
//       //   feName: "Neha Singh",
//       //   action: <TableMeatbalMenu />,
//       // },
//       // {
//       //   id: 7,
//       //   saloneName: [
//       //     {
//       //       img: "/assest/png/salone-small-img.png",
//       //       name: "Chroma Lounge",
//       //     },
//       //   ],
//       //   add: "281 Madison Street, SoHo District, NY",
//       //   health: "80",
//       //   issue: [{ issu1: "2", issu2: "3" }],
//       //   staff: "15",
//       //   onboarding: <GreenRightIcon />,
//       //   bankAcc: <GreenRightIcon />,
//       //   monthlyTarget: <RedWrongtIcon />,
//       //   subscription: "active",
//       //   lastVisit: "3 days ago",
//       //   nextVisit: "July 10, 2025",
//       //   tcName: "Ayesha Sharma",
//       //   rmName: "Rhea Malhotra",
//       //   feName: "Neha Singh",
//       //   action: <TableMeatbalMenu />,
//       // },
//       // {
//       //   id: 8,
//       //   saloneName: [
//       //     {
//       //       img: "/assest/png/salone-small-img.png",
//       //       name: "Maison Glow",
//       //     },
//       //   ],
//       //   add: "Luxe Layers Lounge, 1285",
//       //   health: "12",
//       //   issue: [{ issu1: "3", issu2: "1" }],
//       //   staff: "5",
//       //   onboarding: <RedWrongtIcon />,
//       //   bankAcc: <RedWrongtIcon />,
//       //   monthlyTarget: <GreenRightIcon />,
//       //   subscription: "expired",
//       //   lastVisit: "11 days ago",
//       //   nextVisit: "Aug 10 ,2025",
//       //   tcName: "Meera Sharma",
//       //   rmName: "Rhea Malhotra",
//       //   feName: "Neha Singh",
//       //   action: <TableMeatbalMenu />,
//       // },
//       // {
//       //   id: 9,
//       //   saloneName: [
//       //     {
//       //       img: "/assest/png/salone-small-img.png",
//       //       name: "The Gilded Comb",
//       //     },
//       //   ],
//       //   add: "The Styling Suite, 45 Ke....",
//       //   health: "25",
//       //   issue: [{ issu1: "3", issu2: "2" }],
//       //   staff: "3",
//       //   onboarding: <RedWrongtIcon />,
//       //   bankAcc: <RedWrongtIcon />,
//       //   monthlyTarget: <RedWrongtIcon />,
//       //   subscription: "due",
//       //   lastVisit: "6 days ago",
//       //   nextVisit: "July 14 ,2025",
//       //   tcName: "Ritika Verma",
//       //   rmName: "Rhea Malhotra",
//       //   feName: "Neha Singh",
//       //   action: <TableMeatbalMenu />,
//       // },
//       // {
//       //   id: 10,
//       //   saloneName: [
//       //     {
//       //       img: "/assest/png/salone-small-img.png",
//       //       name: "Chroma Lounge",
//       //     },
//       //   ],
//       //   add: "281 Madison Street, SoHo District, NY",
//       //   health: "80",
//       //   issue: [{ issu1: "2", issu2: "3" }],
//       //   staff: "15",
//       //   onboarding: <GreenRightIcon />,
//       //   bankAcc: <GreenRightIcon />,
//       //   monthlyTarget: <RedWrongtIcon />,
//       //   subscription: "active",
//       //   lastVisit: "3 days ago",
//       //   nextVisit: "July 10, 2025",
//       //   tcName: "Ayesha Sharma",
//       //   rmName: "Rhea Malhotra",
//       //   feName: "Neha Singh",
//       //   action: <TableMeatbalMenu />,
//       // },
//       // {
//       //   id: 11,
//       //   saloneName: [
//       //     {
//       //       img: "/assest/png/salone-small-img.png",
//       //       name: "Maison Glow",
//       //     },
//       //   ],
//       //   add: "Luxe Layers Lounge, 1285",
//       //   health: "12",
//       //   issue: [{ issu1: "3", issu2: "1" }],
//       //   staff: "5",
//       //   onboarding: <RedWrongtIcon />,
//       //   bankAcc: <RedWrongtIcon />,
//       //   monthlyTarget: <GreenRightIcon />,
//       //   subscription: "active",
//       //   lastVisit: "11 days ago",
//       //   nextVisit: "Aug 10 ,2025",
//       //   tcName: "Meera Sharma",
//       //   rmName: "Rhea Malhotra",
//       //   feName: "Neha Singh",
//       //   action: <TableMeatbalMenu />,
//       // },
//       // {
//       //   id: 12,
//       //   saloneName: [
//       //     {
//       //       img: "/assest/png/salone-small-img.png",
//       //       name: "The Gilded Comb",
//       //     },
//       //   ],
//       //   add: "The Styling Suite, 45 Ke....",
//       //   health: "25",
//       //   issue: [{ issu1: "3", issu2: "2" }],
//       //   staff: "3",
//       //   onboarding: <RedWrongtIcon />,
//       //   bankAcc: <RedWrongtIcon />,
//       //   monthlyTarget: <RedWrongtIcon />,
//       //   subscription: "due",
//       //   lastVisit: "6 days ago",
//       //   nextVisit: "July 14 ,2025",
//       //   tcName: "Ritika Verma",
//       //   rmName: "Rhea Malhotra",
//       //   feName: "Neha Singh",
//       //   action: <TableMeatbalMenu />,
//       // },
//     ],
//   },
// ];

export const criticalData = [
  {
    head: [
      { title: "Salon Name" },
      { title: "Address" },
      { title: "Health" },
      { title: "Issues" },
      { title: "Staff" },
      { title: "Onboarding" },
      { title: "Bank Account" },
      { title: "Monthly Target" },
      { title: "Subscription" },
      { title: "Last Visit" },
      { title: "Next Visit" },
      { title: "TC Name" },
      { title: "RM Name" },
      { title: "FE Name" },
      { title: "Actions" },
    ],
    body: [
      {
        id: 1,
        td: [
          {
            saloneName: [
              {
                img: "/assest/png/salone-small-img.png",
                name: "Glamour Studio",
              },
            ],
          },
          { add: "123 Main St, Delhi" },
          { health: "Good" },
          { issue: [{ issu1: "1", issu2: "2" }] },
          { staff: "10" },
          { onboarding: "true" },
          { bankAcc: "false" },
          { monthlyTarget: "true" },
          { subscription: "Active" },
          { lastVisit: "12 Aug 2025" },
          { nextVisit: "20 Aug 2025" },
          { tcName: "Ramesh" },
          { rmName: "Priya" },
          { feName: "Kunal" },
          { action: "..." }, // TableKebabMenu renders for this
        ],
      },
      {
        id: 2,
        td: [
          {
            saloneName: [
              { img: "/assest/png/salone-small-img.png", name: "Elite Cuts" },
            ],
          },
          { add: "45 Market Road, Mumbai" },
          { health: "Average" },
          { issue: [{ issu1: "0", issu2: "1" }] },
          { staff: "6" },
          { onboarding: "false" },
          { bankAcc: "true" },
          { monthlyTarget: "false" },
          { subscription: "Expired" },
          { lastVisit: "10 Aug 2025" },
          { nextVisit: "18 Aug 2025" },
          { tcName: "Vikas" },
          { rmName: "Sonia" },
          { feName: "Raj" },
          { action: "..." },
        ],
      },
      {
        id: 3,
        td: [
          {
            saloneName: [
              { img: "/assest/png/salone-small-img.png", name: "Style Nation" },
            ],
          },
          { add: "78 Green Park, Bangalore" },
          { health: "Excellent" },
          { issue: [{ issu1: "0", issu2: "0" }] },
          { staff: "15" },
          { onboarding: "true" },
          { bankAcc: "true" },
          { monthlyTarget: "true" },
          { subscription: "Trial" },
          { lastVisit: "14 Aug 2025" },
          { nextVisit: "21 Aug 2025" },
          { tcName: "Meera" },
          { rmName: "Rahul" },
          { feName: "Arjun" },
          { action: "..." },
        ],
      },
    ],
  },
];

export const mudalData = [
  {
    img: "/assest/png/glamour-glow-studio.png",
    name: "Glamour Glow Studio",
    nextVisit: ": 23 June ",
    lastVisit: " 28 June",
    contacte: [
      {
        icon: <LocationIcon />,
        title: "123 Sparkle Ave, Glam City",
        path: "#",
      },
      {
        icon: <PhoneSmallIcon />,
        title: "55523-32324",
        path: "tel:55523-32324",
      },
    ],
    condetions: [
      { count: "Critical : 6" },
      {},
      { count: "Growth : 4" },
      {},
      { count: "Health : 8" },
    ],
    lastVisitCotent: [
      {
        heading: "Last Visit Summary",
        data: [
          {
            icon: <SmallCalenderIcon />,
            title: "Visit Date: ",
            titleData: " 11 April 2025",
          },
          {
            icon: <OveralScoreIcon />,
            title: "Overall Score : ",
            titleData: " 35 / 50",
          },
        ],
        tableData: [
          {
            th: [{ th: "Category" }, { th: "Score" }, { th: "Remarks" }],
            tdRow: [
              {
                td: [
                  { td: "Venue Setup" },
                  { td: "9 / 10" },
                  {
                    td: "All complete, missing cancellation policy. Could add more amenities.",
                  },
                ],
              },
              {
                td: [
                  { td: "Catalog & Staff" },
                  { td: "8 / 10" },
                  {
                    td: "Services added, 1 inactive staff still listed. Staff profiles need updating.",
                  },
                ],
              },
              {
                td: [
                  { td: "Offers" },
                  { td: "6 / 10" },
                  {
                    td: "Gift card & promo active, no membership setup yet. Explore loyalty programs..",
                  },
                ],
              },
              {
                td: [
                  { td: "Promote Usage" },
                  { td: "5 / 10" },
                  {
                    td: "Not yet using Get Featured or Campaign Msg. Easy Share links created but low clicks.",
                  },
                ],
              },
            ],
          },
        ],

        date: [
          { heading: "Next Follow up date", id: "nextFollow" },
          { heading: "Next Visit Date", id: "nextVisit" },
        ],
      },
    ],
    catalogStaff: [
      {
        heading: "Last Visit Summar",
        data: [
          {
            icon: <SmallCalenderIcon />,
            title: "Visit Date: ",
            titleData: " 11 April 2025",
          },
          {
            icon: <OveralScoreIcon />,
            title: "Overall Score : ",
            titleData: " 35 / 50",
          },
        ],
        tableData: [
          {
            th: [
              { th: "Metric" },
              { th: "Last visit" },
              { th: "Current visit" },
            ],
            tdRow: [
              {
                td: [
                  { td: "Services (Count)" },
                  { td: "50 services" },
                  {
                    td: "40 services",
                  },
                ],
              },
              {
                td: [
                  { td: "Package (Count)" },
                  { td: "10 Packages" },
                  {
                    td: "14 Packages",
                  },
                ],
              },
              {
                td: [
                  { td: "Book-a-Look (Count)" },
                  { td: "5 look" },
                  {
                    td: "8 block",
                  },
                ],
              },
              {
                td: [
                  { td: "Product (Count)" },
                  { td: "5 look" },
                  {
                    td: "22 Products",
                  },
                ],
              },
              {
                td: [
                  { td: "Staff (Count)" },
                  { td: "5 staff" },
                  {
                    td: "3 staff",
                  },
                ],
              },
            ],
          },
        ],

        date: [
          { heading: "Next Follow up date", id: "nextFollow" },
          { heading: "Next Visit Date", id: "nextVisit" },
        ],
      },
    ],
    offers: [
      {
        heading: "Offers",
        data: [
          {
            icon: <SmallCalenderIcon />,
            title: "Visit Date: ",
            titleData: " 11 April 2025",
          },
          {
            icon: <OveralScoreIcon />,
            title: "Overall Score : ",
            titleData: " 35 / 50",
          },
        ],
        tableData: [
          {
            th: [
              { th: "Metric" },
              { th: "Last visit" },
              { th: "Current visit" },
            ],
            tdRow: [
              {
                td: [
                  { td: "Voucher (Count)" },
                  { td: "100 vouchers" },
                  {
                    td: "90 Vouchers",
                  },
                ],
              },
              {
                td: [
                  { td: "Membership (Count)" },
                  { td: "2 Plans" },
                  {
                    td: "4 Plans",
                  },
                ],
              },
              {
                td: [
                  { td: "Promo code (Count)" },
                  { td: "500 Codes" },
                  {
                    td: "70 Codes",
                  },
                ],
              },
              {
                td: [
                  { td: "Gift Card (Count)" },
                  { td: "10 Cards" },
                  {
                    td: "12 Cards",
                  },
                ],
              },
              {
                td: [
                  { td: "Staff (Count)" },
                  { td: "5 staff" },
                  {
                    td: "3 staff",
                  },
                ],
              },
            ],
          },
        ],

        date: [
          { heading: "Next Follow up date", id: "nextFollow" },
          { heading: "Next Visit Date", id: "nextVisit" },
        ],
      },
    ],
    promoteUse: [
      {
        heading: "Offers",
        data: [
          {
            icon: <SmallCalenderIcon />,
            title: "Visit Date: ",
            titleData: " 11 April 2025",
          },
          {
            icon: <OveralScoreIcon />,
            title: "Overall Score : ",
            titleData: " 35 / 50",
          },
        ],
        tableData: [
          {
            th: [
              { th: "Metric" },
              { th: "Last visit" },
              { th: "Current visit" },
            ],
            tdRow: [
              {
                td: [
                  { td: "promoteUse" },
                  { td: "7 days" },
                  {
                    td: "7 days",
                  },
                ],
              },
              {
                td: [
                  { td: "Easy Share (No. of Links)" },
                  { td: "7 days" },
                  {
                    td: "6 days",
                  },
                ],
              },
              {
                td: [
                  { td: "Promo code (Count)" },
                  { td: "500 Codes" },
                  {
                    td: "70 Codes",
                  },
                ],
              },
              {
                td: [
                  { td: "Easy Share (Clicks)" },
                  { td: "500 clicks" },
                  {
                    td: "510 clicks",
                  },
                ],
              },
              {
                td: [
                  { td: "Creative St. (No. of Temp.)" },
                  { td: "10 templates" },
                  {
                    td: "12 templates",
                  },
                ],
              },
              {
                td: [
                  { td: "Ad Manager (No. of Days)" },
                  { td: "10 templates" },
                  {
                    td: "9 templates",
                  },
                ],
              },
              {
                td: [
                  { td: "Campaign Msg Sent (Count)" },
                  { td: "1000 msgs" },
                  {
                    td: "1002 msgs",
                  },
                ],
              },
            ],
          },
        ],

        date: [
          { heading: "Next Follow up date", id: "nextFollow" },
          { heading: "Next Visit Date", id: "nextVisit" },
        ],
      },
    ],
    clientEnagagement: [
      {
        heading: "Client Engagement",
        data: [
          {
            icon: <SmallCalenderIcon />,
            title: "Visit Date: ",
            titleData: " 11 April 2025",
          },
          {
            icon: <OveralScoreIcon />,
            title: "Overall Score : ",
            titleData: " 35 / 50",
          },
        ],
        tableData: [
          {
            th: [
              { th: "Metric" },
              { th: "Last visit" },
              { th: "Current visit" },
            ],
            tdRow: [
              {
                td: [
                  { td: "Appointment  Received " },
                  { td: "150" },
                  {
                    td: "140",
                  },
                ],
              },
              {
                td: [
                  { td: "Membership (Count)" },
                  { td: "2 Plans" },
                  {
                    td: "4 Plans",
                  },
                ],
              },
              {
                td: [
                  { td: "Appointment  Complete " },
                  { td: "140" },
                  {
                    td: "146",
                  },
                ],
              },
              {
                td: [
                  { td: "Repeat Clients Visit " },
                  { td: "80" },
                  {
                    td: "510",
                  },
                ],
              },
              {
                td: [
                  { td: "New Client Add " },
                  { td: "60" },
                  {
                    td: "62",
                  },
                ],
              },
              {
                td: [
                  { td: "Total Client " },
                  { td: "500" },
                  {
                    td: "400",
                  },
                ],
              },
              {
                td: [
                  { td: "Review Received  " },
                  { td: "20" },
                  {
                    td: "30",
                  },
                ],
              },
              {
                td: [
                  { td: "Review Received " },
                  { td: "30" },
                  {
                    td: "40",
                  },
                ],
              },
              {
                td: [
                  { td: "Sales  " },
                  { td: "₹50,000" },
                  {
                    td: "₹45,000",
                  },
                ],
              },
            ],
          },
        ],

        date: [
          { heading: "Next Follow up date", id: "nextFollow" },
          { heading: "Next Visit Date", id: "nextVisit" },
        ],
      },
    ],
    setUp: [
      {
        heading: "Set UP",
        data: [
          {
            icon: <SmallCalenderIcon />,
            title: "Visit Date: ",
            titleData: " 11 April 2025",
          },
          {
            icon: <OveralScoreIcon />,
            title: "Overall Score : ",
            titleData: " 35 / 50",
          },
        ],
        tableData: [
          {
            th: [
              { th: "Metric" },
              { th: "Last visit" },
              { th: "Current visit" },
            ],
            tdRow: [
              {
                td: [
                  { td: "Appointment  Received " },
                  { td: "150" },
                  {
                    td: "140",
                  },
                ],
              },
              {
                td: [
                  { td: "Membership (Count)" },
                  { td: "2 Plans" },
                  {
                    td: "4 Plans",
                  },
                ],
              },
              {
                td: [
                  { td: "Appointment  Complete " },
                  { td: "140" },
                  {
                    td: "146",
                  },
                ],
              },
              {
                td: [
                  { td: "Repeat Clients Visit " },
                  { td: "80" },
                  {
                    td: "510",
                  },
                ],
              },
              {
                td: [
                  { td: "New Client Add " },
                  { td: "60" },
                  {
                    td: "62",
                  },
                ],
              },
              {
                td: [
                  { td: "Total Client " },
                  { td: "500" },
                  {
                    td: "400",
                  },
                ],
              },
              {
                td: [
                  { td: "Review Received  " },
                  { td: "20" },
                  {
                    td: "30",
                  },
                ],
              },
              {
                td: [
                  { td: "Review Received " },
                  { td: "30" },
                  {
                    td: "40",
                  },
                ],
              },
              {
                td: [
                  { td: "Sales  " },
                  { td: "₹50,000" },
                  {
                    td: "₹45,000",
                  },
                ],
              },
            ],
          },
        ],

        date: [
          { heading: "Next Follow up date", id: "nextFollow" },
          { heading: "Next Visit Date", id: "nextVisit" },
        ],
      },
    ],
    submit: [
      {
        heading: "Set UP",
        data: [
          {
            icon: <SmallCalenderIcon />,
            title: "Visit Date: ",
            titleData: " 11 April 2025",
          },
          {
            icon: <OveralScoreIcon />,
            title: "Overall Score : ",
            titleData: " 35 / 50",
          },
        ],

        date: [
          { heading: "Next Follow up date", id: "nextFollow" },
          { heading: "Next Visit Date", id: "nextVisit" },
        ],
      },
    ],
  },
];

export const settingCard = [
  {
    icon: <FileIcon />,
    heading: "Territory Details",
    pera: "View performance Metrics and PIN - wise salon distributions",
    path: "settings/territory-details",
  },
  {
    icon: <ProfileIcon />,
    heading: "BA Profiles",
    pera: "View and manage Business Associate Infirmations",
    path: "/settings/ba-profile",
  },
  {
    icon: <DetailsIcon />,
    heading: "Bank details",
    pera: "Add or update bank account details for payout",
    path: "#",
  },
  {
    icon: <EarningIcon />,
    heading: "Earning",
    pera: "Track revenue generated and view commission breakdowns",
    path: "/settings/earning",
  },
];

export const baProfileData = [
  {
    img: "/assest/svg/wade-warren.svg",
    name: "Wade Warren",
    jobTitle: "Manager",
    trigger: [
      {
        title: "Personal Details",
        value: "personalDetails",
      },
      {
        title: "Contract Details ",
        value: "contract",
      },
      {
        title: "Incentive ",
        value: "incentive",
      },
    ],
    content: [
      {
        value: "personalDetails",
        data: [
          { details: "Name:", detailsData: "Wade Warren" },
          { details: "Gender: ", detailsData: "Male", icon: <MaleIcon /> },
          { details: "Phone no.: ", detailsData: "+911233222423" },
          { details: "Email: ", detailsData: "kuldeep@gmail.com" },
          {
            details: "Address: ",
            detailsData: "4140 Parker Rd. Allentown, New Mexico 31134",
          },
        ],
      },
      {
        value: "contract",
        data: [
          { details: "License Fee:", detailsData: "Wade Warren" },
          { details: "License Term: ", detailsData: "1 year" },
          { details: "Agreement Date: ", detailsData: "12-03-2024" },
          { details: "Comm. Date:", detailsData: "15-03-2024" },
          { details: "Expiry Date:", detailsData: "20-03-2025" },
          { details: "Territory name:", detailsData: "Rohit Mehta" },
          { details: "Territory PIN Code:", detailsData: "237489" },
          { details: "Territory Potential:", detailsData: "Medium" },
        ],
      },
      {
        value: "incentive",
        data: [
          { details: "Subscription % :", detailsData: "80%" },
          { details: "Get Featured % :", detailsData: "86%" },
          { details: "Ads Manager % :", detailsData: "90%" },
        ],
      },
    ],
  },
];

export const trainingCardData = [
  {
    id: 1,
    img: "/assest/png/salon-partner.png",
    heading: "Da Salon Partner",
    ratting: <StarIcon />,
    description:
      "Learn how to onboard a salon partner with ease. A simple video guide for your team.",
    path: "#",
    linkTitle: "https/da salon partner.com",
    dateTime: [
      { icon: <CardDateIcon />, dateTime: "10-03-2024" },
      { icon: <WatchIcon />, dateTime: "9:15 AM" },
    ],
  },
  {
    id: 2,
    img: "/assest/png/salone-connecte.png",
    heading: "Da Salon Connect",
    ratting: <StarIcon />,
    description:
      "Learn how to onboard a salon partner with ease. A simple video guide for your team.",
    path: "#",
    linkTitle: "https/da salon partner.com",
    dateTime: [
      { icon: <CardDateIcon />, dateTime: "10-03-2024" },
      { icon: <WatchIcon />, dateTime: "9:15 AM" },
    ],
  },
  {
    id: 3,
    img: "/assest/png/salone-associate.png",
    heading: "Da Salon Market",
    ratting: <StarIcon />,
    description:
      "Learn how to onboard a salon partner with ease. A simple video guide for your team.",
    path: "#",
    linkTitle: "https/da salon partner.com",
    dateTime: [
      { icon: <CardDateIcon />, dateTime: "10-03-2024" },
      { icon: <WatchIcon />, dateTime: "9:15 AM" },
    ],
  },
  {
    id: 4,
    img: "/assest/png/business-associates.png",
    heading: "Business Associates",
    ratting: <StarIcon />,
    description:
      "Learn how to onboard a salon partner with ease. A simple video guide for your team.",
    path: "#",
    linkTitle: "https/da salon partner.com",
    dateTime: [
      { icon: <CardDateIcon />, dateTime: "10-03-2024" },
      { icon: <WatchIcon />, dateTime: "9:15 AM" },
    ],
  },
  {
    id: 5,
    img: "/assest/png/business-associates.png",
    heading: "Business Associates",
    ratting: <StarIcon />,
    description:
      "Learn how to onboard a salon partner with ease. A simple video guide for your team.",
    path: "#",
    linkTitle: "https/da salon partner.com",
    dateTime: [
      { icon: <CardDateIcon />, dateTime: "10-03-2024" },
      { icon: <WatchIcon />, dateTime: "9:15 AM" },
    ],
  },
  {
    id: 6,
    img: "/assest/png/salon-partner.png",
    heading: "Da Salon Partner",
    ratting: <StarIcon />,
    description:
      "Learn how to onboard a salon partner with ease. A simple video guide for your team.",
    path: "#",
    linkTitle: "https/da salon partner.com",
    dateTime: [
      { icon: <CardDateIcon />, dateTime: "10-03-2024" },
      { icon: <WatchIcon />, dateTime: "9:15 AM" },
    ],
  },
  {
    id: 7,
    img: "/assest/png/salone-connecte.png",
    heading: "Da Salon Connect",
    ratting: <StarIcon />,
    description:
      "Learn how to onboard a salon partner with ease. A simple video guide for your team.",
    path: "#",
    linkTitle: "https/da salon partner.com",
    dateTime: [
      { icon: <CardDateIcon />, dateTime: "10-03-2024" },
      { icon: <WatchIcon />, dateTime: "9:15 AM" },
    ],
  },
  {
    id: 8,
    img: "/assest/png/salone-associate.png",
    heading: "Da Salon Market",
    ratting: <StarIcon />,
    description:
      "Learn how to onboard a salon partner with ease. A simple video guide for your team.",
    path: "#",
    linkTitle: "https/da salon partner.com",
    dateTime: [
      { icon: <CardDateIcon />, dateTime: "10-03-2024" },
      { icon: <WatchIcon />, dateTime: "9:15 AM" },
    ],
  },
  {
    id: 9,
    img: "/assest/png/business-associates.png",
    heading: "Business Associates",
    ratting: <StarIcon />,
    description:
      "Learn how to onboard a salon partner with ease. A simple video guide for your team.",
    path: "#",
    linkTitle: "https/da salon partner.com",
    dateTime: [
      { icon: <CardDateIcon />, dateTime: "10-03-2024" },
      { icon: <WatchIcon />, dateTime: "9:15 AM" },
    ],
  },
  {
    id: 10,
    img: "/assest/png/business-associates.png",
    heading: "Business Associates",
    ratting: <StarIcon />,
    description:
      "Learn how to onboard a salon partner with ease. A simple video guide for your team.",
    path: "#",
    linkTitle: "https/da salon partner.com",
    dateTime: [
      { icon: <CardDateIcon />, dateTime: "10-03-2024" },
      { icon: <WatchIcon />, dateTime: "9:15 AM" },
    ],
  },
  {
    id: 11,
    img: "/assest/png/salon-partner.png",
    heading: "Da Salon Partner",
    ratting: <StarIcon />,
    description:
      "Learn how to onboard a salon partner with ease. A simple video guide for your team.",
    path: "#",
    linkTitle: "https/da salon partner.com",
    dateTime: [
      { icon: <CardDateIcon />, dateTime: "10-03-2024" },
      { icon: <WatchIcon />, dateTime: "9:15 AM" },
    ],
  },
  {
    id: 12,
    img: "/assest/png/salone-connecte.png",
    heading: "Da Salon Connect",
    ratting: <StarIcon />,
    description:
      "Learn how to onboard a salon partner with ease. A simple video guide for your team.",
    path: "#",
    linkTitle: "https/da salon partner.com",
    dateTime: [
      { icon: <CardDateIcon />, dateTime: "10-03-2024" },
      { icon: <WatchIcon />, dateTime: "9:15 AM" },
    ],
  },
  {
    id: 13,
    img: "/assest/png/salone-associate.png",
    heading: "Da Salon Market",
    ratting: <StarIcon />,
    description:
      "Learn how to onboard a salon partner with ease. A simple video guide for your team.",
    path: "#",
    linkTitle: "https/da salon partner.com",
    dateTime: [
      { icon: <CardDateIcon />, dateTime: "10-03-2024" },
      { icon: <WatchIcon />, dateTime: "9:15 AM" },
    ],
  },
  {
    id: 14,
    img: "/assest/png/business-associates.png",
    heading: "Business Associates",
    ratting: <StarIcon />,
    description:
      "Learn how to onboard a salon partner with ease. A simple video guide for your team.",
    path: "#",
    linkTitle: "https/da salon partner.com",
    dateTime: [
      { icon: <CardDateIcon />, dateTime: "10-03-2024" },
      { icon: <WatchIcon />, dateTime: "9:15 AM" },
    ],
  },
  {
    id: 15,
    img: "/assest/png/business-associates.png",
    heading: "Business Associates",
    ratting: <StarIcon />,
    description:
      "Learn how to onboard a salon partner with ease. A simple video guide for your team.",
    path: "#",
    linkTitle: "https/da salon partner.com",
    dateTime: [
      { icon: <CardDateIcon />, dateTime: "10-03-2024" },
      { icon: <WatchIcon />, dateTime: "9:15 AM" },
    ],
  },
];

export const platformEarningTableData = [
  {
    head: [
      { title: "Revenue Type" },
      { title: "Count" },
      { title: "Revenue" },
      { title: "Revenue Growth" },
    ],
    body: [
      {
        id: 1,
        td: [
          { tdData: "Subscription" },
          { tdData: "18" },
          { tdData: "₹25,000  " },
          { tdData: "88 %" },
        ],
      },
      {
        id: 2,
        td: [
          { tdData: "Get Featured" },
          { tdData: "12" },
          { tdData: "₹30,000" },
          { tdData: "90 %" },
        ],
      },
      {
        id: 3,
        td: [
          { tdData: "Ads Manager" },
          { tdData: "10" },
          { tdData: "₹35,000  " },
          { tdData: "96 %" },
        ],
      },
      {
        id: 4,
        td: [
          { tdData: "Total" },
          { tdData: "40" },
          { tdData: "₹90,000 " },
          { tdData: "96 %" },
        ],
      },
    ],
  },
];

export const selecteMemberEarning = [
  {
    icon: <MemberIcon />, // or better: JSX for an icon
    placeholder: "Select Member",
    options: [
      { title: "Talwinder", value: "talwinder" },
      { title: "Arjun", value: "arjun" },
    ],
  },
];
export const monthEarning = [
  {
    placeholder: "Select Month",
    options: [
      { title: "January", value: "jan" },
      { title: "February", value: "feb" },
      { title: "March", value: "mar" },
      { title: "April", value: "apr" },
      { title: "May", value: "may" },
      { title: "June", value: "jun" },
      { title: "July", value: "jul" },
      { title: "August", value: "aug" },
      { title: "September", value: "sep" },
      { title: "October", value: "oct" },
      { title: "November", value: "nov" },
      { title: "December", value: "dec" },
    ],
  },
];

export const earningDetailsData = [
  {
    head: [
      { title: "BA Name" },
      { title: "Territory Name " },
      { title: "Total Earning" },
      { title: "Total Amount" },
      { title: "Transaction ID" },
      { title: "Remarks" },
      { title: "File" },
    ],
    body: [
      {
        id: 1,
        td: [
          {
            saloneName: [
              {
                img: "/assest/png/salone-small-img.png",
                name: "Chroma Lounge",
              },
            ],
          },
          { tdData: "Western Crest" },
          { tdData: "₹1,70,500" },
          { tdData: "₹₹75,500" },
          { tdData: "TXN8745KLM932" },
          { tdData: "Earnings have shown consistent month-on-month growth." },
          {
            tdData: <PaymentModal screenshot="/assest/png/login-bg-img.png" />,
          },
        ],
      },
      {
        id: 2,
        td: [
          {
            saloneName: [
              {
                img: "/assest/png/salone-small-img.png",
                name: "Chroma Lounge",
              },
            ],
          },
          { tdData: "Western Crest" },
          { tdData: "₹1,70,500" },
          { tdData: "₹₹75,500" },
          { tdData: "TXN8745KLM932" },
          { tdData: "Earnings have shown consistent month-on-month growth." },
          {
            tdData: <PaymentModal screenshot="/assest/png/login-bg-img.png" />,
          },
        ],
      },
      {
        id: 3,
        td: [
          {
            saloneName: [
              {
                img: "/assest/png/salone-small-img.png",
                name: "Chroma Lounge",
              },
            ],
          },
          { tdData: "Western Crest" },
          { tdData: "₹1,70,500" },
          { tdData: "₹₹75,500" },
          { tdData: "TXN8745KLM932" },
          { tdData: "Earnings have shown consistent month-on-month growth." },
          {
            tdData: <PaymentModal screenshot="/assest/png/login-bg-img.png" />,
          },
        ],
      },
    ],
  },
];

export const territoryCardDetails = [
  {
    icon: <Iconapointment />,
    title: "Registered vs Assigned",
    heading: "90 / 270",
    righticon: <Iconright />,
    para: "+9%",
    percentage: "+12%",
  },
  {
    icon: <Iconactive />,
    title: "Active  vs Registered",
    heading: "921 / 21",
    righticon: <Iconright />,
    para: "+9%",
    percentage: "+12%",
  },
  {
    icon: <DollerIcon />,
    title: "Territory Sales",
    heading: "₹1,26,240",
    righticon: <Iconright />,
    para: "+9%",
    percentage: "+12%",
    month: "VS LAST MONTH",
  },
];

export const territoryTableData = [
  {
    head: [
      { title: "PIN Code" },
      { title: "City / Area" },
      { title: "Prospect Partner" },
      { title: "Registered Partner" },
      { title: "Active Partner" },
      { title: "Health Score" },
      { title: "Issues" },
      { title: "Total Sales" },
      { title: "Remarks" },
    ],
    body: [
      {
        id: 1,
        td: [
          { tdData: "234567  " },
          { tdData: "Pune/Maharashtra" },
          { tdData: "30" },
          { tdData: "40" },
          { tdData: "35" },
          { tdData: "35" },
          { issue: [{ issu1: "2", issu2: "3" }] },
          { tdData: "₹24,600" },
          { tdData: "Pangri" },
        ],
      },
      {
        id: 1,
        td: [
          { tdData: "431007" },
          { tdData: "Aurangabad/Maharashtra" },
          { tdData: "25" },
          { tdData: "50" },
          { tdData: "40" },
          { tdData: "25" },
          { issue: [{ issu1: "2", issu2: "3" }] },
          { tdData: "₹30,600" },
          { tdData: "Cidco N-6" },
        ],
      },
      {
        id: 1,
        td: [
          { tdData: "144205" },
          { tdData: "Phagwara/Punjab" },
          { tdData: "15" },
          { tdData: "39" },
          { tdData: "30" },
          { tdData: "32" },
          { issue: [{ issu1: "2", issu2: "3" }] },
          { tdData: "₹35,600" },
          { tdData: "Lakhpur" },
        ],
      },
      {
        id: 1,
        td: [
          { tdData: "234567  " },
          { tdData: "Pune/Maharashtra" },
          { tdData: "30" },
          { tdData: "40" },
          { tdData: "35" },
          { tdData: "35" },
          { issue: [{ issu1: "2", issu2: "3" }] },
          { tdData: "₹24,600" },
          { tdData: "Pangri" },
        ],
      },
      {
        id: 1,
        td: [
          { tdData: "431007" },
          { tdData: "Aurangabad/Maharashtra" },
          { tdData: "25" },
          { tdData: "50" },
          { tdData: "40" },
          { tdData: "25" },
          { issue: [{ issu1: "2", issu2: "3" }] },
          { tdData: "₹30,600" },
          { tdData: "Cidco N-6" },
        ],
      },
      {
        id: 1,
        td: [
          { tdData: "144205" },
          { tdData: "Phagwara/Punjab" },
          { tdData: "15" },
          { tdData: "39" },
          { tdData: "30" },
          { tdData: "32" },
          { issue: [{ issu1: "2", issu2: "3" }] },
          { tdData: "₹35,600" },
          { tdData: "Lakhpur" },
        ],
      },
    ],
  },
];

export const userProfileData = [
  {
    img: "/assest/svg/wade-warren.svg",
    name: "Wade Warren",
    jobTitle: "Manager",
    trigger: [
      {
        title: "Personal Details",
        value: "personalDetails",
        icon: <ParsoneIcon />,
      },
      {
        title: "Change Password",
        value: "changePassword",
        icon: <LockIcon />,
      },
    ],
    content: [
      {
        value: "personalDetails",
        data: [
         "jobhi"
        ],
      },
      {
        value: "changePassword",
        data: [
          { details: "License Fee:", detailsData: "Wade Warren" },
          { details: "License Term: ", detailsData: "1 year" },
          { details: "Agreement Date: ", detailsData: "12-03-2024" },
          { details: "Comm. Date:", detailsData: "15-03-2024" },
          { details: "Expiry Date:", detailsData: "20-03-2025" },
          { details: "Territory name:", detailsData: "Rohit Mehta" },
          { details: "Territory PIN Code:", detailsData: "237489" },
          { details: "Territory Potential:", detailsData: "Medium" },
        ],
      },
    ],
  },
];
