import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real application, you would send an email via SendGrid, Resend, or save to a database.
    console.log("New Enquiry Received:", body);

    return NextResponse.json(
      { message: "Enquiry received successfully!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to process enquiry" },
      { status: 500 }
    );
  }
}
