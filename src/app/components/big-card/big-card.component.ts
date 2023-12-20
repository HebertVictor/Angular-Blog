import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent implements OnInit {
  @Input()
  imageCover: string =
    'https://th.bing.com/th/id/OIP.whbhQ4JYOIz-WvVS7tIXFAHaEK?w=333&h=187&c=7&r=0&o=5&pid=1.7';

  @Input()
  cardTitle: string = '';

  @Input()
  cardDescription: string = '';

  constructor() {}

  ngOnInit(): void {}
}
