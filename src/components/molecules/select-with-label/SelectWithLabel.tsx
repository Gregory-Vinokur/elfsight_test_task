import React from 'react';
import styles from './SelectWithLabel.module.scss';
import Label from './../../atoms/label/Label';

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
    <Label>
      <select
        value={selectValue}
        className={styles.select}
        {...rest}
        onChange={onChange}
      >
        <option value="">{text}</option>
        {options.map(({ value, label }) => {
          return <option key={value}>{label}</option>;
        })}
      </select>
    </Label>
  );
};

export default SelectWithLabel;
