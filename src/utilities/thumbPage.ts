const createPage = (files: string[]): Promise<string> => {
  let result: string =
    "<html lang='en'><head><title>Thumbnail Directory</title></head><body><div class='thumbs-list'>"
  return new Promise((resolve, reject) => {
    try {
      result +=
        '<h1 style="background: #adea65;width: fit-content;padding: 15px;color: #fff;border-radius: 10px;">Count: ' +
        files.length +
        '</h1>'
      for (let i: number = 0; i < files.length; i++) {
        result +=
          '<a style="width:20%;flex:0 0 20%" href="/thumb/' +
          files[i] +
          '"><img style="width:250px;height:250px;margin:15px;border:5px solid #00cefd;" src="/thumb/' +
          files[i] +
          '" alt="' +
          files[i] +
          '" title="' +
          files[i] +
          '" /></a>'
      }
      result += '</div><body><html>'
      resolve(result)
    } catch (err) {
      console.error(err)
      reject(err)
    }
  })
}
export default createPage
