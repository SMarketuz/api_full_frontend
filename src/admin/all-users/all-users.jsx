import {
	Box,
	Table,
	TableCaption,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { API_URL } from '../../api/api'

const AllUsers = () => {
	const [users, setUsers] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		axios.get(`${API_URL}api/user/all`).then(res => {
			setUsers(res.data)
			setLoading(false)
		})
	}, [])

	const deleteUser = id => {
		axios.delete(`${API_URL}/api/user/delete/${id}`).then(() => {
			setUsers(users.filter(user => console.log(user)))
		})
	}

	return (
		<>
			<Box width='100%' padding='20px'>
				<Text
					width={'100%'}
					textAlign={'center'}
					backgroundColor={'gray'}
					color={'white'}
					fontSize={'20px'}
					padding={'5px'}
				>
					All Users
				</Text>
				{loading ? (
					<Text>Loading...</Text>
				) : (
					<TableContainer>
						<Table variant='simple' width={'100%'}>
							<TableCaption>Imperial to metric conversion factors</TableCaption>
							<Thead>
								<Tr>
									<Th>N_0</Th>
									<Th>Name</Th>
									<Th>Username</Th>
									<Th isNumeric>Email</Th>
									<Th>Delete</Th>
								</Tr>
							</Thead>
							<Tbody>
								{users.data.map((user, index) => {
									return (
										<Tr key={user._id}>
											<Td>{index + 1}</Td>
											<Td>{user.name}</Td>
											<Td>{user.username}</Td>
											<Td>{user.email}</Td>
											<Td
												cursor={'pointer'}
												onClick={() => deleteUser(user._id)}
											>
												delete
											</Td>
										</Tr>
									)
								})}
							</Tbody>
						</Table>
					</TableContainer>
				)}
			</Box>
		</>
	)
}

export default AllUsers
