function birthday(arg, msg, zezoEmoji, AfifiEmoji) {
    if (arg === 'all') {
        msg.reply(`
      --------------------  
      13/9    server
      --------------------  
      1/2    :flag_tr:
      -------------------- 
      10/2   :ninja: 
      --------------------
      9/3    :printer:
      --------------------
      10/5   ${zezoEmoji} 
      --------------------
      16/5   :desktop: 
      --------------------
      26/6   :dart: 
      --------------------
      10/7   :cheese:
      --------------------
      25/7   :joy:
      --------------------
      12/8   :burrito: 
      --------------------
      1/9    :rabbit:
      --------------------
      7/11   :computer:
      --------------------
      20/11  :mag:
      --------------------
      01/12  ${AfifiEmoji}
      --------------------
      21/12  :rolling_eyes:
      --------------------
      25/12  :soccer:
      --------------------`);
    }

    if (arg == 'zezo') {
        console.log('wasalt');
        msg.reply(
            `zezo is a special person who came to life on the 10th of may giving life a new life`
        );
    }
    if (arg === 'gebna') {
        msg.reply(
            `gebna is a special person who came to life on the 10th of july giving life a new type of gebna`
        );
    }
    if (arg === 'sherlock') {
        msg.reply(
            `sherlock is a special person who came to life on the 20th of November giving life a new detective korombo`
        );
    }
    if (arg === 'salma') {
        msg.reply(
            `salma is a special person who came to life on the 9th of March giving life a new rocket league professional `
        );
    }
    if (arg === 'roma') {
        msg.reply(
            `roma is a special creature who came to life on the 1st of September giving life a new cute bunny`
        );
    }
    if (arg === 'sheda') {
        msg.reply(
            `sheda is a special person who came to life on the 25th of December giving life a new fifa legend`
        );
    }
    if (arg === 'taha') {
        msg.reply(
            `taha is a special person who came to life on the 21st of December giving life a new engineering legend`
        );
    }
    if (arg === 'alaa') {
        msg.reply(
            `alaa is a special person who came to life on the 25th of july giving life a new super engineer and sambosa cooker`
        );
    }
    if (arg === 'kero') {
        msg.reply(
            `Kero is a special person who came to life on the 26th of june giving life a new keroptonite`
        );
    }
    if (arg === 'shakboni') {
        msg.reply(
            `shakboni is a special person who came to life on the 10th of Feb giving life a new super Ninja`
        );
    }
    if (arg === 'romy') {
        msg.reply(
            `Romy is a special person who came to life on the 1st of Feb ( maybe 10th ) giving life a new way of saying oskot`
        );
    }
    if (arg === 'jane') {
        msg.reply(
            `salma is a special person who came to life on the 12th of August giving life a new kofta lover`
        );
    }
    if (arg === 'juba') {
        msg.reply(
            `Juba is a special person who came to life on the 7th of november giving life a new hamada helal`
        );
    }
    if (arg === 'afifi') {
        msg.reply(
            `afifi is a special person who came to life on the 1st of December giving life ${AfifiEmoji}`
        );
    }
    if (arg === 'mo') {
        msg.reply(
            `mo is a special person who came to life on the 16th of may giving life a new bug hunter`
        );
    }
    if (arg === 'server') {
        msg.reply(
            `the server was born on the 13th of Septembre 2020 by the great bunny Roma who passed the mantel to Salma who took care of the server since then`
        );
    }
}

module.exports = birthday;
