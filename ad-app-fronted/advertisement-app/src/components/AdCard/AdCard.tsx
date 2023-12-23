import { Ad } from "../../utils/types";

type Props = {
  ad: Ad;
};

const AdCard = ({ ad }: Props) => {
  return (
    <div className="card mb-3">
      <img src={ad.imgUrl} className="card-img-top" alt={ad.title} />
      <div className="card-body">
        <h5 className="card-title">{ad.title}</h5>
        <p className="card-text">{ad.description}</p>
        <p className="card-text">{ad.contact}</p>
        <p className="card-text">{ad.subcategory}</p>


      </div>
    </div>
  );
};

export default AdCard;
