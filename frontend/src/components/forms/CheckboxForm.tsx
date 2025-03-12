type CheckboxFormProps = {
  isPrivate: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function CheckboxForm({ isPrivate, onChange }: CheckboxFormProps) {
  return (
    <>
      <label htmlFor="isPrivate" className="text-sm">
        Le repos est privée :
        <input
          className="ml-2"
          type="checkbox"
          name="isPrivate"
          id="isPrivate"
          checked={isPrivate}
          onChange={onChange}
        />
      </label>
    </>
  );
}

export default CheckboxForm;
