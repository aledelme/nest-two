import { Controller, Get } from '@nestjs/common';

@Controller('')
export class HelloController {

    @Get('/hello')
    index() {
        return 'Hola a todos'
    }
}
