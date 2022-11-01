import styles from "./styles.module.css";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>fakebook</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<main className="main-page">
				<h1>Hello</h1>
			</main>
		</div>
	);
};

export default Main;

// import React from 'react'
// import { Table, TableHead, TableBody, TableRow, TableCell, styled, Button} from '@mui/material';
// import { useEffect, useState } from 'react';
// // import LogoutNavbar from '../../components/logoutNavbar/LogoutNavbar'
// import {Link} from 'react-router-dom'
// import { getUsers, deleteUser } from '../../service/api.js';
// // import EditUser from '../editUser/EditUser';

// const StyledTable = styled(Table)`
//   width: 90%;
//   margin: 70px auto;
// `

// const THead = styled(TableRow)`
//   background: #000;

//   & > th {
//     color: #fff;
//     font-size: 18px;
//   }
// `

// const TBody = styled(TableRow)`
// & > td{
//   font-size: 17px;
// }
// ` 

// const AllUser = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     getAllUsers()
//   }, []);

//   const getAllUsers = async () => {
//     let response = await getUsers();
//     setUsers(response.data);
//     console.log(response.data);
//   };

//   const deleteUserDetails = async (id) => {
//     await deleteUser(id);
//     getAllUsers();
//   };

//   return (
//     <>
//     {/* <LogoutNavbar/> */}
//     <StyledTable>
//       <TableHead>
//         <THead>
//           <TableCell>Id</TableCell>
//           <TableCell>First Name</TableCell>
//           <TableCell>Last Name</TableCell>
//           <TableCell>Email</TableCell>
//           <TableCell>City</TableCell>
//           <TableCell>Website</TableCell>
//           <TableCell></TableCell>
//         </THead>
//       </TableHead>
//       <TableBody>
//         {
//           users.map(user => (
//             <TBody key={user._id}>
//               <TableCell >{user._id}</TableCell>
//               <TableCell >{user.firstname}</TableCell>
//               <TableCell >{user.lastname}</TableCell>
//               <TableCell >{user.email}</TableCell>
//               <TableCell >{user.city}</TableCell>
//               <TableCell >{user.website}</TableCell>
//               <TableCell>
//                 <Button variant='contained' style={{ marginRight: 10 }} component={ Link } to={`/edit/${user._id}`}>Edit</Button>
//                 <Button variant='contained' color='secondary' onClick={() =>  deleteUserDetails(user._id)}>Delete</Button>
//               </TableCell>
//             </TBody>
//           ))
//         }
//       </TableBody>
//     </StyledTable>
//     </>
//   )
// }

// export default AllUser;
