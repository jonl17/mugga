import { FluidObject } from "gatsby-image";

export interface AfangastadirListProps {
  afangastadir: Afangastadur[]
}
export interface Afangastadur {
  frontmatter: {
    title: string;
    tag: string[];
    landshluti: string;
    mynd: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
  }
}
