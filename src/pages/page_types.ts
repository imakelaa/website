import { type SectionConfig } from "./section_types";

export interface PageLayoutConfig {
  showBackLink?: boolean;
  showPageTitle?: boolean;
  Header?: React.ComponentType;
  Footer?: React.ComponentType;
}

export interface PageConfig {
  title: string;
  description?: string;
  layout?: PageLayoutConfig;
  sections: SectionConfig[];
}