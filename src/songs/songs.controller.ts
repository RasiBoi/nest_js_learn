import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {

    constructor(private songsService: SongsService) {}

    @Post()
    create() {
        return this.songsService.create('Animals by Martin Garrix');
    }

    @Get()
    findAll() {
        return this.songsService.findAll();
    }

    @Get(':id')
    findOne() {
        return 'This action returns a single song';
    }

    @Put(':id')
    update() {
        return 'This action updates a song based on id';
    }

    @Delete(':id')
    remove() {
        return 'This action removes a song based on id';
    }
}
