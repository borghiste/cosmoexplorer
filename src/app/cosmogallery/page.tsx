'use client'
import { useEffect, useState} from "react";
import Image from "../components/Image";
import astronomyPictures from '../mock/astronomy-pictures';




export default function CosmoGallery(){


let pics = astronomyPictures.map(pic =>(<Image src={pic.url}/>))
return(
    <>
        <h1>cosmogallery</h1>
        <header>
          <label htmlFor="start date">
            <input type="date" />
          </label>
          <label htmlFor="end date">
            <input type="date" />
          </label>
        </header>
      
{pics}

    </>
)
}
