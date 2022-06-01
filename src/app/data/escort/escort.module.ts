import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscortRepository } from 'src/app/domain/escort/escort-repository';
import { EscortRepositoryImpl } from './escort-repository-impl';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: EscortRepository, useClass: EscortRepositoryImpl}
  ]
})
export class EscortModule { }
