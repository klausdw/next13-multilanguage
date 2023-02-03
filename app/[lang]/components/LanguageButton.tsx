import Image from "next/image";
import imgDe from "@/public/assets/flags/de.jpg";
import imgEn from "@/public/assets/flags/en.jpg";

const LanguageButton: React.FC<{ lang: string }> = ({ lang }) => {
  return (
    <div className="absolute top-4 right-8">
      {lang === "de" ? (
        <Image src={imgDe} alt="de" width={40} height={40} />
      ) : (
        <Image src={imgEn} alt="en" width={40} height={40} />
      )}
    </div>
  );
};

export default LanguageButton;
