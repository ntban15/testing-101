type LocaleType = 'vi' | 'en-us';

type ConfigType = { 
  delimiter: string, 
  unitFormatter: (currencyString: string) => string,
};

const LocaleCurrencyConfig: {[key in LocaleType]: ConfigType} = {
  'vi': {
    delimiter: ',',
    unitFormatter: str => `${str}đ`,
  },
  'en-us': {
    delimiter: '.',
    unitFormatter: str => `US$${str}`,
  },
};

export function formatCurrency(amount: number, locale: LocaleType): string {
  const { delimiter, unitFormatter } = LocaleCurrencyConfig[locale];
  const thousands = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter);
  return unitFormatter(thousands);
};
