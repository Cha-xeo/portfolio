import { Locale } from "@/i18n/config";
import { useTransition } from "react";
import { setUserLocale } from "../service/locale";
import { useTranslations } from "next-intl";

export default function LanguageSwitcher({defaultValue}: {defaultValue: string}) {
  const [isPending, startTransition] = useTransition();
  const t = useTranslations('Lang');
  function handleChange (event: React.ChangeEvent<HTMLSelectElement>) {
    const locale = event.target.value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  };

  return (
    <div >
      <select className="bg-transparent md:bg-black text-white" onChange={handleChange} defaultValue={defaultValue}>
        <option value='en' > {t('english')}</option>
        <option value='fr' > {t('french')}</option>
      </select>
    </div>
  );
}