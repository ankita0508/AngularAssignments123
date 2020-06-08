import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-generator',
  templateUrl: './color-generator.component.html',
  styleUrls: ['./color-generator.component.scss']
})
export class ColorGeneratorComponent implements OnInit {

  constructor() { }

  backcolor: string;
  fontcolor: string;
  backhex: string;
  fonthex: string;
  red; green; blue; fontred; fontgreen; fontblue;

  ngOnInit(): void {
    this.red = 0;
    this.green = 0;
    this.blue = 0;
    this.fontred = 0;
    this.fontgreen = 0;
    this.fontblue = 0;
    this.backcolor = this.changeColor(this.red, this.green, this.blue);
    this.backhex = this.rgbToHex(this.red, this.green, this.blue);
    this.fontcolor = this.changeColor(this.fontred, this.fontgreen, this.fontblue);
    this.fonthex = this.rgbToHex(this.fontred, this.fontgreen, this.fontblue);
  }

  changeBackColor(){
    this.backcolor = this.changeColor(this.red, this.green, this.blue);
    this.backhex = this.rgbToHex(this.red, this.green, this.blue);
  }

  changeFontColor(){
    this.fontcolor = this.changeColor(this.fontred, this.fontgreen, this.fontblue);
    this.fonthex = this.rgbToHex(this.fontred, this.fontgreen, this.fontblue);
  }

  changeColor(red, green, blue){
    var color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    this.rgbToHex(red, green, blue);
    return color;
  }

  componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  rgbToHex(r, g, b) {
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }
}
