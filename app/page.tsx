import { About } from '@/components/about';
import { Categories } from '@/components/categories';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { OrderForm } from '@/components/order-form';
import { Products } from '@/components/products';
import { Reviews } from '@/components/reviews';
import { Subscriptions } from '@/components/subscriptions';
import { WhatsAppFloat } from '@/components/whatsapp-float';

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Categories />
      <Products />
      <Subscriptions />
      <Reviews />
      <OrderForm />
      <WhatsAppFloat />
    </main>
  );
}
