function bdReminder(client, channel) {
    const chn = client.channels.cache.get(channel);

    // happyBirthday(chn, 'Romy', 2021, 1, 10, 14, 33)
    // happyBirthday(chn, 'Samurai Shak', 2021, 1, 10, 14, 30)
    //happyBirthday(chn, '<@739455286825320468>', 2021, 2, 9, 12, 1) //salma
    happyBirthday(chn, '<@316208244521697301>', 2021, 4, 9, 22, 1); //zezo
    happyBirthday(chn, '<@403824108682346497>', 2021, 4, 15, 22, 1); //MO
    happyBirthday(chn, '<@203590534126764033>', 2021, 5, 25, 22, 1); //kero
    happyBirthday(chn, '<@327801712167354389>', 2021, 6, 9, 22, 1); //gobna
    happyBirthday(chn, '<@616359831376363530>', 2021, 6, 24, 22, 1); //Alaa
    happyBirthday(chn, '<@141298305626800128>', 2021, 7, 11, 22, 1); //Jane
    happyBirthday(chn, '<@661348681517105152>', 2021, 8, 1, 1, 1); //Roma
    happyBirthday(chn, '<@278273060811964416>', 2021, 10, 6, 22, 1); //juba
    happyBirthday(chn, '<@694062315888181309>', 2021, 10, 19, 22, 1); //sherlock
    happyBirthday(chn, '<@145210621787504640>', 2021, 11, 1, 1, 1); //afifi
    happyBirthday(chn, '<@334184503578984448>', 2021, 11, 20, 22, 1); //Taha
    happyBirthday(chn, '<@696775564748390491>', 2021, 11, 24, 22, 1); //Sheda
}

function happyBirthday(chn, person, year, month, day, hour, minute) {
    const date =
        new Date(year, month, day, hour, minute).getTime() - Date.now();
    const diff = Math.max(date, 0);
    if (diff > 0x7fffffff)
        setTimeout(
            () => HappyBirthday(chn, person, year, month, day, hour, minute),
            0x7fffffff
        );
    else
        setTimeout(
            () =>
                chn.send(
                    `:partying_face: :partying_face: :partying_face:  @everyone Today is the day and it's a birthday.  Happy Birthday ${person}   :partying_face: :partying_face: :partying_face: `
                ),
            diff
        );
}

module.exports = bdReminder;
