import classes from "./Stories.module.css";

import Card from "../UI/Card";
const storiesList = [
  {
    title: "what",
    img: "https://source.unsplash.com/400x400",
    description: "bla bla bla bla bla",
    date: "22/06/2021",
    username: "dudu",
  },
  {
    title: "data",
    img: "https://picsum.photos/400",
    description: "blasdasdadasdasdaasdasda bla bla sbla bla",
    date: "22/02/2021",
    username: "bebe",
  },
  {
    title: "bata",
    img: "https://picsum.photos/300",
    description: "bla bssssssaddadadad",
    date: "25/02/2021",
    username: "habibi",
  },
  {
    title: "baka",
    img: "https://picsum.photos/300",
    description: "bla badcx xssssssaddadadad",
    date: "25/032/2021",
    username: "habssibi",
  },
  {
    title: "babzxcka",
    img: "https://picsum.photos/300",
    description: "bla xxxxxaaabadcx xssssssaddadadad",
    date: "25/032/aaa2021",
    username: "habssaaibi",
  },
];

const Stories = () => {
  return (
    <div className={classes.cardGrid}>
      {storiesList.map((story) => {
        return <Card>{story}</Card>;
      })}
    </div>
  );
};

export default Stories;
