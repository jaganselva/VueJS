app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <!-- image goes here -->
        <img v-bind:src="image" 
        :class="{ 'out-of-stock-img': !inStock }"       
        >
      </div>
      <div class="product-info">
        <a :href="url"><h1>{{ title }}</h1></a>
        <p>{{ productDescription }}</p> 
        <p v-if="inStock">In Stock</p>           
        <p v-else>Out of Stock</p>

        <p>Shipping: {{ shipping }}</p>

        <!--<p v-if="inventory > 10">In Stock</p>
        <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
        <p v-else>Out of Stock</p>-->
        <p v-show="onSale">{{ title }} is On Sale</p>
        
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>
       
        <div 
          v-for="(variant, index) in variants" 
          :key="variant.id" 
          @mouseover="updateVariant(index)"
          class="color-circle"
          :style="{ backgroundColor: variant.color }"
          >              
        </div>
        <ul>
          <li v-for="size in sizes">{{ size }}</li>
        </ul>

        <!-- <button class="button" v-on:Click="cart += 1">Add to Cart</button> -->
        <button 
        class="button" 
        :class="{ disabledButton: !inStock }"
        :disabled="!inStock"
        v-on:Click="addToCart">+</button>
        
        <!--<div v-if="cart > 0">-->
        <button 
        class="button" 
        :class="{ disabledButton: !inStock }"
        :disabled="!inStock"
        @Click="removeFromCart">-</button>
        <!--</div>-->
      </div>
    </div>
  </div>`,
  data() {
    return {
        product: 'Socks',
        brand: 'VueMastery',
        productDescription: 'Socks description',
        //image: './assets/images/socks_green.jpg',
        selectedVariant: 0,
        url: 'https://google.com',
        //inStock: false,
        //inventory: 0,
        onSale: false,
        //details: ['50% cotton', '30% wool', '20% polyester'],
        variants: [
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
        ],
        sizes: ['Small', 'Large', 'Extra Large'],
        

    }
},
methods: {
    addToCart() {
        //this.cart += 1
        this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },

    removeFromCart() {
        //this.cart -= 1
        this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
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
    },
    shipping() {
        if (this.premium) {
            return 'Free'
        }
        return 2.99
    }
    
}
    
    
   

     

})