"use client";
import React, { useState } from "react";

import QuestionType from "@/components/QuestionType";
import AddQuestion from "@/components/AddQuestion";
import PreviewPage from "@/components/PreviewPage";

const page = () => {
  const [isAddQuestionPageShow, setisAddQuestionPageShow] =
    useState<boolean>(false);
  const [ispreviewPageShow, setisPreviewPageShow] = useState<boolean>(false);
  const [ischoicePageOpen, setischoicePageOpen] = useState<boolean>(true);
  const [activeLesson, setActiveLesson] = useState<string>("matematik");
  const [activeClass, setActiveClass] = useState<string>("9");
  const [activeSubjects, setActiveSubjects] = useState<string>("Mantık");
  const [activeChapter, setActiveChapter] = useState<string>("Sayılar ve Cebir");
  const [activedifficulty, setDifficulty] = useState<string>("Kolay");
  const [preview, setPreview] = useState<File | null>(null);
  return (
    <main>
      {isAddQuestionPageShow ? (
        <AddQuestion
          ischoicePageOpen={ischoicePageOpen}
          setischoicePageOpen={setischoicePageOpen}
          isAddQuestionPageShow={isAddQuestionPageShow}
          setisAddQuestionPageShow={setisAddQuestionPageShow}
          setisPreviewPageShow={setisPreviewPageShow}
          preview={preview}
          setPreview={setPreview}
        />
      ) : ispreviewPageShow ? (
        <PreviewPage
          setischoicePageOpen={setischoicePageOpen}
          isAddQuestionPageShow={isAddQuestionPageShow}
          setisAddQuestionPageShow={setisAddQuestionPageShow}
          setisPreviewPageShow={setisPreviewPageShow}
          classes={activeClass}
          subject={activeSubjects}
          lesson={activeLesson}
          chapter={activeChapter}
          difficulty={activedifficulty}
          preview={preview}
        />
      ) : (
        <QuestionType
          setisAddQuestionPageShow={setisAddQuestionPageShow}
          activeClass={activeClass}
          activeChapter={activeChapter}
          activeLesson={activeLesson}
          activeSubjects={activeSubjects}
          activedifficulty={activedifficulty}
          setActiveChapter={setActiveChapter}
          setActiveClass={setActiveClass}
          setActiveLesson={setActiveLesson}
          setActiveSubjects={setActiveSubjects}
          setDifficulty={setDifficulty}
        />
      )}
    </main>
  );
};

export default page;
