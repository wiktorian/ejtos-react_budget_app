import React, {useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses, budget } = useContext(AppContext);
    const [input, setInput] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleChange = (event) => {
        const val = event.target.value;

        if(val > 20000) {
            alert('Budget cannot be more than £20000');
            setInput(20000);
            return;
        } else if (val < totalExpenses) {
            alert('You cannot reduce the budget value lower than the spending');
            setInput(budget);
            return;
        } else {
            setInput(val);
            console.log(totalExpenses);
        }

    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £
                <input
                    required='required'
                    type='number'
                    value={input}
                    step='10'
                    onChange={handleChange}>
                </input>
            </span>
        </div>
    );
};

export default Budget;
