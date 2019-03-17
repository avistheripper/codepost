import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title;
  constructor(private postService: PostService) {}
  ngOnInit(): void {
    this.postService.getPosts().subscribe((res) => {
      this.title = res;
    });
  }
}
