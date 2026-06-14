import { eyebrowClass } from "@/app/lib/styles";

export default function Eyebrow({ children, className = "" }) {
  return <p className={`${eyebrowClass} ${className}`}>{children}</p>;
}
