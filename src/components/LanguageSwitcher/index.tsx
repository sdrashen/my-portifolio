import React from "react";
import { useTranslation } from "react-i18next"

const languageOptions = [
  // {
  //   name: "Português",
  //   value: "ptBR",
  //   flag: "English"
  // }
  {
    name: "Englihs",
    value: "en",
    flag: "English"
  }
]

export const LanguageSwitcher = () => {

  const { t } = useTranslation();

  return (
    <div className="Language-switcher">
      <span>{t("English version")}</span>
    </div>
  )
}