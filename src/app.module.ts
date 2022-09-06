import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientModule } from './patient/patient.module';
import {Patient} from './patient/entities/patient.entity'
import { Rdv } from './patient/entities/rdv.entity';
import { Visite } from './patient/entities/visite.entity';
import { Typevisite } from './patient/entities/typevisite.entity';
@Module({
  imports: [PatientModule,TypeOrmModule.forRoot({type:'mysql',
  username:'root',
  host:'127.0.0.1',
  password:'root',
  port:3306,
  // database:'docteur',
  database:'testorm',
  entities:[Patient,Rdv,Visite,Typevisite],
  synchronize:true

})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
