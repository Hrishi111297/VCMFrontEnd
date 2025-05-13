import React from "react";

const AddressInfo = ({ addressData, handleAddressChange }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        ["houseNumber", "House Number", "number"],
        ["street", "Street", "text"],
        ["city", "City", "text"],
        ["state", "State", "text"],
        ["pincode", "Pincode", "text"],
        ["country", "Country", "text"],
      ].map(([name, label, type]) => (
        <div key={name}>
          <label className="block text-sm font-medium mb-1">{label}</label>
          <input
            type={type}
            name={name}
            value={addressData[name]}
            onChange={handleAddressChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
      ))}
      <input type="hidden" name="userId" value={addressData.userId} />
    </div>
  );
};

export default AddressInfo;
