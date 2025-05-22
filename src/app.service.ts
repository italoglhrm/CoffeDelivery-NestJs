import { Injectable } from '@nestjs/common';

export interface Coffee {
  nome: string,
  tipo: string,
  quantidade?: number;
  preco?: number;
  id: string;
  descricao?: string;
  tags?: string[]
}

@Injectable()
export class AppService {

  private coffees: Coffee[] = [
      {
        nome: 'expresso',
        tipo: 'expresso',
        quantidade: 1,
        preco: 4,
        id: '1',
    },
    {
      nome: 'Paraíso',
      tipo: 'Forte',
      quantidade: 2,
      preco: 25.6,
      id: '22',
      descricao: 'Café encorpado com notas intensas de cacau e aroma marcante',
      tags: ['intenso', 'cacau', 'tradicional']
    }
  ]

  getHello(): string {
    return 'Hello World!';
  }

  createCoffee(coffee: Coffee) {
    this.coffees.push(coffee);
  }

  getCoffees(): Coffee[] {
    return this.coffees
  }

  getCoffeeDetails(id: string): Coffee | undefined {
    return this.coffees.find((coffee) => coffee.id === id)
  }
}
