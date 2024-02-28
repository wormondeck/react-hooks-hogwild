import React, { useState } from "react";

function HogForm({ onAddHog }) {
    const [name, setName ] = useState('')
    const [specialty, setSpecialty ] = useState('')
    const [weight, setWeight ] = useState('')
    const [image, setImage] = useState('')

    function handleHogSubmit(e) {
        e.preventDefault()
        const newPig = {
            name,
            specialty,
            weight,
            image,
        }
        onAddHog(newPig)
    }
    return (
        <div className="">
            <form onSubmit={handleHogSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
                <label htmlFor="specialty">Specialty</label>
                <input type="text" value={specialty} onChange={e => setSpecialty(e.target.value)} />
                <label htmlFor="weight">Weight</label>
                <input type="text" value={weight} onChange={e => setWeight(e.target.value)} />
                <label htmlFor="image">Image</label>
                <input type="text" value={image} onChange={e => setImage(e.target.value)} />
                <button type="submit">Add Hog</button>
            </form>
        </div>
    )
}

export default HogForm;