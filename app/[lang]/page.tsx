import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import DownloadButton from "@/app/[lang]/components/DownloadButton";
import Page from "./components/Page";
import Personal from "./components/Personal";
import ContactDate from "./components/ContactDate";
import LanguageButton from "./components/LanguageButton";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import WorkExperience from "./components/WorkExperience";
import Languages from "./components/Languages";
import Education from "./components/Education";

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
            <Skills />
          </div>
          <div className="space-y-5 lg:col-span-2">
            <AboutMe dictionary={dictionary} />
            <WorkExperience start={0} end={3} dictionary={dictionary} />
          </div>
        </div>
      </Page>
      <Page>
        <div className="grid gap-5 lg:grid-cols-3">
          <Languages dictionary={dictionary} />
          <div className="space-y-5 lg:col-span-2">
            <WorkExperience start={3} end={4} dictionary={dictionary} />
            <Education dictionary={dictionary} />
          </div>
        </div>
      </Page>
    </div>
  );
}
