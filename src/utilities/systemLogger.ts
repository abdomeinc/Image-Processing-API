const log = (msg: string) => {
  const date: Date = new Date()
  const dateTime: string =
    date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
  console.log(`${dateTime}: ${msg}`)
}

export default log
