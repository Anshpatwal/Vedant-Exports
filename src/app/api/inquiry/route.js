// app/api/inquiry/route.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const body = await req.json();
        const { product, quantity, company, email, message } = body;

        await resend.emails.send({
            from: 'onboarding@resend.dev', // change to a verified domain or Resend's default
            to: 'rohitsharma122333444@gmail.com', // your business email to receive inquiries
            subject: `New Inquiry from ${company}`,
            html: `
        <h3>New Product Inquiry</h3>
        <p><strong>Product:</strong> ${product}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
    }
}
