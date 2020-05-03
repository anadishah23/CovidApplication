import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LatestNewsService } from '../latest-news.service';
import { FormControl, FormArray, Validators } from '@angular/forms';
import { AuthGuard } from 'src/app/authentication/authentication.guard';
import { LatestNewsListComponent } from '../latest-news-list/latest-news-list.component';
import { NewsInfo } from 'src/app/model/add-news.model';
import { LoggingService } from 'src/app/logging.service';
@Component({
  selector: 'app-add-new-news',
  templateUrl: './add-new-news.component.html',
  styleUrls: ['./add-new-news.component.scss'],
  providers: [LatestNewsService,AuthGuard,LatestNewsListComponent]
})
export class AddNewNewsComponent implements OnInit {

  newform : NewsInfo;
  addNewsForm : FormGroup;

  constructor(private router: Router,
              private latestNewsService :LatestNewsService,
              private route: ActivatedRoute,
              public fb: FormBuilder,
              private Log:LoggingService
              ) {
     }

  ngOnInit() {
          this.initForm();
  }

  onSubmit(newform : NewsInfo) {
      this.Log.loggingInfo("Adding new News");
      this.latestNewsService.addNews(newform).subscribe();
      this.router.navigate(['../'], {relativeTo: this.route});
    }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {

    this.addNewsForm = this.fb.group({
      id : ["",[Validators.required]],
      newsTitle: ["", [Validators.required, Validators.minLength(5)]],
      imagePath: ["", Validators.required],
      description: ["",[Validators.required,Validators.minLength(5)]],
      summary: ["", [Validators.required, Validators.minLength(5)]],
      fullNews: ["", [Validators.required, Validators.minLength(5)]]
  });

  }

}
