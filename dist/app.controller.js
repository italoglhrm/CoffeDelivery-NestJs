"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const create_coffee_dto_1 = require("./create-coffee.dto");
const class_validator_1 = require("class-validator");
let AppController = class AppController {
    appService;
    constructor(appService) {
        this.appService = appService;
    }
    getCoffeeDetails(id) {
        const coffee = this.appService.getCoffeeDetails(id);
        if (!coffee) {
            throw new common_1.NotFoundException(`Café com ID ${id} não encontrado`);
        }
        return coffee;
    }
    createCoffee(createCoffeeDto) {
        const errors = (0, class_validator_1.validateSync)(Object.assign(new create_coffee_dto_1.CreateCoffeeDto(), createCoffeeDto));
        if (errors.length > 0) {
            throw new common_1.BadRequestException(errors);
        }
        const newCoffee = { ...createCoffeeDto };
        this.appService.createCoffee(newCoffee);
        return {
            message: 'Café criado com sucesso',
            cafe: newCoffee
        };
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)('coffes/:id/detalhes'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getCoffeeDetails", null);
__decorate([
    (0, common_1.Post)('coffee-create'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_coffee_dto_1.CreateCoffeeDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "createCoffee", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map