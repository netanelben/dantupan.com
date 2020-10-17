import React from 'react';
import './style.scss';

const images = [
    'https://instagram.fsdv2-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/121496320_176753817354693_1818137472330134319_n.jpg?_nc_ht=instagram.fsdv2-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=ZRlugafdHrUAX_OFKVl&tp=19&oh=5c51944cc827b80de5aa6abb884d695a&oe=5FB2B745'
]

const ImageGallery = () => (
    <div className="section gallery">
        {images.map(image => (
            <img src={image}/>
        ))}
    </div>
);

export default ImageGallery;
