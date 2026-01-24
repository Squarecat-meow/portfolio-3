function Stack({
  icon,
  stack,
}: {
  icon: string | React.ReactNode | React.JSX.Element;
  stack: string;
}) {
  return (
    <div className="px-4 py-2 w-full rounded-2xl border border-slate-400">
      <div>{icon}</div>
      <p className="font-light text-sm">{stack}</p>
    </div>
  );
}

export default Stack;
