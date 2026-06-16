import { externalLinkProps, primaryButtonClass, secondaryButtonClass } from "@/app/lib/styles";

const variants = {
  primary: primaryButtonClass,
  secondary: secondaryButtonClass
};

export default function ButtonLink({ href, children, variant = "primary", className = "", ariaLabel, external = false , rel = "" , target = "" }) {
  return (
    <a
      className={`${variants[variant]} ${className}`}
      href={href}
      aria-label={ariaLabel}
      {...(external ? externalLinkProps : {})}
      rel={rel}
      target={target}
    >
      {children}
    </a>
  );
}
