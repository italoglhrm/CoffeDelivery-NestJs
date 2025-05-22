import { AppService, Coffee } from './app.service';
import { CreateCoffeeDto } from './create-coffee.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getCoffeeDetails(id: string): Coffee;
    createCoffee(createCoffeeDto: CreateCoffeeDto): {
        message: string;
        cafe: Coffee;
    };
}
