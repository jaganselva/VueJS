const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            premium: true,
            details: 'here are the details'
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },

        removeFromCart() {
            this.cart -= 1
        }
    }
})
