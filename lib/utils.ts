export const currency = new Intl.NumberFormat('ar-SA', {
  style: 'currency',
  currency: 'SAR',
  maximumFractionDigits: 0
});

export function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(' ');
}
