import React, { useState } from 'react';
import Card from '@mui/material/Card';

export default function Calc() {
    //declare variables for present value of an ordinary annuity for our state management
    //going to assume compounding occurs at the same rate/month with consistent payments
    const [loanAmount, setLoanAmount] = useState(0);
    const [interestRate, setInterestRate] = useState(0);
    const [numMonths, setNumMonths] = useState(0);
    const [annuity, setAnnuity] = useState(0);

    function calculateLoan(event) {
        event.preventDefault();
        const formValid = loanAmount >= 0 && interestRate >= 0 && numMonths >= 0;
        if (!formValid) {
            return;
        } else {
            const loanCalculation = (loanAmount * (1 + interestRate / 100) / numMonths);
            setAnnuity(Math.round(100 * loanCalculation) / 100);
        }
    }

    return (
        //define JSX element styles as an object (Personal note)
        //Considering using useState() here for handling form state
        //TODO: Handle negative inputs from form fields.
        <div
            className='row'
            style={{
                display: 'flex',
                justifyContent: 'Center'
            }}>
            <div className='column'>
                <div className='form-container'>
                    <Card variant='outlined'>
                        <form className='align-center' onSubmit={calculateLoan}>
                                <label className="form-text" htmlFor="loanAmount">Money you are looking to borrow</label><br />
                                <input type="number" name='loanAmount' value={loanAmount} onChange={(event) => setLoanAmount(event.target.value)} /><br />

                                <label className="form-text" htmlFor="loanTerm">Loan term?</label><br />
                                <input type="number" name='loanTerm' value={numMonths} onChange={(event) => setNumMonths(event.target.value)} /><br />

                                <label className="form-text" htmlFor="interestRate">Interest Rate</label><br />
                                <input type="number" name='interestRate' value={interestRate} onChange={(event) => setInterestRate(event.target.value)} /><br />
                                
                                <button>Calculate</button>
                        </form>
                    </Card>
                </div>
            </div>

            <div className='column align-center'>
                <h2>You are looking to get: ${loanAmount}</h2><br />
                <h2>Looking to pay off in: {numMonths}</h2><br />
                <h2>With: {interestRate}% in interest</h2><br />
                <h2>Your monthly payment will be ${annuity} per month</h2><br />
            </div>
        </div>
    )
}