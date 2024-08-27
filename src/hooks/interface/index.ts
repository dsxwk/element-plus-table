/* eslint-disable @typescript-eslint/no-namespace */
export namespace Table {
  export interface Pageable {
    page: number
    pageSize: number
    total: number
  }
  export interface StateProps {
    tableData: any[]
    pageable: Pageable
    searchParam: {
      [key: string]: any
    }
    searchInitParam: {
      [key: string]: any
    }
    totalParam: {
      [key: string]: any
    }
    icon?: {
      [key: string]: any
    },
    operationBtnText?: {
      [key: string]: any
    }
  }
}

export namespace HandleData {
  export type MessageType = "" | "success" | "warning" | "info" | "error"
}

export namespace Theme {
  export type GreyOrWeakType = "grey" | "weak"
}

export type urlType = `/${string}`
