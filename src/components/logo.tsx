import * as React from "react";
import Image from "next/image";
import { BookCheck } from "lucide-react";

export const Logo = () => {
  return (
      <div className="flex items-center justify-center marker:">
        <BookCheck className="w-6 h-6" />
        <p className="pl-2 text-xl font-bold">ExamManager</p>
      </div>
  );
};
