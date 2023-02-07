import React from "react";
import { UserContext } from "../App";
import { LOCALE_DATA } from "../locale/locale-data";
import { convertLocaleStrings } from "../util/localeUtil";

// Store into global variable so the translations are generated only once when app the app starts (you can change this if you want different behaviour)
const locales = {
    en: convertLocaleStrings(LOCALE_DATA, "en"),
    de: convertLocaleStrings(LOCALE_DATA, "de"),
};

// React hook which returns a translation object
// Usage: 
// 1. Declare translation object
// > const T = useTranslation()
// 2. Use in render function
// > return (<div>{T.title}</div>);
export function useTranslation(overwriteLocale?: string) {

    // If you're using Next.js you can get the locale from the router object
    // let { locale } = useRouter();

    const locale = overwriteLocale ?? React.useContext(UserContext);

    if (locale == "en") return locales.en;
    if (locale == "de") return locales.de;

    return locales.en;
}