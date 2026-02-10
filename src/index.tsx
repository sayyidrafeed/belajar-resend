import { Hono } from 'hono'
import { Resend } from 'resend'
import { render } from '@react-email/render'
import { WelcomeEmail } from './emails/WelcomeEmail'

const app = new Hono()

// Initialize Resend with API Key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY)

app.get('/', (c) => {
    return c.text('Resend + Hono + Bun is running!')
})

app.post('/send-email', async (c) => {
    try {
        const { to, subject } = await c.req.json()

        if (!to || !subject) {
            return c.json({ error: 'Missing required fields: to, subject' }, 400)
        }

        const emailHtml = await render(<WelcomeEmail userName="New User" />)

        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev', 
            to,
            subject,
            html: emailHtml,
        })

        if (error) {
            return c.json({ error }, 400)
        }

        return c.json({ data })
    } catch (err) {
        console.error(err)
        return c.json({ error: 'Invalid JSON or internal server error' }, 500)
    }
})

export default {
    port: 3000,
    fetch: app.fetch,
}
