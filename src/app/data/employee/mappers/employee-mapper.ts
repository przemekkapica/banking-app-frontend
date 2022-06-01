
import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';
import { Employee } from 'src/app/domain/employee/model/employee';
import { BidirectionalMapper } from '../../common/bidirectional-mapper';
import { EmployeeDTO } from '../dtos/employee-dto';

export class EmployeeMapper implements BidirectionalMapper<EmployeeDTO, Employee> {
  mapTo(param: Employee): EmployeeDTO {
    return {
        id: param.id,
        personId: param.id,
        createdDate: new Date(),
        salary: param.salary,
        post: param.post
    };
  }

  mapFrom(param: EmployeeDTO): Employee {
    return {
      id: param.id,
      salary: param.salary,
      post: param.post,
      firstName: param.personId, //???
      lastName: param.personId, 
      dateOfBirth: param.createdDate
   };
  }
}