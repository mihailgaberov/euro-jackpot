import numeral from 'numeral';

export class CurrencyFormatValueConverter {
  toView(value) {
    value = value.toString();
    const cents =  value.substring(value.length - 2);
    const units = value.replace(cents, '');
    return '€' + numeral(units).format('0,0') + '.' + cents;
  }
}

export class WinnersFormatValueConverter {
  toView(value) {
    return numeral(value).format('0,000');
  }
}
