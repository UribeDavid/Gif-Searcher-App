import { useState } from 'react'

import PropTypes from 'prop-types'

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
        <form onSubmit={ handleSubmit } aria-label="form">
            <input
                type="text"
                placeholder="Buscar gifs..."
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}