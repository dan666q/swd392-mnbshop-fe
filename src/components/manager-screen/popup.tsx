import { useAppDispatch, useAppSelector } from '@/lib/redux-toolkit/hook'
import { closePopup, openPopup } from '@/lib/redux-toolkit/slices/popup-slice'
import { CloseCircleOutlined } from '@ant-design/icons'
import { Modal, Typography } from 'antd'

type PopupType = 'info' | 'form' | 'confirm'

interface PopupProps {
  children: React.ReactNode
  content: React.ReactNode
  icon?: React.ReactNode
  type: PopupType
  title: string
  width: number
}

export default function Popup({ children, content, type, title, icon, width }: PopupProps) {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector((state) => state.popup[title])
  return (
    <>
      <div onClick={() => dispatch(openPopup(title))}>{children}</div>
      <Modal
        centered
        open={isOpen}
        onOk={() => dispatch(closePopup(title))}
        onCancel={() => dispatch(closePopup(title))}
        styles={{ content: { padding: 0 } }}
        title={
          <div className="px-3 py-2 rounded-t-md bg-primary">
            <div className="flex">
              <div className="mx-auto">
                {icon}
                <Typography.Title level={5} type="secondary">
                  {title}
                </Typography.Title>
              </div>
              {type === 'info' && (
                <CloseCircleOutlined className="text-foreground" onClick={() => dispatch(closePopup(title))} />
              )}
            </div>
          </div>
        }
        footer={null}
        closeIcon={null}
        width={width}
      >
        <div className="p-4">{content}</div>
      </Modal>
    </>
  )
}
