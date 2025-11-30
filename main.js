const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'A warm and fuzzy pair of socks',
            image: './assets/images/socks_green.jpg',
            url: 'https://marlboro.frhsd.com/',
            inventory: 100,
            onSale: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' }
            ],
            sizes: ['S', 'M', 'L', 'XS']
        }
    }
})