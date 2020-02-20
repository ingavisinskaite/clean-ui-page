import { Component, OnInit, Input } from "@angular/core";
import { Widget } from "src/app/models/widget.model";
import { HeaderType } from "src/app/models/header-type.model";

@Component({
  selector: "app-table-widget",
  templateUrl: "./table-widget.component.html",
  styleUrls: ["./table-widget.component.scss"]
})
export class TableWidgetComponent implements OnInit {
  constructor() {}
  HeaderType = HeaderType;

  @Input() widgetData: Widget;

  ngOnInit(): void {}
}
