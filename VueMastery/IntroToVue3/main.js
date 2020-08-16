const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            productDescription: 'Socks description',
            image: './assets/images/socks_green.jpg',
            url: 'https://google.com',
            inStock: false,
            inventory: 20,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'},
            ],
            sizes: ['Small', 'Large', 'Extra Large'],
            

        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },

        removeFromCart() {
            this.cart -= 1
        },

        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})
