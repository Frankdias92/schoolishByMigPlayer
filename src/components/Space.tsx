function Component({ height }: { height: string | '1px' }) {
  return (
    <div className="separator" style={{
        height,
    }}></div>
  );
}

export default Component;