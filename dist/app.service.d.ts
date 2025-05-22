export interface Coffee {
    nome: string;
    tipo: string;
    quantidade?: number;
    preco?: number;
    id: string;
    descricao?: string;
    tags?: string[];
}
export declare class AppService {
    private coffees;
    getHello(): string;
    createCoffee(coffee: Coffee): void;
    getCoffees(): Coffee[];
    getCoffeeDetails(id: string): Coffee | undefined;
}
