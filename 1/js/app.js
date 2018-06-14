var app = new Vue({

    el: '#app',
    data: {
        product: 'Medyas',
        description: 'Fuzzy Medyas',
        image: 'image/vm-socks-blue.png',
        altText: 'Pair of Socks',
        link: 'https://github.com/jesraygarciano',
        targetBlank: '_blank',
        inStock: 2,
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
                variantImage: 'image/vm-socks-green.png'
            },
            {
                variantId: 2213,
                variantColor: "Blue",
                variantImage: 'image/vm-socks-blue.png'
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
        updateProductColor(variantImage){
            this.image = variantImage  
        }
    }

});


// var product = "Socks";