import { lazy } from 'react'

export { default as Default } from './default'
export const Example = lazy(() => import('./example'))
export const Error = lazy(() => import('./error'))
