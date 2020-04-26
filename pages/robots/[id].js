import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Robot = (props) => {
	const { robot } = props;

  return (
  	<div>
  		<h1>{robot.name}</h1>
  		<div>{robot.email}</div>
  		<div>{robot.username}</div>
  		<br />
  		<Link href="/"><button>Home</button></Link> 
  		<Link href="/robots"><button>Robots</button></Link> 
  	</div>
  	)	
}

Robot.getInitialProps = async function({ query }) {
	const res = await fetch('https://jsonplaceholder.typicode.com/users/' + query.id);
	const data = await res.json();

	return {
		robot: data
	}
}
 
export default Robot;