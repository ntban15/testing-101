export function formatCurrency(amount: number, locale: string): string {

  if (locale !== 'vi' && locale !== 'en-us') {
    return amount.toString();
  }

  let delimiter = '';

  if (locale === 'vi') {
    delimiter = ',';
  }
  if (locale === 'en-us') {
    delimiter = '.';
  }

  const thousands = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter);

  if (locale === 'vi') {
    return `${thousands}đ`;
  }
  if (locale === 'en-us') {
    return `US$${thousands}`
  }
};
