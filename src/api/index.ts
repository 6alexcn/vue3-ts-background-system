import { http } from '../utils/request'

import { TableItem } from './types'

export interface DataRes {
  list: TableItem[]
  pageTotal: number
}

export const fetchData = () => {
  return http.get<DataRes>('./table.json')
}
