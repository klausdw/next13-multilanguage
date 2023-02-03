import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import DownloadButton from "@/app/[lang]/components/DownloadButton";
import Page from "./components/Page";
import Personal from "./components/Personal";
import ContactDate from "./components/ContactDate";
import LanguageButton from "./components/LanguageButton";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <DownloadButton dictionary={dictionary} />
      <LanguageButton lang={lang} />
      <Page>
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="space-y-5">
            <Personal dictionary={dictionary} />
            <ContactDate dictionary={dictionary} />
          </div>
        </div>
      </Page>
    </div>
  );
}
