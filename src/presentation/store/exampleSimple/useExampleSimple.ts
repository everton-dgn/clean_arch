import { setChangeExample } from 'presentation/store/exampleSimple/slice'
import {
  useTypedDispatch,
  useTypedSelector
} from 'presentation/store/useHelpers'

export const useExampleSimple = () => {
  const dispatch = useTypedDispatch()
  const exampleSimple = useTypedSelector(state => state.exampleSimple.toggle)

  const setState = {
    setChangeExample: () => dispatch(setChangeExample())
  }

  return { exampleSimple, ...setState }
}
