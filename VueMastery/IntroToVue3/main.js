const app = Vue.createApp({
    data() {
        return {
            product: 'Shoes',
            productDescription: 'Shoes description',
            image: './assets/images/socks_green.jpg',
            url: 'https://google.com',
            inStock: false,
            inventory: 20,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green'},
                { id: 2235, color: 'blue'},
            ],
            sizes: ['Small', 'Large', 'Extra Large']

        }
    }
})
