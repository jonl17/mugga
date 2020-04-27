import React, { useState, createContext, ReactChild } from 'react'

export interface Tags {
  nonVerbose: string;
  verbose: string;
  checked: boolean;
}
interface ContextProps {
  tags: Tags[];
  check: (tag: string) => void
}

export const FilterContext = createContext({} as ContextProps)

const Provider: React.FC<ReactChild> = ({ children }) => {

  const initialState = [
    { nonVerbose: "allt", verbose: "Allt", checked: true },
    { nonVerbose: "sofn", verbose: "Söfn", checked: true },
    { nonVerbose: "veitingar", verbose: "Veitingar", checked: true },
    { nonVerbose: "upplifun", verbose: "Upplifun", checked: true }
  ]

  const [tags, setTags] = useState(initialState)

  const check = (tag: string) => {

    const newTags = []

    for (let i = 0; i < tags.length; i++) {
      if (tag !== "allt") {
        if (tag === tags[i].nonVerbose) {
          newTags.push({
            nonVerbose: tags[i].nonVerbose,
            verbose: tags[i].verbose,
            checked: !tags[i].checked
          })
        }
        else {
          newTags.push({
            nonVerbose: tags[i].nonVerbose,
            verbose: tags[i].verbose,
            checked: tags[i].checked
          })
        }

        // uncheckar allt ef ekki allt er valið
        if (newTags[0].checked) {
          newTags[0].checked = false
        }

      }
      else {
        const selectAll = !tags[0].checked
        newTags.push({
          nonVerbose: tags[i].nonVerbose,
          verbose: tags[i].verbose,
          checked: selectAll
        })
      }
    }

    const checkedTags = newTags.filter(tag => tag.checked)
    if (checkedTags.length === tags.length - 1) {
      newTags[0].checked = true
    }
    setTags(newTags)
  }

  return (
    <FilterContext.Provider value={{ tags, check }}>
      {children}
    </FilterContext.Provider>
  )
}

export default Provider