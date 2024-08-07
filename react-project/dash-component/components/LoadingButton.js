import React from 'react';
const LoadingButton = ({
  id,
  text,
  n_clicks,
  loading,
  setProps
}) => {
  const handleClick = () => {
    if (setProps) {
      setProps({
        n_clicks: (n_clicks || 0) + 1
      });
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    id: id,
    onClick: handleClick,
    disabled: loading
  }, loading ? 'Loading...' : text);
};
export default LoadingButton;