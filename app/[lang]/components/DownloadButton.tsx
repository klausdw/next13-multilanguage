import { Locale } from "@/i18n-config";
import { Props } from "@/interfaces/interfaces";

const DownloadButton: React.FC<Props & { lang: Locale }> = ({
  dictionary,
  lang,
}) => {
  return (
    <div className="flex justify-center print:hidden">
      <a
        href={`${lang}/api/pdf`}
        download="klaus_wagner-CV.pdf"
        rel="nofollow"
        className="bg-blue-600 text-white pt-2 px-8 p-4 rounded-b-xl"
      >
        {dictionary.download}
      </a>
    </div>
  );
};

export default DownloadButton;
