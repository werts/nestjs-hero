import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { heroProviders } from './hero.providers';
import { HeroService } from './hero.service';
import { HeroController } from './hero.controller';

@Module({
  imports: [DatabaseModule],
  providers: [...heroProviders, HeroService],
  controllers: [HeroController]
})
export class HeroModule { }
