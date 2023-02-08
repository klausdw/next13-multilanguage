import Image from "next/image";
import imgDe from "@/public/assets/flags/ger.png";
import imgEn from "@/public/assets/flags/usa.png";

const LanguageButton: React.FC<{ lang: string }> = ({ lang }) => {
  return (
    <div className="flex justify-end lg:w-[210mm] m-auto print:hidden">
      <div className="group inline-block justify-end relative z-10">
        <button className="py-2 px-4 rounded inline-flex gap-1 items-center">
          {lang === "de" ? (
            <a href="/de" rel="nofollow">
              <Image src={imgDe} alt="de" width={40} height={40} />
            </a>
          ) : (
            <a href="/en" rel="nofollow">
              <Image src={imgEn} alt="en" width={40} height={40} />
            </a>
          )}
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
        {lang === "en" ? (
          <a
            href="/de"
            rel="nofollow"
            className="absolute py-2 px-4 group-hover:block"
          >
            <Image src={imgDe} alt="de" width={40} height={40} />
          </a>
        ) : (
          <a
            href="/en"
            rel="nofollow"
            className="absolute py-2 px-4 group-hover:block"
          >
            <Image src={imgEn} alt="en" width={40} height={40} />
          </a>
        )}
      </div>
    </div>
  );
};

export default LanguageButton;
