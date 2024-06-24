import { NextResponse } from 'next/server'

export async function GET() { 

  return NextResponse.json({ msg: 'GET => Hello World' });
}

export async function POST() { 

  return NextResponse.json({ msg: 'POST => Hello World' });
}