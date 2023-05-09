import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import "./coffeeDetails.css"

const CoffeeDetails = () => {
    const coffee = useLoaderData();
    const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
    console.log(coffee);
    return (
        <main className='myContainer'>
            <section>
                <div className='detailsBg'>
                    <div className='mt-5 text-secondary px-3 pt-2'>
                        <Link to="/">
                            <button className='inline-flex items-center gap-2'><FaArrowLeft /> <span className='font-semibold text-xl' style={{ fontFamily: ['Rancho', 'cursive'] }}>Back To Home</span></button>
                        </Link>
                    </div>
                    <div className='px-2 lg:px-10'>
                        <div className="hero min-h-screen">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src={photo}className="max-w-sm rounded-lg shadow-2xl" />
                                <div>
                                    <h1 className="text-3xl font-bold" style={{fontFamily: ['Rancho','cursive']}}>{name}</h1>
                                    <p className='text-secondary mt-2'><span className='font-semibold'>Supplier: </span>{supplier}</p>
                                    <p className='text-secondary mt-2'><span className='font-semibold'>Chef: </span>{chef}</p>
                                    <p className='text-secondary mt-2'><span className='font-semibold'>taste: </span>{taste}</p>
                                    <p className='text-secondary mt-2'><span className='font-semibold'>Category: </span>{category}</p>
                                    <p className='text-secondary mt-2'><span className='font-semibold'>Details: </span>{details}</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CoffeeDetails;