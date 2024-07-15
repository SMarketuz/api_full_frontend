import { Box, Button, Heading, Input, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import axios from 'axios'
import { API_URL } from '../api/api'

const UserRegister = () => {
    const toast = useToast()
    const [show , setShow] = useState(true)
    const [loading , setLoading] = useState(true)
    const [valu ,setValue] = useState({
        name: '',
        email: '',
        username: '',
        password: ''
    })

    const handleRegister = () => {
        axios.post(`${API_URL}api/user/new` , {
            'name': valu.name,
            'email': valu.email,
            'username': valu.username,
            'password': valu.password
        }).then(res => {
            setLoading(true)
            toast({
                title: `${res.data.massage}`,
                status: 'success',
                duration: 2000,
                isClosable: true,
                position: 'top-right'
            })
            setShow(false)
        })
    }

    const handleLogin = () => {
        axios.post(`${API_URL}api/user/login` , {
            'username': valu.username,
            'password': valu.password
        }).then(res => {
            localStorage.setItem('token' , res.data.token)
            setLoading(true)
            toast({
                title: `${res.data.massage}`,
                status: 'success',
                duration: 2000,
                isClosable: true,
                position: 'top-right'
            })
        })
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} minH={'100vh'} justifyContent={'center'}>
            <Box width={'500px'} h={'100%'} p={'20px'} rounded={'8px'} border={'1px'} borderColor={'gray'}>
                <Box>
                    <Heading>Ro'yxatdan o'tish</Heading>
                </Box>

               {show && <Box display={'flex'} flexDirection={'column'} gap={2}>
                    <FormControl>
                        <FormLabel>Ism</FormLabel>
                        <Input onChange={e => setValue({...valu , name: e.target.value})} type='text' placeholder='ism...' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input onChange={e => setValue({...valu , email: e.target.value})} type='email'  placeholder='email...' />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Username</FormLabel>
                        <Input onChange={e => setValue({...valu , username: e.target.value})} type='text' placeholder='username...' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input onChange={e => setValue({...valu , password: e.target.value})} type='password'  placeholder='parol...' />
                    </FormControl>

                    <Box onClick={() => setShow(false)}>
                        <Text  color={'blue'} cursor={'pointer'}>Akkountingiz bo'rmi?</Text>
                    </Box>

                    <Box>
                       { loading &&<Button onClick={() => {
                            handleRegister()
                            setLoading(false)
                        }} width={'100%'} bg={'green.300'} _hover={{ bg: '' }} >Tasdiqlash</Button>}

                        {!loading && <Button
                            isLoading
                            loadingText='Loading'
                            colorScheme='teal'
                            variant='outline'
                            spinnerPlacement='start'
                            width={'100%'} bg={'green.300'} _hover={{ bg: '' }} 
                        >
                            Submit
                        </Button>}
                    </Box>

                </Box>}

               {!show && <Box display={'flex'} flexDirection={'column'} gap={2}>
                    <FormControl>
                        <FormLabel>Username</FormLabel>
                        <Input value={valu.username} onChange={e => setValue({...valu , username: e.target.value})} type='text' placeholder='username...' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input value={valu.password} onChange={e => setValue({...valu , username: e.target.value})} type='password'  placeholder='parol...' />
                    </FormControl>

                    <Box  onClick={() => setShow(true)}>
                        <Text  color={'blue'} cursor={'pointer'}>Akkountingiz yo'qmi?</Text>
                    </Box>

                    <Box>
                       {loading && <Button onClick={() => {
                            handleLogin()
                        }} width={'100%'} bg={'green.300'} _hover={{ bg: '' }} >Tasdiqlash</Button>}
                       {!loading && <Button
                            isLoading
                            loadingText='Loading'
                            colorScheme='teal'
                            variant='outline'
                            spinnerPlacement='start'
                            width={'100%'} bg={'green.300'} _hover={{ bg: '' }} 
                        >
                            Submit
                        </Button> }
                    </Box>

                </Box>}

            </Box>
        </Box>
    )
}

export default UserRegister