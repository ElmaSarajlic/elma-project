import { Ad } from "../../utils/types";

type Props = {
  ad: Ad;
};

const AdCard = ({ ad }: Props) => {
  return (
    <div className="mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{ad.title}</h5>
          <p className="card-text">{ad.description}</p>
          <p className="card-text">{ad.category}</p>
          <a href="#" className="btn btn-primary">See More</a>
        </div>
      </div>
    </div>
  );
};

export default AdCard;
