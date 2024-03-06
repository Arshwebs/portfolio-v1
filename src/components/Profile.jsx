import profilepic from "../assets/profile-pic.png";
import resume from "../assets/Mohamed Arsath A - Resume.pdf";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

function Profile() {
	const onButtonClick = () => {
		const link = document.createElement("a");
		link.href = resume;
		link.download = "Mohamed Arsath_resume";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};
	return (
		<>
			<section id="profile">
				<div className="section__pic-container">
					<img src={profilepic} alt="profile picture" />
				</div>
				<div className="section__text">
					<p className="section__text__p1">Hello, I &apos; m</p>
					<h1 className="title">Mohamed Arsath</h1>
					<p className="section__text__p2">Fullstack Web Developer</p>
					<div className="btn-container">
						<button className="btn btn-color-2" onClick={onButtonClick}>
							Download CV
						</button>
						<button className="btn btn-color-1" onClick={() => (location.href = "./#contact")}>
							Contact Info
						</button>
					</div>
					<div id="socials-container">
						<img
							src={linkedin}
							alt="My LinkedIn profile"
							className="icon"
							onClick={() =>
								window.open("https://www.linkedin.com/in/mohamed-arsath-767257267/", "_blank")
							}
						/>
						<img
							src={github}
							alt="My Github profile"
							className="icon"
							onClick={() => window.open("https://github.com/Arshwebs")}
						/>
					</div>
				</div>
			</section>
		</>
	);
}

export default Profile;
