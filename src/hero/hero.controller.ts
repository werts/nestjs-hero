import { Controller, Get, Delete, Put, Post, Param, Body } from '@nestjs/common';
import { HeroService } from './hero.service';

@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) { }

  @Get()
  heroes() {
    return this.heroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') heroId) {
    return this.heroService.findOne(heroId);
  }

  @Put(':id')
  updateHero(@Param('id') heroId, @Body() hero) {
    return this.heroService.updateHero(heroId, hero);
  }

  @Post()
  wizard(@Body() hero) {
    return this.heroService.wizard(hero);
  }

  @Delete(':id')
  deleteOne(@Param('id') heroId) {
    return this.heroService.deleteOne(heroId);
  }
}