var app = new Vue({

    el: '#app',
    data: {
        brand: 'Gart',
        product: 'Vue Sock',
        description: 'Fuzzy socks',
        // image: 'image/vm-socks-blue.png',
        selectedVariant: 0,
        altText: 'Pair of Socks',
        link: 'https://github.com/jesraygarciano',
        targetBlank: '_blank',
        // inStock: false,
        onSale: true,
        details: [
            "80% cotton",
            "20% polyester",
            "Gender-neutral"
        ],
        variants: [
            {
                variantId: 2212,
                variantColor: "Green",
                variantImage: 'image/vm-socks-green.png',
                variantQuantity: 0
            },
            {
                variantId: 2213,
                variantColor: "Blue",
                variantImage: 'image/vm-socks-blue.png',
                variantQuantity: 32
            }
        ],
        sockSizes: [
            "Small",
            "Medium",
            "Large",
            "Extra Large"
        ],
        cart: 0
    },
    methods: {
        addToCart(){
            this.cart += 1;
        },
        removeToCart(){

            if(this.cart == 0){
                this.cart == 0;
            }else{
                this.cart -= 1;
            }
        },
        updateProductColor(index){
            this.selectedVariant = index
            console.log(index)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        }
        
    }


});


// var product = "Socks";