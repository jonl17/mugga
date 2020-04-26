import { tags } from "./constants"

export const tagsVerbose = (tag: string) => {
  for (let i = 0; i < tags.length; i++) {
    if (tag == tags[i].nonVerbose)
      return tags[i].verbose
  }
} 