import { useCallback, useMemo, useState } from 'react'
import { LanguageContext } from './context.jsx'
import es from './es.js'
import en from './en.js'

export { useLanguage } from './context.jsx'

const translations = { es, en }
const STORAGE_KEY = 'namchac-lang'

function getInitialLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'es' || stored === 'en') return stored
  } catch {}
  return 'es'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  const toggle = useCallback(() => {
    setLang((prev) => {
      const next = prev === 'es' ? 'en' : 'es'
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {}
      return next
    })
  }, [])

  const t = useCallback(
    (path) => {
      const keys = path.split('.')
      let value = translations[lang]
      for (const key of keys) {
        value = value?.[key]
      }
      return value ?? path
    },
    [lang],
  )

  const value = useMemo(() => ({ lang, t, toggle }), [lang, t, toggle])

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}
