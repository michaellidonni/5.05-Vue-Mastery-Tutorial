const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'A warm and fuzzy pair of socks',
            image: './assets/images/socks_green.jpg',
            url: 'https://marlboro.frhsd.com/',
            inventory: 100,
            onSale: false
        }
    }
})