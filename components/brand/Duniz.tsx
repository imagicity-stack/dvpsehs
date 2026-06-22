/**
 * The "DUNIZ Eduserv" brand lockup.
 *
 * "DUNIZ" is set in uppercase using the geometric Bauhaus-style face
 * (`font-bauhaus`, see app/layout.tsx). "Eduserv" stays in the inherited
 * font so the technology partner reads as one wordmark.
 */
export function Duniz({
  className = "",
  suffix = true,
}: {
  className?: string;
  /** Render the " Eduserv" suffix after the DUNIZ mark. */
  suffix?: boolean;
}) {
  return (
    <span className={className}>
      <span className="font-bauhaus font-bold tracking-[0.08em]">DUNIZ</span>
      {suffix ? " Eduserv" : null}
    </span>
  );
}
