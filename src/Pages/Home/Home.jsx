import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import bg1 from "../../assets/images/more/1.png"
import "./home.css";
import Coffees from '../Coffees/Coffees';

const Home = () => {
    const loadedCoffees = useLoaderData();
    const [allCoffees , setCoffees] = useState(loadedCoffees)
    return (
        <main className='myContainer'>
            {/* Add coffee section */}
            <section>
                <div>
                    <div className='text-center py-5'>
                        <p className='font-medium text-xl'>--- Sip & Savor ---</p>
                        <h1 className='text-3xl py-4 font-bold' style={{fontFamily: ['Rancho','cursive']}}>Our Popular Products</h1>
                        <Link to="/addCoffee">
                        <button className='myAddBtn'>Add Coffee</button>
                        </Link>
                    </div>
                </div>
            </section>
        {/* Loaded Coffee */}
        <section className=' my-5 flex items-center justify-center myBg'>
            <div className='grid md:grid-cols-2 2xl:grid-cols-3 space-x-5 space-y-3'>
                {
                    allCoffees.map(coffees => <Coffees
                    key={coffees._id}
                    coffees = {coffees}
                    setCoffees={setCoffees}
                    allCoffees={allCoffees}
                    ></Coffees>)
                }
            </div>
        </section>
        </main>
    );
};

export default Home;