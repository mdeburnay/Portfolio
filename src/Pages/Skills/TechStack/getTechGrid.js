import javascriptIcon from "../../../Images/javascriptIcon.svg";
import html5Icon from "../../../Images/html5Icon.svg";
import css3Icon from "../../../Images/css3Icon.svg";
import reactIcon from "../../../Images/reactIcon.png";
import nodeIcon from "../../../Images/nodejsIcon.png";
import herokuIcon from "../../../Images/herokuIcon.svg";

export default function getTechGrid() {
  return [
    { name: "JavaScript", logo: javascriptIcon },
    { name: "HTML5", logo: html5Icon },
    { name: "CSS3", logo: css3Icon },
    { name: "Node.js", logo: nodeIcon },
    { name: "Heroku", logo: herokuIcon },
    { name: "React.js", logo: reactIcon },
  ];
}
