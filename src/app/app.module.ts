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
import { Pipe01Component } from './components/pipe01/pipe01.component';
import { SortNumberPipe } from './pipe/sort-number.pipe';
import { CapitalizePipe } from './pipe/capitalize.pipe';
import { Pipe02Component } from './components/pipe02/pipe02.component';
import { SortPipe } from './pipe/sort.pipe';
import { LodashComponent } from './components/lodash/lodash.component';
import { TemplateReferenceVariablesComponent } from './components/template-reference-variables/template-reference-variables.component';
import { LifecycleHookComponent } from './components/lifecycle-hook/lifecycle-hook.component';
import { OtherLifecycleComponent } from './components/other-lifecycle/other-lifecycle.component';
import { LifecycleHook2Component } from './components/lifecycle-hook2/lifecycle-hook2.component';

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
    FilterPipe,
    Pipe01Component,
    SortNumberPipe,
    CapitalizePipe,
    Pipe02Component,
    SortPipe,
    LodashComponent,
    TemplateReferenceVariablesComponent,
    LifecycleHookComponent,
    OtherLifecycleComponent,
    LifecycleHook2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
