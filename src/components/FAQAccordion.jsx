import React from 'react'
import { withAccordion } from '../hoc/withAccordion'
const FAQAccordion = ({question, answer, index, openAccordion, toggleAccordion }) => {
  let isOpen = index===openAccordion;
  return (
        <div className="max-w-md mx-auto dark:bg-slate-800 bg-white shadow-md rounded-md p-4 mb-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleAccordion(index)}
        >
          <h3 className="mf:text-[11px] lg:text-base font-semibold dark:text-white text-black">{question}</h3>
          <svg
            className={`w-6 h-6 dark:fill-white fill-black transition-transform transform ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
        {isOpen && (
          <div className="mt-2">
            <p className="mf:text-[9px] lg:text-base text-gray-300 dark:text-slate-300 text-slate-700">{answer}</p>
          </div>
        )}
      </div>
  )
}

const FAQWithAccordion = withAccordion(FAQAccordion)
export default FAQWithAccordion;