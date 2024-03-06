import linkedInPic from "../assets/linkedin.png";
import emailIcon from "../assets/email.png";

function Contact() {
	return (
		<>
			<section id="contact">
				<p className="section__text__p1">Get in Touch</p>
				<h1 className="title">Contact Me</h1>
				<div className="contact-info-upper-container">
					<div className="contact-info-container">
						<img src={emailIcon} alt="Email icon" className="icon contact-icon email-icon" />
						<p>
							<a href="mailto:arshathm4@gmail.com">arshathm4@gmail.com</a>
						</p>
					</div>
					<div className="contact-info-container">
						<img src={linkedInPic} alt="LinkedIn icon" className="icon contact-icon" />
						<p>
							<a href="https://www.linkedin.com/in/mohamed-arsath-767257267/">LinkedIn</a>
						</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default Contact;
