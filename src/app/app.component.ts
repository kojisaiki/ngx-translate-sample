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
    // この言語は現在の言語で翻訳が見つからない場合のフォールバックとして使用されます
    translate.setDefaultLang('en');

    // 使用する言語です。指定された言語が使用できない場合、ローダによって処理される（ここではフォールバック先があるため、それが使用される）
    translate.use('en');
  }
}
