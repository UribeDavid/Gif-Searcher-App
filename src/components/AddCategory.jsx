import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ({target}) => setInputValue(target.value)

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (!inputValue.length) return;
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs..."
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>
    )
}