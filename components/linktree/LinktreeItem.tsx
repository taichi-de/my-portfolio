import Link from 'next/link';

interface LinktreeItemProps {
  icon: JSX.Element;
  subtitle: string;
}

export default function LinktreeItem({ icon, subtitle }: LinktreeItemProps) {
  return (
    <Link
      href="{href}"
      target="_blank"
      className="px-4 py-2 bg-white border rounded border-whtie hover:bg-white"
    >
      {icon}
      <p>{subtitle}</p>
    </Link>
  );
}
