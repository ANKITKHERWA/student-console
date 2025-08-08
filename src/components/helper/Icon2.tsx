import React from "react";

interface IconProps {
  className?: string;
}

export const ShowPassIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M2 7.9987C2.83574 5.28731 5.20623 3.33203 8 3.33203C10.7938 3.33203 13.1643 5.28731 14 7.9987C13.1643 10.7101 10.7938 12.6654 8 12.6654C5.20623 12.6654 2.83574 10.7101 2 7.9987Z"
        stroke="#808188"
        stroke-width="1.33333"
        stroke-linejoin="round"
      />
      <circle
        cx="7.9987"
        cy="7.9987"
        r="1.66667"
        stroke="#808188"
        stroke-width="1.33333"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const GoogleIcon = () => {
  return (
    <svg
      className="md:max-w-[20px] max-w-[15px]"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <g clip-path="url(#clip0_3104_5652)">
        <path
          d="M19.8042 10.2312C19.8042 9.55141 19.7491 8.86797 19.6315 8.19922H10.1992V12.05H15.6007C15.3765 13.292 14.6563 14.3907 13.6018 15.0888V17.5874H16.8243C18.7166 15.8457 19.8042 13.2736 19.8042 10.2312Z"
          fill="#4285F4"
        />
        <path
          d="M10.2019 19.9998C12.8989 19.9998 15.1734 19.1143 16.8306 17.5857L13.6081 15.0871C12.7115 15.697 11.5541 16.0424 10.2056 16.0424C7.59669 16.0424 5.38468 14.2824 4.591 11.916H1.26562V14.4918C2.96322 17.8686 6.42087 19.9998 10.2019 19.9998Z"
          fill="#34A853"
        />
        <path
          d="M4.58467 11.9163C4.16578 10.6743 4.16578 9.32947 4.58467 8.0875V5.51172H1.26297C-0.155365 8.33737 -0.155365 11.6664 1.26297 14.4921L4.58467 11.9163Z"
          fill="#FBBC04"
        />
        <path
          d="M10.2019 3.95805C11.6276 3.936 13.0055 4.47247 14.038 5.45722L16.893 2.60218C15.0852 0.904587 12.6858 -0.0287217 10.2019 0.000673888C6.42087 0.000673888 2.96322 2.13185 1.26562 5.51234L4.58732 8.08813C5.37733 5.71811 7.59302 3.95805 10.2019 3.95805Z"
          fill="#EA4335"
        />
      </g>
      <defs>
        <clipPath id="clip0_3104_5652">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const MailIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M14.6654 4.0013C14.6654 3.26797 14.0654 2.66797 13.332 2.66797H2.66536C1.93203 2.66797 1.33203 3.26797 1.33203 4.0013M14.6654 4.0013V12.0013C14.6654 12.7346 14.0654 13.3346 13.332 13.3346H2.66536C1.93203 13.3346 1.33203 12.7346 1.33203 12.0013V4.0013M14.6654 4.0013L7.9987 8.66797L1.33203 4.0013"
        stroke="#808188"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const ChangeSecces: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={`${className}`}
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
    >
      <circle cx="83.4883" cy="103.543" r="5.82813" fill="#43405A" />
      <circle cx="41.2949" cy="103.543" r="5.82813" fill="#43405A" />
      <path
        d="M26.1731 45.6813C25.7773 43.2478 27.6558 41.0391 30.1212 41.0391H95.8538C98.5994 41.0391 100.529 43.7419 99.6368 46.3385L87.2596 82.3712C86.5196 84.5254 84.4933 85.9719 82.2155 85.9719H37.2629C34.6479 85.9719 32.4186 84.0759 31.9987 81.4949L26.1731 45.6813Z"
        fill="#C9C7D9"
      />
      <path
        d="M88.4701 97.7149H45.5292C40.2574 97.7149 35.7764 93.8638 34.9837 88.652L27.6239 40.2582C26.8313 35.0464 22.3502 31.1953 17.0785 31.1953H14.2891"
        stroke="#B751FB"
        stroke-width="5.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M39.7578 49.1992H87.1172"
        stroke="#A9A6C4"
        stroke-width="2.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M41.293 58.3086L84.4023 58.3086"
        stroke="#A9A6C4"
        stroke-width="2.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M42.7324 67.4141H80.8678"
        stroke="#A9A6C4"
        stroke-width="2.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M43.9473 76.5234H77.6608"
        stroke="#A9A6C4"
        stroke-width="2.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M63.4375 29.113V10.6289"
        stroke="#C9C7D9"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M72.2461 29.8519L79.1654 19.5703"
        stroke="#C9C7D9"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M54.627 29.8519L47.7077 19.5703"
        stroke="#C9C7D9"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
