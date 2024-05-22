// components/Dropdown.js
import { useEffect, useState } from 'react';

const Dropdown = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchLinks = async () => {
      const res = await fetch('/json/link.js');
      const data = await res.json();
      setLinks(data);
    };

    fetchLinks();
  }, []);

  return (
    <select>
      {links.map((link, index) => (
        <option key={index} value={link.url}>
          {link.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
