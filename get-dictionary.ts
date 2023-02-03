import 'server-only'
import type { Locale } from './i18n-config'

import dictionary from "./dictionaries/de.json";

export type Dictionary = typeof dictionary

export type DictionaryType = Dictionary | Promise<Dictionary>

const dictionaries = {
    en: () => import('./dictionaries/en.json').then((module) => module.default),
    de: () => import('./dictionaries/de.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale): Promise<DictionaryType> =>
    dictionaries[locale]().then((dictionary) => dictionary);
