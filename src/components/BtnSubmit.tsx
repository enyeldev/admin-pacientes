type BtnSubmitProps = {
  btnText: string;
};

export const BtnSubmit = ({ btnText }: BtnSubmitProps) => {
  return (
    <input
      type="submit"
      className="bg-indigo-600 w-full p-2 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-md"
      value={btnText}
    />
  );
};
