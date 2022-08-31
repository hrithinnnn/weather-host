import { NgModule } from "@angular/core";
import { MatMenuModule } from '@angular/material/menu'

const modules = [
    MatMenuModule
]

@NgModule({
    imports: modules,
    exports: modules
})
export class MaterialModule {  }