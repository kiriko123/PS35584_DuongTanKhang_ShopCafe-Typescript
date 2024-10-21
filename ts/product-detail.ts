interface Product {
    id: string;
    ten_sp: string;
    sku: string;
    gia: string;
    id_loai: string;
    hinh: string;
}

function showProductDetail(product: Product): string {
    return `
    <h2>${product.ten_sp}</h2>
    <img src="${product.hinh}" alt="${product.ten_sp}">
    <p>Price: ${product.gia} VND</p>
    <p>SKU: ${product.sku}</p>
    // ... Hiển thị thêm thông tin chi tiết ...
  `;
}

const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams)
const productId = urlParams.get('id');

if (productId) {
    fetch('./dbCaphe.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const product = data.san_pham.find((p: Product) => p.id === productId);
            if (product) {
                document.getElementById('product-info')!.innerHTML = showProductDetail(product);
            } else {
                document.getElementById('product-info')!.innerHTML = "<p>Product not found.</p>";
            }
        });
} else {
    document.getElementById('product-info')!.innerHTML = "<p>Product ID not found in URL.</p>";
}