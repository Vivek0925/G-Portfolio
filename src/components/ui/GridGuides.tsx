export default function GridGuides() {
  const columns = 12;
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 mx-auto hidden max-w-[1600px] px-4 md:flex md:px-10"
      aria-hidden="true"
    >
      {Array.from({ length: columns }).map((_, i) => (
        <div
          key={i}
          className="h-full flex-1 border-l border-ink/[0.05] last:border-r"
        />
      ))}
    </div>
  );
}
