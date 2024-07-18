import { POPUP_TITLE } from '@/constants'
import { DefaultButtonStyle } from '@/lib/antd/antd-styles'
import ConfigAntdTheme from '@/lib/antd/config-theme'
import { useAppDispatch } from '@/lib/redux-toolkit/hook'
import { closePopup } from '@/lib/redux-toolkit/slices/popup-slice'
import { Button, Typography } from 'antd'
import { useUpdateStatus } from './use-edit-order'

export default function EditOrder(orderId: number) {
  const dispatch = useAppDispatch()
  const useUpdateStatusMutation = useUpdateStatus(orderId)
  function handleUpdate() {
    useUpdateStatusMutation.mutate('string')
    dispatch(closePopup(POPUP_TITLE.UPDATE_ORDER))
  }
  return (
    <>
      <Typography.Text>Are you sure to update process?</Typography.Text>
      <div className="flex items-center justify-end mt-4">
        <Button danger type="text" className="mr-2" onClick={() => dispatch(closePopup(POPUP_TITLE.UPDATE_ORDER))}>
          Cancel
        </Button>
        <ConfigAntdTheme theme={DefaultButtonStyle}>
          <Button type="primary" onClick={handleUpdate}>
            Update
          </Button>
        </ConfigAntdTheme>
      </div>
    </>
  )
}
