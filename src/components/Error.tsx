type ErrorProps = {
  children: React.ReactNode;
};

export const Error = ({ children }: ErrorProps) => {
  return (
    <p className="text-center my-2 bg-red-600 text-white font-bold text-sm uppercase p-2 rounded-sm">
      {children}
    </p>
  );
};
