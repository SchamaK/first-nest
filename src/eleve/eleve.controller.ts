import { Controller, Get, Param, Post, Body, Res } from '@nestjs/common';
import { EleveService } from './eleve.service';
import { Eleve } from './interfaces/eleve.interface';
import { createEleveDto } from './dto/create-eleve.dto';

@Controller('eleve')
export class EleveController {
  constructor(private readonly eleveService: EleveService) {}
  @Get()
  findAll(): Eleve[] {
    return this.eleveService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eleveService.findOne(id);
  }
  @Post('/create')
  CreateOne(@Body() newEleve: createEleveDto): any {
    this.eleveService.CreateOne(newEleve);
  }
  @Post('/delete/:id')
  DeleteOne(@Param('id') id: string): any {
    this.eleveService.DeleteOne(id);
  }
  @Post('/update/:id')
  UpdateOne(@Param('id') id: string, @Body() updateEleve: createEleveDto): any {
    console.log(updateEleve);
    this.eleveService.updateOne(id, updateEleve);
  }
}
