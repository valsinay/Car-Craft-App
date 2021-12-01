import React, { Component } from 'react';
import styles from './Contacts.module.scss'

class Contacts extends Component {

    render() {
        return (
            <form className='authForm contact' >
                <h2>Contact form</h2>
                <span>Send us a message</span>
                <input
                    type='name'
                    name="name"
                    placeholder="Your Name"
                // value={data.username}
                //onChange={this.handleChange}
                />
                <input
                    type='email'
                    name="email"
                    placeholder="Your Email"
                // value={data.password}
                // onChange={this.handleChange}
                />
                <input
                    type='phone'
                    name='phone'
                    placeholder="Phone"
                />
                <textarea
                    type='text'
                    name="text"
                    placeholder="Your message"
                // value={data.confirmPassword}
                // onChange={this.handleChange}
                />
                <button className="submitBtn" type='submit'>Submit</button>
            </form>
        )
    }
}

export default Contacts;


