// LangType describes a locale object like so: {de:string, en:string}
type LangType<Lang extends string> = { [k in Lang]: string }

// LangTypeFn is a LangType or a function, which returns a LangType
type LangTypeFn<Lang extends string> = LangType<Lang> | ((...x: any) => LangType<Lang>)

// Convert a translation type to a specific language
type LocaleStringConversion<Lang extends string, S extends Record<any, LangTypeFn<Lang>>> = {
    [x in keyof S]: S[x] extends ((...x: infer ARGS) => { [k in Lang]: infer Res })
    ? (...x: ARGS) => Res : S[x] extends Record<Lang, any>
    ? S[x][Lang] : never
};

/**
 * Generates a translation object for a specific language
 * @param strings - translation object
 * @param lang - Language to convert to
 * @returns - translation object for the specific language
 */
export function convertLocaleStrings<Lang extends string, S extends Record<any, LangTypeFn<Lang>>> (strings: S, lang: Lang): LocaleStringConversion<Lang, S> {

    let res: any = {};

    for (let [key, value] of Object.entries(strings)) {
      if (typeof value === "object") {
          res[key] = value[lang];
      } else if (typeof value === "function") {
          res[key] = (...xs: any[]) => {
              // @ts-ignore
              return value(...xs)[lang]
          }
      } else {
          throw new Error("convertStrings: " + typeof value); // Add your own error handling
      }
    }
    return res;
}