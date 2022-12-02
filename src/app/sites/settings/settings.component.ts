import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderModel } from 'src/app/shared/models/structure-html/header.model';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { CreateTxtFromPathHelper } from 'src/app/shared/helpers/create-txt-from-path.helper';

@Component({
  selector: 'app-settings',
  template: `
    <div class="container">
      <div class="header">
        <mat-icon>{{header.icon}}</mat-icon>
        <h2>{{header.title}}</h2>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {

  // obiekt budujacy glowony header
  header: HeaderModel = { icon: 'tune', title: '' };

  // w tym miejscu beda przypisywane subskrypcje
  private subscription: Subscription | undefined;

  // outsourcing function

  // tworzy nazwe pobrana z url, do utworzenia wlasciwego naglowka
  private createTxtFromPathHelper = CreateTxtFromPathHelper;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

    // przypisz odpowiedni naglowek przy starcie aplikacji
    this.header.title = this.activatedRoute.snapshot.firstChild?.url[0]?.path
      ? this.createTxtFromPathHelper(this.activatedRoute.snapshot.firstChild?.url[0]?.path)
      : 'Ustawienia';
  }

  ngOnInit(): void {

    // Obserwuj url i przypisz odpowiedni naglowek
    this.subscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => this.header.title = this.createTxtFromPathHelper(event.url.toString()));
  }

  ngOnDestroy(): void { this.subscription?.unsubscribe(); }
}
