import React from "react";

const EducationInfo = ({ educationData, handleEducationChange, handleAddEducation, handleRemoveEducation }) => {
  return (
    <div>
      <div className="space-y-4">
        {educationData.map((edu, index) => (
          <div key={index} className="border p-4 rounded shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                ["degree", "Degree", "text"],
                ["fieldOfStudy", "Field of Study", "text"],
                ["universityName", "University Name", "text"],
                ["startYear", "Start Year", "number"],
                ["endYear", "End Year", "number"],
                ["grade", "Grade", "text"],
              ].map(([name, label, type]) => (
                <div key={name}>
                  <label className="block text-sm font-medium mb-1">{label}</label>
                  <input
                    type={type}
                    name={`${name}_${index}`}
                    value={edu[name] || ""}
                    onChange={(e) => handleEducationChange(e, index)}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
              ))}

              <div className="col-span-2">
                <label className="block text-sm font-medium mb-1">Highest Degree</label>
                <input
                  type="checkbox"
                  name={`highest_${index}`}
                  checked={edu.highest || false}
                  onChange={(e) => handleEducationChange(e, index)}
                  className="w-full h-4"
                />
                <span className="ml-2 text-sm">Mark as highest degree</span>
              </div>
            </div>
            {educationData.length > 1 && (
              <button
                type="button"
                onClick={() => handleRemoveEducation(index)}
                className="mt-2 text-red-500"
              >
                Remove Education
              </button>
            )}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={handleAddEducation}
        className="mt-4 w-full py-2 bg-blue-600 text-white rounded"
      >
        Add More Education
      </button>
    </div>
  );
};

export default EducationInfo;
