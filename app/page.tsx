import { Categories } from '@/components/categories';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { OrderForm } from '@/components/order-form';
import { Products } from '@/components/products';
import { Reviews } from '@/components/reviews';
import { Subscriptions } from '@/components/subscriptions';
export default function HomePage(){return <main><Header/><Hero/><Categories/><Products/><Subscriptions/><OrderForm/><Reviews/><Footer/><a href="https://wa.me/966500000000?text=مرحبًا، أرغب في الطلب من حنيني سبيشل" className="fixed bottom-5 left-5 rounded-full bg-green-600 px-5 py-3 font-bold text-white shadow-soft">واتساب</a></main>}
