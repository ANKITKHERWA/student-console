import {
  AppointmentBlueIcon,
  AppointmentGreenIcon,
  CardDateIcon,
  ClenderIcon,
  DetailsIcon,
  DollerIcon,
  EarningIcon,
  FePrsone,
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
  RmPrsone,
  ShowPassIcon,
  SmallCalenderIcon,
  StarIcon,
  WatchIcon,
} from "./Icon2";
import PaymentModal from "../pages/settings/earning/PaymentMudal";
import {
  Aaravsharma,
  FemaleteamCard,
  Iconactive,
  Iconapointment,
  Iconright,
  MaleteamCard,
  Priyasingh,
} from "./Icon1";
import ScheduleFollowUp from "../pages/insights/ScheduleFollowUp";

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
  { title: "Today", id: "1" },
  { title: "Yesterday", id: "2" },
  { title: "Next 7 days", id: "3" },
  { title: "Next 30 days", id: "4" },
  { title: "This Month", id: "5" },
  { title: "Next Month", id: "6" },
  { title: "This year", id: "7" },
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
          { lastVisit: "18 Aug 2025" },
          { nextVisit: "18 Aug 2025" },
          { tcName: "Vikas" },
          { rmName: "Sonia" },
          { feName: "Raj" },
          { action: "..." },
        ],
      },
      {
        id: 2,
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
          { subscription: "Active" },
          { lastVisit: "14 Aug 2025" },
          { nextVisit: "21 Aug 2025" },
          { tcName: "Meera" },
          { rmName: "Rahul" },
          { feName: "Arjun" },
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
          { subscription: "Active" },
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

export const sidebarData = [
  {
    img: "/assest/png/salone-small-img.png",
    name: "Glamour Glow Studio",
    nextVisit: "",
    addvisit: <ScheduleFollowUp />,
    nextFollowUp: "",
    addFollowUp: <ScheduleFollowUp />,
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
            id: "1",
            icon: <SmallCalenderIcon />,
            title: "Visit Date: ",
            titleData: " 11 April 2025",
          },
          {
            id: "2",
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
        nextFollow: "Next Follow up date",
        nexFollowtId: "nextFollow",
        nextVisit: "Next Visit Date",
        nextVisitId: "nextVisit",
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
    path: "/settings/bank-details",
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        data: ["jobhi"],
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

export const teamCardData = [
  {
    heading: "TC List ( 2 )",
    tcList: [
      {
        avatar: <Aaravsharma />,
        name: "Aarav Sharma",
        icon: <MaleteamCard />,
        gender: "Male",
        tag: "TC",
        phone: "+919876500101",
        email: "aarav.sharma@example.com",
        manages: " 2 RM & 3 FE",
        totalSalons: 1100,
        dotclass: "bg-green-500",
        tagclass: "border-[#FFAB47] bg-[#FFEFDB]",
        ganderclass: "bg-[#E4E7EB] border-[#808188]",
      },
    ],
  },
  {
    heading: "RM List ( 4 )",
    tcList: [
      {
        avatar: <Priyasingh />,
        name: "Priya Singh",
        icon: <FemaleteamCard />,
        gender: "Male",
        tag: "RM",
        phone: "+919876500101",
        email: "tanya.hill@example.com",
        manages: " 2 RM & 3 FE",
        totalSalons: 1100,
        dotclass: "bg-red-500",
        tagclass: "border-[#FFAB47] bg-[#F]",
        ganderclass: "bg-[#E4E7EB] border-[#808188]",
      },
    ],
  },
];

export const someData = [
  {
    heading: "TC List ( 2 )",
    tcList: [
      {
        status: "Working",
        avatar: <Aaravsharma />,
        name: "Aarav Sharma",
        icon: <MaleteamCard />,
        gender: "Male",
        tag: "TC",
        subData: [
          {
            phone: "+919876500101",
            email: "tanya.hill@example.com",
            manages: " 2 RM & 3 FE",
            totalSalons: 1100,
            dotclass: "bg-red-500",
            tagclass: "border-[#FFAB47] bg-[#F]",
            ganderclass: "bg-[#E4E7EB] border-[#808188]",
          },
        ],
      },
      {
        status: "Not Working",
        avatar: <Priyasingh />,
        name: "Priya Singh",
        icon: <MaleteamCard />,
        gender: "Female",
        tag: "RM",
        subData: [
          {
            phone: "+919876500101",
            email: "tanya.hill@example.com",
            manages: " 2 RM & 3 FE",
            totalSalons: 1100,
            dotclass: "bg-red-500",
            tagclass: "border-[#FFAB47] bg-[#F]",
            ganderclass: "bg-[#E4E7EB] border-[#808188]",
          },
        ],
      },
      {
        status: "Working",
        avatar: <Priyasingh />,
        name: "Priya Singh",
        icon: <MaleteamCard />,
        gender: "Female",
        tag: "FE",
        subData: [
          {
            phone: "+919876500101",
            email: "priya.hill@example.com",
            manages: " 2 RM & 3 FE",
            totalSalons: 1100,
            dotclass: "bg-red-500",
            tagclass: "border-[#FFAB47] bg-[#F]",
            ganderclass: "bg-[#E4E7EB] border-[#808188]",
          },
        ],
      },
      {
        status: "Working",
        avatar: <Priyasingh />,
        name: "Priya Singh",
        icon: <MaleteamCard />,
        gender: "Female",
        tag: "FE",
        subData: [
          {
            phone: "+919876500101",
            email: "priya.hill@example.com",
            manages: " 2 RM & 3 FE",
            totalSalons: 1100,
            dotclass: "bg-red-500",
            tagclass: "border-[#FFAB47] bg-[#F]",
            ganderclass: "bg-[#E4E7EB] border-[#808188]",
          },
        ],
      },
      {
        status: "Working",
        avatar: <Priyasingh />,
        name: "Priya Singh",
        icon: <MaleteamCard />,
        gender: "Female",
        tag: "FE",
        subData: [
          {
            phone: "+919876500101",
            email: "priya.hill@example.com",
            manages: " 2 RM & 3 FE",
            totalSalons: 1100,
            dotclass: "bg-red-500",
            tagclass: "border-[#FFAB47] bg-[#F]",
            ganderclass: "bg-[#E4E7EB] border-[#808188]",
          },
        ],
      },
    ],
  },
  {
    heading: "TC List ( 2 )",
    tcList: [
      {
        status: "Working",
        avatar: <Aaravsharma />,
        name: "Aarav Sharma",
        icon: <MaleteamCard />,
        gender: "Male",
        tag: "TC",
        subData: [
          {
            phone: "+919876500101",
            email: "tanya.hill@example.com",
            manages: " 2 RM & 3 FE",
            totalSalons: 1100,
            dotclass: "bg-red-500",
            tagclass: "border-[#FFAB47] bg-[#F]",
            ganderclass: "bg-[#E4E7EB] border-[#808188]",
          },
        ],
      },
      {
        status: "Not Working",
        avatar: <Priyasingh />,
        name: "Priya Singh",
        icon: <MaleteamCard />,
        gender: "Female",
        tag: "RM",
        subData: [
          {
            phone: "+919876500101",
            email: "tanya.hill@example.com",
            manages: " 2 RM & 3 FE",
            totalSalons: 1100,
            dotclass: "bg-red-500",
            tagclass: "border-[#FFAB47] bg-[#F]",
            ganderclass: "bg-[#E4E7EB] border-[#808188]",
          },
        ],
      },
    ],
  },
];

export const targetInputs = [
  {
    heading: "Onboarding Salons",
    type: "number",
    placeholder: "22",
    id: "onboardingSalons",
    msg: "No. of new salons successfully onboarded",
  },
  {
    heading: "Active vs Assigned Salon Ratio",
    type: "number",
    placeholder: "90",
    id: "activeVsAssignedSalonRatio",
    msg: "% OF ACTIVE SALONS OUT OF TOTAL ASSIGNED",
  },
  {
    heading: "Visit Conducted",
    type: "number",
    placeholder: "200",
    id: "visitConducted",
    msg: "Total number of partner visits completed. Min. visits >= assigned salons. (Unit: visits)",
  },
  {
    heading: "Appointments Booked",
    type: "number",
    placeholder: "94",
    id: "bookedAppointments",
    msg: "Total online + offline appointments created by assigned salons. (Unit: appointments)",
  },
  {
    heading: "Sales Count ",
    type: "number",
    placeholder: "33",
    id: "salesCount",
    msg: "Total number of sales transactions by assigned salons. (Unit: transactions)",
  },
  {
    heading: "Promo Code Generated ",
    type: "number",
    placeholder: "43",
    id: "promoCodeGenerated",
    msg: "Count of unique promo codes generated in the month. (Unit: codes)",
  },
  {
    heading: "Get Featured ",
    type: "number",
    placeholder: "41",
    id: "getFeatured",
    msg: "Count of salons actively using the 'Get Featured' service. (Unit: salons)",
  },
  {
    heading: "Digital Ads ",
    type: "number",
    placeholder: "41",
    id: "digitalAds",
    msg: "Count of salons running digital ad campaigns. (Unit: salons)",
  },
  {
    heading: "Creative Studio ",
    type: "number",
    placeholder: "25",
    id: "creativeStudio",
    msg: "Count of salons utilizing the Creative Studio. (Unit: salons)",
  },
  {
    heading: "Easy Share ",
    type: "number",
    placeholder: "39",
    id: "easyShare",
    msg: "Count of salons using the Easy Share feature. (Unit: salons)",
  },
  {
    heading: "Campaign Message Sent ",
    type: "number",
    placeholder: "63",
    id: "messageSent",
    msg: "Count of campaign messages sent by salons. (Unit: messages)",
  },
];

export const overallPerformance = [
  {
    icon: <Iconapointment />,
    title: "Team Onboarding Achievement",
    heading: "89 %",
    info: "Against total team target",
  },
  {
    icon: <Iconapointment />,
    title: "Avg. Active Salon Ratio",
    heading: "53.3 %",
    info: "Average across all FEs",
  },
  {
    icon: <Iconapointment />,
    title: "Team Visits Achievement",
    heading: "83 %",
    info: "Against total team target",
  },
  {
    icon: <Iconapointment />,
    title: "Sales Count",
    heading: "81 %",
    info: "Against total team target",
  },
];

export const tcTeamChartData = [
  { name: "Mon", value: 40000 },
  { name: "Tue", value: 28000 },
];
export const rmTeamChartData = [
  { name: "Mon", value: 40000 },
  { name: "Tue", value: 30000 },
  { name: "Tue", value: 30000 },
  { name: "Tue", value: 20000 },
];
export const feTeamChartData = [
  { name: "Mon", value: 40000 },
  { name: "Tue", value: 30000 },
  { name: "Tue", value: 30000 },
  { name: "Tue", value: 20000 },
  { name: "Mon", value: 40000 },
  { name: "Tue", value: 30000 },
  { name: "Tue", value: 30000 },
  { name: "Tue", value: 20000 },
  { name: "Tue", value: 20000 },
  { name: "Mon", value: 40000 },
];

export const appointment = [
  {
    head: [
      { title: "" },
      { title: "Appointment ID" },
      { title: "Customer Name" },
      { title: "Date & Time" },
      { title: "Status" },
      { title: "Amount" },
      { title: "Staff" },
      { title: "Service/Packages" },
      { title: "Venue" },
      { title: "Actions" },
    ],
    body: [
      {
        id: 1,
        td: [
          { idIcon: <AppointmentGreenIcon /> },
          { appointmentId: "#A-BJBG4F" },

          {
            saloneName: [
              {
                img: "/assest/png/salone-small-img.png",
                name: "Glamour Studio",
                subtext: "+91 896 6372 6386",
              },
            ],
          },
          { dateTime: [{ date: "18/08/2003", time: "11:11am-11:11pm" }] },
          { status: "New" },
          { tdData: "₹1,990.00" },
          { staff: "Priya Sharma" },
          { work: [{ work: "Hair Styling", workCount: "+3" }] },
          { venue: "Decadence Hair & Beauty" },
          { action: "..." }, // TableKebabMenu renders for this
        ],
      },
      {
        id: 2,
        td: [
          { idIcon: <AppointmentGreenIcon /> },
          { appointmentId: "#A-BJBG4F" },
          {
            saloneName: [
              {
                img: "/assest/png/salone-small-img.png",
                name: "Esther Howard",
                subtext: "+91 896 6372 6386",
              },
            ],
          },
          { dateTime: [{ date: "13/07/2024 ", time: "11:11am-11:11pm" }] },
          { status: "Not Show" },
          { tdData: "₹3,300.00" },
          { staff: "Rohit Mehta" },
          { work: [{ work: "Hair Cut", workCount: "+1" }] },
          { venue: "Decadence Hair & Beauty" },
          { action: "..." }, // TableKebabMenu renders for this
        ],
      },
      {
        id: 3,
        td: [
          { idIcon: <AppointmentBlueIcon /> },
          { appointmentId: "#A-BJBG4F" },

          {
            saloneName: [
              {
                img: "/assest/png/salone-small-img.png",
                name: "Esther Howard",
                subtext: "+91 896 6372 6386",
              },
            ],
          },
          { dateTime: [{ date: "12/07/2024 ", time: "11:11am-11:11pm" }] },
          { status: "Completed" },
          { tdData: "₹1,650.00" },
          { staff: "Neha Gupta" },
          { work: [{ work: "Jumbo Package" }] },
          { venue: "Decadence Hair & Beauty" },
          { action: "..." }, // TableKebabMenu renders for this
        ],
      },
    ],
  },
];

export const appointmentTc = [
  {
    icon: <MemberIcon />, // or better: JSX for an icon
    placeholder: "Select TC",
    options: [
      { title: "Talwinder", value: "talwinder" },
      { title: "Virendar", value: "virender" },
    ],
  },
  {
    icon: <RmPrsone />, // or better: JSX for an icon
    placeholder: "Select RM",
    options: [
      { title: "Talwinder", value: "talwinder" },
      { title: "Arjun", value: "arjun" },
    ],
  },
  {
    icon: <FePrsone />, // or better: JSX for an icon
    placeholder: "Select FE",
    options: [
      { title: "Talwinder", value: "talwinder" },
      { title: "Arjun", value: "arjun" },
    ],
  },
  {
    placeholder: "Select Status",
    options: [
      { title: "Talwinder", value: "talwinder" },
      { title: "Arjun", value: "arjun" },
    ],
  },
];

export const appointmentBooking = [
  {
    placeholder: "Select Booking",
    options: [
      { title: "Talwinder", value: "talwinder" },
      { title: "Arjun", value: "arjun" },
    ],
  },
];

export const followUpPlans = [
  {
    head: [
      { title: "Partner" },
      { title: "Visit Id" },
      { title: "Customer Name" },
      { title: "Address & Contact" },
      { title: "Date & Time" },
      { title: "Status" },
      { title: "TC Name" },
      { title: "RM Name" },
      { title: "FE Name" },
      { title: "Action" },
    ],
    body: [
      {
        id: 1,
        td: [
          { dot: "Prospective" },
          { tdData: "CL-V001" },
          { tdData: "Mirror & Mane" },
          {
            datas: [
              {
                up: "3517 W. Gray St. Utica, Pennsylvania 57867",
                down: "89555-01296",
              },
            ],
          },
          { dateTime: [{ date: "18/08/2003", time: "11:11am-11:11pm" }] },
          { status: "New" },
          { tdData: "Aditi Singh" },
          { tdData: "Bessie Cooper" },
          { tdData: "Leslie Alexander" },
          { action: "..." }, // TableKebabMenu renders for this
        ],
      },
      {
        id: 2,
        td: [
          { dot: "Registered" },
          { tdData: "CL-V001" },
          { tdData: "Mirror & Mane" },
          {
            datas: [
              {
                up: "3517 W. Gray St. Utica, Pennsylvania 57867",
                down: "89555-01296",
              },
            ],
          },
          { dateTime: [{ date: "18/08/2003", time: "11:11am-11:11pm" }] },
          { status: "Expired" },
          { tdData: "Aditi Singh" },
          { tdData: "Bessie Cooper" },
          { tdData: "Leslie Alexander" },
          { action: "..." }, // TableKebabMenu renders for this
        ],
      },
    ],
  },
];

export const followUp = [
  {
    placeholder: "Select Status",
    options: [
      { title: "Talwinder", value: "talwinder" },
      { title: "Arjun", value: "arjun" },
    ],
  },
];

export const optionsList = [
  {
    placeholder: "Select TC",
    id: "1",
    item: [
      {
        value: "1",
        img: "/assest/svg/dashboard-1st.svg",
        title: "Aarav Sharma",
      },
      {
        value: "2",
        img: "/assest/svg/dashboard-1st.svg",
        title: "Priya Patel",
      },
      {
        value: "3",
        img: "/assest/svg/dashboard-1st.svg",
        title: "Ananya Iyer",
      },
      {
        value: "4",
        img: "/assest/svg/dashboard-1st.svg",
        title: "Rohan Gupta",
      },
    ],
  },
  {
    placeholder: "Select FE",
    id: "2",
    item: [
      {
        value: "1",
        img: "/assest/svg/dashboard-1st.svg",
        title: "Aarav Sharma",
      },
      {
        value: "2",
        img: "/assest/svg/dashboard-1st.svg",
        title: "Priya Patel",
      },
      {
        value: "3",
        img: "/assest/svg/dashboard-1st.svg",
        title: "Ananya Iyer",
      },
      {
        value: "4",
        img: "/assest/svg/dashboard-1st.svg",
        title: "Rohan Gupta",
      },
    ],
  },
  {
    placeholder: "Select RM",
    id: "3",
    item: [
      {
        value: "1",
        img: "/assest/svg/dashboard-1st.svg",
        title: "Aarav Sharma",
      },
      {
        value: "2",
        img: "/assest/svg/dashboard-1st.svg",
        title: "Priya Patel",
      },
      {
        value: "3",
        img: "/assest/svg/dashboard-1st.svg",
        title: "Ananya Iyer",
      },
      {
        value: "4",
        img: "/assest/svg/dashboard-1st.svg",
        title: "Rohan Gupta",
      },
    ],
  },
];

export const data2 = {
  critical: [
    { title: "Incomplete Onboarding", days: "30 days" },
    { title: "Off-Peak hours not set", days: "15 days" },
    { title: "Missing Bank Account", days: "20 days" },
    { title: "Subscription overdue", days: "10 days" },
  ],
  growth: [
    { title: "New Service Opportunity", days: "5 days" },
    { title: "Increase Social Media Reach", days: "12 days" },
  ],
};

export const optionsList2 = [
  {
    placeholder: "Select TC",
    id: "1",
    item: [
      {
        value: "1",
        title: "Aarav Sharma",
      },
      {
        value: "2",
        title: "Priya Patel",
      },
      {
        value: "3",
        title: "Ananya Iyer",
      },
      {
        value: "4",
        title: "Rohan Gupta",
      },
    ],
  },
];

export const ReportRegisterd = [
  {
    head: [
      { title: "Ids" },
      { title: "Salon Name" },
      { title: "Date & Time" },
      { title: "Issue" },
      { title: "Catalog & Staff" },
      { title: "offer" },
      { title: "Promote" },
      { title: "Client" },
      { title: "Set Up" },
      { title: "Status  " },
      { title: "Remarks" },
      { title: "Action" },
    ],
    body: [
      {
        id: 1,
        td: [
          { tdData: "VIS-009" },
          { tdData: "Luxe Locks Studio" },
          { dateTime: [{ date: "18/08/2003", time: "11:11am-11:11pm" }] },
          { issue: [{ issu1: "0", issu2: "1" }] },
          { tdData: "9" },
          { tdData: "5" },
          { tdData: "5" },
          { tdData: "6" },
          { tdData: "7" },
          { status: "Expired" },
          { tdData: "Interested in collaboration, requested service details." },
          { action: "..." },
        ],
      },
      {
        id: 2,
        td: [
          { tdData: "VIS-009" },
          { tdData: "Luxe Locks Studio" },
          { dateTime: [{ date: "18/08/2003", time: "11:11am-11:11pm" }] },
          { issue: [{ issu1: "0", issu2: "1" }] },
          { tdData: "9" },
          { tdData: "5" },
          { tdData: "5" },
          { tdData: "6" },
          { tdData: "7" },
          { status: "Expired" },
          { tdData: "Interested in collaboration, requested service details." },
          { action: "..." },
        ],
      },
      {
        id: 3,
        td: [
          { tdData: "VIS-009" },
          { tdData: "Luxe Locks Studio" },
          { dateTime: [{ date: "18/08/2003", time: "11:11am-11:11pm" }] },
          { issue: [{ issu1: "0", issu2: "1" }] },
          { tdData: "9" },
          { tdData: "5" },
          { tdData: "5" },
          { tdData: "6" },
          { tdData: "7" },
          { status: "Completed" },
          { tdData: "Interested in collaboration, requested service details." },
          { action: "..." },
        ],
      },
    ],
  },
];
export const ReportProspective = [
  {
    head: [
      { title: "Ids" },
      { title: "Salon Name" },
      { title: "Date & Time" },
      { title: "Seat" },
      { title: " Manage" },
      { title: "Grow" },
      { title: "Promote" },
      { title: "Overall " },
      { title: "Software" },
      { title: "Status" },
      { title: "Remarks" },
      { title: "Action" },
    ],
    body: [
      {
        id: 1,
        td: [
          { tdData: "VISIT-09999" },
          { tdData: "Luxe Locks Studio" },
          { dateTime: [{ date: "18/08/2003", time: "11:11am-11:11pm" }] },
          { tdData: "5-7" },
          { tdData: "3" },
          { tdData: "2" },
          { tdData: "1" },
          { tdData: "3" },
          { tdData: "Zenoti" },
          { status: "Completed" },
          { tdData: "Wants to onboard ASAP. F" },
          { action: "..." },
        ],
      },
      {
        id: 2,
        td: [
          { tdData: "VIS-009" },
          { tdData: "Luxe Locks Studio" },
          { dateTime: [{ date: "18/08/2003", time: "11:11am-11:11pm" }] },
          { tdData: "5-7" },
          { tdData: "3" },
          { tdData: "2" },
          { tdData: "1" },
          { tdData: "3" },
          { tdData: "Fresha" },
          { status: "Expired" },
          { tdData: "Wants to onboard ASAP. F" },
          { action: "..." },
        ],
      },
      {
        id: 3,
        td: [
          { tdData: "VIS-009" },
          { tdData: "Luxe Locks Studio" },
          { dateTime: [{ date: "18/08/2003", time: "11:11am-11:11pm" }] },
          { tdData: "5-7" },
          { tdData: "3" },
          { tdData: "2" },
          { tdData: "1" },
          { tdData: "3" },
          { tdData: "Vagaro" },
          { status: "Completed" },
          { tdData: "Wants to onboard ASAP. F" },
          { action: "..." },
        ],
      },
    ],
  },
];

export const tabOrder = [
  "lastVisit",
  "catalogStaff",
  "offers",
  "promoteUse",
  "clientEngagement",
  "setUp",
  "submit",
];
