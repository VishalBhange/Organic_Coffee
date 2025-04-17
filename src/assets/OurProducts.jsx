import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Importing images from the public/public/img folder
import p1 from '/public/img/p1.jpg';
import p2 from '/public/img/p2.jpeg';
import p3 from '/public/img/p3.webp';
import p4 from '/public/img/p4.jpg';
import p5 from '/public/img/p5.avif';
import p6 from '/public/img/p6.jpg';
import p7 from '/public/img/p7.webp';
import p8 from '/public/img/p8.webp';
import p9 from '/public/img/p9.jpg';

export default function OurProducts() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    // Define the product data in an array
    const products = [
        {
            id: 1,
            image: p1,
            title: "Chocolate Flavour Instant Coffee - 50 g",
            price: "$33.35",
            description: "Delicious chocolate flavored instant coffee.",
        },
        {
            id: 2,
            image: p2,
            title: "Mango Flavoured Coffee - 50gm - Gruner",
            price: "$13.23",
            description: "A tropical twist to your coffee.",
        },
        {
            id: 3,
            image: p3,
            title: "Traditional Blend Filter Coffee Powder - 1kg",
            price: "$21.50",
            description: "Classic filter coffee blend for authentic taste.",
        },
        {
            id: 4,
            image: p4,
            title: "Soluble Coffee Powder - 250 g",
            price: "$45.35",
            description: "Soluble coffee powder for quick brewing.",
        },
        {
            id: 5,
            image: p5,
            title: "Pure Gold Freeze Dried Instant Coffee - 200 g",
            price: "$41.00",
            description: "Premium freeze-dried instant coffee.",
        },
        {
            id: 6,
            image: p6,
            title: "Classic Instant Coffee - 100g",
            price: "$27.50",
            description: "A timeless instant coffee option.",
        },
        {
            id: 7,
            image: p7,
            title: "Premium Instant Coffee Powder - 50 g (Buy 1 Get 2 Free)",
            price: "$42.35",
            description: "A premium blend with a fantastic offer.",
        },
        {
            id: 8,
            image: p8,
            title: "French Vanilla Coffee - 150gm - Gruner (Coffee Cup Free)",
            price: "$80.50",
            description: "French Vanilla flavored coffee with a free coffee cup.",
        },
        {
            id: 9,
            image: p9,
            title: "Continental Coffee XTRA Coffee Powder - 50g (Buy 1 Get 1 Free)",
            price: "$11.50",
            description: "Extra strong coffee with a buy 1 get 1 free offer.",
        }
    ];

    return (
        <div className='bg-white' id='products'>
            <div className='text-center'>
                <br /><br /><br />
                <h1 className='font-serif text-4xl text-black' data-aos="flip-left">Our Product Range</h1>
            </div>

            <div className='flex flex-wrap justify-center gap-8 mt-12 mr-12 ml-12 card C'>
                {products.map(product => (
                    <Card key={product.id} style={{ width: '18rem' }} className='cards bg-orange-50 rounded-2xl text-lg font-semibold text-center' data-aos="flip-down">
                        <Card.Img src={product.image} className='h-60 w-52' />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text className='font-normal'>{product.price}</Card.Text>
                            <Button className='rounded-full text-sm mt-4 bg-red-950 text-white'>BUY NOW -></Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>

            <br /><br /><br />
        </div>
    );
}
