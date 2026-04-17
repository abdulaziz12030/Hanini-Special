import { NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';

export async function POST(request: Request) {
  const stripe = getStripe();
  const payload = await request.json();

  if (!stripe) {
    return NextResponse.json(
      {
        message: 'Stripe غير مربوط بعد. أضف المفاتيح لتفعيل الدفع وApple Pay.',
        payload
      },
      { status: 200 }
    );
  }

  const origin = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
  const amount = Number(payload.amount ?? 0);

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'sar',
          unit_amount: amount * 100,
          product_data: {
            name: payload.title ?? 'طلب حنيني سبيشل'
          }
        },
        quantity: 1
      }
    ],
    success_url: `${origin}/?payment=success`,
    cancel_url: `${origin}/?payment=cancelled`
  });

  return NextResponse.json({ url: session.url });
}
