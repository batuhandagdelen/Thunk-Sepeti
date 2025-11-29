import { OctagonAlert } from "lucide-react";
import React from "react";

const Error = ({ message }) => {
  return (
    <div className="text-center flex flex-col items-center gap-5">
      <OctagonAlert className="size-10 text-red-500" />

      <h1 className="text-lg font-semibold">Üzgünüz Bir Sorun Oluştu...</h1>

      <h3 className="text-red-500">{message}</h3>
    </div>
  );
};

export default Error;
