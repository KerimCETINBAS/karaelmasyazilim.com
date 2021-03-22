const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/karaelmas.com',
    {
        branch: 'master',
        repo: 'https://github.com/karaelmasyazilim/karaelmasyazilim.com.git',
        user: {
            name: 'kerimCetinbas',
            email: 'a.kerim.cetinbas@yandex.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)