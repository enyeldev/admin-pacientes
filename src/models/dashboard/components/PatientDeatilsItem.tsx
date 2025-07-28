type PatientDeatilsItemProps = {
  label: string;
  data: string;
};

export const PatientDeatilsItem = ({
  data,
  label,
}: PatientDeatilsItemProps) => {
  return (
    <p className="font-bold mb-3 text-gray-700 uppercase">
      {label}: {""}
      <span className="font-normal normal-case">{data}</span>
    </p>
  );
};
