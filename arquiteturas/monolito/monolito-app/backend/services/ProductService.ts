import { Product } from '../models/Product';

export class ProductService {
    async createProduct(productData: Omit<Product, 'id'>): Promise<Product> {
        // Lógica de negócio para criar produto
        return {} as Product;
    }

    async getProducts(): Promise<Product[]> {
        // Lógica de negócio para buscar produtos
        return [] as Product[];
    }
}
