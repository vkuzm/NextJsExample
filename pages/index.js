import Link from 'next/link';

const Index = () => (
	<div>
		<h1>Home</h1>
		<Link href="/robots"><button>Robots</button></Link><br />
		<Link href="/about"><button>About</button></Link><br />
		<a href="/about"><button>About SSR</button></a>
	</div>
);

export default Index;