import { NextResponse } from 'next/server';
import { getSingleItem } from '@/lib/wix';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const data = await getSingleItem('ContactSettings');
    return NextResponse.json({ 
      status: 'success', 
      message: 'Here is the exact data Wix is sending to your code:',
      data: data 
    });
  } catch (error: any) {
    return NextResponse.json({ 
      status: 'error', 
      message: error.message 
    });
  }
}
