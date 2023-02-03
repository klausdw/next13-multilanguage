import { Props } from "@/interfaces/interfaces";
import Image from "next/image";
import applicationPicture from "../../../public/bewerbungsbild.jpg";

const Personal: React.FC<Props> = ({ dictionary }) => {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md">
      <div className="mx-auto h-32 w-32 bg-[url('/cv-background.jpg')] bg-cover"></div>
      <div className="relative bg-white p-7 pt-14">
        <Image
          src={applicationPicture}
          alt="profil"
          className="absolute -mt-16 h-16 rounded-xl border border-gray-200"
          width={60}
          height={100}
        />
        <div className="text mb-1 font-semibold">{dictionary.name}</div>
        <div className="mb-4 text-sm text-gray-400">{dictionary.dev}</div>
        <div className="flex justify-between divide-x rounded-lg bg-blue-600 p-2 px-4 text-white">
          <button className="">
            <a href="/api/pdf" download="cv.pdf">
              {dictionary["download-small"]}
            </a>
          </button>
          <button className="pl-2">
            <a href="/api/pdf" download="cv.pdf">
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
