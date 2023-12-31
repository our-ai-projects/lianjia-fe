interface NewHouse {
  title: string
  cover_pic: string
  city_name: string
  store_addr: string
}

interface QueryData {
  newHouses: NewHouse[]
}

interface Query {
  queryId: string
  question: string
  query: string
  variables: any
  mark: string
  data: QueryData
}

interface Answer {
  answerId: number
  correct: number
  normalizedContent: string
  ts: number
  queries: Query[]
}

export interface Question {
  chatId?: string
  question: string
}

export interface ResponseData {
  chatId: number
  content: string
  messageId: number
  answer: Answer
}

export interface Result {
  code: number
  message: string
  data: ResponseData | null
}
