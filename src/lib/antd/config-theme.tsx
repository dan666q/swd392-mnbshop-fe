import { THEME_CODES } from '@/constants'
import { ConfigProvider } from 'antd'
import { AliasToken } from 'antd/es/theme/internal'

interface ConfigAntdThemeProps {
  theme?: { token: Partial<AliasToken> }
  children: React.ReactNode
}

export default function ConfigAntdTheme({ theme, children }: ConfigAntdThemeProps) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            colorIconHover: THEME_CODES.FOREGROUND,
            rowSelectedBg: THEME_CODES.FOREGROUND,
            rowSelectedHoverBg: THEME_CODES.FOREGROUND,
          },
          Pagination: {
            itemActiveBg: THEME_CODES.PRIMARY,
            colorPrimary: THEME_CODES.FOREGROUND,
            colorPrimaryHover: THEME_CODES.FOREGROUND,
          },
          Checkbox: {
            colorPrimary: THEME_CODES.PRIMARY,
            colorPrimaryHover: THEME_CODES.PRIMARY,
          },
          Typography: {
            colorTextHeading: THEME_CODES.PRIMARY,
            colorTextDescription: THEME_CODES.FOREGROUND,
            colorText: THEME_CODES.PRIMARY,
            colorTextSecondary: THEME_CODES.FOREGROUND,
            titleMarginTop: 0,
            titleMarginBottom: 0,
            fontSizeHeading1: 32,
            fontSizeHeading2: 28,
            fontSizeHeading3: 24,
            fontSizeHeading4: 22,
            fontSizeHeading5: 18,
          },
          Divider: {
            colorSplit: THEME_CODES.PRIMARY,
          },
          Layout: {
            siderBg: 'foreground',
            triggerBg: 'foreground',
            triggerColor: 'secondary',
          },
          Tabs: {
            colorPrimary: THEME_CODES.FOREGROUND,
            colorBgTextActive: THEME_CODES.FOREGROUND,
            itemHoverColor: THEME_CODES.FOREGROUND,
            cardBg: THEME_CODES.UNACTICE,
            itemActiveColor: THEME_CODES.FOREGROUND,
            colorText: THEME_CODES.FOREGROUND,
            colorBgContainer: THEME_CODES.PRIMARY,
          },
        },
        token: {
          fontFamily: 'Inter, sans-serif',
          ...theme?.token,
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}
