import React from 'react';
import './Card.css';

const Card = ({ cards }) => {
    const { picture, title, text, ratings } = cards;
    return (
        <div>
            <div className=''>
                <div className="card h-100 ">
                    <img src={picture} className="card-img-top photo" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>
                        <p className=''>{ratings}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;