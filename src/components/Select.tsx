import { useEffect, useState } from "react";
import styles from "./Select.module.css";

type OptionProps = {
  label: string;
  value: string;
};

type SelectSize = "xs" | "sm" | "md" | "lg";

const Select = ({
  options,
  name,
  size = "md",
  placeholder = "Select",
  onChange,
}: {
  options: OptionProps[];
  name?: string;
  size?: SelectSize;
  placeholder?: string;
  onChange?: (value?: string) => void;
}) => {
  const [selected, setSelected] = useState<OptionProps | null>(null);
  const [visibleOptions, setVisibleOptions] = useState(false);

  useEffect(() => {
    onChange && onChange(selected?.value);
  }, [selected?.value]);

  return (
    <>
      <div className={[styles.select].join(" ")}>
        <select name={name} style={{ display: "none" }}>
          {options.map((option) => (
            <option
              key={`${option.label}-${option.value}`}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>

        <div
          className={[styles.selected, styles[size]].join(" ")}
          onClick={() => {
            setVisibleOptions((before) => !before);
          }}
        >
          <span>{selected?.label ?? placeholder}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            width={14}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>

        <div
          className={[styles.options, styles[size]].join(" ")}
          style={{ display: !visibleOptions ? "none" : "" }}
        >
          <div className={styles.list}>
            {options.map((option) => (
              <Option
                key={`${option.label}-${option.value}`}
                label={option.label}
                onClick={() => {
                  setSelected(option);
                  setVisibleOptions(false);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Select;

const Option = ({ label, onClick }: { label: string; onClick: () => void }) => {
  return (
    <div className={styles.option} onClick={onClick}>
      {label}
    </div>
  );
};
