interface ResumeItemProps {
  desc: string;
  subtitle: string;
  year: string;
}

export default function ResumeItem({ desc, subtitle, year }: ResumeItemProps) {
  return (
    <div className="m-4">
      <h3 className="inline-flex items-center justify-center w-24 bg-cyan md:text-base sm:text-xs">
        {year}
      </h3>
      <h4 className="my-1 font-bold md:text-base sm:text-xs">{subtitle}</h4>
      <p className="md:text-base sm:text-xs">{desc}</p>
    </div>
  );
}
