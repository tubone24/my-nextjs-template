import { NextApiRequest, NextApiResponse } from 'next'
import { withSentry } from '@sentry/nextjs'

export interface DateResponse {
  year: string
  month: string
  date: string
  hours: string
  minutes: string
  seconds: string
}

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  const currentDate = new Date()
  // const datetime = `${currentDate.getFullYear()}/${(currentDate.getMonth()+1 < 10)?"0":""}${currentDate.getMonth() + 1}/${(currentDate.getDate() < 10)?"0":""}${currentDate.getDate()} @ ${(currentDate.getHours() < 10)?"0":""}${currentDate.getHours()}:${(currentDate.getMinutes() < 10)?"0":""}${currentDate.getMinutes()}:${(currentDate.getSeconds() < 10)?"0":""}${currentDate.getSeconds()}`
  const datetime: DateResponse = {
    year: `${currentDate.getFullYear()}`,
    month: `${currentDate.getMonth() + 1 < 10 ? '0' : ''}${currentDate.getMonth() + 1}`,
    date: `${currentDate.getDate() < 10 ? '0' : ''}${currentDate.getDate()}`,
    hours: `${currentDate.getHours() < 10 ? '0' : ''}${currentDate.getHours()}`,
    minutes: `${currentDate.getMinutes() < 10 ? '0' : ''}${currentDate.getMinutes()}`,
    seconds: `${currentDate.getSeconds() < 10 ? '0' : ''}${currentDate.getSeconds()}`,
  }
  res.statusCode = 200
  res.json(datetime)
}

export default withSentry(handler)
