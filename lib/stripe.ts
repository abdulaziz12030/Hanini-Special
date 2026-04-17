import Stripe from 'stripe';

let stripeInstance: Stripe | null = null;

export function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  if (!stripeInstance) {
    stripeInstance = new Stripe(key, {
      apiVersion: '2025-03-31.basil'
    });
  }
  return stripeInstance;
}
