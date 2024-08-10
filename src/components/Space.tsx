export function Space({ height }: { height: string | '1px' }) {
  return (
    <div className="separator" style={{
      height,
    }}></div>
  );
}