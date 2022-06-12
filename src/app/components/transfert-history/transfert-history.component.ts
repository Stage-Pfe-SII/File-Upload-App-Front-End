import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-transfert-history',
  templateUrl: './transfert-history.component.html',
  styleUrls: ['./transfert-history.component.scss']
})
export class TransfertHistoryComponent implements OnInit {

  user:any;
  term = '';
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUser(1).subscribe(
      data=> this.user = data
    )
  }

  onSearch(term: string): void {
    this.term = term;
  }
}
