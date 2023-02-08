import { Props } from "@/interfaces/interfaces";
import { WorkIcon, LocationIcon, CalenderIcon } from "./Icons";

const Education: React.FC<Props> = ({ dictionary }) => {
  const education = dictionary.education;
  return (
    <div className="space-y-5 lg:col-span-2">
      <div className="overflow-hidden rounded-xl bg-white shadow-md">
        <div className="block-section p-7">
          <h2 className="text-lg font-bold">{dictionary["education-title"]}</h2>
          {education.map(
            (
              { title, institute, location, duration, href, website },
              index
            ) => (
              <div className="w-full space-y-4 pb-4" key={index}>
                <div className="border-b border-gray-200"></div>
                <div className="flex justify-between">
                  <div className="space-y-1.5">
                    <div className="font-medium">{title}</div>
                    <div className="flex space-x-5">
                      <div className="flex items-center text-sm font-light text-gray-600">
                        <WorkIcon />
                        <span className="pl-2">{institute}</span>
                      </div>
                      <div className="flex items-center text-sm font-light text-gray-600">
                        <LocationIcon />
                        <span className="pl-2">{location}</span>
                      </div>
                    </div>
                  </div>
                  <div className=" mt-auto space-y-2 sm:text-right">
                    <div className="my-auto flex items-center justify-center rounded-md bg-blue-200 p-1 text-sm text-gray-600 text-gray-600">
                      <CalenderIcon />
                      <span className="pl-2">{duration}</span>
                    </div>
                  </div>
                </div>
                <a
                  href={href}
                  rel="noreferrer"
                  target="_blank"
                  className="text-sm font-light text-blue-600"
                >
                  {website}
                </a>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Education;
