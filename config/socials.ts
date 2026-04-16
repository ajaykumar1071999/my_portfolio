import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@ajaykumar1071999",
    icon: Icons.gitHub,
    link: "https://github.com/ajaykumar1071999",
  },
  {
    name: "LinkedIn",
    username: "Ajay Kumar",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/ajay-kumar-9045b7229/",
  },
  // {
  //   name: "Twitter",
  //   username: "@namanbarkiya",
  //   icon: Icons.twitter,
  //   link: "https://twitter.com/namanbarkiya",
  // },
  {
    name: "Gmail",
    username: "ajaykumar1071999",
    icon: Icons.gmail,
    link: "mailto:ajaykumar1071999@gmail.com",
  },
];
