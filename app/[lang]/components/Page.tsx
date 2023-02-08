import styles from "@/styles/Page.module.css";

type Props = {
  children: React.ReactNode;
};

const Page = ({ children }: Props) => (
  <div className="relative m-auto mb-4 p-8 h-[297mm] w-[210mm] drop-shadow-sm bg-white ">
    {children}
  </div>
);

export default Page;
