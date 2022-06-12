import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transfertSearch'
})
export class TransfertSearchPipe implements PipeTransform {

  transform(transferts: any[],term?: string): any[]  {
    if(!transferts || !term )
    return transferts

  return transferts.filter((transfert) => transfert.title.toLowerCase().includes(term.toLowerCase()))  }
}
