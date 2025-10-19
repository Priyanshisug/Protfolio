
import './ContactSection.css';

const ContactSection = () => {

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <h2 className="contact-heading">
                    Get in Touch
                </h2>
                <div className="contact-info">
                    <div className="contact-card">
                        <h3>Email</h3>
                        <p>
                            <a href = "mailto:priyanshisugandhi28@gmail.com">
                                priyanshisugandhi28@gmail.com
                            </a>
                        </p>
                    </div>
                    <div className="contact-card">
                        <h3>Linkedln</h3>
                        <p>
                            <a href = "https://www.linkedin.com/in/priyanshi-sugandhi" target='_blank'>
                                linkedin.com/in/priyanshisugandhi
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ContactSection;