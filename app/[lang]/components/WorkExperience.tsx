import { Props } from "@/interfaces/interfaces";
import { CalenderIcon, LocationIcon, WorkIcon } from "./Icons";

const WorkExperience: React.FC<Props & { start: number; end: number }> = ({
  dictionary,
  start,
  end,
}) => {
  const workExperience = dictionary.work;
  const myJobs = workExperience.slice(start, end);
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md">
      <div className="block-section p-7">
        <h1 className="mb-2 text-lg font-bold">{dictionary["work-h1"]}</h1>
        <div className="item-section mb-2">
          <div className="company-logo">
            <i className="bx bxl-twitter text-3xl"></i>
          </div>
          {myJobs.map(
            (
              { title, company, location, duration, website, techstack },
              index
            ) => (
              <div className="mb-5 w-full space-y-2" key={index}>
                <div className="border-b border-gray-200"></div>
                <div className="flex justify-between">
                  <div className="space-y-1.5">
                    <div className="font-medium">{title}</div>
                    <div className="flex space-x-5">
                      <div className="flex items-center text-sm font-light text-gray-600">
                        {company ? <WorkIcon /> : null}
                        <span className="pl-2">{company}</span>
                      </div>
                      <div className="flex items-center text-sm font-light text-gray-600">
                        {location ? <LocationIcon /> : null}
                        <span className="pl-2">{location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-auto space-y-2 sm:text-right">
                    <div className="my-auto flex items-center justify-center rounded-md bg-blue-200 p-1 text-sm text-gray-600 text-gray-600">
                      <CalenderIcon />
                      <span className="pl-2">{duration}</span>
                    </div>
                  </div>
                </div>
                <a
                  href={website}
                  rel="noreferrer"
                  target="_blank"
                  className="text-sm font-light text-blue-600"
                >
                  {website.replace("https://", "www.")}
                </a>
                <p className="whitespace-pre-line text-sm font-light text-gray-600">
                  <span className="text-xs font-bold">
                    Techstack: {techstack}
                  </span>
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
