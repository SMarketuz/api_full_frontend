import { Box } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import UserRegister from './pages/userRegister'
import {
	AllUsers,
	CreateProducts,
	AllProducts,
	AdminLayout,
} from './admin/index.js'

function App() {
	return (
		<Box>
			{/* <Box>Navbar</Box> */}

			<Box>
				{/* Routers */}
				<Routes>
					<Route path='/' element={<UserRegister />} />

					<Route path='/dashboard' element={<AdminLayout />}>
						<Route path='users' element={<AllUsers />} />
						<Route path='createProducts' element={<CreateProducts />} />
						<Route path='allProducts' element={<AllProducts />} />
					</Route>
				</Routes>
			</Box>

			{/* <Box>Footer</Box> */}
		</Box>
	)
}

export default App
