function bdReminder(client, channel) {
  const chn = client.channels.cache.get(channel)

  const bdRomy = new Date(2021, 1, 10, 20, 1).getTime() - Date.now()
  const bdShak = new Date(2021, 1, 10, 20, 1).getTime() - Date.now()
  const bdSalma = new Date(2021, 2, 9, 20, 1).getTime() - Date.now()
  const bdZezo = new Date(2021, 4, 10, 20, 1).getTime() - Date.now()
  const bdMo = new Date(2021, 4, 16, 20, 1).getTime() - Date.now()
  const bdKero = new Date(2021, 5, 26, 20, 1).getTime() - Date.now()
  const bdGebna = new Date(2021, 6, 10, 20, 1).getTime() - Date.now()
  const bdAlaa = new Date(2021, 6, 25, 20, 1).getTime() - Date.now()
  const bdJane = new Date(2021, 7, 12, 20, 1).getTime() - Date.now()
  const bdRoma = new Date(2021, 8, 1, 20, 1).getTime() - Date.now()
  const bdSherlock = new Date(2021, 10, 20, 20, 1).getTime() - Date.now()
  const bdTaha = new Date(2021, 11, 21, 20, 1).getTime() - Date.now()
  const bdSheda = new Date(2021, 11, 21, 20, 1).getTime() - Date.now()

  happyBirthday(chn, 'Romy', bdRomy)
  happyBirthday(chn, 'Samurai Shak', bdShak)
  happyBirthday(chn, 'Salma', bdSalma)
  happyBirthday(chn, 'Zezo', bdZezo)
  happyBirthday(chn, 'Mo', bdMo)
  happyBirthday(chn, 'Kero', bdKero)
  happyBirthday(chn, 'Gobna', bdGebna)
  happyBirthday(chn, 'Alaa', bdAlaa)
  happyBirthday(chn, 'Jane', bdJane)
  happyBirthday(chn, 'Roma', bdRoma)
  happyBirthday(chn, 'Sherlock', bdSherlock)
  happyBirthday(chn, 'Taha', bdTaha)
  happyBirthday(chn, 'Sheda', bdSheda)
}

function happyBirthday(chn, person, date) {
  const diff = Math.max(date, 0)
  if (diff > 0x7fffffff)
    setTimeout(() => HappyBirthday(chn, person, date), 0x7fffffff)
  else sayHBD(chn, person, diff)
}

function sayHBD(chn, person, timeout) {
  setTimeout(
    () =>
      chn.send(
        `:partying_face: :partying_face: :partying_face: Today is the day and it's a birthday.  Happy Birthday ${person} :partying_face: :partying_face: :partying_face: `
      ),
    timeout
  )
}
module.exports = bdReminder
