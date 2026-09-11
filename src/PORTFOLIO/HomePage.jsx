import react from 'react';
function HomePage(){
    return(
        <>
        <h1>My Portfolio</h1>
        <p>Welcome to my portfolio!</p>
        <nav>
            <Link a="/">Home</Link>
            <Link a="/about">About Me</Link>
            <Link a="/resume">Resume</Link>
            <Link a="/education">Educational Details</Link>
            <Link a="/skills">Skills</Link>
            <Link a="/family">Family Details</Link>
            <Link a="/projects">Projects</Link>
            <Link a="/achievements">Achievements</Link>
            <Link a="/hobbies">Hobbies</Link>
            <Link a="/social-media">Social Media</Link>
            <Link a="/contact">Contact Me</Link>
        </nav>

        </>
    );
}
export default HomePage;
