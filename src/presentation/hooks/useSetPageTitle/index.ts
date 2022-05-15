import { useLayoutEffect } from 'react'

export const useSetPageTitle = (title: string): void => {
  useLayoutEffect(() => {
    document.title = title
  }, [title])
}
