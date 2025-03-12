type InputFormProps = {
  id: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
  title: string;
};

function InputForm({ name, onChange, placeholder, value, title }: InputFormProps) {
  return (
    <>
      <label className="sr-only" htmlFor={name}>
        {title}
      </label>
      <input
        className="bg-slate-900 text-white rounded-md border border-stone-700 px-2 py-1"
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </>
  );
}

export default InputForm;
