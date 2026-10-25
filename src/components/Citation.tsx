import Link from "next/link";
import { references } from "@/data/references";

type Props = { n: number };

export default function Citation({ n }: Props) {
  const r = references.find((x) => x.num === n);
  const href = r ? `/sources#ref-${r.id}` : "/sources";
  return (
    <Link
      href={href}
      aria-label={`Citation ${n}${r ? `: ${r.authors.split(",")[0]} et al. ${r.year}` : ""}`}
      className="cite"
    >
      [{n}]
    </Link>
  );
}
