import { Component, OnInit } from '@angular/core';
import { SubredditService } from 'src/app/subreddit.service';

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.css']
})
export class RedditComponent implements OnInit {
  responseData;

  constructor(private subredditService: SubredditService) { }

  ngOnInit(): void {
    this.subredditService.getData().subscribe((response) => {
      this.responseData = response;
      console.log(this.responseData);
      console.log(this.responseData.data.children.length);
      console.log(this.responseData.data.children[0].data.title);
    });
  }

}
