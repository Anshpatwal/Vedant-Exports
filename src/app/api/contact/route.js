import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, subject, message } = body;

        await resend.emails.send({
            from: 'anshpatwal2703@gmail.com', // Change to your email or verified domain
            to: 'rohitsharma122333444@gmail.com', // Your business email
            subject: `New Contact Form Inquiry: ${subject}`,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
    }
}
