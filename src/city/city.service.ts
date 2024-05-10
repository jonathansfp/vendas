import { CacheService } from './../cache/cache.service';
import { Inject, Injectable} from '@nestjs/common';
import { CityEntity } from './entities/city.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';

@Injectable()
export class CityService {
    constructor(
        @InjectRepository(CityEntity)
        private readonly cityRepository: Repository<CityEntity>,

        private readonly CacheService: CacheService,
        ){}

    async getAllCitiesByStateId(stateId: number): Promise<CityEntity[]>{        
            return this.CacheService.getCache<CityEntity[]>(`state_${stateId}`, () => 
                this.cityRepository.find({
                where: {
                    stateId,
                },
            }),
        );
    }
}
