import React, { Component } from 'react';

class HeaderModule extends Component{

    state = {
        inputLabel: ''
    }

    render(){

        const { handleDeleteAll } = this.props;

        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" maxLength={50} onChange={this.handleInput}/>
                <button type={'submit'} className={'btn purple'}>Add</button>
                <button type={'button'} className={'btn red'}
                        onClick={handleDeleteAll}>Delete all</button>
            </form>
        );
    }

    handleInput = (event) => {
        this.setState({
            inputLabel: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { addTodo } = this.props;
        const { inputLabel } = this.state;

        if (!inputLabel || !inputLabel.trim()) return;

        addTodo({
            text: inputLabel,
        });
    }
}

export default HeaderModule;
