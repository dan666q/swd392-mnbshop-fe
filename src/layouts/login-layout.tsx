// import Footer from '@/components/manager-screen/manager-footer'
// import Header from '@/components/manager-screen/manager-header'
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout className="min-h-screen">
      {/* <Header isLoginPage={true} /> */}
      <Layout className="mt-1">
        <Content className="bg-login-layout bg-contain">{children}</Content>
      </Layout>
      {/* <Footer /> */}
    </Layout>
  )
}
