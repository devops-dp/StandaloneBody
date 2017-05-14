import { NgModule } from '@angular/core';
import { MdButtonModule, MdCardModule,
         MdInputModule, MdRadioModule,
         MdDatepickerModule, MdIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
@NgModule({
    exports: [
        BrowserAnimationsModule,
        MdCardModule,
        MdButtonModule,
        MdInputModule,
        MdRadioModule,
        MdDatepickerModule,
        MdIconModule
    ]
})
export class MaterialSpecifics {
}
