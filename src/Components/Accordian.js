import { useState } from "react";

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-md mx-auto h-32 mt-10 mb-40">
      <div className="shadow-lg rounded">
        {["Courses", "Batches", "Test Series"].map((title, index) => (
          <div key={index}>
            <div
              className="cursor-pointer p-4 border-b bg-purple-600 hover:bg-purple-500 h-11 rounded-sm "
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-sm  text-gera font-semibold">{title}</h3>
            </div>
            {openIndex === index && (
              <div className="p-4 bg-gera rounded-sm text-">
                <p className="text-xs">
                  This is the description for {title}. You can add more details
                  here.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
