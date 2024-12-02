import PublicRoute from '@/components/auth/public-route'
import PrivateRoute from '@/components/auth/private-route'
import ConditionalRoute from '@/components/auth/conditional-route'
import { Route, Routes } from 'react-router-dom'
import { routes } from '.'

export default function Router() {
  return (
    <Routes>
      {routes.map((route) => {
        const Page = route.component
        const Layout = route.layout
        return (
          <Route
            key={route.name}
            path={route.path}
            element={
              route.conditional ? (
                <ConditionalRoute roles={route.roles}>
                  {Layout ? (
                    <Layout>
                      <Page />
                    </Layout>
                  ) : (
                    <div>
                      <Page />
                    </div>
                  )}
                </ConditionalRoute>
              ) : route.private ? (
                <PrivateRoute roles={route.roles}>
                  {Layout ? (
                    <Layout>
                      <Page />
                    </Layout>
                  ) : (
                    <div>
                      <Page />
                    </div>
                  )}
                </PrivateRoute>
              ) : Layout ? (
                <PublicRoute>
                  <Layout>
                    <Page />
                  </Layout>
                </PublicRoute>
              ) : (
                <PublicRoute>
                  <Page />
                </PublicRoute>
              )
            }
          />
        )
      })}
    </Routes>
  )
}
