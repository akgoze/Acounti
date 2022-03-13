import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'el-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() btnType: null | 'submit' | 'button' | 'reset' = null;
  @Input() btnStyle: null | 'solid' | 'outline' | 'textlink' = null;;
  @Input() btnSize: null | 'sm' | 'md' | 'lg' = 'md';
  @Input() btnColor: null | 'orange' | 'yellow' | 'blue' | 'green' | 'pink' = null;
  @Input() btnDisabled: boolean = false;
  @Input() btnIcon: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
