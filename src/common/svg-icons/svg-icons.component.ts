import { Component, Input } from '@angular/core';

@Component({
  selector: 'svg-icons',
  templateUrl: './svg-icons.component.html',
  styleUrls: ['./scss/svg-icons.scss']
})


export class SvgIconsComponent {
    @Input() icon: string;
  }
