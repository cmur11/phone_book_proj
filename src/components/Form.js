import React,{useState} from 'react'

function Form({handleFormData,form}) {
    function handleSubmit(e){
        e.preventDefault()
        // console.log(form)
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input placeholder="First Name" name="firstName" type="text" value={form.firstName} onChange={handleFormData}/>
            <input placeholder="Last Name" name="lastName" type="text" value={form.lastName} onChange={handleFormData}/>
            <input placeholder="Phone Number" name="phoneNumber" type="text" value={form.phoneNumber} onChange={handleFormData}/>
            <input placeholder="Address" name="address" type="text" value={form.address} onChange={handleFormData}/>
            <input placeholder="Note" name="note" type="text" value = {form.note} onChange={handleFormData}/>
            <input type="submit" />
        </form >
    )
}

export default Form
