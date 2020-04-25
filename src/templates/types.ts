import { Afangastadur } from "../components/AfangastadirList/types";

export interface LandshlutiProps {
  pageContext: {
    title: "reykjanes" | "hofudborgarsvaedid" |
    "sudurland" | "vesturland" | "vestfirdir" |
    "nordurland" | "austurland";
    id: string;
    landshluti: string;
  }
  data: {
    afangastadir: {
      nodes: Afangastadur[]
    }
  }
}
export interface AfangastadurProps {
  pageContext: {
    title: string
  }
}
export interface LandshlutiQuery {
  afangastadir: {
    nodes: Afangastadur[]
  }
}
