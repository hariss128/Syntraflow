import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

import { connectDB } from '@/lib/mongodb'
import User from '@/models/User'

export async function DELETE() {
  try {

    const cookieStore = await cookies()

    const token = cookieStore.get('token')?.value

    if (!token) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    const decoded: any = jwt.verify(
      token,
      process.env.JWT_SECRET!
    )

    await connectDB()

    const deletedUser =
      await User.findByIdAndDelete({
        _id: decoded.userId,
  })

    console.log('DELETED USER:', deletedUser)

    const response = NextResponse.json({
      message: 'Account deleted successfully',
    })

    // CLEAR COOKIE
    response.cookies.set('token', '', {
      expires: new Date(0),
      path: '/',
    })

    return response

  } catch (error: any) {

    console.log(error)

    return NextResponse.json(
      { message: 'Delete failed' },
      { status: 500 }
    )
  }
}