import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Text,
} from '@react-email/components';
import * as React from 'react';

interface WelcomeEmailProps {
    userName?: string;
}

export const WelcomeEmail = ({
    userName = 'User',
}: WelcomeEmailProps) => (
    <Html>
        <Head />
        <Preview>Welcome to our platform!</Preview>
        <Body style={main}>
            <Container style={container}>
                <Heading style={h1}>Welcome, {userName}!</Heading>
                <Text style={text}>
                    Thanks for joining us. We're excited to have you on board!
                </Text>
            </Container>
        </Body>
    </Html>
);

export default WelcomeEmail;

const main = {
    backgroundColor: '#ffffff',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: '0 auto',
    padding: '20px 0 48px',
};

const h1 = {
    color: '#333',
    fontSize: '24px',
    fontWeight: 'bold',
    paddingTop: '32px',
    textAlign: 'center' as const,
};

const text = {
    color: '#333',
    fontSize: '16px',
    lineHeight: '26px',
    textAlign: 'center' as const,
};
