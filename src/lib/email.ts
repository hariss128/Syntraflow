import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendVerificationEmail(
  email: string,
  token: string
) {
  const verifyUrl =
    `http://localhost:3000/api/auth/verify/${token}`

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Verify your account",
    html: `
      <h2>Welcome!</h2>
      <p>Click below to verify your account:</p>
      <a href="${verifyUrl}">Verify Email</a>
    `,
  })
}