import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/**
 * ngx-translateを使用するモジュールに対してTranslateModuleをインポートする。
 * 多くの場合、AppModuleでインポートするのがよい。
 * https://github.com/ngx-translate/core#1-import-the-translatemodule
 */
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
/**
 * 翻訳ファイルを取得するために必要
 */
import { HttpModule, Http } from '@angular/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

/**
 * TranslateLoaderのファクトリ関数
 * @param http
 */
export function createTranslateLoader(http: Http) {
  /**
   * 今回のファクトリ関数はTranslateHttpLoader
   * （ほかにあるのか？SSRするためのStaticなLoaderも存在するのか？
   */
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    /**
     * forRootはアプリケーションのルートモジュールだけで使用する。
     */
    TranslateModule.forRoot({
      loader: {
        // DIコンテナのクラスはTranslateLoader
        provide: TranslateLoader,
        // ファクトリ関数を使う
        useFactory: (createTranslateLoader),
        /**
         * depsプロパティはプロバイダトークンの配列です。
         * Httpクラスは、クラスプロバイダのトークンとして機能します。
         * インジェクタはこれらのトークンを解決し、一致するファクトリ関数のパラメータに対応するサービスを注入します。
         * 参考：https://angular.io/docs/ts/latest/guide/dependency-injection.html#!#factory-provider
         */
        deps: [Http]
      }
    }),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
