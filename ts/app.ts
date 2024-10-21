// Interfaces for the data structure
interface Category {
    id: string;
    ten_loai: string;
    thu_tu: number;
    an_hien: number;
}

interface Product {
    id: string;
    ten_sp: string;
    sku: string;
    gia: string;
    id_loai: string;
    hinh: string;
}

interface Brand {
    id: string;
    ten: string;
    thu_tu: number;
    an_hien: number;
}

interface Service {
    id: string;
    ten: string;
    thu_tu: number;
    an_hien: number;
}

// Function to display categories
function showCategories(categories: Category[]): string {
    return categories.map(category => `
        <div>
            <h3>${category.ten_loai}</h3>
            <p>Order: ${category.thu_tu}</p>
        </div>
    `).join('');
}

// Function to display products
function showProducts(products: Product[]): string {
    return products.map(product => `
        <div>
            <img src="${product.hinh}" alt="${product.ten_sp}" width="100">
            <a href="product-detail.html?id=${product.id}"><h3>${product.ten_sp}</h3></a> 
            <p>Price: ${product.gia} VND</p>
            <p>SKU: ${product.sku}</p>
        </div>
    `).join('');
}

// Function to display brands
function showBrands(brands: Brand[]): string {
    return brands.map(brand => `
        <div>
            <h3>${brand.ten}</h3>
            <p>Order: ${brand.thu_tu}</p>
        </div>
    `).join('');
}

// Function to display services
function showServices(services: Service[]): string {
    return services.map(service => `
        <div>
            <h3>${service.ten}</h3>
            <p>Order: ${service.thu_tu}</p>
        </div>
    `).join('');
}

fetch('./dbCaphe.json')
    .then(response => response.json())
    .then(data => {
        document.querySelector('#dataCategories')!.innerHTML = showCategories(data.loai); // Sửa dòng này
        document.querySelector('#dataProducts')!.innerHTML = showProducts(data.san_pham);
        document.querySelector('#dataBrands')!.innerHTML = showBrands(data.thuong_hieu);
        document.querySelector('#dataServices')!.innerHTML = showServices(data.dich_vu);
    });

