import React from 'react';
import { FaArrowLeft, FaBackspace } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.name.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {name , chef, supplier, taste, category, details, photo}
        console.log(newCoffee);

        fetch("http://localhost:7000/coffees",{
            method:"POST",
            headers:{
                "content-type" : "application/json"
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            Swal.fire({
                title: 'Success',
                text: 'Coffee added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            console.log(data);
            
        })
        
    }
    return (
        <main className='myContainer mt-5 lg:mt-10'>
            <div className='my-5 text-secondary'>
                <Link to ="/">
                <button className='inline-flex items-center gap-2'><FaArrowLeft /> <span className='font-semibold text-xl' style={{fontFamily: ['Rancho','cursive']}}>Back To Home</span></button>
                </Link>
            </div>
            <section className='flex items-center justify-center bg-primary bg-opacity-10'>
                <div className='py-5 px-4 w-full'>
                    <div className='text-center my-4'>
                        <h2 className='text-3xl text-secondary' style={{ fontFamily: ['Rancho', 'cursive'] }}>Add New Coffee</h2>
                        <p className='my-4 font-medium'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    </div>
                    <form className='w-full' onSubmit={handleAddCoffee}>
                        {/* Name and chef */}
                        <div className='md:flex gap-4'>
                            <div className='md:w-1/2'>
                            <label className="label">
                                <span className="font-semibold">Name</span>
                            </label>
                            <input type="text"
                            name='name' placeholder="Enter coffee name" className="w-full inputField" />
                            </div>
                            <div className='md:w-1/2'>
                            <label className="label">
                                <span className="font-semibold">chef</span>
                            </label>
                            <input type="text"
                            name='chef' placeholder="Enter coffee chef" className="w-full inputField" />
                            </div>
                        </div>
                        {/* Supplier and taste */}
                        <div className='md:flex gap-4 mt-2'>
                            <div className='md:w-1/2'>
                            <label className="label">
                                <span className="font-semibold">Supplier</span>
                            </label>
                            <input type="text"
                            name='supplier' placeholder="Enter coffee supplier" className="w-full inputField" />
                            </div>
                            <div className='md:w-1/2'>
                            <label className="label">
                                <span className="font-semibold">Taste</span>
                            </label>
                            <input type="text"
                            name='taste' placeholder="Enter coffee taste" className="w-full inputField" />
                            </div>
                        </div>
                        {/* Category and details */}
                        <div className='md:flex gap-4 mt-2'>
                            <div className='md:w-1/2'>
                            <label className="label">
                                <span className="font-semibold">Category</span>
                            </label>
                            <input type="text"
                            name='category' placeholder="Enter coffee category" className="w-full inputField" />
                            </div>
                            <div className='md:w-1/2'>
                            <label className="label">
                                <span className="font-semibold">Details</span>
                            </label>
                            <input type="text"
                            name='details' placeholder="Enter coffee details" className="w-full inputField" />
                            </div>
                        </div>
                        {/* Photo url */}
                        <div className='mt-2'>
                            <div>
                            <label className="label">
                                <span className="font-semibold">Photo</span>
                            </label>
                            <input type="url"
                            name='photo' placeholder="Enter photo URL" className="w-full inputField" />
                            </div>
                            
                        </div>
                        <input className='myAddBtn w-full my-5' type="submit" value="Add Coffee" />
                    </form>
                </div>
            </section>
        </main>
    );
};

export default AddCoffee;