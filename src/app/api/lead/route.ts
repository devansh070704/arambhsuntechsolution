import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const scriptUrl =
      process.env.APPS_SCRIPT_URL || process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;

    if (!scriptUrl) {
      console.log('APPS_SCRIPT_URL not configured. Form submission simulated.');
      return NextResponse.json({ success: true, simulated: true });
    }

    const formData = new URLSearchParams();
    Object.keys(body).forEach((key) => {
      formData.append(key, String(body[key] || ''));
    });

    await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error sending lead via server route:', error);
    return NextResponse.json(
      { success: false, error: error?.toString() },
      { status: 500 }
    );
  }
}
