import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        // Standard SMTP configuration that works on shared hosting and locally
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: parseInt(process.env.EMAIL_PORT || '465'),
            secure: process.env.EMAIL_PORT === '465', // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        console.log("Transporter created successfully", transporter);

        const mailOptions = {
            from: `"${name}" <${process.env.EMAIL_USER}>`, // Recommended: use your own authenticated email as from
            replyTo: email, // Set user's email as reply-to
            to: 'ahsankamran996@gmail.com',
            subject: `New Lead: ${subject || 'Contact Inquiry'}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                    <h2 style="color: #20255D; margin-bottom: 20px;">New Contact Form Submission</h2>
                    <p style="margin-bottom: 10px;"><strong>Name:</strong> ${name}</p>
                    <p style="margin-bottom: 10px;"><strong>Email:</strong> ${email}</p>
                    <p style="margin-bottom: 10px;"><strong>Subject:</strong> ${subject || 'N/A'}</p>
                    <p style="margin-top: 20px;"><strong>Message:</strong></p>
                    <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; color: #333;">
                        ${message.replace(/\n/g, '<br>')}
                    </div>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Message sent successfully' }, { status: 200 });
    } catch (error: any) {
        console.error('Error sending email:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to send message',
            error: error.message
        }, { status: 500 });
    }
}
