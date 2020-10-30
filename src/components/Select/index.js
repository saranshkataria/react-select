import { useEffect, useRef, useState } from 'react';
import { ReactComponent as DownIcon } from './down.svg';
import './Select.css';

const Select = ({
  placeholder,
  options,
  onChange,
  theme = {
    selectContainerClassNames: '',
    listItemClassnames: '',
    inputClassNames: '',
    optionsContainerClassNames: '',
  },
}) => {
  const [showOptionsList, setShowOptionsList] = useState(false);
  const [inputText, setInputText] = useState('');
  const node = useRef();

  useEffect(() => {
    if (showOptionsList) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showOptionsList]);

  const handleOptionClick = (option) => {
    setShowOptionsList(false);
    setInputText(option.title || option);
    onChange(option);
  };

  const handleClickOutside = (e) => {
    if (node && node.current && node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setShowOptionsList(false);
  };

  return (
    <div
      ref={node}
      className="select-container"
      onClick={() => setShowOptionsList(!showOptionsList)}
    >
      <div className={theme.selectContainerClassNames || 'custom-select'}>
        <input
          type="text"
          className={theme.inputClassNames || 'select-input'}
          value={inputText}
          placeholder={placeholder}
          onChange={(event) => setInputText(event.target.value)}
        />
        <span className="down-icon">
          <DownIcon />
        </span>
        <ul
          className={`${
            theme.optionsContainerClassNames
              ? theme.optionsContainerClassNames
              : 'custom-select-options'
          } ${showOptionsList ? '' : 'hidden'} `}
        >
          {options
            .filter((option) => {
              let currentValue = option.title || option;
              if (!currentValue || typeof currentValue !== 'string') {
                throw Error(
                  'Input to Select component not specified in expected format'
                );
              }
              return currentValue
                .toLowerCase()
                .includes(inputText.toLowerCase());
            })
            .map((option) => {
              return (
                <li
                  data-name={option.title}
                  key={option.id || option}
                  onClick={() => handleOptionClick(option)}
                  className={theme.listItemClassnames || 'blue-bg'}
                >
                  {option.title || option}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Select;
