import { FILTER_OPTIONS } from '@/constants'
import { Switch, Select } from 'antd'

export function SelectOptions(filterOptions: Record<string, string>) {
  return Object.entries(filterOptions).map(([key, value]) => ({
    label: key,
    value: value,
    disabled: value === FILTER_OPTIONS.ID,
  }))
}

export default function FilterAccount() {
  const handleSearch = (value: string[]) => {
    console.log(value)
  }

  const handleSwitch = (checked: boolean) => {
    console.log(checked)
  }

  return (
    <div>
      <h4 className="my-2">Search by</h4>
      <Select
        mode="multiple"
        allowClear
        className="w-full"
        placeholder="Please select"
        defaultValue={[]}
        value={[]}
        onChange={handleSearch}
        options={SelectOptions(FILTER_OPTIONS)}
      />
      <div className="flex items-center gap-5 mt-5">
        <h4 className="my-2">Show dropout student</h4>
        <Switch onChange={handleSwitch} checked={false} />
      </div>
    </div>
  )
}
