/* eslint-disable no-nested-ternary,no-unexpected-multiline */
import { InterpolationOptions, StringMap } from 'i18next';

/**
 * pluralsFormatter - утилита для определения слова во многожественном числе
 * @{value} - массив слов в определённом порядке.
 *  ru [1, 2, 5]: ['документ', 'документа', 'документов']
 *  en [1, other]: ['document', 'documents']
 *
 * @{lng} - язык (ru || en)
 *
 * @{options} - значения по умолчанию из i18n + все переменные переданные в перевод
 *   Для корректной работы обязателен аргумент "count"
 */
export const pluralsFormatter = (value: any, lng?: string, options?: InterpolationOptions & StringMap) => {
  if (Array.isArray(value)) {
    const count = options?.count ?? 1;

    if (lng === 'en') {
      const [one, few] = value;

      return count === 1 ? one : few;
    }

    if (lng === 'ru') {
      return value
        [count % 10 === 1 && count % 100 !== 11 ?
          0 :
          count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20) ?
            1 :
            2
        ];
    }
  }

  return value;
};
