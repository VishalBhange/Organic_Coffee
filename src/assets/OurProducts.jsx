import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function OurProducts() {
    useEffect(() => {
        AOS.init({ duration: 1000 }); 
    }, []);

    return (
        <div className='bg-white' id='products'>
            <div className='text-center'>
                <br /><br /><br />
                <h1 className='font-serif text-4xl text-black 'data-aos="flip-left">Our Product Range</h1>
            </div>

            <div className='flex flex-wrap justify-center gap-8 mt-12 mr-12 ml-12 card C'>
                
                <Card style={{ width: '18rem' }} className='cards bg-orange-50 rounded-2xl text-lg font-semibold text-center' data-aos="flip-down">
                    <Card.Img src="https://d371c3ugbb3pk.cloudfront.net/pub/media/catalog/product/cache/9db98d540383868e55af1a0e488bebe5/i/c/icchoco_bi.jpg" className='h-60 w-52' />
                    <Card.Body>
                        <Card.Title>Chocolate Flavour Instant Coffee - 50 g</Card.Title>
                        <Card.Text className='font-normal'>$33.35</Card.Text>
                        <Button className='rounded-full text-sm mt-4 bg-red-950 text-white'>BUY NOW -></Button>
                    </Card.Body>
                </Card>

                
                <Card style={{ width: '18rem' }} className='cards bg-orange-50 rounded-2xl text-lg font-semibold text-center' data-aos="flip-down">
                    <Card.Img src="https://5.imimg.com/data5/SELLER/Default/2024/6/430455583/TT/TE/ZK/24519589/gruner-mango-instant-coffee-50-gm-jar.jpeg" className='h-60 w-52' />
                    <Card.Body>
                        <Card.Title>Mango Flavoured Coffee - 50gm - Gruner</Card.Title>
                        <Card.Text className='font-normal'>$13.23</Card.Text>
                        <Button className='rounded-full text-sm mt-4 bg-red-950 text-white'>BUY NOW -></Button>
                    </Card.Body>
                </Card>

                
                <Card style={{ width: '18rem' }} className='cards bg-orange-50 rounded-2xl text-lg font-semibold text-center' data-aos="flip-down">
                    <Card.Img src="https://5.imimg.com/data5/SELLER/Default/2023/2/EG/ZA/XT/18878414/sanchari-traditional-blend-filter-coffee-powder-500x500.jpeg" className='h-60 w-52' />
                    <Card.Body>
                        <Card.Title>Traditional Blend Filter Coffee Powder - 1kg</Card.Title>
                        <Card.Text className='font-normal'>$21.50</Card.Text>
                        <Button className='rounded-full text-sm mt-4 bg-red-950 text-white'>BUY NOW -></Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className='cards bg-orange-50 rounded-2xl text-lg font-semibold text-center' data-aos="flip-down">
                    <Card.Img src="https://cdn.dmart.in/images/products/FEB130001755xx11FEB22_5_B.jpg" className='h-60 w-52' />
                    <Card.Body>
                        <Card.Title>Soluble Coffee Powder - 250 g</Card.Title>
                        <Card.Text className='font-normal'>$45.35</Card.Text>
                        <Button className='rounded-full text-sm mt-4 bg-red-950 text-white'>BUY NOW -></Button>
                    </Card.Body>
                </Card>

                
                <Card style={{ width: '18rem' }} className='cards bg-orange-50 rounded-2xl text-lg font-semibold text-center' data-aos="flip-down">
                    <Card.Img src="https://www.luluhypermarket.com/cdn-cgi/image/f=auto/medias/1200Wx1200H-null?context=bWFzdGVyfGltYWdlc3w1NzI0ODF8aW1hZ2UvanBlZ3xhRGcwTDJnNU1TOHhOek16TkRrek56TTROekF6T0M4eE1qQXdWM2d4TWpBd1NGOXVkV3hzfDE5M2I0MzExOGNjYjFiOGFhZGFhY2IxNjZhODNmNTc4ZWNlNTcxODllM2NjMjY1NGM5NDVhMTA1YjAzNTU3MGQ" className='h-60 w-52' />
                    <Card.Body>
                        <Card.Title> Pure Gold Freeze Dried Instant Coffee - 200 g </Card.Title>
                        <Card.Text className='font-normal'>$41.00</Card.Text>
                        <Button className='rounded-full text-sm mt-4 bg-red-950 text-white'>BUY NOW -></Button>
                    </Card.Body>
                </Card>

                
                <Card style={{ width: '18rem' }} className='cards bg-orange-50 rounded-2xl text-lg font-semibold text-center' data-aos="flip-down">
                    <Card.Img src="https://cdn.dmart.in/images/products/JAN130001965xx10JAN23_5_B.jpg" className='h-60 w-52' />
                    <Card.Body>
                        <Card.Title>Classic Instant Coffee - 100g</Card.Title>
                        <Card.Text className='font-normal'>$27.50</Card.Text>
                        <Button className='rounded-full text-sm mt-4 bg-red-950 text-white'>BUY NOW -></Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className='cards bg-orange-50 rounded-2xl text-lg font-semibold text-center' data-aos="flip-down">
                    <Card.Img src="https://sleepyowl.co/cdn/shop/files/Our_Products_in_home_page_mobile_view.jpg?v=1722671639" className='h-60 w-52' />
                    <Card.Body>
                        <Card.Title>Premium Instant Coffee Powder  - 50 g</Card.Title>
                        <Card.Title>(Buy 1 Get 2 Free)</Card.Title>
                        <Card.Text className='font-normal'>$42.35</Card.Text>
                        <Button className='rounded-full text-sm mt-4 bg-red-950 text-white'>BUY NOW -></Button>
                    </Card.Body>
                </Card>

                
                <Card style={{ width: '18rem' }} className='cards bg-orange-50 rounded-2xl text-lg font-semibold text-center' data-aos="flip-down">
                    <Card.Img src="https://sleepyowl.co/cdn/shop/files/OG_FV_GC_1_540x.jpg?v=1727695218" className='h-60 w-52' />
                    <Card.Body>
                        <Card.Title>French Vanilla Coffee - 150gm - Gruner</Card.Title>
                        <Card.Title>(Coffee Cup Free)</Card.Title>
                        <Card.Text className='font-normal'>$80.50</Card.Text>
                        <Button className='rounded-full text-sm mt-4 bg-red-950 text-white'>BUY NOW -></Button>
                    </Card.Body>
                </Card>

                
                <Card style={{ width: '18rem' }} className='cards bg-orange-50 rounded-2xl text-lg font-semibold text-center' data-aos="flip-down">
                    <Card.Img src="https://m.media-amazon.com/images/I/51B4oX5pwrL.jpg" className='h-60 w-52' />
                    <Card.Body>
                        <Card.Title>Continental Coffee XTRA Coffee Powder - 50g </Card.Title>
                        <Card.Title>(Buy 1 Get 1 Free)</Card.Title>
                        <Card.Text className='font-normal'>$11.50</Card.Text>
                        <Button className='rounded-full text-sm mt-4 bg-red-950 text-white'>BUY NOW -></Button>
                    </Card.Body>
                </Card>

            </div>
            <br/><br/><br/>
        </div>
    );
}
