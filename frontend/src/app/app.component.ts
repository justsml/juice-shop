import { Component, type OnInit, inject } from '@angular/core'
import { dom } from '@fortawesome/fontawesome-svg-core'
import { RouterOutlet } from '@angular/router'
import { BrandingService } from './Services/branding.service'
import { WelcomeComponent } from './welcome/welcome.component'
import { ChallengeSolvedNotificationComponent } from './challenge-solved-notification/challenge-solved-notification.component'
import { CtfSystemWideNotificationComponent } from './ctf-system-wide-notification/ctf-system-wide-notification.component'
import { ServerStartedNotificationComponent } from './server-started-notification/server-started-notification.component'
import { NavbarComponent } from './navbar/navbar.component'
import { SidenavComponent } from './sidenav/sidenav.component'
import { MatSidenavContainer, MatSidenav } from '@angular/material/sidenav'

dom.watch()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [MatSidenavContainer, MatSidenav, SidenavComponent, NavbarComponent, ServerStartedNotificationComponent, ChallengeSolvedNotificationComponent, CtfSystemWideNotificationComponent, WelcomeComponent, RouterOutlet]
})
export class AppComponent implements OnInit {
  private readonly brandingService = inject(BrandingService)

  ngOnInit (): void {
    this.brandingService.applyBranding()
  }
}
