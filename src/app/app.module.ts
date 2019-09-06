import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { AttributeComponent } from './components/attribute/attribute.component';
import { ChildComponent } from './components/child/child.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { CustomPipeOneComponent } from './components/custom-pipe-one/custom-pipe-one.component';
import { FormatDataPipe } from './pipe/format-data.pipe';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NgForComponent,
    AttributeComponent,
    ChildComponent,
    UserListComponent,
    PipeComponent,
    CustomPipeOneComponent,
    FormatDataPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
