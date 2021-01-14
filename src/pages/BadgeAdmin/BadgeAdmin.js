import React from "react";
import { useRecoilState } from "recoil";
import { userAtom } from "../../global/globalState";

const users = [
	{
		_id: "22hj3j2keji2e2",
		fullname: "My Name",
		useremail: "mail@email.com",
		profileLink: "https://dsc.community.dev/p/2324fds",
	},
	{
		_id: "22hj3j2kji2e2",
		fullname: "My Name",
		useremail: "mail@email.com",
		profileLink: "https://dsc.community.dev/p/2324fds",
	},
	{
		_id: "22hj3j2kei2e2",
		fullname: "My Name",
		useremail: "mail@email.com",
		profileLink: "https://dsc.community.dev/p/2324fds",
	},
];

const BadgeAdmin = () => {
	const [, setUser] = useRecoilState(userAtom);
	const handleLogOut = () => {
		setUser(null);
        localStorage.removeItem("user");
	};
	return (
		<div className="BadgeAdmin">
			<div className="head">
				<h1>Welcome Admin</h1>
				<button className="log-out" onClick={handleLogOut}>
					Log Out
				</button>
			</div>
			<table>
				<tr>
					<th>Name</th>
					<th>Email</th>
					<th>Profile Link</th>
				</tr>
				{users.map(({ _id, fullname, useremail, profileLink }) => (
					<tr key={_id}>
						<td>{fullname}</td>
						<td>{useremail}</td>
						<td>{profileLink}</td>
					</tr>
				))}
			</table>
			<button className="export">Export to Excel</button>
		</div>
	);
};

export default BadgeAdmin;
