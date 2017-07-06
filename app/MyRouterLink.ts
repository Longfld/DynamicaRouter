
import {NgModule, Component, ViewContainerRef, Compiler,
  ComponentFactory, ComponentRef, ViewChild} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {DataServices} from './DataServices';

@Component({
  selector: 'my-router-link',
  template: '<div #mymenu></div>',

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
      .subscribe(returnedmenu =>{
          (this.compileToComponent(returnedmenu.data)).then((factory: ComponentFactory<any>) => {
            this.cmpRef = this.target.createComponent(factory)
          })
    },
      error => console.log(<any>error)
      );
  }

  ngOnDestroy() {
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
  }

  private compileToComponent(template1: string): Promise<ComponentFactory<any>> {
    
    @Component({ template: template1})
    class DynamicComponent {}
    
    @NgModule({
      imports: [BrowserModule,RouterModule],
      declarations: [DynamicComponent]
    })
    class DynamicModule { }

    return this.compiler.compileModuleAndAllComponentsAsync(DynamicModule).then(
      factory => factory.componentFactories.find(x => x.componentType === DynamicComponent)
    )
  }
}
