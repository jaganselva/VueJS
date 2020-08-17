const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true,
            details: 'here are the details'
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },

        removeById(id) {
            const index = this.cart.indexOf(id)
                if (index > -1) {
                    this.cart.splice(index, 1)
                }
        }
    }
})
