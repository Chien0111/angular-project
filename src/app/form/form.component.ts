import { Component, OnInit } from '@angular/core';
import { ServerHttpService } from '../Services/server-http.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public name = '';
  public password = '';
  public vehicles = ['Toyota', 'Honda', 'Nissan', 'Ford', 'Mustang'];
  private selectedVehicle = '';
  public posts = []

  constructor(
    private serverHttp: ServerHttpService
  ) {}

  ngOnInit(): void {
    this.serverHttp.getPosts().subscribe((data) => {
      console.log('posts', data);
      this.posts = data;
    });
  }

  public addPost() {
    const newData = { title: 'chien', author: 'author testing' };
    this.serverHttp.addPosts(newData).subscribe((data) => {
      console.log('addPost', data);
      this.posts.push(data);
    });
  }

  public onSubmit() {
    console.log('onSubmit');
    console.log('name = ' + this.name);
    console.log('password = ' + this.password);
    console.log('selected Vehicle = ' + this.selectedVehicle);
  }

  public selectVehicle(event) {
    // console.log('selectVehicle', event.target.value);
    this.selectedVehicle = event.target.value;
  }
}
