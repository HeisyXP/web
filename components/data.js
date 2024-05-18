import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  BanknotesIcon,
  CpuChipIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "We allow you to easily trade overseas.",
  desc: "We enable seamless and efficient overseas imports/exports for you. You can effortlessly begin trading worldwide, even if you don't speak any foreign langugae.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Smooth & intuitive onboarding",
      desc: "Our app enables even import/export novices to intuitively onboard and navigate complex procedures.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "AI-powered one stop solution",
      desc: "With the latest AI technology, streamline all external collaboration within the app for efficient export processes.",
      icon: <CpuChipIcon />,
    },
    {
      title: "Transparent transactions",
      desc: "We provide a trusted platform for sellers and buyers to conduct transparent transactions with peace of mind, ensuring trust and visibility throughout the process.",
      icon: <BanknotesIcon />,
    },
  ],
};



export {benefitOne};
