import { Props } from "@/interfaces/interfaces";

const ContactDate: React.FC<Props> = ({ dictionary }) => {
  const kontaktDate = [
    { title: "🏠", value: "Berlin" },
    { title: "📞", value: "+491718090264" },
    { title: "✉️", value: "klausdw@outlook.com" },
    { title: `${dictionary.nationality}`, value: "🇩🇪 🇧🇷" },
  ];
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md">
      <div className="block-section p-7">
        <h2 className="mb-6 text-lg font-bold">{dictionary.contact}</h2>
        <div className="space-y-2">
          {kontaktDate.map(({ title, value }, index) => (
            <div className="flex items-center space-x-2" key={index}>
              <div className="text-sm text-gray-400">{title}</div>
              <div className="text-xs font-medium text-gray-600">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactDate;
