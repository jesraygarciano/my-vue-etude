var app = new Vue({

    el: '#app',
    data: {
        product: 'Medyas',
        description: 'Fuzzy Medyas',
        image: 'image/vm-socks-blue.png',
        altText: 'Pair of Socks',
        link: 'https://github.com/jesraygarciano',
        targetBlank: '_blank',
        inStock: 8,
        onSale: true,
        details: [
            "80% cotton",
            "20% polyester",
            "Gender-neutral"
        ],
        variants: [
            {
                variantId: 2212,
                variantColor: "pusia"
            },
            {
                variantId: 2213,
                variantColor: "yellowpink"
            }
        ],
        sockSizes: [
            "Small",
            "Medium",
            "Large",
            "Extra Large"
        ]
    }

});


// var product = "Socks";