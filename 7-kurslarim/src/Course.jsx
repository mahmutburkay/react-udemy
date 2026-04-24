import React from 'react'

// kursları props ile listeleme
function Course({ course }) { // props ettik 

    const { id, title, description, price, link, image } = course; // destructing ettik this yazmamak için açtık 



    return (
        <div className='course'>
            <div>
                <img className="course-img" src={image} />
                <h4 className='course-title'>{title}</h4>
                <p className='course-desc'>{description}</p>
                <h3 className='course-price'>{price} ₺</h3>
                <div className='course-link'> <a style={{ textDecoration: "none" }} href={link} target='_blank'>satın almak için </a></div>
            </div>
        </div>
    )
}

export default Course

