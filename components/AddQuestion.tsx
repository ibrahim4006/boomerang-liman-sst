"use client";
import Image from "next/image";
import React, { useState } from "react";
import SetQuestionChoices from "./SetQuestionChoices";
import { AddQuestionProps } from "@/types";
import SquareButton from "./SquareButton";

const AddQuestion = ({
  isAddQuestionPageShow,
  setisAddQuestionPageShow,
  setisPreviewPageShow,
  ischoicePageOpen,
  setischoicePageOpen,
  preview,
  setPreview,
}: AddQuestionProps) => { 

  const handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setPreview(event.target.files[0]);
  };

  return (
    <>
      <div className="w-2/3 ml-auto mr-auto border mt-[5%] mb-[5%] flex-col justify-start">
        <div className="w-full h-24 border-b pl-10 font-bold text-2xl flex justify-between items-center uppercase">
          Yeni Soru
          {isAddQuestionPageShow && (
            <Image
              src="/denemeboomerang.svg"
              alt="Boomerang Ok"
              className="rotate-90 cursor-pointer mr-5"
              width={45}
              height={45}
              onClick={() => setisAddQuestionPageShow(false)}
            />
          )}
        </div>
        {ischoicePageOpen ? (
          <div className="flex-col space-y-5 justify-start items-center h-auto w-full border-b pt-5 ">
            <Image
              src={preview === null ? "" : URL.createObjectURL(preview)}
              alt="Preview image"
              className="object-cover ml-auto mr-auto"
              width={450}
              height={450}
            />
            <form>
              <input
                type="file"
                id="file"
                onChange={handleChangeImage}
                className="ml-[35%] mb-5"
              />
              {/* <label htmlFor="file">
            <span>upload image</span>
            <img
              src="https://img.icons8.com/parakeet/2x/add-image.png"
              alt=""
            />
          </label> */}
            </form>
          </div>
        ) : (
          <SetQuestionChoices preview={preview}/>
        )}
        <div className="flex justify-start items-center space-x-5 h-20 pl-5 relative">
          <SquareButton
            title="Image Upload"
            containerStyles={ischoicePageOpen ? "square-btn-m active" : "square-btn-m"}
            handleClick={() => {setischoicePageOpen(true); setisPreviewPageShow(false);}}
          />
          <SquareButton
            title="Seçenekleri Ayarla"
            containerStyles={!ischoicePageOpen ? "square-btn-l active" : "square-btn-l"}
            handleClick={() => {setischoicePageOpen(false); setisPreviewPageShow(false);}}
          />
          <div className="absolute right-10">
            <SquareButton
              title="Oluştur"
              containerStyles="square-btn-s"
              handleClick={() => {
                setisPreviewPageShow(true);
                setisAddQuestionPageShow(false);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddQuestion;
