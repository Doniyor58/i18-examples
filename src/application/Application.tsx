import React, { useCallback } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { EN, RU } from '../constants';

import styles from './Application.module.scss';

const getCustomRelativeTime = (lang: string, hour: number, minutes: number) => {
  const output = [];
  const rtf = new Intl.RelativeTimeFormat(lang);

  if (hour) {
    output.push(rtf.format(hour, 'hour'))
  }

  if (minutes) {
    output.push(
      output.length
        ? rtf.formatToParts(minutes, 'minutes').map(({ value }) => value).slice(1).join('')
        : rtf.format(minutes, 'minutes')
    );
  }

  return output.join(' ');
}

const AppComponent = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = useCallback(() => {
    const prevLang = i18n.language
    i18n.changeLanguage(prevLang === EN ? RU : EN)
  }, [])

  return (
    <div className={styles.page}>
      <button className={styles.button} onClick={toggleLanguage}>{t('changeLanguage')}</button>

      <div className={styles.examples}>
        <h2 className={styles.title}>Prural с числом</h2>

        <Trans i18nKey="pluralWithNumber" values={{ pluralValues: t('plurals.docs'), count: 0 }} />
        <Trans i18nKey="pluralWithNumber" values={{ pluralValues: t('plurals.docs'), count: 1 }} />
        <Trans i18nKey="pluralWithNumber" values={{ pluralValues: t('plurals.docs'), count: 2 }} />
        <Trans i18nKey="pluralWithNumber" values={{ pluralValues: t('plurals.docs'), count: 10 }} />
        <Trans i18nKey="pluralWithNumber" values={{ pluralValues: t('plurals.docs'), count: 121 }} />
        <Trans i18nKey="pluralWithNumber" values={{ pluralValues: t('plurals.docs'), count: 100501 }} />
      </div>

      <div className={styles.examples}>
        <h2 className={styles.title}>Prural без числа</h2>

        <span>
          {t('counter.zero')}
          {t('pluralWithoutNumber', {
            pluralValues: t('plurals.docs'),
            count: 0
          })}
        </span>

        <span>
          {t('counter.one')}
          {t('pluralWithoutNumber', {
            pluralValues: t('plurals.docs'),
            count: 1
          })}
        </span>

        <span>
          {t('counter.many')}
          {t('pluralWithoutNumber', {
            pluralValues: t('plurals.docs'),
            count: 100
          })}
        </span>
      </div>


      <div className={styles.examples}>
        <h2 className={styles.title}>intlRelativeTime</h2>

        <Trans i18nKey="intlRelativeTimeHour" values={{ val: 1 }} />
        <Trans i18nKey="intlRelativeTimeHour" values={{ val: 12 }} />
        <Trans i18nKey="intlRelativeTimeMinutes" values={{ val: 2 }} />
        <Trans i18nKey="intlRelativeTimeMinutes" values={{ val: 21 }} />

        <span>
          <b>{getCustomRelativeTime(i18n.language, 2, 1)}</b>
        </span>

        <span>
          <b>{getCustomRelativeTime(i18n.language, 23, 31)}</b>
        </span>
      </div>

      <div className={styles.examples}>
        <h2 className={styles.title}>intlNumber / intlCurrency</h2>

        <Trans i18nKey="intlNumber" values={{ val: 1000, minimumFractionDigits: 2 }} />

        <span>
          {t('intlCurrency', {
            localValue: 12345.67,
            formatParams: {
              localValue: { currency: 'rub', locale: 'ru' }
            },
          })}
        </span>
      </div>
    </div>
  );
};

export const Application = React.memo(AppComponent);
