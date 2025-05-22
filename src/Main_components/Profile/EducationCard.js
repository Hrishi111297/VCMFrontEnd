const EducationCard = ({ education, isEditing, onChange }) => {
  return (
    <div className="p-2 bg-white rounded-lg mt-2 shadow-md w-full ">
      <div className="space-y-2">
        {[
          { label: "Degree", name: "degree" },
          { label: "Field of Study", name: "fieldOfStudy" },
          { label: "University Name", name: "universityName" },
          { label: "Start Year", name: "startYear", type: "number" },
          { label: "End Year", name: "endYear", type: "number" },
          { label: "Grade", name: "grade" },
        ].map(({ label, name, type = "text" }) => (
          <div key={name} className="flex items-center justify-between">
            <label className="block text-xs text-gray-700 w-1/3">{label}</label>
            {isEditing ? (
              <input
                type={type}
                name={name}
                value={education[name]}
                onChange={(e) => onChange(e, education.id)}
                className="mt-1 block w-2/3 px-2 py-1 text-xs border border-gray-300 rounded-md"
              />
            ) : (
              <p className="w-2/3 mt-1 text-gray-700 text-xs">
                {education[name] || "No data"}
              </p>
            )}
          </div>
        ))}

        <div className="flex items-center justify-between">
          <label className="block text-xs text-gray-700 w-1/3">
            Highest Education
          </label>
          {isEditing ? (
            <input
              type="checkbox"
              name="highest"
              checked={education.highest}
              onChange={(e) => onChange(e, education.id)}
              className="mt-1"
            />
          ) : (
            <p className="w-2/3 mt-1 text-gray-700 text-xs">
              {education.highest ? "Yes" : "No"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default EducationCard;
