import { getUserLocale } from '@/app/service/locale';
import {getRequestConfig} from 'next-intl/server';
import { useState } from 'react';
 
export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = await getUserLocale();
  return {
    locale,
    messages: (await import(`../public/translation/${locale}.json`)).default
  };
});