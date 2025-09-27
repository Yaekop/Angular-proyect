import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-structural-directives-page',
  standalone: true,
  imports: [],
  templateUrl: './structural-directives-page.component.html',
})
export class StructuralDirectivesPageComponent {
  isVisible = signal(true);
  toggleVisibility(){
    this.isVisible.update(v => !v);
  }
  //condicional switch
  viewMode = signal<'none'| 'list'|'grid'>('none');

  setViewMode(mode:'none'| 'list' |'grid'){
    this.viewMode.set(mode);
  }
  //ciclo for loop
  users = signal ([
    {id:1, name: 'Alice', role: 'admin'},
    {id:2, name: 'bob', role: 'user'},
    {id:3, name: 'Alice', role: 'user'}

  ]);
 }
