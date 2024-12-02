import { notification } from 'antd'

type NotificationType = 'success' | 'info' | 'warning' | 'error'

type ToastPayload = {
  type: NotificationType
  message: string
  description: string
}

export function useToast() {
  const [api, contextHolder] = notification.useNotification()

  const open = (inputData: ToastPayload) => {
    const { type, message, description } = inputData
    api[type]({
      message,
      description,
    })
  }

  return { open, contextHolder }
}
