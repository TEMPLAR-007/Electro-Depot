import React from 'react';
import './AddNewwIItem.css'
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const AddNewItem = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = 'https://electro-depot.up.railway.app/product'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    toast('added item successfuly')
                }
                reset();
            });
    };

    return (
        <div className='container'>

            <h1 className='mt-5 fw-bold text-success'>Add New Product</h1>

            <form className='mt-5 form-box shadow-lg mb-5 rounded' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 add-input' placeholder='Product Name'{...register("name", { required: true, maxLength: 20 })} required />
                <br />
                <input className='mb-2 add-input' value={email} placeholder='Email'{...register("email")} readOnly />
                <br />
                <input className='mb-2 add-input' placeholder='Supplier'{...register("supplier", { required: true, maxLength: 20 })} required />
                <br />
                <input className='mb-2 add-input' placeholder='Photo url' {...register("img")} required />
                <br />
                <input className='mb-2 add-input' type="number" placeholder='Input Quantity'{...register("quantity")} required />
                <br />
                <input className='mb-2 add-input' type="number" placeholder='$ Price'{...register("price")} required />
                <br />
                <textarea rows="3" cols="50" placeholder='Description...'{...register("description")} required>
                </textarea>
                <br />
                <input className="btn text-light fw-bold border-0 form-submit add-input" type="submit" value="Add Item" />
            </form>

        </div>
    );
};

export default AddNewItem;