import { client1, client2, client3 } from "../images";

interface ClientType {
  id: number;
  imgSrc: string;
  description: string;
  name: string;
  position: string;
}

export const clientData: ClientType[] = [
  {
    id: 1,
    imgSrc: client1,
    description:
      "Hi, I’m Aria Collins and I am designer & developer who dream making the worldbetter place by products. I am also very active for international clients.",
    name: "Aria Collins",
    position: "Marketing Manager",
  },
  {
    id: 2,
    imgSrc: client2,
    description:
      "Hi, I’m Aria Collins and I am designer & developer who dream making the world better place by products. I am also very active for international clients.",
    name: "Cillian Metcalfe",
    position: "Graphic Designer",
  },
  {
    id: 3,
    imgSrc: client3,
    description:
      "Hi, I’m Aria Collins and I am designer & developer who dream making the world better place by products. I am also very active for international clients.",
    name: "Kianna Baird",
    position: "App Developer",
  },
];
