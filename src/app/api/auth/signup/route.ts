import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import crypto from 'crypto'

import { connectDB } from '@/lib/mongodb'
import User from '@/models/User'
import { sendVerificationEmail } from '@/lib/email'

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json()

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: 'Missing fields' },
        { status: 400 }
      )
    }

    await connectDB()

    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 400 }
      )
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const token = crypto.randomBytes(32).toString('hex')

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      verificationToken: token,
    })

    sendVerificationEmail(user.email, token).catch(console.error)

    return NextResponse.json(
      { message: 'User created successfully' },
      { status: 201 }
    )
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Signup failed'
    return NextResponse.json({ message }, { status: 500 })
  }
}
