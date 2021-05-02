import React, { useState } from "react";

const useSelect = (stateStart, option) => {
  // state del custom hook
  const [state, updateState] = useState(stateStart);

  const SelectNotices = () => (
    <select
      className="browser-default"
      value={state}
      onChange={(e) => updateState(e.target.value)}
    >
      {option.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );

  return [state, SelectNotices];
};

export default useSelect;
