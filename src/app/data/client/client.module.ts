import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRepository } from 'src/app/domain/client/client-repository';
import { ClientRepositoryImpl } from './client-repository-impl';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: ClientRepository, useClass: ClientRepositoryImpl}
  ]
})
export class ClientModule {
}
