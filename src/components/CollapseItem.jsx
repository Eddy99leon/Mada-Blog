import React from 'react'

const CollapseItem = ({ question, reponse }) => {
  return (
        <div className="py-5">
            <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span><span className=" text-lime-500 font-bold">*</span>{question}</span>
                    <span className="transition group-open:rotate-180">
                        <svg className="text-lime-600" fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                    </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    {reponse}
                </p>
            </details>
        </div>
  )
}

export default CollapseItem