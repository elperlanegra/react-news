import React, { useState } from "react";

const useSelect = (stateStart, option) => {
  // state del custom hook
  const [state, updateState] = useState("");

  const SelectNotices = () => (
    <select className="browser-default">
      <option value="">Selection</option>
    </select>
  );

  return [state, SelectNotices];
};

export default useSelect;
