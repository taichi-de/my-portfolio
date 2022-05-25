import Link from "next/link";

export default function LinktreeItem({ icon, subtitle }) {
  return (
    <Link href="{href}" target="_blank">
      <a className="px-4 py-2 bg-white border rounded border-whtie hover:bg-white">
        {icon}
        <p>{subtitle}</p>
      </a>
    </Link>
  );
}
