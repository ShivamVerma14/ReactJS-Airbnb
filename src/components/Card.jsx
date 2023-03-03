import Star from "../images/star.png";

function Card(props) {
  const { coverImg, location, title, price, openSpots } = props;
  const { rating, reviewCount } = props.stats;

  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img
        src={require(`../images/${coverImg}`)}
        alt="katie zaferes"
        className="card-image"
      />

      <div className="card-stats">
        <img src={Star} alt="star logo" className="card-star" />
        <span>{rating}</span>
        <span className="gray"> ({reviewCount}) • </span>
        <span className="gray">{location}</span>
      </div>

      <p className="card-title">{title}</p>
      <p className="card-price">
        <span className="bold">From ${price}</span> / person
      </p>
    </div>
  );
}

export default Card;
