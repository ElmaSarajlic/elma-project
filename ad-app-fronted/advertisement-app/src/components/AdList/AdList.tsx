import { useState } from 'react'
import {adList}  from '../../constants'
import AdCard from '../AdCard/AdCard'


type Props = {}


const AdList = (props: Props) => {
   const [ads, setads] = useState(adList)


   //const search = (e: ChangeEvent<HTMLInputElement>) => {
    //const filteredAds = adList.filter(ad => ad.title.toLowerCase().includes(e.target.value.toLowerCase()))
    //setads(filteredAds)}



   return (
       <div className="row">
           {
               ads.map((ad, i) => (
                   <AdCard ad={ad} key={i} />
               ))
           }
       </div>
   )
}


export default AdList
