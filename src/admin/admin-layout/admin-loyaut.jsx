import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Text } from '@chakra-ui/react'
import { Link, Outlet } from 'react-router-dom'

const AdminLayout = () => {
	return (
		<>
			<Box display={'flex'}>
				<Box
					className='sidebar'
					width={'250px'}
					backgroundColor={'#2F3349'}
					color={'white'}
					height={'100vh'}
					position={'fixed'}
					top={0}
					left={0}
				>
					<Text textAlign={'center'} margin={'20px 0'}>
						Admin Panel
					</Text>
					<ul>
						<li>
							<Link to='/dashboard'>
								<Box
									display={'flex'}
									justifyContent={'space-between'}
									alignItems={'center'}
									padding={'10px 20px'}
									cursor={'pointer'}
									sx={{
										'&:hover': {
											backgroundColor: '#3D4056',
										},
									}}
								>
									<Box>
										<Text>Dashboards</Text>
									</Box>
									<Box>
										<ChevronRightIcon fontSize={'22px'} />
									</Box>
								</Box>
							</Link>
						</li>
						<li>
							<Link to='users'>
								<Box
									display={'flex'}
									justifyContent={'space-between'}
									alignItems={'center'}
									padding={'10px 20px'}
									cursor={'pointer'}
									sx={{
										'&:hover': {
											backgroundColor: '#3D4056',
										},
									}}
								>
									<Box>
										<Text>All Users</Text>
									</Box>
									<Box>
										<ChevronRightIcon fontSize={'22px'} />
									</Box>
								</Box>
							</Link>
						</li>
						<li>
							<Link to='createProducts'>
								<Box
									display={'flex'}
									justifyContent={'space-between'}
									alignItems={'center'}
									padding={'10px 20px'}
									cursor={'pointer'}
									sx={{
										'&:hover': {
											backgroundColor: '#3D4056',
										},
									}}
								>
									<Box>
										<Text>Create Products</Text>
									</Box>
									<Box>
										<ChevronRightIcon fontSize={'22px'} />
									</Box>
								</Box>
							</Link>
						</li>
						<li>
							<Link to='allProducts'>
								<Box
									display={'flex'}
									justifyContent={'space-between'}
									alignItems={'center'}
									padding={'10px 20px'}
									cursor={'pointer'}
									sx={{
										'&:hover': {
											backgroundColor: '#3D4056',
										},
									}}
								>
									<Box>
										<Text>All Products</Text>
									</Box>
									<Box>
										<ChevronRightIcon fontSize={'22px'} />
									</Box>
								</Box>
							</Link>
						</li>
					</ul>
				</Box>

				<Box
					marginLeft='250px'
					padding='20px'
					display='flex'
					justifyContent='center'
					height='100vh'
					width='calc(100% - 250px)'
				>
					<Outlet />
				</Box>
			</Box>
		</>
	)
}

export default AdminLayout
