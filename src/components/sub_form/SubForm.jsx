import React from 'react';
import './SubForm.scss';

export default function SubForm() {

    const handleSubmit = (_e) => {
        _e.preventDefault();
        const thanks = document.querySelector(".sub_form__thanks");
        thanks.classList.add("submited");
    };

    return (
        <form id="sub_form" onSubmit={handleSubmit}>
            <h5 className="sub_form__title">Let's keep in touch!</h5>
            <p className="sub_form__info">Subscribe to keep up with fresh news and updates about Axelar project.</p>
            <p className="sub_form__info">We promise not to spam you!</p>
            <div className="sub_form__container">
                <div className="sub_form__inputs">
                    <input className="sub_form__input" type="email" placeholder="Email"/>
                    <input className="sub_form__submit" type="submit" value="Subscribe"/>
                </div>
            <p className="sub_form__thanks">Thanks! See you!</p>
            </div>
        </form>
    );
};
