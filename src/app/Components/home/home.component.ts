import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for condational
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { HighlightedInputTextPipe } from '../Pipes/highlighted-input-text-pipe.pipe'

interface Vacation {
  imgSrc: string;
  name: string;
  submittedOn: string;
  duration: string;
  salary: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HighlightedInputTextPipe
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  vacationData: Vacation[] = [
    {
      imgSrc: "assets/img/profile-1.jpg",
      name: "Motasem Ahmad",
      submittedOn: "1/3/2024",
      duration: "2 Weeks (1/4/2023 - 14/4/2023)",
      salary: "2500 AED"
    },
    {
      imgSrc: "assets/img/profile-2.jpg",
      name: "Sara Khaled",
      submittedOn: "10/1/2024",
      duration: "1 Month (11/1/2024 - 10/2/2024)",
      salary: "4000 AED"
    },
    {
      imgSrc: "assets/img/profile-3.jpg",
      name: "Omar Ali",
      submittedOn: "15/2/2024",
      duration: "3 Weeks (8/4/2023 - 27/4/2023)",
      salary: "3000 AED"
    },
    {
      imgSrc: "assets/img/profile-4.jpg",
      name: "Doha Hamed",
      submittedOn: "25/12/2023",
      duration: "1 Week (1/1/2024 - 7/1/2024)",
      salary: "1500 AED"
    }
  ];

  searchTerm: string = '';
  get filteredVacationData() {
    return this.vacationData
      .filter(vacation => vacation.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
      ;
  }

  getSalaryValue(salary: string): number {
    return parseFloat(salary.replace(/[^\d]/g, ''));
  }
}
