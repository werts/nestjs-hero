import { heroRepositoryToken } from './../app.providers.token';
import { Hero } from './hero.entity';
import { Repository } from 'typeorm';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class HeroService {
  constructor(
    @Inject(heroRepositoryToken)
    private readonly heroRepository: Repository<Hero>,
  ) { }

  async findAll(): Promise<Hero[]> {
    return await this.heroRepository.find();
  }

  async findOne(heroId): Promise<Hero> {
    return await this.heroRepository.findOne(heroId);
  }

  async updateHero(heroId, hero): Promise<any> {
    return await this.heroRepository.update(heroId, hero);
  }

  async wizard(hero: Hero): Promise<any> {
    return await this.heroRepository.save(hero);
  }

  async deleteOne(heroId): Promise<any> {
    return await this.heroRepository.delete({ id: heroId });
  }
}