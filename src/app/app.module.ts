import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { MenuComponent } from "./components/menu/menu.component";
import { TableWidgetComponent } from "./components/table-widget/table-widget.component";
import { MessagesWidgetComponent } from "./components/messages-widget/messages-widget.component";
import { AppDataService } from "./services/app-data.service";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidenavComponent,
    MenuComponent,
    TableWidgetComponent,
    MessagesWidgetComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [AppDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
