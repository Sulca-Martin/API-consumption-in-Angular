import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../service/person.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get.component.html',
  styleUrl: './get.component.css',
})
export class GetComponent implements OnInit {
  persons: any[] = [];
  details: boolean[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.personService.getPerson(5).subscribe((data) => {
      this.persons = data.results;
    });
  }
  toggleDetails(index: number): void {
    this.details[index] = !this.details[index];
  }
}
