import React from 'react';
import s from './content.module.scss';

function TodoItem(props){

    const { innerText } = props;
    console.log(props);

    return (
        <li className={s.item}>
            <div className={s.item_text}>
                {innerText}
            </div>
            <div>
                <button className="btn purple">Edit</button>
                <button className="btn red">Delete</button>
            </div>
        </li>
    );
}

export default TodoItem;
