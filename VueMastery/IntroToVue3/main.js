const app = Vue.createApp({
    data() {
        return {
            product: 'Shoes',
            productDescription: 'Shoes description',
            image: './assets/images/socks_green.jpg',
            url: 'https://google.com',
            inStock: false,
            inventory: 20,
            onSale: true
        }
    }
})
