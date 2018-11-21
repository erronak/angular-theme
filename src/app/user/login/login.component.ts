import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data: any = {};
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.addClass(document.body, 'login-page');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'login-page');
  }

  onSubmit() {
    alert(JSON.stringify(this.data));
  }

}
