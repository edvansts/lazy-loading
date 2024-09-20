import type { ReactElement } from "react";

export interface Resource {
  href: string;
  icon: ReactElement;
  text: string;
  id: string;
}
