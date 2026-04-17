import { NextResponse } from 'next/server';
import { getSupabaseAdminClient } from '@/lib/supabase';

export async function POST(request: Request) {
  const supabase = getSupabaseAdminClient();
  const payload = await request.json();

  if (!supabase) {
    return NextResponse.json(
      {
        message: 'Supabase غير مربوط بعد. تم استلام الاشتراك تجريبيًا.',
        payload
      },
      { status: 200 }
    );
  }

  const { error, data } = await supabase.from('subscriptions').insert(payload).select().single();

  if (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: 'تم حفظ الاشتراك', data });
}
