const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            product: 'Socks',
            brand: 'Vue Mastery',
            description: 'A warm and fuzzy pair of socks',
            selectedVariant: 0,
            url: 'https://marlboro.frhsd.com/',
            onSale: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
            ],
            sizes: ['S', 'M', 'L', 'XS']
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index
        },
        removeFromCart() {
            this.cart -= 1
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inventory() {
            return this.variants[this.selectedVariant].quantity
        },
        sale() {
            return this.brand + ' ' + this.product + ' is on sale!'
        }
    }
})