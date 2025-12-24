import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ link, setOpen }) {
  const pathname = usePathname();
  return (
    <Link
      href={link?.href || "#"}
      onClick={() => setOpen(false)}
      className={cn(
        "block rounded p-4 py-3",
        pathname === link?.href ? "bg-bg-gray font-semibold text-primary" : ""
      )}
    >
      <div className="flex items-center gap-2 text-sm md:text-base">
        {link?.Icon} {link?.name}
      </div>
    </Link>
  );
}
