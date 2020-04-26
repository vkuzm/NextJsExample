import Link from 'next/link';
import Image from '../components/Image';

const About = () => (
	<div>
		<h1>About</h1>
		<Image />
		<Link href="/"><button>Home</button></Link>
	</div>
);

export default About;