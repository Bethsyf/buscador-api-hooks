import React, { useEffect, useState } from 'react';
import { getData } from '../helpers/getData';




const CardList = ({categoria}) => {

    const [urlGifts, setUrlGifts] = useState([]);  
   
    
    const getCategorie = async(tema) => {
        const URL = `https://api.giphy.com/v1/gifs/search?api_key=D9KgOZRCWvw0CD0P8ILGSeQGLtY6TVAj&q=${encodeURI(tema)}&limit=10`;
        let {data} = await getData(URL);
        let imgData = await data.map(item=> {

            return {
                id: item.id,
                url: item.images.downsized_medium.url,
                title: item.title
            }
        })

        return imgData
      }
  

      useEffect(() => {
         
        getCategorie(categoria)
        .then(imgData => setUrlGifts(imgData))
      }, [categoria])

    return (
        <div>
         <ol>
             {
                 urlGifts.map((item, index) => {

                    return (
                        <li key={index}>
                            <h3>{item.title}</h3>
                            <img alt={item.title} src={item.url}/>
                        </li>
                    )
                 })
             }
         </ol>
        </div>
    )
}

export default CardList;