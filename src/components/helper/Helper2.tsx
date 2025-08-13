import TableKebabMenu from "../common/TableKebabMenu";
import TableMeatbalMenu from "../pages/insights/TableMeatbalMenu";
import {
  ClenderIcon,
  GreenRightIcon,
  LocationIcon,
  OveralScoreIcon,
  PhoneSmallIcon,
  RedWrongtIcon,
  ShowPassIcon,
  SmallCalenderIcon,
  TimeOutIcon,
} from "./Icon2";

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

export const criticalData = [
  {
    head: [
      { title: "Salone Name" },
      { title: "Address" },
      { title: "Health" },
      { title: "Issue" },
      { title: "Staff" },
      { title: "OnBoarding" },
      { title: "Bank Acc." },
      { title: "Monthly Target" },
      { title: "Subscription" },
      { title: "Last Visit" },
      { title: "Next Visit" },
      { title: "TC Name" },
      { title: "RM Name" },
      { title: "FE Name" },
      { title: "Action" },
    ],
    body: [
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
        issue: [{ issu1: "2", issu2: "3" }],
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
        action: <TableMeatbalMenu />,
        sidebarData: [
          {
            img: "/assest/png/salone-small-img.png",
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
            ownerName: " John Walley",
            ownerNo: " 23246-93902",
            manager: " Esther Howard",
            managerNo: " 78363-47438",
            fe: " Aditi Singh",
            feNo: " 32456-39432",
            rm: "  23348-32948",
            rmNo: " 78363-47438",
            tc: "  Priya Kumari",
            tcNo: " 84950-34859",
            actionData: [
              {
                heaing: "Visit on April 10th, 2024",
                persone: "by Ajay Singh (FE)",
                pera: [
                  { stronText: "Overall Score:", text: " 30/50" },
                  {
                    stronText: "Remarks: ",
                    text: " Showed keen interest in CRM and membership features. Demo scheduled.",
                  },
                ],
              },
              {
                heaing: "Visit on April 10th, 2024",
                persone: "by Ajay Singh (FE)",
                pera: [
                  {
                    stronText: "Reason: ",
                    text: " Task from previous visit not completed",
                  },
                  {
                    stronText: "Remarks: ",
                    text: " Showed keen interest in CRM and membership features. Demo scheduled.",
                  },
                ],
              },
              {
                heaing: "Visit on April 10th, 2024",
                persone: "by Ajay Singh (FE)",
                pera: [
                  { stronText: "Overall Score:", text: " 30/50" },
                  {
                    stronText: "Remarks: ",
                    text: " Showed keen interest in CRM and membership features. Demo scheduled.",
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
            img: "/assest/png/salone-small-img.png",
            name: "Maison Glow",
          },
        ],
        add: "Luxe Layers Lounge, 1285",
        health: "12",
        issue: [{ issu1: "3", issu2: "1" }],
        staff: "5",
        onboarding: <RedWrongtIcon />,
        bankAcc: <RedWrongtIcon />,
        monthlyTarget: <GreenRightIcon />,
        subscription: "expired",
        lastVisit: "11 days ago",
        nextVisit: "Aug 10 ,2025",
        tcName: "Meera Sharma",
        rmName: "Rhea Malhotra",
        feName: "Neha Singh",
        action: <TableMeatbalMenu />,
      },
      {
        id: 3,
        saloneName: [
          {
            img: "/assest/png/salone-small-img.png",
            name: "The Gilded Comb",
          },
        ],
        add: "The Styling Suite, 45 Ke....",
        health: "25",
        issue: [{ issu1: "3", issu2: "2" }],
        staff: "3",
        onboarding: <RedWrongtIcon />,
        bankAcc: <RedWrongtIcon />,
        monthlyTarget: <RedWrongtIcon />,
        subscription: "due",
        lastVisit: "6 days ago",
        nextVisit: "July 14 ,2025",
        tcName: "Ritika Verma",
        rmName: "Rhea Malhotra",
        feName: "Neha Singh",
        action: <TableMeatbalMenu />,
      },
      {
        id: 4,
        saloneName: [
          {
            img: "/assest/png/salone-small-img.png",
            name: "Chroma Lounge",
          },
        ],
        add: "281 Madison Street, SoHo District, NY",
        health: "80",
        issue: [{ issu1: "2", issu2: "3" }],
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
        action: <TableMeatbalMenu />,
      },
      {
        id: 5,
        saloneName: [
          {
            img: "/assest/png/salone-small-img.png",
            name: "Maison Glow",
          },
        ],
        add: "Luxe Layers Lounge, 1285",
        health: "12",
        issue: [{ issu1: "3", issu2: "1" }],
        staff: "5",
        onboarding: <RedWrongtIcon />,
        bankAcc: <RedWrongtIcon />,
        monthlyTarget: <GreenRightIcon />,
        subscription: "expired",
        lastVisit: "11 days ago",
        nextVisit: "Aug 10 ,2025",
        tcName: "Meera Sharma",
        rmName: "Rhea Malhotra",
        feName: "Neha Singh",
        action: <TableMeatbalMenu />,
      },
      {
        id: 6,
        saloneName: [
          {
            img: "/assest/png/salone-small-img.png",
            name: "The Gilded Comb",
          },
        ],
        add: "The Styling Suite, 45 Ke....",
        health: "25",
        issue: [{ issu1: "3", issu2: "2" }],
        staff: "3",
        onboarding: <RedWrongtIcon />,
        bankAcc: <RedWrongtIcon />,
        monthlyTarget: <RedWrongtIcon />,
        subscription: "due",
        lastVisit: "6 days ago",
        nextVisit: "July 14 ,2025",
        tcName: "Ritika Verma",
        rmName: "Rhea Malhotra",
        feName: "Neha Singh",
        action: <TableMeatbalMenu />,
      },
      {
        id: 7,
        saloneName: [
          {
            img: "/assest/png/salone-small-img.png",
            name: "Chroma Lounge",
          },
        ],
        add: "281 Madison Street, SoHo District, NY",
        health: "80",
        issue: [{ issu1: "2", issu2: "3" }],
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
        action: <TableMeatbalMenu />,
      },
      {
        id: 8,
        saloneName: [
          {
            img: "/assest/png/salone-small-img.png",
            name: "Maison Glow",
          },
        ],
        add: "Luxe Layers Lounge, 1285",
        health: "12",
        issue: [{ issu1: "3", issu2: "1" }],
        staff: "5",
        onboarding: <RedWrongtIcon />,
        bankAcc: <RedWrongtIcon />,
        monthlyTarget: <GreenRightIcon />,
        subscription: "expired",
        lastVisit: "11 days ago",
        nextVisit: "Aug 10 ,2025",
        tcName: "Meera Sharma",
        rmName: "Rhea Malhotra",
        feName: "Neha Singh",
        action: <TableMeatbalMenu />,
      },
      {
        id: 9,
        saloneName: [
          {
            img: "/assest/png/salone-small-img.png",
            name: "The Gilded Comb",
          },
        ],
        add: "The Styling Suite, 45 Ke....",
        health: "25",
        issue: [{ issu1: "3", issu2: "2" }],
        staff: "3",
        onboarding: <RedWrongtIcon />,
        bankAcc: <RedWrongtIcon />,
        monthlyTarget: <RedWrongtIcon />,
        subscription: "due",
        lastVisit: "6 days ago",
        nextVisit: "July 14 ,2025",
        tcName: "Ritika Verma",
        rmName: "Rhea Malhotra",
        feName: "Neha Singh",
        action: <TableMeatbalMenu />,
      },
      {
        id: 10,
        saloneName: [
          {
            img: "/assest/png/salone-small-img.png",
            name: "Chroma Lounge",
          },
        ],
        add: "281 Madison Street, SoHo District, NY",
        health: "80",
        issue: [{ issu1: "2", issu2: "3" }],
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
        action: <TableMeatbalMenu />,
      },
      {
        id: 11,
        saloneName: [
          {
            img: "/assest/png/salone-small-img.png",
            name: "Maison Glow",
          },
        ],
        add: "Luxe Layers Lounge, 1285",
        health: "12",
        issue: [{ issu1: "3", issu2: "1" }],
        staff: "5",
        onboarding: <RedWrongtIcon />,
        bankAcc: <RedWrongtIcon />,
        monthlyTarget: <GreenRightIcon />,
        subscription: "active",
        lastVisit: "11 days ago",
        nextVisit: "Aug 10 ,2025",
        tcName: "Meera Sharma",
        rmName: "Rhea Malhotra",
        feName: "Neha Singh",
        action: <TableMeatbalMenu />,
      },
      {
        id: 12,
        saloneName: [
          {
            img: "/assest/png/salone-small-img.png",
            name: "The Gilded Comb",
          },
        ],
        add: "The Styling Suite, 45 Ke....",
        health: "25",
        issue: [{ issu1: "3", issu2: "2" }],
        staff: "3",
        onboarding: <RedWrongtIcon />,
        bankAcc: <RedWrongtIcon />,
        monthlyTarget: <RedWrongtIcon />,
        subscription: "due",
        lastVisit: "6 days ago",
        nextVisit: "July 14 ,2025",
        tcName: "Ritika Verma",
        rmName: "Rhea Malhotra",
        feName: "Neha Singh",
        action: <TableMeatbalMenu />,
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
