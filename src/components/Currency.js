import React, {useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const [name, setName] = useState('');

    return (
        <div>
            <div className='row'>
                <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Currency </label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option value="Dollar" name="marketing">Dollar</option>
                        <option value="Pound" name="pound" defaultValue>Pound</option>
                        <option value="Euro" name="sales">Euro</option>
                        <option value="Ruppee" name="finance">Ruppee</option>
                    </select>
                </div>
                </div>

        </div>
    );
};

export default Currency;
