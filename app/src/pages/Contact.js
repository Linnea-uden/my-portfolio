import emailjs from "emailjs-com";
import '../styles/Contact.css'

 export const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_6jtxd4v', 'template_7ij0voi', e.target, 'user_pJlqAB8URft59eXK8nSN0')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div>
            <div className="container">
                <h2>Contact Me</h2>
            <form onSubmit={sendEmail}>
                    <div className="contactForm">
                        <div className="input">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="input">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="input">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="input">
                            <textarea className="form-control-textarea" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="input">
                            <input type="submit" className="btn" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

