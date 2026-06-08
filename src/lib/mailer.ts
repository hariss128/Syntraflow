import nodemailer from 'nodemailer'

export const sendVerificationEmail = async (
  email: string,
  token: string
) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS?.trim(),
        },
    })

  const verifyUrl = `http://localhost:3000/verify/${token}`

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Verify Your Email',
    html: `
      <h2>Email Verification</h2>
      <p>Click below to verify your account:</p>

      <a href="${verifyUrl}">
        Verify Email
      </a>
    `,
  })
}