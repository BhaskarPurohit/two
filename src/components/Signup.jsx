import React from 'react'
import {Container,VStack,Heading, Input,Button, Text,Avatar} from "@chakra-ui/react"
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Container>
        <form action="">
            <VStack alignItems={"stretch"} spacing={'8'}
              w={['full', '96']}
              m={'auto'}
              my={'16'}>
                <Heading>Video Hub</Heading>
                <Avatar alignSelf='center' boxSize='32'/>
                <Input placeholder= {"Name"} type={"name"} required focusBorderColor={'purple.500'}/>

                

                <Input placeholder= {"Email"} type={"email"} required focusBorderColor={'purple.500'}/>
                <Input placeholder= {"Password"} type={"password"} required focusBorderColor={'purple.500'}/>
                <Input placeholder= {"Re-enter the Password"} type={"password"} required focusBorderColor={'purple.500'}/>
               

                <Button colorScheme='purple' type='submit'>Sign Up</Button>

                <Text textAlign={'right'}>Already using? {' '}
                  <Button variant={'link'} colorScheme='purple' alignSelf={'flex-end'}>
                    <Link to={'/login'}>Log In</Link>
                  </Button>
                 </Text>
                

            </VStack>
        </form>
    </Container>
  )
}

export default Signup