const Contact = () => {
    return (
        <div className="my-10 flex justify-center">
            <div className="contact-us border p-5 rounded-xl">
                <h1 className="text-center text-4xl font-playfair font-medium mb-3">Contact Us</h1>
                <p className="text-lg mb-8">We would love to hear from you! Feel free to reach out with any questions, comments, or suggestions.</p>
                <form onSubmit={(e)=>e.preventDefault()} className="flex flex-col gap-3 mb-5">
                    <div className="flex gap-5">
                        <label className="input input-bordered flex items-center gap-2">
                            Name:
                            <input type="text" className="grow" placeholder="Your name" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            Email:
                            <input type="text" className="grow" placeholder="Your email" />
                        </label>
                    </div>
                    <textarea className="textarea textarea-bordered" placeholder="Message"></textarea>
                    <br />
                    <button className="btn text-white bg-[#23BE0A]">Send Message</button>
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