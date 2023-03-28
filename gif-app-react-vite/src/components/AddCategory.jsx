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

        // verificar que no se enveien los datos en blanbco
        if (inputValue.trim().length <= 0) return;
        newCategory(inputValue)
        //hace que despues de enviar una categoria el input quede vacio
        setinputValue('')
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
