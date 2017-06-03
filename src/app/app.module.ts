import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**
 * ngx-translateを使用するモジュールに対してインポートする。
 * 多くの場合、AppModuleでインポートするのがよい。
 * https://github.com/ngx-translate/core#1-import-the-translatemodule
 */
import { TranslateModule } from '@ngx-translate/core'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    /**
     * forRootはアプリケーションのルートモジュールだけで使用する。
     */
    TranslateModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
