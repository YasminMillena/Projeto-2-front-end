import './Card.css';
import {avatarMap, cardMap} from "../componentes/imageMap"

export default function Card({ category, title, description, author, date, image, avatar }) {
  return (
    <div className="card-1">
      <img src={cardMap[image]} alt={`Foto de card`} />
      <div className="content-card1">
        <p className="texto1-card1">{category}</p>
        <div className="texto2-card1">
          {title} &#8599;
        </div>
        <p className="texto3-card1">{description}</p>
      </div>

      <div className="avatar-1">
         <img src={avatarMap[avatar]} alt={`Foto de avatar`} />
        <div className="txt-final-card1">
          <p>{author}</p>
          <p className="texto-claro">{date}</p>
        </div>
      </div>
    </div>
  );
}
