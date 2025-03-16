import React, { CSSProperties } from 'react'
import { Html, Body, Container, Text, Link, Preview, Tailwind} from '@react-email/components'

const WelcomeTemplate = ({name}: {name: string}) => {
  return (
    <Html>
        <Preview>Welcome aboard!</Preview>
        <Tailwind>
            <Body style={body}>
                <Container>
                    <Text style={heading}>Hello {name}</Text>
                    <Link className='text-yellow-900' href="ErfanPoursoleimani">www.erfanpoursoleimani.com</Link>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}
const body: CSSProperties = {
}
const heading: CSSProperties = {
    fontSize: "32px"
}

export default WelcomeTemplate