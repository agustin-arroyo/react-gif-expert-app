import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

export const GifGrid = ( {category}) => {


    const { data: images, loading } = useFetchGifs( category );
    
    // console.log('GifGrid => data');
    // console.log(images);
    // console.log('GifGrid => loading');
    // console.log(loading);

    return (

        <>
            { loading && <p className="p_loading animate__animated animate__flash">Loading</p>}
            
            { !loading &&
                <>
                    <h3>{ category }</h3>
                    
                    <div className="card-grid">

                            {
                                images.map( img => (
                                    <GifGridItem
                                        key={img.id}
                                        { ...img }
                                    />
                                ))
                                
                            }
                        
                    </div>
                </>
            }

        </>        
    )

}
