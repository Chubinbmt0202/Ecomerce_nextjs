import React, { useState } from 'react';

type CheckboxColorProps = {
  name: string;
  colors: string[];
  nameValues: string[];
  onChange?: (value: string) => void;
};

const CheckboxColor: React.FC<CheckboxColorProps> = ({
  name,
  colors,
  nameValues,
  onChange,
}) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const onSelect = (selectedValue: string) => {
    if (onChange) {
      setSelectedColor(selectedValue);
      onChange(selectedValue);
    }
  };

  return (
    <div className="flex space-x-4">
      {colors.map((color, index) => (
        <label
          key={nameValues[index]}
          htmlFor={`${name}-${index}`}
          className={`flex items-center cursor-pointer space-x-2 ${
            selectedColor === nameValues[index] ? 'ring ring-offset-1' : ''
          }`}
        >
          <input
            onChange={() => onSelect(nameValues[index])}
            value={color}
            data-name={nameValues[index]}
            name={name}
            type="checkbox"
            id={`${name}-${index}`}
            className="hidden"
          />
          <span className={`w-6 h-6 rounded-full bg-${color} border border-gray-300`} />
        </label>
      ))}
    </div>
  );
};

export default CheckboxColor;
