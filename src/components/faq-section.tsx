"use client";

import { useState } from "react";
import FrameBorder from "@/components/common/frame-border";
import { FaqCollapsePanel } from "@/components/faqs/collapse-panel";
import {
  FaqCloseIcon,
  FaqMinusIcon,
  FaqPlusIcon,
} from "@/components/faqs/icons";

import { FAQ_DATA } from "@/data/faq";

export function FaqSection() {
  const [openCategoryId, setOpenCategoryId] = useState<string | null>(null);
  const [openQuestionId, setOpenQuestionId] = useState<string | null>(null);

  const toggleCategory = (categoryId: string) => {
    if (openCategoryId === categoryId) {
      setOpenCategoryId(null);
      setOpenQuestionId(null);
      return;
    }
    setOpenCategoryId(categoryId);
    setOpenQuestionId(null);
  };

  const toggleQuestion = (questionId: string) => {
    setOpenQuestionId((current) => (current === questionId ? null : questionId));
  };

  return (
    <section className="w-full bg-white text-[#1a1a1a]">
      <FrameBorder height={120} />
      <div className="mx-auto flex flex-col items-center border-b border-[#E4E7E9] py-15 md:py-0">
        <div className="flex w-full flex-col items-center gap-4 border-l border-r border-[#E4E7E9] text-center md:max-w-[1360px] md:px-8 md:py-10">
          <p className="rounded-full border border-[#C7D1D5] px-1.5 py-0.25 font-mono text-[11px] leading-[18px] font-normal uppercase text-[#9AAEB5]">
            Your questions
          </p>
          <h2 className="text-balance text-3xl font-normal leading-tight tracking-tight sm:text-4xl md:text-5xl md:leading-[1.1]">
            Frequently asked{" "}
            <span className="font-normal text-[#9AAEB5]">questions</span>
          </h2>
          <p className="max-w-[420px] text-pretty text-base leading-relaxed text-[#515255] sm:text-[16px]">
            If you have any further questions, please use the chat box in the
            bottom right or contact us by email at{" "}
            <a
              href="mailto:hello@qoves.com"
              className="text-[#1a1a1a] underline decoration-[#C7D1D5] underline-offset-2"
            >
              hello@qoves.com
            </a>
          </p>
        </div>

        <div className="flex w-full justify-center border-l border-r border-[#E4E7E9] p-3 md:max-w-[1360px] md:p-6 md:pb-10">
          <div className="mx-auto w-full max-w-[1080px] overflow-hidden rounded-xl bg-[#F9FAFB] md:w-[1080px]">
            {FAQ_DATA.map((category, index) => {
              const isCategoryOpen = openCategoryId === category.id;
              const isLast = index === FAQ_DATA.length - 1;

              return (
                <div
                  key={category.id}
                  className={`p-1 ${isLast ? "" : "border-b border-[#E4E7E9]/80"}`}
                >
                  <div
                    className={`transition-[background] rounded-xl duration-300 ease-out ${
                      isCategoryOpen
                        ? "bg-gradient-to-b from-[#6d7f85] to-[#95a8ad] shadow-lg"
                        : ""
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleCategory(category.id)}
                      className={`flex w-full items-center justify-between rounded-xl text-left transition-colors duration-200 ease-out sm:px-7 px-6 py-6 ${
                        isCategoryOpen
                          ? ""
                          : "bg-[#F9FAFB] hover:bg-[#F3F4F6]"
                      }`}
                      aria-expanded={isCategoryOpen}
                    >
                      <span
                        className={`text-base font-medium sm:text-lg ${
                          isCategoryOpen ? "text-white" : "text-[#1a1a1a]"
                        }`}
                      >
                        {category.title}
                      </span>
                      {isCategoryOpen ? (
                        <FaqCloseIcon className="text-white/90" />
                      ) : (
                        <FaqPlusIcon className="text-[#9AAEB5]" />
                      )}
                    </button>

                    <FaqCollapsePanel open={isCategoryOpen}>
                      <div className="flex flex-col px-3 sm:px-4 pb-3">
                        {category.questions.map((item, questionIndex) => {
                          const isQuestionOpen = openQuestionId === item.id;
                          const isFirstQuestion = questionIndex === 0;
                          const isLastQuestion =
                            questionIndex === category.questions.length - 1;

                          return (
                            <div
                              key={item.id}
                              className={
                                `bg-white/10 ${isFirstQuestion 
                                    ? "rounded-t-xl" :
                                    isLastQuestion
                                      ? "rounded-b-xl border-t border-white/15"
                                      : "border-t border-white/15"
                                }`
                              }
                            >
                              <button
                                type="button"
                                onClick={() => toggleQuestion(item.id)}
                                className={`flex w-full items-center justify-between gap-4 px-3 py-4 text-left transition-colors duration-200 ease-out ${isQuestionOpen ? "bg-white/10" : "hover:bg-white/10"} ${isFirstQuestion ? "rounded-t-xl" : isLastQuestion ? "rounded-b-xl" : ""}`}
                                aria-expanded={isQuestionOpen}
                              >
                                <span className="text-base font-medium text-white sm:text-[16px]">
                                  {item.question}
                                </span>
                                {isQuestionOpen ? (
                                  <FaqMinusIcon className="shrink-0 text-white" />
                                ) : (
                                  <FaqPlusIcon className="shrink-0 text-white/90" />
                                )}
                              </button>

                              <FaqCollapsePanel open={isQuestionOpen}>
                                <div className="px-2 pb-4 sm:px-3 sm:pb-5 bg-white/10">
                                  <p className="text-sm leading-relaxed text-white/90 sm:text-[15px]">
                                    {item.answer}
                                  </p>
                                </div>
                              </FaqCollapsePanel>
                            </div>
                          );
                        })}
                      </div>
                    </FaqCollapsePanel>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <FrameBorder height={120} />
    </section>
  );
}
