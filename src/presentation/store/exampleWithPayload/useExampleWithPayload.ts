import {
  setRemoveText,
  setAddText
} from 'presentation/store/exampleWithPayload/slice'
import { ExemploTextProp } from 'presentation/store/exampleWithPayload/types'
import {
  useTypedDispatch,
  useTypedSelector
} from 'presentation/store/useHelpers'

export const useExampleWithPayload = () => {
  const dispatch = useTypedDispatch()
  const exampleWithPayload = useTypedSelector(
    state => state.exampleWithPayload.text
  )

  const setState = {
    setRemoveText: () => dispatch(setRemoveText()),
    setAddText: (exemploText: ExemploTextProp) => {
      dispatch(setAddText(exemploText))
    }
  }

  return { exampleWithPayload, ...setState }
}
