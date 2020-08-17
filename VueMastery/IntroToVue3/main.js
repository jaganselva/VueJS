const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'VueMastery',
            productDescription: 'Socks description',
            //image: './assets/images/socks_green.jpg',
            selectedVariant: 0,
            url: 'https://google.com',
            //inStock: false,
            //inventory: 0,
            onSale: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
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

        updateVariant(index) {
            this.selectedVariant = index
        
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        }
    }
})
