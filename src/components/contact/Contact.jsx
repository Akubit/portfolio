import { useState } from 'react'; 
import { send } from 'emailjs-com'

import './contact.scss'

export default function Contact() {
    let isSendMessage = ''
    const [toSend, setToSend] = useState({
        name: '',
        reply_to: '',
        message: ''
    })

    const onSubmit = (e)=> {
        e.preventDefault();
        send(
            'service_q74bt0e',
            'template_0ymb83s',
            toSend,
            'user_0fNknb041yhrrjndTRWw2'
        ).then((response) => {
            isSendMessage = 'success'
            console.log(response)
            setTimeout(() => {
                isSendMessage = '';
            }, 4000)
        }
        ).catch((err) => {
            isSendMessage = 'error'
            console.log(err)
            setTimeout(() => {
                isSendMessage = '';
            }, 4000)
        }
        )
    }

    const handleChange = (e) => {
        setToSend({...toSend,[e.target.name]: e.target.value})
    }

    return (
        <div id='contact' className="contact">
            <h1 className='title'>
                contact
            </h1>
            <h2>Want to hire me ? Or you just liked my portfolio ? Don't hesitate to send me a message !</h2>
            <form onSubmit={onSubmit}>
                <input type="text" name="from_name" id="" placeholder="Your fullname" value={toSend.name} onChange={handleChange} required/>
                <input type="email" name="reply_email" id="" placeholder="Your email" value={toSend.reply_to} onChange={handleChange} required/>
                <textarea name="message" id="" placeholder="Your message" value={toSend.message} onChange={handleChange} required></textarea>
                <button>Send!</button>
                <div className='submit-message'>
                    {isSendMessage === 'success' ? `<p className='alert-success'> Thanks ! I'll do my best to answer as soon as I can!</p>` : null}
                    {isSendMessage === 'error' ? `<p className='alert-error'>Uh oh, something went wrong, try again later!</p>` : null}
                </div>
            </form>
        </div>
    )
}
