import { Component, inject } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-banner-nav',
  templateUrl: './banner-nav.component.html',
  styleUrls: ['./banner-nav.component.css']
})
export class BannerNavComponent {

  servicio = inject(UsersService);

}
