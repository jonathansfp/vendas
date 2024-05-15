import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CacheService } from './../cache/cache.service';
import { CityEntity } from './entities/city.entity';


@Injectable()
export class CityService {
    constructor(
        @InjectRepository(CityEntity)
        private readonly cityRepository: Repository<CityEntity>,

        private readonly CacheService: CacheService,
    ) { }

    async getAllCitiesByStateId(stateId: number): Promise<CityEntity[]> {
        return this.CacheService.getCache<CityEntity[]>(`state_${stateId}`, () =>
            this.cityRepository.find({
                where: {
                    stateId,
                },
            }),
        );
    }

    async findCityById(cityId: number): Promise<CityEntity> {
        const city = await this.cityRepository.findOne({
            where: {
                id: cityId
            }
        });

        if (!city) {
            throw new NotFoundException(`CityID: ${cityId} Not found.`)
        }

        return city;
    }
}
