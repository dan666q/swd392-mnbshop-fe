import ConfigAntdTheme from '@/lib/antd/config-theme'
import { POPUP_TITLE } from '@/constants'
import { DefaultButtonStyle } from '@/lib/antd/antd-styles'
import { useAppDispatch } from '@/lib/redux-toolkit/hook'
import { closePopup } from '@/lib/redux-toolkit/slices/popup-slice'
import { Button, Typography } from 'antd'
import { useDisableAccount } from './use-disable-account'

interface DisableAccountProps {
  fullName: string
  id: number
}

export default function DisableAccount({ fullName, id }: DisableAccountProps) {
  const dispatch = useAppDispatch()
  const disableAccountMutation = useDisableAccount(id)
  function handleDelete(id: number) {
    console.log(id)
    disableAccountMutation.mutate()
    dispatch(closePopup(POPUP_TITLE.DISABLE_ACCOUNT))
  }

  return (
    <>
      <Typography.Text>Are you sure to disable {fullName}?</Typography.Text>
      <div className="flex items-center justify-end mt-4">
        <Button danger type="text" className="mr-2" onClick={() => dispatch(closePopup(POPUP_TITLE.DISABLE_ACCOUNT))}>
          Cancel
        </Button>
        <ConfigAntdTheme theme={DefaultButtonStyle}>
          <Button type="primary" onClick={() => handleDelete(id)}>
            Disable
          </Button>
        </ConfigAntdTheme>
      </div>
    </>
  )
}
