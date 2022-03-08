import { useState } from 'react'; 
import { send } from 'emailjs-com'

import './contact.scss'

export default function Contact() {
    let isSendMessage = ''
    const [isSending, loading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const service_id = 'service_q74bt0e'
    const template_id = 'template_0ymb83s'
    const user_id = 'user_0fNknb041yhrrjndTRWw2'

    const orderDetails = {

        name: name,
        email: email,
        message: message
    }

    const onSubmit = (e)=> {
        loading(true)
        e.preventDefault();
        send(
            service_id,
            template_id,
            orderDetails,
            user_id
        ).then((response) => {
            loading(false)
            isSendMessage = 'success'
            console.log(isSendMessage)
            console.log(response)
            
            setTimeout(() => {
                isSendMessage = '';
            }, 4000)
        }
        ).catch((err) => {
            isSendMessage = 'error'
            console.log(err)
            loading(false)
            setTimeout(() => {
                isSendMessage = '';
            }, 4000)
        }
        )
    }



    return (
        <div id='contact' className="contact">
            <h1 className='title'>
                contact
            </h1>
            <h2>Want to hire me ? Or you just liked my portfolio ? Don't hesitate to send me a message !</h2>
            <form onSubmit={onSubmit}>
                <input type="text" name="from_name" id="" placeholder="Your fullname" onChange={(e) => setName(e.target.value)} required/>
                <input type="email" name="reply_email" id="" placeholder="Your email"  onChange={(e) => setEmail(e.target.value)} required/>
                <textarea name="message" id="" placeholder="Your message" onChange={(e) => setMessage(e.target.value)} required></textarea>
                <button className={isSending ? "is-sending": ""}></button>
                <div className='submit-message'>
                    {isSendMessage === 'success' ? `<p className='alert-success'> Thanks ! I'll do my best to answer as soon as I can!</p>` : null}
                    {isSendMessage === 'error' ? `<p className='alert-error'>Uh oh, something went wrong, try again later!</p>` : null}
                </div>
            </form>
        </div>
    )
}
