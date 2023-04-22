export default {
  translation: {
    pluralWithNumber: '{{count}} {{pluralValues, plurals}}',
    pluralWithoutNumber: '{{pluralValues, plurals}}',

    counter: {
      zero: 'Если нуль, то: ',
      one: 'Если адин, то: ',
      many: 'Если сто, то: ',
    },

    intlRelativeTimeHour: 'Бронь закончится: {{val, relativetime(range: hour)}}',
    intlRelativeTimeMinutes: 'Бронь закончится: {{val, relativetime(range: minutes)}}',

    intlNumber: 'Сумма: {{val, number}}',
    intlCurrency: 'Сумма: {{localValue, currency}}',

    changeLanguage: 'сменить язык',

    plurals: {
      docs: ['документ', 'документа', 'документов']
    },
  },
};
