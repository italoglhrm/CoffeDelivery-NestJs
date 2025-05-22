"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    coffees = [
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
    ];
    getHello() {
        return 'Hello World!';
    }
    createCoffee(coffee) {
        this.coffees.push(coffee);
    }
    getCoffees() {
        return this.coffees;
    }
    getCoffeeDetails(id) {
        return this.coffees.find((coffee) => coffee.id === id);
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map