import { Props } from "@/interfaces/interfaces";
import Image from "next/image";
import applicationPicture from "@/public/bewerbungsbild.jpg";
import { Locale } from "@/i18n-config";

const Personal: React.FC<Props & { lang: Locale }> = ({ dictionary, lang }) => {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md">
      <div className="flex flex-col mx-auto bg-white p-7 pt-20 print:hidden">
        <Image
          src={applicationPicture}
          alt="profil"
          width={90}
          className="mb-2 rounded-xl border border-gray-200"
        />
        <div className="text mb-1 font-semibold">{dictionary.name}</div>
        <div className="mb-4 text-sm text-gray-400">{dictionary.dev}</div>
        <div className="flex justify-between divide-x rounded-lg bg-blue-600 p-2 px-4 text-white print:hidden">
          <a
            href={`${lang}/api/pdf`}
            download="klaus_wagner-CV.pdf"
            rel="nofollow"
            className="w-full"
          >
            {dictionary["download-small"]}
          </a>
          <button className="pl-2">
            <a
              href={`${lang}/api/pdf`}
              rel="nofollow"
              download="klaus_wagner-CV.pdf"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                ></path>
              </svg>
            </a>
          </button>
        </div>
      </div>
      <div className="hidden mb-24 mx-auto bg-white p-7 print:flex print:flex-col">
        <Image
          src={applicationPicture}
          alt="profil"
          width={90}
          className="mb-2 rounded-xl border border-gray-200"
        />
        <div className="text mb-1 font-semibold">{dictionary.name}</div>
        <div className="mb-4 text-sm text-gray-400">{dictionary.dev}</div>
        <div className="flex justify-between divide-x rounded-lg bg-blue-600 p-2 px-4 text-white print:hidden">
          <a
            href={`${lang}/api/pdf`}
            rel="nofollow"
            download="cv.pdf"
            className="w-full"
          >
            {dictionary["download-small"]}
          </a>
          <button className="pl-2">
            <a
              href={`${lang}/api/pdf`}
              rel="nofollow"
              download="klaus_wagner-CV.pdf"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                ></path>
              </svg>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Personal;
