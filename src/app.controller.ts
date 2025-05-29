import { Body, Controller, Get, Param, Query, Post, NotFoundException, BadRequestException, HttpCode, HttpStatus } from '@nestjs/common';
import { AppService, Coffee } from './app.service';
import { CreateCoffeeDto } from './create-coffee.dto';
import { validateSync } from 'class-validator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('coffes/:id/detalhes')
  getCoffeeDetails(@Param('id') id: string) {
    const coffee = this.appService.getCoffeeDetails(id);
    if (!coffee) {
      throw new NotFoundException(`Café com ID ${id} não encontrado`);
    }
    return coffee;
  }

  @Post('coffee-create')
  @HttpCode(HttpStatus.CREATED)
  createCoffee(@Body() createCoffeeDto: CreateCoffeeDto) {
    const errors = validateSync(Object.assign(new CreateCoffeeDto(), createCoffeeDto));
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }

    const newCoffee: Coffee = { ...createCoffeeDto };
    this.appService.createCoffee(newCoffee);
    return {
      message: 'Café criado com sucesso',
      cafe: newCoffee
    };
  }

}
