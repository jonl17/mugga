import { FluidObject } from "gatsby-image";

export interface AfangastadirListProps {
  afangastadir: Afangastadur[]
}
export interface Afangastadur {
  frontmatter: {
    title: string;
    subtitle: string;
    tag: string[];
    landshluti: string;
    mynd: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
  }
}
export interface ExcerptProps {
  excerpt: {
    title: string;
    subtitle: string;
    tag: string[];
  }
}
export interface SubtitleProps {
  subtitle: string;
  collapsed: boolean;
}