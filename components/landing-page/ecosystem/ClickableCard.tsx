"use client";

import Link from "next/link";
import { ReactNode } from "react";

type ClickableCardProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function ClickableCard({
  href,
  children,
  className = "",
}: ClickableCardProps) {
  return (
    <Link
      href={href}
      className={`block group cursor-pointer transition-all duration-300 ease-out hover:scale-[1.01] active:scale-[0.99] ${className}`}
    >
      {children}
    </Link>
  );
}
