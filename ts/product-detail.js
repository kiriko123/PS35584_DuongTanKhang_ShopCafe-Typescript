function showProductDetail(product) {
    return "\n    <h2>".concat(product.ten_sp, "</h2>\n    <img src=\"").concat(product.hinh, "\" alt=\"").concat(product.ten_sp, "\">\n    <p>Price: ").concat(product.gia, " VND</p>\n    <p>SKU: ").concat(product.sku, "</p>\n    // ... Hi\u1EC3n th\u1ECB th\u00EAm th\u00F4ng tin chi ti\u1EBFt ...\n  ");
}
var urlParams = new URLSearchParams(window.location.search);
console.log(urlParams);
var productId = urlParams.get('id');
if (productId) {
    fetch('./dbCaphe.json')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        console.log(data);
        var product = data.san_pham.find(function (p) { return p.id === productId; });
        if (product) {
            document.getElementById('product-info').innerHTML = showProductDetail(product);
        }
        else {
            document.getElementById('product-info').innerHTML = "<p>Product not found.</p>";
        }
    });
}
else {
    document.getElementById('product-info').innerHTML = "<p>Product ID not found in URL.</p>";
}
