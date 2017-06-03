import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // メッセージに渡すパラメータ
  param = { value: 'Japan' };

  constructor(translate: TranslateService) {
    // この言語は現在の言語で翻訳が見つからない場合のフォールバックとして使用される
    translate.setDefaultLang('en');

    // ブラウザから（Accept-Languageヘッダから？）言語を取得する
    let browserLang: string = translate.getBrowserLang();
    // useで使用する言語を指定する。指定された言語が使用できない場合、ローダによって処理される（ここではフォールバック先があるため、それが使用される）
    translate.use(browserLang.match(/ja|en/) ? browserLang : 'en');
  }
}
