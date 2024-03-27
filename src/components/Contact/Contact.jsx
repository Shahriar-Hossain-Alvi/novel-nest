import { useState } from "react";

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (message.length <= 5) {
            setError('Give Detailed Information');
        }
        else {
            setError('');
            console.log('Name: ', name, 'Email: ', email, 'Message: ', message);

            setName("");
            setEmail("");
            setMessage("");
        }
    }


    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handleMessageChange = e => {
        setMessage(e.target.value);
    }

    return (
        <div className="my-10 flex justify-center">
            <div className="contact-us border p-5 rounded-xl">
                <h1 className="text-center text-4xl font-playfair font-medium mb-3">Contact Us</h1>
                <p className="text-lg mb-8">We would love to hear from you! Feel free to reach out with any questions, comments, or suggestions.</p>

                <form onSubmit={handleFormSubmit} className="flex flex-col gap-3 mb-5">
                    <div className="flex flex-col lg:flex-row gap-5">
                        <label className="input input-bordered flex items-center gap-2">
                            Name:
                            <input value={name} onChange={handleNameChange} type="text" className="grow" placeholder="Your name" required />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            Email:
                            <input value={email} onChange={handleEmailChange} type="email" className="grow" placeholder="Your email" required />
                        </label>
                    </div>
                    <textarea value={message} onChange={handleMessageChange} className="textarea textarea-bordered" required placeholder="Message"></textarea>
                    <br />
                    <button className="btn text-white bg-[#23BE0A]">Send Message</button>
                    {
                        error && <p>{error}</p>
                    }
                </form>


                <p className="text-xl font-medium">You can also reach us at:</p>
                <ul className="contact-info text-lg font-bold">
                    <li>
                        <a href="mailto:support@novelnest.com">support@novelnest.com</a>
                    </li>
                    <li>
                        <a href="tel:+1234567890">+1 (234) 567-890</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Contact;