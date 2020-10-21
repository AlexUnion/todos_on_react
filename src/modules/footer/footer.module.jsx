import React from "react";

import s from './footer.module.scss';

function FooterModule(props) {

    const { quantity } = props;

    return (
        <div className={s.footer}>
            <div>{`Quantity: ${quantity}`}</div>
            <button className={"btn green"} type={'button'}>
                Clear completed
            </button>
        </div>
    );
}

export default FooterModule;
