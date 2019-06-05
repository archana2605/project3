
import { Component, OnInit } from "@angular/core";
import { ApiserviceService } from "../apiservice.service";

@Component({
  selector: "app-examination-links",
  templateUrl: "./examination-links.component.html",
  styleUrls: ["./examination-links.component.css"]
})
export class ExaminationLinksComponent implements OnInit {
  public tabledata;
data :any;
  public getdata = new Array();

  constructor(private api: ApiserviceService) {}
  public getcategory;

  ngOnInit() {
    this.api.getcategory().subscribe((success: any) => {
      console.log("success", success);
      this.getcategory = success.data;
      this.getdata.push(this.getcategory);
      console.log(this.getdata);
    });
    (fail: any) => {
      console.log("fail", fail);
    };
  }
}
