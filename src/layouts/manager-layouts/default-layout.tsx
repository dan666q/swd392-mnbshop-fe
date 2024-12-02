import Footer from '@/components/manager-screen/manager-footer'
import Header from '@/components/manager-screen/manager-header'
import Navigator from '@/components/manager-screen/navigator'
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout className="min-h-screen">
      <Header isLoginPage={false} />
      <Layout>
        <div>
          <Navigator />
        </div>
        <Content className="flex flex-col">{children}</Content>
      </Layout>
      <Footer />
    </Layout>
  )
}
