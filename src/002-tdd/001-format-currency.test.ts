import { formatCurrency } from './001-format-currency';

describe('formatCurrency', () => {
  it('should format VND correctly', () => {
    expect(formatCurrency(500, 'vi')).toEqual('500đ');
    expect(formatCurrency(50000, 'vi')).toEqual('50,000đ');
    expect(formatCurrency(5000000, 'vi')).toEqual('5,000,000đ');
  });

  it('should format USD correctly', () => {
    expect(formatCurrency(500, 'en-us')).toEqual('US$500');
    expect(formatCurrency(50000, 'en-us')).toEqual('US$50.000');
    expect(formatCurrency(5000000, 'en-us')).toEqual('US$5.000.000');
  });
});
