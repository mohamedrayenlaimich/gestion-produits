import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {

constructor(private readonly service: ProductsService) {}
@Get()
findAll() { return this.service.findAll(); }
@Get(':id')
findOne(@Param('id') id: string) {
return this.service.findOne(+id);
}
}