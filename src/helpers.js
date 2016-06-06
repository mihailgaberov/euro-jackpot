import numeral from 'numeral';

export class CurrencyFormatValueConverter {
  toView(value) {
  	if (!value) {
		throw new Error('No valid currency data to be converted.');
  	}
  	
    value = value.toString();
    const cents =  value.substring(value.length - 2);
    const units = value.replace(cents, '');
    return '€' + numeral(units).format('0,0') + '.' + cents;
  }
}

export class WinnersFormatValueConverter {
  toView(value) {
  	if (!value) {
		throw new Error('No valid winners data to be converted.');
  	}

    return numeral(value).format('0,000');
  }
}
