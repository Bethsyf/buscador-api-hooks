import { Input } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import CategorieList from './categorieList';



const CategoriesApp = () => {

    const [categories, setCategories] = useState(['Horror']);
    const [busqueda, setBusqueda] = useState(null)
    const searchref = useRef()


    const handleSubmit = (e) => {
        e.preventDefault();
        setCategories([...categories,busqueda ]);
    }

    const handleChange = (e) => {
       setBusqueda(e.target.value);
    }

    useEffect(() => {
        searchref.current.focus()
    }, [])
 
    const { Search } = Input;


    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <Search
                        ref={searchref}
                        placeholder="input search text"
                        allowClear
                        onChange={handleChange}
                        enterButton="Search"
                        size="large"
                        
                    />
                </form>
            </div>

            <CategorieList data={categories} />


        </>
    )
}

export default CategoriesApp;