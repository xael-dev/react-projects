import React from 'react';

class Calc extends React.Component {
    constructor(props) {
        super(props)
        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleSubmit.bind(this);
    }

    handleInput(event) {
        event.preventDefault()
        console.log(event.target.value)
    }

    handleSubmit(event) {
        alert(`Amount is confirmed!: ${this.state.value}`);
        event.preventDefault();
    }

    render() {
        return (
            //define JSX element styles as an object
            //Considering using controlled components here for handling form state 'react.org/forms.html'
            <div
                className='row'
                style={{
                    display: 'flex',
                    justifyContent: 'Center'
                }}>
                <div className='column'>
                    <div className='form-container'>
                        <form onSubmit={this.handleSubmit}>
                            <fieldset className='align-center'>
                                <label className="form-text" htmlFor="">Money you are looking to borrow</label><br />
                                <input type="text" name='' onInput={this.handleInput} /><br />
                                <label className="form-text" htmlFor="">Where are you located</label><br />
                                <input type="dropdown" name='' /><br />
                                <label className="form-text" htmlFor="">Loan term?</label><br />
                                <input type="text" name='' /><br />
                                <label className="form-text" htmlFor="">LTV</label><br />
                                <input type="text" name='' /><br />
                                <label className="form-text" htmlFor="">Repayment Type</label><br />
                                <input type="text" name='' /><br />
                                <button className="align-center" onClick={this.handleClick}>Calculate</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
                <div className='column'>
                    <h1>Div2</h1>
                </div>
            </div>
        )
    }
}

export default Calc;