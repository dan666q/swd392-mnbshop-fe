import Popup from './popup'
import debounce from 'debounce'
import FilterAccount from '@/features/manager-feature/account-mng/filter-account'
import { Button, Input, Tag } from 'antd'
import { CloseOutlined, FilterOutlined, SearchOutlined } from '@ant-design/icons'
import { FILTER_OPTIONS, POPUP_TITLE } from '@/constants'
import { useAppDispatch, useAppSelector } from '@/lib/redux-toolkit/hook'
import { setFilterAccount, setSearchAccount } from '@/lib/redux-toolkit/slices/filter-account'

export default function SearchBar() {
  const dispatch = useAppDispatch()

  const searchValue = useAppSelector((state) => state.filterAccount.value)
  const filterState = useAppSelector((state) => state.filterAccount.filter)

  const handleClose = (item: string) => {
    dispatch(setFilterAccount({ key: 'filter', value: filterState.filter((prevStateItem) => prevStateItem !== item) }))
  }

  const handleSearch = debounce((searchValue: string) => {
    dispatch(setSearchAccount(searchValue))
  }, 250)

  return (
    <div className="flex items-center space-x-3 w-[350px] flex-col">
      <div className="flex gap-3 w-full">
        <Input
          prefix={<SearchOutlined />}
          defaultValue={searchValue}
          placeholder="Search by..."
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full"
        />
        <Popup type="info" title={POPUP_TITLE.FILTER} content={<FilterAccount />} width={500}>
          <Button type="primary" icon={<FilterOutlined />}>
            Filter
          </Button>
        </Popup>
      </div>
      <div className="w-full">
        <div className=" ml-7 mt-3">
          {filterState.map((item, index) => {
            if (item === FILTER_OPTIONS.ID) {
              return (
                <Tag key={index} className="inline-flex mt-1 gap-2 flex-row-reverse">
                  {item}
                </Tag>
              )
            } else {
              return (
                <Tag
                  key={index}
                  className="inline-flex mt-1 gap-2 flex-row-reverse"
                  icon={<CloseOutlined onClick={() => handleClose(item)} />}
                >
                  {item}
                </Tag>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}
