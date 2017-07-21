import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'svg-icons',
  templateUrl: './svg-icons.component.html',
  styleUrls: ['./scss/svg-icons.scss']
})


export class SvgIconsComponent implements OnInit {

  private numberOfIconsToShow;

    @Input() icon: string;
    @Input() repeat: number;

  ngOnInit() {
    this.numberOfIconsToShow = new Array(this.repeat);
  }

  }
