import React from 'react';
import CardList from './card';



const CategorieList = ({ data }) => {


    return (
        <>
            <div>
                {
                    data.map((item, index) => {
                        return (
                            <CardList key={index} categoria={item} />
                        )

                    })
                }

            </div>
        </>
    )
}


export default CategorieList;