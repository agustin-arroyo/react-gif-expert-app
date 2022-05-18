import React, {useState} from 'react';

import { AddCategory } from '../components/AddCategory';
import { GifGrid } from '../components/GifGrid';

export const GifExpertApp = () => {
    
    const initialState  = ['Batman'];
    const [categories, setCategories] = useState (initialState);

	return (
		<div>
			
            <h2>
                GifExpertApp
            </h2>

            <ol>
                {
                    categories.map( (category) => {
                        return <li key={category}>{category} </li>
                    })
                }
            </ol>            
            
            <AddCategory setCategories={ setCategories } />
            <hr />            
            <ol>
                {
                    categories.map( (category) => (
                    <GifGrid 
                    key = { category}
                    category = { category} />
                    ))
                }
            </ol>

		</div>
	)
    
}


