import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from 'src/app/config/posts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public posts: Array<Post>;
  constructor(private postService: PostService) {}
  public ngOnInit(): void {
    this.postService.getPosts().subscribe((res) => {
      this.posts = res;
    });
  }

}
