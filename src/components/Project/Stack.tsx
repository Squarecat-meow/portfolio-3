function Stack({ text }: { text: string }) {
  return (
    <div className="rounded-xl border border-gray-600 w-fit p-2">
      <p className="text-sm text-gray-600">{text}</p>
    </div>
  );
}

export default Stack;
