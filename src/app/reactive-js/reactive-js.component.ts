import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-reactive-js',
  templateUrl: './reactive-js.component.html',
  styleUrls: ['./reactive-js.component.css']
})
export class ReactiveJsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    this.mouseLog();

    const obs = Observable.create((observer: any) => {
      observer.next('Welcome Back Developer');
      observer.next('Welcome Back Developer again');
      observer.next('again Welcome Back Developer again');
    });

    obs.subscribe(x => this.addToList(x));

    obs.subscribe(y => this.addToList('Seconds subscriber: ' + y));

  }

  addToList(value: any) {
    const node = document.createElement('li');
    node.appendChild(document.createTextNode(value));
    document.getElementById('observable-list').appendChild(node);
  }

  mouseLog() {
    fromEvent(document.body, 'mousemove')
    .subscribe((e: any) => console.log(e.pageX, e.pageY));
  }

}
