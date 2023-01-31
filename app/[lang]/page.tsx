import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import Image from "next/image";
import imgDe from "@/public/assets/flags/de.jpg";
import imgEn from "@/public/assets/flags/en.jpg";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <h1>{dictionary.name}</h1>
    </div>
  );
}
