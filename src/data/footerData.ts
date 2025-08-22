import { FaFacebookF,FaInstagram,FaGithub } from "react-icons/fa";
import { IconType } from "react-icons";

interface InfoType {
  id: number;
  href: string;
  label: string;
}
interface FollowType {
  id: number;
  href: string;
  icon: IconType;
}

interface LinksType {
  info: InfoType[];
  follow: FollowType[];
}

export const links:LinksType = {
  info: [
    { id: 1, href: "skills", label: "skills" },
    { id: 2, href: "services", label: "services" },
    { id: 3, href: "portfolio", label: "portfolio" },
    { id: 4, href: "contact", label: "contact" },
  ],
  follow: [
    { id: 1, href: "https://facebook.com", icon: FaFacebookF },
    { id: 2, href: "https://instagram.com", icon: FaInstagram },
    { id: 3, href: "https://github.com", icon: FaGithub },
  ]
};
