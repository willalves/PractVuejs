export default {
    state: {
        news: [{
            id: 1,
            title: 'Começam os treinos para a nova temporada',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque impedit, praesentium, reiciendis non at odit aut dolores exercitationem, eos distinctio mollitia? Quas, sit? Quasi fugiat maxime consectetur iste est blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quisquam vero distinctio id dicta qui, minima alias porro necessitatibus. Neque, culpa dolores nesciunt natus ab voluptates consequatur porro vel magni.',
            date: '2020-01-01',
            img: 'news1.jpg',
            imgInfo: 'Noticia 1'
        },
        {
            id: 2,
            title: 'Jogo de quarta-feira termina empatado',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque impedit, praesentium, reiciendis non at odit aut dolores exercitationem, eos distinctio mollitia? Quas, sit? Quasi fugiat maxime consectetur iste est blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quisquam vero distinctio id dicta qui, minima alias porro necessitatibus. Neque, culpa dolores nesciunt natus ab voluptates consequatur porro vel magni.',
            date: '2020-12-30',
            img: 'news2.jpg',
            imgInfo: 'Noticia 2'
        },
        {
            id: 3,
            title: 'A inauguraçao do novo estadio sera semana que vem',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque impedit, praesentium, reiciendis non at odit aut dolores exercitationem, eos distinctio mollitia? Quas, sit? Quasi fugiat maxime consectetur iste est blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quisquam vero distinctio id dicta qui, minima alias porro necessitatibus. Neque, culpa dolores nesciunt natus ab voluptates consequatur porro vel magni.',
            date: '2020-12-25',
            img: 'news3.jpg',
            imgInfo: 'Noticia 3'
        }]
    },
    getters: {
        getNews(state) {
            return state.news;
        },
        getNewsFromId: state => id => {
            let notice = state.news.find(item => {
                return (item.id == id)
            });

            return notice;
        }
    }
}
