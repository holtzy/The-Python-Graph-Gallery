import React, { HTMLAttributes } from "react";
import Toggle from "react-toggle";

type LabelPlacement = "start" | "end";

interface Props extends HTMLAttributes<HTMLLabelElement> {
  label?: string;
  checked?: boolean;
  onChange?: () => void;
  labelPlacement?: LabelPlacement;
}

export const ToggleSwitch: React.FC<Props> = ({
  label,
  checked,
  onChange,
  labelPlacement = "end",
  ...props
}) => (
  <label {...props}>
    {label && labelPlacement === "start" && <span>{label}</span>}
    <Toggle
      icons={false}
      checked={checked}
      onChange={onChange}
      className="toggle-switch"
    />
    {label && labelPlacement === "end" && <span>{label}</span>}
  </label>
);
