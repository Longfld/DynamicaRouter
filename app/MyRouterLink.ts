
import {Component, ViewContainerRef, Compiler,
  ComponentRef, ComponentFactory, ViewChild, ComponentMetadata} from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';
import {DataServices} from './DataServices';

@Component({
  selector: 'my-router-link',
  template: '<div #mymenu></div>',
  directives: [ROUTER_DIRECTIVES],
  providers: [DataServices]
})

export class MyRouterLink {
  @ViewChild('mymenu', { read: ViewContainerRef }) target: ViewContainerRef;
  private cmpRef: ComponentRef<any>;

  constructor(private dataServices: DataServices, private compiler: Compiler, private _viewContainerRef: ViewContainerRef) { }

  ngAfterViewInit() {
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
    this.dataServices.GetMenuLinks()
      .subscribe(returnedmenu =>
        (
          (this.compileToComponent(returnedmenu)).then((factory: ComponentFactory<any>) => {
            this.cmpRef = this.target.createComponent(factory)
          })
        ),
      error => console.log(<any>error)
      );
  }

  ngOnDestroy() {
    if (this.cmpRef) {
      this.cmpRef.destroy();
      this.cmpRef = null;
    }
  }

  compileToComponent(template1: string): Promise<ComponentFactory<any>> {
    const metadata = new ComponentMetadata({
      template: template1,
      directives: ROUTER_DIRECTIVES
    });
    let decoratedCmp = Component(metadata)(class DynamicComponent { });
    return this.compiler.compileComponentAsync(decoratedCmp);
  }
}
