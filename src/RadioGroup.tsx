import React from "react";
import styles from "./RadioGroup.module.css";

type Option = {
  value: string;
  label: string;
};

type RadioGroupProps = {
  groupName: string;
  options: Option[];
  selectedValue: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function RadioGroup({
  options,
  onChange,
  selectedValue,
  groupName,
}: RadioGroupProps) {
  return (
    <>
      {options.map(({ value, label }) => {
        return (
          <React.Fragment key={value}>
            <input
              className={styles.radio}
              checked={selectedValue === value}
              type="radio"
              name={groupName}
              value={value}
              id={value}
              onChange={onChange}
            />
            <label htmlFor={value} className={styles.label}>
              {label}
            </label>
          </React.Fragment>
        );
      })}
    </>
  );
}
