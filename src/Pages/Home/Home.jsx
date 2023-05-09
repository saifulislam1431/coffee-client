import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
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
        </main>
    );
};

export default Home;