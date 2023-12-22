import { Ad } from "../../utils/types"


type Props = {
    ad : Ad
}


const AdCard = ({ad}: Props) => {
   return (
        <div className ="card">
          <div className = "card-body">
        <h5 className ="card-title">{ ad.title}</h5>
        <p className ="card-text">{ad.description}</p>
        <a className="card-category">{ad.category}</a>
    </div>
    </div>
    )
    }


    export default AdCard
