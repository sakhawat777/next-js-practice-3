import React from 'react';
// First render html then load data
// export async function getServerSideProps() {
export const getServerSideProps = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();
	return {
		props: { users: data },
	};
};

const index = ({ users }) => {
	return (
		<div>
			<h1>All Counties</h1>
			{users.map((users) => (
				<div>
					<a>
						<h3>{users.name}</h3>
					</a>
				</div>
			))}
		</div>
	);
};

export default index;
