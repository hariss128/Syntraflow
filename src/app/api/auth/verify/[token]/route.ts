import { NextResponse } from "next/server"

import { connectDB } from "@/lib/mongodb"
import User from "@/models/User"

export async function GET(
  req: Request,
  context: { params: Promise<{ token: string }> }
) {
  try {
    await connectDB()

    // IMPORTANT
    const params = await context.params

    const user = await User.findOne({
      verificationToken: params.token,
    })

    console.log("TOKEN:", params.token)
    console.log("FOUND USER:", user)

    if (!user) {
      return NextResponse.json(
        { message: "Invalid token" },
        { status: 400 }
      )
    }

    user.isVerified = true
    user.verificationToken = undefined

    await user.save()

    return NextResponse.redirect(
      new URL("/login", req.url)
    )

  } catch (error) {
    console.log(error)

    return NextResponse.json(
      { message: "Verification failed" },
      { status: 500 }
    )
  }
}