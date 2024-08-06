import React from 'react'
import desktopImage from '../assets/image-baklava-desktop.jpg';
import tabletImage from '../assets/image-baklava-tablet.jpg';
import mobileImage from '../assets/image-baklava-mobile.jpg';
import thumbnailImage from '../assets/image-baklava-thumbnail.jpg';

export const ProductItem = () => {
    return (
        <div>
            <picture>
                <source media="(min-width: 1200px)" srcSet={desktopImage} />
                <source media="(min-width: 768px)" srcSet={tabletImage} />
                <source media="(min-width: 375px)" srcSet={mobileImage} />
                <img src={thumbnailImage} alt="Baklava" />
            </picture>
        </div>
)}
