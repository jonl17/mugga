import { FluidObject } from "gatsby-image";

export interface AfangastadirListProps {
  afangastadir: Afangastadur[]
}
export interface Afangastadur {
  frontmatter: {
    title: string;
    mynd: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
  }
}
