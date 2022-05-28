import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import * as Pages from 'presentation/pages'
import * as C from 'presentation/components'

const RoutesWrapper = () => (
  <Suspense fallback={<>Lazy Loading...</>}>
    <Routes>
      {/* <Route element={<Template.Default />}> */}
      <Route path="/login" element={<Pages.Login />} />
      {/* </Route> */}

      {/* <Route path="/" element={<Template.Example />}> */}
      {/*  <Route path="page-example-1" element={<Pages.PageExample1 />} /> */}
      {/*  <Route path="page-example-2" element={<Pages.PageExample2 />} /> */}
      {/*  <Route path="page-example-3" element={<Pages.PageExample3 />} /> */}
      {/*  <Route path="page-example-4" element={<Pages.PageExample4 />} /> */}
      {/*  <Route path="page-example-5" element={<Pages.PageExample5 />} /> */}
      {/* </Route> */}

      <Route
        path="*"
        element={
          <C.ErrorTemplate>
            <Pages.Error />
          </C.ErrorTemplate>
        }
      />
    </Routes>
  </Suspense>
)

export default RoutesWrapper
