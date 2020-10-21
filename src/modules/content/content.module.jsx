import React from 'react';
import s from './content.module.scss';

function TodoItem(props){

    const { innerText, onDelete } = props;

    return (
        <li className={s.item}>
            <div className={s.item_text}>
                {innerText}
            </div>
            <div>
                <button className="btn purple">Edit</button>
                <button className="btn red" onClick={onDelete}>Delete</button>
            </div>
        </li>
    );
}


export default TodoItem;
