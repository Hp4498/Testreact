import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((alien) => {
      return <Card alien={alien} key={alien.id} />;
    })}
  </div>
);

export default CardList;
