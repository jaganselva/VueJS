app.component('product-details', {
    props: {
        details: {
            type: String,
            required: false
        }
    },
    template:
    /*html*/
    `<div class="product-details">
        <div class="product-container">
        <p>Details: {{ details }}</p>
        </div>
    </div>
    `,
    data() {
        return {
            
            details: 'test details'
            
            
    
        }
    },
    methods() {

    },
    computed() {
        
    }

})