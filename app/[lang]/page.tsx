import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import Image from "next/image";
import imgDe from "@/public/assets/flags/de.jpg";
import imgEn from "@/public/assets/flags/en.jpg";
import DownloadButton from "@/app/[lang]/components/DownloadButton";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <DownloadButton dictionary={dictionary} />
    </div>
  );
}
