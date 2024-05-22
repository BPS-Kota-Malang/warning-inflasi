import { useState } from 'react';
import PropTypes from 'prop-types';

const Lookerstudio = ({ initialUrl, options }) => {
  const [iframeSrc, setIframeSrc] = useState(initialUrl);

  const handleSelectChange = (event) => {
    setIframeSrc(event.target.value);
  };

  return (
    <div className="h-full flex flex-col">
      <select
        onChange={handleSelectChange}
        className="m-2 z-10 p-2 border rounded"
      >
        {options.map((option, index) => (
          <option key={index} value={option.url}>
            {option.label}
          </option>
        ))}
      </select>

      <iframe
        src={iframeSrc}
        title="Dynamic Iframe"
        className="flex-1 border-none"
      />
    </div>
  );
};

Lookerstudio.propTypes = {
  initialUrl: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Lookerstudio;
