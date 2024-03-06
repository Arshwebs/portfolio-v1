import profilePicAbout from "../assets/about-pic.png";
import experiencePic from "../assets/experience.png";
import educationPic from "../assets/education.png";
import arrowPic from "../assets/arrow.png";

function About() {
	return (
		<>
			<section id="about">
				<p className="section__text__p1">Get To Know More</p>
				<h1 className="title">About Me</h1>
				<div className="section-container">
					<div className="section__pic-container">
						<img src={profilePicAbout} alt="Profile picture" className="about-pic" />
					</div>
					<div className="about-details-container">
						<div className="about-containers">
							<div className="details-container">
								<img src={experiencePic} alt="Experience icon" className="icon" />
								<h3>Experience</h3>
								<p>2+ years</p>
							</div>
							<div className="details-container">
								<img src={educationPic} alt="Education icon" className="icon" />
								<h3>Education</h3>
								<p>B.E. Bachelors Degree</p>
							</div>
						</div>
						<div className="text-container">
							<p>
								Passionate full stack developer skilled in crafting dynamic web applications. Proficient in
								HTML, CSS, JavaScript, TypeScript, and experienced with React and Node.js frameworks. Excels
								in HTML email development, ensuring effective communication strategies. Committed to staying
								current with industry trends, I bring meticulous attention to detail and a dedication to
								delivering high-quality, scalable web applications.
							</p>
						</div>
					</div>
				</div>
				<img
					src={arrowPic}
					alt="Arrow icon"
					className="icon arrow"
					onClick={() => (location.href = "./#experience")}
				/>
			</section>
		</>
	);
}

export default About;
