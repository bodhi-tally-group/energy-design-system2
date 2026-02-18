import Link from "next/link";
import Image from "next/image";
import { DESIGN_SYSTEM_VERSION } from "@/lib/version";

export default function Header() {
  return (
    <div className="flex flex-col gap-1">
      <Link href="/" className="flex items-center">
        <Image
          src="/Tally_DS_Logo.svg"
          alt="Tally Design System"
          width={210}
          height={33}
          className="h-8 w-auto"
          priority
        />
      </Link>
      <Link
        href="/changelog"
        className="text-xs font-medium text-muted-foreground underline underline-offset-2 hover:text-gray-900 dark:hover:text-gray-100"
      >
        Version {DESIGN_SYSTEM_VERSION}
      </Link>
    </div>
  );
}
