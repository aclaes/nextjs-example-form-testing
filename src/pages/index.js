import WithGlobalState from '../components/WithGlobalState/WithGlobalState';
import WithStateUplifting from '../components/WithStateUplifting/WithStateUplifting';

export default function HomePage() {
	return (
		<>
			<WithStateUplifting />
			<hr />
			<WithGlobalState />
		</>
	);
}
