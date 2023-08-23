import { PreviewPageProps } from "@/types";
import Image from "next/image";
import React from "react";
import SquareButton from "./SquareButton";

const PreviewPage = ({
  isAddQuestionPageShow,
  setisAddQuestionPageShow,
  setisPreviewPageShow,
  classes,
  subject,
  chapter,
  lesson,
  difficulty,
  preview,
}: PreviewPageProps) => {
  return (
    <div className="w-2/3 ml-auto mr-auto border mt-[5%] mb-[5%] flex-col justify-start">
      <div className="w-full h-24 border-b pl-10 font-bold text-2xl flex justify-between items-center uppercase">
        Yeni Soru
      </div>
      <div className="flex justify-start items-center h-auto w-full border-b">
        <Image
          src={preview === null ? "" : URL.createObjectURL(preview)}
          alt="Preview image"
          className="object-cover ml-auto mr-auto"
          width={450}
          height={450}
        />
        <div className="flex flex-col justify-start pl-5 space-y-5">
          <SquareButton title={classes} containerStyles="square-btn-m active" />
          <SquareButton title={lesson} containerStyles="square-btn-m active" />
          <SquareButton title={chapter} containerStyles="square-btn-m active" />
          <SquareButton title={subject} containerStyles="square-btn-m active" />
          <SquareButton
            title={difficulty}
            containerStyles="square-btn-m active"
          />
        </div>
      </div>
      <div className="flex justify-start items-center space-x-5 h-20 pl-5 relative">
        <SquareButton
          title="Image Upload"
          containerStyles="square-btn-m"
          handleClick={() => {
            setisPreviewPageShow(false);
            setisAddQuestionPageShow(true);
          }}
        />
        <SquareButton
          title="Seçenekleri Ayarla"
          containerStyles="square-btn-l"
          handleClick={() => setisAddQuestionPageShow(true)}
        />
        <div className="absolute right-10">
          <SquareButton title="Tamamla" containerStyles="square-btn-s" />
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
