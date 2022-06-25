import './Products.css';
import {useState} from 'react';
import {Container, Row, Col, Modal, Button} from 'react-bootstrap'

function Products(){

    return(
        
        <Container>
            <h1 className = 'text-center mt-4'>Our Products</h1>
            <div className="d-flex row justify-content-between">
                <div className="m-4 card 'p-3' col-xs-1 col-sm-2 col-md-3 border border-4">
                    <img className = 'mx-auto pt-4' width = '65%' src="https://www.verywellmind.com/thmb/UVmrLMxUtaL_YsTWkGDZOJ8jU98=/fit-in/800x415/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/MindfulnessforStressManagement-d2bfc18840e04e388f9f3c7c154c147c.jpeg" alt=""/>
                    <h3 className="mt-2 text-center"> Stress Management</h3>
                    <h5 className='text-center' >Price : ₹200</h5>   
                    <Button>Add to Cart</Button>
                </div>
    
                <div className="m-4 card 'p-3' col-xs-1 col-sm-2 col-md-3 border border-4">
                    <img className = 'mx-auto pt-4' width = '60%' src="https://m.media-amazon.com/images/I/41l8xIP8sCS.jpg" alt=""/>
                    <h3 className="text-center mt-3">Mental Health</h3>
                    <h5 className='text-center' >Price : ₹150</h5>   
                    <Button>Add to Cart</Button>
                </div>
                
                <div className="m-4 card 'p-3' col-xs-1 col-sm-2 col-md-3 border border-4">
                    <img className = 'mx-auto pt-4' width = '60%' src="https://images-na.ssl-images-amazon.com/images/I/414kArrEcWS._SX312_BO1,204,203,200_.jpg" alt=""/>
                    <h3 className=" mt-3 text-center">Mental Health</h3>
                    <h5 className='text-center' >Price : ₹300</h5>   
                    <Button className = 'mb-2'>Add to Cart</Button>
                    
                </div>
            </div>
            <div className="d-flex row justify-content-between">
                <div className="m-4 card 'p-3' col-xs-1 col-sm-2 col-md-3 border border-4">
                    <img className = 'mx-auto pt-4' width = '80%' src="https://images-na.ssl-images-amazon.com/images/I/41YUAxc16ML._SX331_BO1,204,203,200_.jpg" alt=""/>
                    <h5 className="text-center mt-4">Self-Help for Premenstrual Syndrome</h5>
                    <h5 className='text-center' >Price : ₹500</h5>   
                    <Button className='mb-3'>Add to Cart</Button>
                   
                </div>
    
                <div className="m-4 card 'p-3' col-xs-1 col-sm-2 col-md-3 border border-4">
                    <img className = 'mx-auto pt-4' width = '100%' src="https://images.squarespace-cdn.com/content/v1/57fa95538419c230ca026a47/1573660213825-MHY53YMPUU679MQ7XLLZ/eko-135021050-mats-core-sage-04.jpg" alt=""/>
                    <h3 className="text-center mt-4">Yoga Mat</h3>
                    <h5 className='text-center' >Price : ₹800</h5>
                    <Button className = 'mt-4'>Add to Cart</Button>
                   
                </div>
                
                <div className="m-4 card 'p-3' col-xs-1 col-sm-2 col-md-3 border border-4">
                    <img className = 'mx-auto pt-4 mt-5' width = '100%' src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/essential-oil-diffuse-with-plants-1589813272.jpg?crop=0.668xw:1.00xh;0.269xw,0&resize=640:*" alt=""/>
                    <h3 className="text-center mt-4">Aromatherapy</h3>
                    <h5 className='text-center' >Price : ₹500</h5>   
                    <Button className = 'mt-4'>Add to Cart</Button>
                  
                </div>
            </div>
        </Container>
    )
}

export default Products