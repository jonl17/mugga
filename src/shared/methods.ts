import { tags } from "./constants"
import { Tags } from "~/context/Filter"
import { Afangastadur } from "~/components/AfangastadirList/types"

export const tagsVerbose = (tag: string) => {
  for (let i = 0; i < tags.length; i++) {
    if (tag == tags[i].nonVerbose)
      return tags[i].verbose
  }
}


const sortByName = (a: Afangastadur, b: Afangastadur) => {
  const aTitle = a.frontmatter.title.toLowerCase()
  const bTitle = b.frontmatter.title.toLowerCase()
  if (aTitle[0] < bTitle[0]) return -1
  if (aTitle[0] > bTitle[0]) return 1
  return 0
}

export const filterStadirByTags = (tags: Tags[], afangastadir: Afangastadur[]) => {
  // start on index 1, skip "allt" since we know that it is NOT checked
  const checkedTags = tags.filter(tag => tag.checked)
  const result: Afangastadur[] = []
  for (let i = 0; i < checkedTags.length; i++) {
    const filtered = afangastadir.filter(stadur => stadur.frontmatter.tag.includes(checkedTags[i].nonVerbose))
    filtered.forEach(item => result.push(item))
  }
  const unique = new Set(result)
  const list = [...unique]
  return list.sort(sortByName)
}