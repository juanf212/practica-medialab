import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"]
})
export class NewsComponent implements OnInit {
  title = "XXI Semana de la Ciencia y la Innovación";
  date = "15 y 16 de noviembre";
  text =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error asperiores pariatur, deserunt officiis quae, deleniti perferendis aliquam sequi doloremque quia quaerat autem ab. Nam nostrum, voluptas nulla distinctio impedit accusantium?";
  constructor() {}

  ngOnInit() {}
}
