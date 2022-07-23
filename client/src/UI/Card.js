import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.cardHeader}>
        <div className={classes.profile}>
          <span className={classes.letter}>
            {props.children.user.firstName[0] + props.children.user.lastName[0]}
          </span>
        </div>
        <div className={classes.cardTitleGroupp}>
          <h5 className={classes.cardTitle}>{props.children.title}</h5>
          <div className={classes.cardDate}>{props.children.date}</div>
        </div>
      </div>
      <img
        className={classes.cardImage}
        src={props.children.image}
        alt="Logo"
      />
      <div className={classes.cardText}>{props.children.description}</div>
    </div>
  );
};

export default Card;
