import { LoaderCircle } from "lucide-react";
import React from "react";

const Loader = ({ design }) => {
  return (
    <div className={`flex items-center justify-center my-20 ${design}`}>
      <LoaderCircle className="animate-spin text-red-500 text-xl" />
    </div>
  );
};

export default Loader;
