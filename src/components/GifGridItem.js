import React from 'react'

export default function GifGridItem( {id, title, url, category} ) {

    // console.log( id, title, url);
    
    return (
        <div className="img-card animate__animated animate__fadeInLeft">
            <img src={ url } alt={ title } className="img-hover" />
            <p>
                Categpry: { category }
                <br />
                Title: { title }
            </p>
        </div>
    )
}
