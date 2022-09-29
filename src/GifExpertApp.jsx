import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    //crear un hook useState, espacio en memoria para manejar las categorias
    const [categories, setCategories] = useState(['One Punch Man']);

    const onAddCategory = (newCategory) => {

        //console.log(onNewCategory);
        if (categories.includes(newCategory)) return;

        //crear un nuevo array tomando los valores de categories y agrega el nuevo elemento
        setCategories([newCategory, ...categories,]);

        //usar el callBack
        //setCategories( cat => [ ...cat, 'Resident Evil 7']);

    }


    return (
        <>

            <h1>GifExpertApp Cristopher Saldaña Y</h1>


            <AddCategory onNewCategory={(value) => onAddCategory(value)} />
            {
                categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))
            }
        </>
    )
}
