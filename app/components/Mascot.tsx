"use client";

// page-mascot uses hooks but ships without a "use client" directive,
// so it needs this wrapper to render from a server component.
import { Mascot as PageMascot } from "page-mascot";

export default function Mascot({ size = 96 }: { size?: number }) {
  return (
    <PageMascot
      directions="/mascots/beard-directions.webp"
      reactions="/mascots/beard-reactions.webp"
      size={size}
      label="mascot"
    />
  );
}
