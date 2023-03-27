import { useState } from "react";

export const AddCategory = ({newCategory}) => {
    
    const [inputValue, setinputValue] = useState('');
    const onInputChange = ({target}) => {
        setinputValue(target.value);
        console.log(inputValue);
    }

    const onSubmitCategory = (event) => {
        event.preventDefault();
        // console.log('Hola desde On SUbmit')

        newCategory(inputValue)
    }
    return (
        <>
            <form onSubmit={onSubmitCategory} arial-label= 'form'>
                <input type='text'
                    placeholder='Search gift....'
                    value={inputValue}
                    onChange={(event) => onInputChange(event)} />

            </form>
        </>
    )
}
