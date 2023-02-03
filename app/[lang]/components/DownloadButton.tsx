import { Props } from "@/interfaces/interfaces";

const DownloadButton: React.FC<Props> = ({ dictionary }) => {
  return (
    <div className="flex justify-center print:hidden">
      <a
        href="/api/pdf"
        download="cv.pdf"
        className="bg-blue-600 text-white pt-2 px-8 p-4 rounded-b-xl"
      >
        {dictionary.download}
      </a>
    </div>
  );
};

export default DownloadButton;
