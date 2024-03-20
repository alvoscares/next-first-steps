"use client";

import Link from "next/link";

import styles from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  label: string;
}

export const ActiveLink = ({ path, label }: Props) => {
  const pathName = usePathname();

  return (
    <Link
      className={`${styles.link} ${pathName === path && styles["active-link"]}`}
      href={path}
    >
      {label}
    </Link>
  );
};
