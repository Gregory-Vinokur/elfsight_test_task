import React from 'react';
import styles from './SelectWithLabel.module.scss';

type SelectProps = {
  options: SelectOption[];
  text?: string;
  selectValue: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

type SelectOption = {
  value: string | number;
  label: string;
};

const SelectWithLabel = ({
  options,
  text,
  onChange,
  selectValue,
  ...rest
}: SelectProps) => {
  return (
    <label className={styles.dropdown}>
      <select
        value={selectValue}
        title=""
        className={styles.dropdown__select}
        {...rest}
        onChange={onChange}
      >
        <option value="">
          {text}
          {selectValue
            ? selectValue.split('')[0].toUpperCase() + selectValue.slice(1)
            : ''}
        </option>
        {options.map(({ value, label }) => {
          return <option key={value}>{label}</option>;
        })}
      </select>
    </label>
  );
};

export default SelectWithLabel;
