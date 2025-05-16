import { ArrowBigRight } from "lucide-react";

type serviceProps = {
  title: string;
  description: string;
};

const ServiceCard = ({ title, description }: serviceProps) => {
  return (
    <div className="p-6 dark:bg-emerald-800 transition-all duration-500 shadow rounded-xl bg-gray-100 hover:bg-emerald-600 dark:hover:bg-emerald-800 hover:text-emerald-50 cursor-pointer">
      <h1 className="text-xl font-semibold mb-3">{title}</h1>
      <p>{description}</p>
      <div className="flex mt-6 text-xl font-medium transition-all duration-500">
        <span className="underline underline-offset-6">
            Learn More
        </span>
        <ArrowBigRight />
      </div>
    </div>
  );
};

export default ServiceCard;
