import { Props } from "@/interfaces/interfaces";

const Languages: React.FC<Props> = ({ dictionary }) => {
  const languages = [
    { language: dictionary.languages.de, value: "100%" },
    { language: dictionary.languages.pt, value: "100%" },
    { language: dictionary.languages.es, value: "100%" },
    { language: dictionary.languages.en, value: "70%" },
  ];
  return (
    <div className="space-y-5">
      <div className="shadow-md rounded-xl overflow-hidden bg-white">
        <div className="p-7 block-section">
          <h1 className="text-lg font-bold mb-6">{dictionary.languages.h1}</h1>
          {languages.map(({ language, value }, index) => (
            <div className="text-gray-600" key={index}>
              {language}
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-200">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: value }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Languages;
