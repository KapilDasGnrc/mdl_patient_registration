import React from 'react'

import useFormInputs from './useFormInputs'

export default function TestForm() {

    const [firstName, bindFirstName, resetFirstName] = useFormInputs('kapil');
    const [lastName, bindLastName, resetLastName] = useFormInputs('das');

    function handleSubmit(e) {
        e.preventDefault();

        alert('Hello ' + firstName + ' ' + lastName);

        resetFirstName();
        resetLastName();
    }

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" {...bindFirstName} />
                <input type="text" {...bindLastName} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
