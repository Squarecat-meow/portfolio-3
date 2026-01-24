function Experience({
  number,
  description,
}: {
  number: number;
  description: string;
}) {
  return (
    <div>
      <h2 className="font-heading text-4xl lg:text-5xl font-bold">
        {number === Infinity ? '∞' : number}
        {number !== Infinity && '+'}
      </h2>
      <p className="font-hangul-heading text-md lg:text-2xl break-keep">
        {description}
      </p>
    </div>
  );
}

export default Experience;
