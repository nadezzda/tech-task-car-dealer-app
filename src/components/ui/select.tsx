type SelectProps = {
    label: string;
    options: { value: string | number; label: string }[];
    value: string | null;
    onChange: (value: string) => void;
    disabled?: boolean;
  };
  
  const Select: React.FC<SelectProps> = ({ label, options, value, onChange, disabled = false }) => {
    return (
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">{label}</label>
        <select
          className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
        >
          <option value="" disabled>
            Select a {label.toLowerCase()}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default Select;
  