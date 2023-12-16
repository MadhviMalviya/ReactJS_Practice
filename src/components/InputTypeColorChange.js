import React from 'react'

function InputTypeColorChange() {

    function handleColorChange(e) {
        let colorValue = e.target.value
        document.querySelector('.box').style.backgroundColor = colorValue;
    }

    return (
        <div>
            <form >
                <input onChange={handleColorChange} type='text' ></input>
                <div className='box' style={{ backgroundColor:'pink', height: '10rem', width: '10rem', borderRadius: '10px' }}> box</div>
            </form>

        </div>
    )
}

export default InputTypeColorChange
