import React from "react";

const GuardianInfo = ({ guardianData, handleGuardianChange }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        ["name", "Name", "text"],
        ["contactNumber", "Contact Number", "text"],
        ["relationship", "Relationship", "text"],
      ].map(([name, label, type]) => (
        <div key={name}>
          <label className="block text-sm font-medium mb-1">{label}</label>
          <input
            type={type}
            name={name}
            value={guardianData[name]}
            onChange={handleGuardianChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
      ))}
      <input type="hidden" name="userId" value={guardianData.userId} />
    </div>
  );
};

export default GuardianInfo;
