function bdReminder(client, channel) {
  const chn = client.channels.cache.get(channel)

  happyBirthday(chn, 'Romy', 2021, 1, 10, 14, 33)
  happyBirthday(chn, 'Samurai Shak', 2021, 1, 10, 14, 30)
  happyBirthday(chn, 'Salma', 2021, 2, 9, 20, 1)
  happyBirthday(chn, 'Zezo', 2021, 4, 10, 20, 1)
  happyBirthday(chn, 'Mo', 2021, 4, 16, 20, 1)
  happyBirthday(chn, 'Kero', 2021, 5, 26, 20, 1)
  happyBirthday(chn, 'Gobna', 2021, 6, 10, 20, 1)
  happyBirthday(chn, 'Alaa', 2021, 6, 25, 20, 1)
  happyBirthday(chn, 'Jane', 2021, 7, 12, 20, 1)
  happyBirthday(chn, 'Roma', 2021, 8, 1, 20, 1)
  happyBirthday(chn, 'Sherlock', 2021, 10, 20, 20, 1)
  happyBirthday(chn, 'Taha', 2021, 11, 21, 20, 1)
  happyBirthday(chn, 'Sheda', 2021, 11, 25, 20, 1)
}

function happyBirthday(chn, person, year, month, day, hour, minute) {
  const date = new Date(year, month, day, hour, minute).getTime() - Date.now()
  const diff = Math.max(date, 0)
  if (diff > 0x7fffffff)
    setTimeout(
      () => HappyBirthday(chn, person, year, month, day, hour, minute),
      0x7fffffff
    )
  else
    setTimeout(
      () =>
        chn.send(
          `:partying_face: :partying_face: :partying_face:   Today is the day and it's a birthday.  Happy Birthday ${person}   :partying_face: :partying_face: :partying_face: `
        ),
      diff
    )
}

module.exports = bdReminder
