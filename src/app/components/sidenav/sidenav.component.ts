import { Component, OnInit } from '@angular/core';

interface NavItem {
  title: string;
  icon?: string;
  link: string;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  navItems: NavItem[] = [
    { title: 'customers', icon: 'bi bi-briefcase-fill', link: 'customers' },
    { title: 'contacts', icon: 'bi bi-journal', link: 'contacts' },
    { title: 'leads', icon: 'bi bi-person-bounding-box', link: 'leads' },
    { title: 'reports', icon: 'bi bi-file-earmark-bar-graph', link: 'reports' },
    { title: 'integrations', icon: 'bi bi-layers-fill', link: 'integrations' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
