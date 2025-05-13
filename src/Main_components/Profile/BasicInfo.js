import React from "react";

const BasicInfo = ({ formData, handleFormChange }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        ["firstName", "First Name", "text"],
        ["middleName", "Middle Name", "text"],
        ["lastName", "Last Name", "text"],
        ["contactNumber", "Contact Number", "text"],
      ].map(([name, label, type]) => (
        <div key={name}>
          <label className="block text-sm font-medium mb-1">{label}</label>
          <input
            type={type}
            name={name}
            value={formData[name]}
            onChange={handleFormChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
      ))}
      <div>
        <label className="block text-sm font-medium mb-1">Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleFormChange}
          required
          className="w-full px-3 py-2 border rounded"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Birth Date</label>
        <input
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleFormChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Blood Group</label>
        <select
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleFormChange}
          required
          className="w-full px-3 py-2 border rounded"
        >
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Aadhaar Number</label>
        <input
          type="text"
          name="adharNumber"
          value={formData.adharNumber}
          readOnly
          className="w-full px-3 py-2 border bg-gray-100 rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          name="emailId"
          value={formData.emailId}
          readOnly
          className="w-full px-3 py-2 border bg-gray-100 rounded"
        />
      </div>
    </div>
  );
};

export default BasicInfo;
