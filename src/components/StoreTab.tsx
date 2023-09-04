interface StoreProps {
  value: string;
  display: string;
  key: string;
}

export const StoreTab = ( {
  value,
  display
}: StoreProps ): JSX.Element => {
  return (
    <p>
      {`${ value }: ${ display }`}
    </p>
  );
};