import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';  // Import FontAwesomeModule
import { faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';  // Import Custon Icons I Needed

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],  // Add FontAwesomeModule here
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']  // Fix typo: styleUrl -> styleUrls
})
export class HeaderComponent {
  faBell = faBell;  // Define the bell icon
  faUserCircle = faUserCircle;  // Define the user icon
}
