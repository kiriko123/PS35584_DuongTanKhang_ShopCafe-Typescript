// Function to display categories
function showCategories(categories) {
    return categories.map(function (category) { return "\n        <div>\n            <h3>".concat(category.ten_loai, "</h3>\n            <p>Order: ").concat(category.thu_tu, "</p>\n        </div>\n    "); }).join('');
}
// Function to display products
function showProducts(products) {
    return products.map(function (product) { return "\n        <div>\n            <img src=\"".concat(product.hinh, "\" alt=\"").concat(product.ten_sp, "\" width=\"100\">\n            <a href=\"product-detail.html?id=").concat(product.id, "\"><h3>").concat(product.ten_sp, "</h3></a> \n            <p>Price: ").concat(product.gia, " VND</p>\n            <p>SKU: ").concat(product.sku, "</p>\n        </div>\n    "); }).join('');
}
// Function to display brands
function showBrands(brands) {
    return brands.map(function (brand) { return "\n        <div>\n            <h3>".concat(brand.ten, "</h3>\n            <p>Order: ").concat(brand.thu_tu, "</p>\n        </div>\n    "); }).join('');
}
// Function to display services
function showServices(services) {
    return services.map(function (service) { return "\n        <div>\n            <h3>".concat(service.ten, "</h3>\n            <p>Order: ").concat(service.thu_tu, "</p>\n        </div>\n    "); }).join('');
}
fetch('./dbCaphe.json')
    .then(function (response) { return response.json(); })
    .then(function (data) {
    document.querySelector('#dataCategories').innerHTML = showCategories(data.loai); // Sửa dòng này
    document.querySelector('#dataProducts').innerHTML = showProducts(data.san_pham);
    document.querySelector('#dataBrands').innerHTML = showBrands(data.thuong_hieu);
    document.querySelector('#dataServices').innerHTML = showServices(data.dich_vu);
});
