import { Link } from "@remix-run/react";
import { Resource } from "~/types";

interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const { href, icon, text } = resource;

  return (
    <li key={href}>
      <Link
        className="group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500"
        to={href}
      >
        {icon}
        {text}
      </Link>
    </li>
  );
}
