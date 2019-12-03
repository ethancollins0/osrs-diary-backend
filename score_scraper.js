const url = 'https://secure.runescape.com/m=hiscore_oldschool/hiscorepersonal?user1='
const request = require('request-promise')
const cheerio = require('cheerio')

scrape = (name) => {
    let array = []
    name = name.split(' ').join('%20')
    return request(url + name, (err, resp, html) => {
        const $ = cheerio.load(html)
        let i = 5
        let x = 0

        let stats = [
            'attack',
            'defence',
            'strength',
            'hitpoints',
            'ranged',
            'prayer',
            'magic',
            'cooking',
            'woodcutting',
            'fletching',
            'fishing',
            'firemaking',
            'crafting',
            'smithing',
            'mining',
            'herblore',
            'agility',
            'thieving',
            'slayer',
            'farming',
            'runecraft',
            'hunter',
            'construction'
        ]

        if ($('contentHiscores div:nth-child(1)').text().includes('No player')){
            return null
        }

        while (i < 28){
            array.push({
                name: stats[x],
                value: getStat(i)
            })
            i++
            x++
        }

        return array
        
        function getStat(int){
            let value = 0
            $(`tbody tr:nth-child(${int}) td:nth-child(4)`).each((x, td) => {
                value = $(td).text()
            })
            return value
        }
    }).then(() => (array))
}

module.exports = {
    scrape
}