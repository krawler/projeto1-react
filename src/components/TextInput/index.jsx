import './style.css';

export const TextInput = ({searchValue,handleChange}) => {
    return(
        <input 
        onChange={handleChange}
        value={searchValue}
        type="text"
        className="input-text" />
    )
}