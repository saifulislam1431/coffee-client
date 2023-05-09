import React from 'react';
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Coffees = ({ coffees, setCoffees, allCoffees }) => {
    const { _id, name, chef, supplier, taste, category, details, photo } = coffees;
    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-server-chi.vercel.app/coffees/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Coffee has been deleted.',
                                'success'
                            )
                            const remaining = allCoffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining);
                        }
                    })
            }
        })

    }

    // console.log(coffees);
    return (
        <section>
            <div className="card card-side bg-[#F5F4F1] bg-opacity-60 shadow-xl">
                <figure><img src={photo} alt="Movie" className='h-44' /></figure>
                <div className="flex items-center gap-8 ">
                    <div className='ml-5'>
                        <h2 className="card-title">{name}</h2>
                        <p><span className='font-semibold'>Chef: {chef}</span></p>
                        <p><span className='font-semibold'>Supplier: {supplier}</span></p>
                    </div>
                    <div className="card-actions flex flex-col pr-5 space-y-3">
                        <Link to={`/coffeeDetails/${_id}`}>
                            <button className='bg-primary px-4 py-2  rounded-md'>
                                <FaEye className='text-center text-white' />
                            </button>
                        </Link>


                        <Link to={`/updateCoffee/${_id}`}>
                            <button className='bg-secondary px-4 py-2  rounded-md'>
                                <FaPen className='text-center text-white' />
                            </button>
                        </Link>

                        <button className='bg-error px-4 py-2  rounded-md' onClick={() => handleDelete(_id)}>
                            <FaTrash className='text-center text-white' />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Coffees;