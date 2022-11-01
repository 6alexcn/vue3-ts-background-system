import { http } from '../utils/request'

interface TableItem {
  id: number
  name: string
  money: number
  address: string
  state: string
  date: string
  thumb: number
}

export interface DataRes {
  list: TableItem[]
  pageTotal: number
}

export const fetchData = () => {
  return http.get<DataRes>('./table.json')
}
