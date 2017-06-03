import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  private currLang: string;

  // メッセージに渡すパラメータ
  param = { value: 'Japan' };

  constructor(private translate: TranslateService) {
    // この言語は現在の言語で翻訳が見つからない場合のフォールバックとして使用される
    translate.setDefaultLang('en');

    // ブラウザから（Accept-Languageヘッダから？）言語を取得する
    const browserLang: string = translate.getBrowserLang();
    // useで使用する言語を指定する。指定された言語が使用できない場合、ローダによって処理される（ここではフォールバック先があるため、それが使用される）
    this.currLang = browserLang.match(/ja|en/) ? browserLang : 'en';
    translate.use(this.currLang);
  }

  useEn() {
    this.currLang = 'en';
    this.translate.use(this.currLang);
  }

  useJa() {
    this.currLang = 'ja';
    this.translate.use(this.currLang);
  }
  }
}
