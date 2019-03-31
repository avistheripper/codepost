import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/config/posts';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public post: Post;
  public postId: string;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute) {
    }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.postService.getPost(id)
        .subscribe(res => this.post = res);
    });
  }

}
