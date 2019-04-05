import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/config/posts';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  public post: Post;
  public postForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private restService: PostService,

    ) { }

  public ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void {
    this.postForm = this.fb.group({
      title: [''],
      url: [''],
      description: ['']
    });
  }

  public onSave(): void {
    console.log('Saving...');

  }

  public onCancel(): void {
    console.log('Cancelled');

  }

}
