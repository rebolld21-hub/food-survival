// Food Survivor - The Ultimate Complete Version (150+ Foods, 13 Genres, 17 Types)

// --- ゲームモード用CSSの強制適用（キャッシュの影響を完全に排除するため） ---
const gameModeStyle = document.createElement('style');
gameModeStyle.innerHTML = `
    .card-back { background-color: #192a56 !important; color: transparent !important; }
    .card-back span { visibility: hidden !important; opacity: 0 !important; display: none !important; }
    .card-back::after { content: "？"; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #fbc531; font-size: 32px; font-weight: bold; }
    .card-back.eliminated { background: #dcdde1 !important; color: #718093 !important; }
    .card-back.eliminated::after { content: "❌" !important; display: block !important; color: initial !important; font-size: 40px !important; }
    .card-back.eliminated span { visibility: visible !important; opacity: 1 !important; display: block !important; }
`;
document.head.appendChild(gameModeStyle);

// ==========================================
// 1. メニューデータベース (超絶ボリューム版・約150種類！)
// ==========================================
const menuData = [
  // ================= 寿司・海鮮（和食系） =================
  { name: "極上・本マグロの握り🍣", search: "本マグロの握り", genre: "和食", type: ["魚介"], variations: ["赤身握り", "中トロ", "大トロ"] },
  { name: "とろけるサーモン尽くし🍣", search: "サーモン", genre: "和食", type: ["魚介"], variations: ["炙りサーモン", "オニオンサーモン"] },
  { name: "ぷりぷりエビの握り🍣", search: "エビの握り", genre: "和食", type: ["魚介"], variations: ["甘エビ", "赤エビ", "車エビ"] },
  { name: "こぼれイクラとウニの軍艦🍣", search: "イクラとウニの軍艦", genre: "和食", type: ["魚介"], variations: ["カニ味噌軍艦", "ネギトロ軍艦"] },
  { name: "豪華！おまかせ海鮮丼🐟", search: "海鮮丼", genre: "和食", type: ["魚介", "ご飯もの"], variations: ["特上ちらし", "バラちらし"] },
  { name: "濃厚ネギトロ丼🐟", search: "ネギトロ丼", genre: "和食", type: ["魚介", "ご飯もの", "消化が良い"], variations: ["山かけマグロ丼", "漬けマグロ丼"] },
  { name: "アジのなめろうと刺身🐟", search: "アジのなめろう", genre: "居酒屋メニュー", type: ["魚介", "おつまみ系"], variations: ["カツオのたたき", "タコブツ"] },
  { name: "サクサク！アジフライ定食🐟", search: "アジフライ", genre: "和食", type: ["魚介", "揚げ物", "ご飯もの"], variations: ["カキフライ定食", "白身魚のフライ"] },
  { name: "脂がのったサバの塩焼き定食🍱", search: "サバの塩焼き", genre: "和食", type: ["魚介", "弁当系"], variations: ["ほっけの開き", "サンマの塩焼き"] },
  { name: "ふっくらウナギの蒲焼き🍱", search: "ウナギの蒲焼き", genre: "和食", type: ["魚介", "ご飯もの", "弁当系"], variations: ["ひつまぶし", "穴子丼"] },

  { name: "真鯛のカルパッチョ風握り🍣", search: "真鯛の握り", genre: "和食", type: ["魚介"], variations: ["炙りえんがわ", "ヒラメの握り"] },
  { name: "豪華！海鮮手巻き寿司🍣", search: "手巻き寿司", genre: "和食", type: ["魚介", "ご飯もの"], variations: ["カニ風味サラダ", "とびっこ"] },
  { name: "釜揚げしらす丼🐟", search: "しらす丼", genre: "和食", type: ["魚介", "ご飯もの", "消化が良い"], variations: ["生しらす丼", "桜えび丼"] },
  { name: "戻り鰹のたたき🐟", search: "鰹のたたき", genre: "和食", type: ["魚介", "おつまみ系"], variations: ["ぶり大根", "あさりの酒蒸し"] },
  { name: "金目鯛の煮付け定食🍱", search: "金目鯛の煮付け", genre: "和食", type: ["魚介", "ご飯もの"], variations: ["カレイの煮付け", "ふぐ刺し"] },

  // ================= 肉・焼肉・ホルモン =================
  { name: "極上カルビの焼肉🔥", search: "カルビ", genre: "焼肉・ホルモン", type: ["お肉", "鉄板系"], variations: ["中落ちカルビ", "上カルビ", "骨付きカルビ"] },
  { name: "ネギ塩牛タン🔥", search: "牛タン", genre: "焼肉・ホルモン", type: ["お肉", "鉄板系", "にんにく必至", "おつまみ系"], variations: ["厚切り牛タン", "ネギタン塩"] },
  { name: "ジューシーなハラミ焼き🔥", search: "ハラミ", genre: "焼肉・ホルモン", type: ["お肉", "鉄板系"], variations: ["サガリステーキ", "牛ヒレ肉"] },
  { name: "豪快！ホルモン盛り合わせ🔥", search: "ホルモン焼き", genre: "焼肉・ホルモン", type: ["お肉", "鉄板系", "おつまみ系", "にんにく必至"], variations: ["シマチョウ", "マルチョウ", "ミノ"] },
  { name: "北海道名物ジンギスカン🥩", search: "ジンギスカン", genre: "焼肉・ホルモン", type: ["お肉", "鉄板系", "野菜"], variations: ["ラムチョップ", "マトン焼き"] },
  { name: "極厚シャトーブリアン🥩", search: "シャトーブリアン", genre: "洋食", type: ["お肉", "鉄板系"], variations: ["サーロインステーキ", "テンダーロイン"] },
  { name: "熱々鉄板の粗挽きハンバーグ🥩", search: "ハンバーグ", genre: "洋食", type: ["お肉", "鉄板系"], variations: ["チーズインハンバーグ", "和風おろしハンバーグ"] },
  { name: "ご飯が進む生姜焼き定食🍚", search: "生姜焼き", genre: "和食", type: ["お肉", "ご飯もの"], variations: ["豚の味噌漬け", "豚キムチ炒め"] },
  { name: "分厚いロースとんかつ定食🐖", search: "とんかつ", genre: "和食", type: ["お肉", "揚げ物"], variations: ["ヒレカツ定食", "ミルフィーユカツ"] },
  { name: "名古屋名物！味噌カツ🐖", search: "味噌カツ", genre: "和食", type: ["お肉", "揚げ物", "こってり"], variations: ["ソースカツ", "チキンカツ"] },
  { name: "ボリューム満点チキン南蛮🍗", search: "チキン南蛮", genre: "和食", type: ["お肉", "揚げ物", "卵料理"], variations: ["油淋鶏", "タルタル唐揚げ"] },
  { name: "王道の醤油唐揚げ定食🍗", search: "唐揚げ", genre: "和食", type: ["お肉", "揚げ物", "にんにく必至"], variations: ["塩からあげ", "ヤンニョムチキン"] },

  { name: "厚切り牛タン塩🔥", search: "牛タン塩", genre: "焼肉・ホルモン", type: ["お肉", "鉄板系", "おつまみ系"], variations: ["タンシチュー", "ネギ塩豚トロ"] },
  { name: "カルビクッパ🔥", search: "カルビクッパ", genre: "焼肉・ホルモン", type: ["スープ・鍋", "ご飯もの", "激辛系"], variations: ["ユッケジャンスープ", "冷麺"] },
  { name: "和牛のすき焼き🍲", search: "すき焼き", genre: "和食", type: ["お肉", "スープ・鍋", "卵料理"], variations: ["牛しゃぶしゃぶ", "豚しゃぶ"] },
  { name: "豚の角煮定食🍚", search: "豚の角煮", genre: "和食", type: ["お肉", "ご飯もの", "こってり"], variations: ["もつ煮込み", "チャーシュー丼"] },
  { name: "鶏の照り焼き定食🍗", search: "鶏の照り焼き", genre: "和食", type: ["お肉", "ご飯もの"], variations: ["焼き鳥丼", "つくね定食"] },

  // ================= ラーメン・中華麺 =================
  { name: "こってり濃厚豚骨ラーメン🍜", search: "豚骨ラーメン", genre: "中華", type: ["麺類", "こってり"], variations: ["博多豚骨", "熊本ラーメン"] },
  { name: "昔ながらの中華そば（醤油）🍜", search: "中華そば", genre: "中華", type: ["麺類", "消化が良い"], variations: ["ワンタンメン", "喜多方ラーメン"] },
  { name: "透き通る旨み！塩ラーメン🍜", search: "塩ラーメン", genre: "中華", type: ["麺類"], variations: ["柚子塩ラーメン", "あさりラーメン"] },
  { name: "札幌風・濃厚味噌ラーメン🍜", search: "味噌ラーメン", genre: "中華", type: ["麺類", "こってり"], variations: ["辛味噌ラーメン", "バターコーンラーメン"] },
  { name: "極太麺の魚介豚骨つけ麺🍜", search: "つけ麺", genre: "中華", type: ["麺類"], variations: ["濃厚つけそば", "煮干しラーメン"] },
  { name: "ご飯に合う家系ラーメン🍜", search: "家系ラーメン", genre: "中華", type: ["麺類", "こってり", "にんにく必至"], variations: ["海苔増しラーメン", "ネギチャーシュー"] },
  { name: "野菜マシマシ二郎系ラーメン🧄", search: "二郎系ラーメン", genre: "中華", type: ["麺類", "にんにく必至", "こってり"], variations: ["汁なし二郎", "アブラマシ"] },
  { name: "痺れる辛さ！担々麺🌶️", search: "担々麺", genre: "中華", type: ["麺類", "激辛系"], variations: ["汁なし担々麺", "麻婆麺"] },
  { name: "旨辛！台湾まぜそば🌶️", search: "台湾まぜそば", genre: "中華", type: ["麺類", "激辛系", "にんにく必至"], variations: ["油そば", "台湾ラーメン"] },
  { name: "野菜たっぷり長崎ちゃんぽん🍜", search: "ちゃんぽん", genre: "中華", type: ["麺類", "野菜"], variations: ["皿うどん", "あんかけ焼きそば"] },
  { name: "すっぱ辛い酸辣湯麺（スーラー）🌶️", search: "酸辣湯麺", genre: "中華", type: ["麺類", "激辛系"], variations: ["トマトラーメン", "ワンタンスープ"] },

  { name: "濃厚！鶏白湯ラーメン🍜", search: "鶏白湯ラーメン", genre: "中華", type: ["麺類", "こってり"], variations: ["水炊きラーメン", "鴨だしラーメン"] },
  { name: "ガッツリ油そば・まぜそば🍜", search: "油そば", genre: "中華", type: ["麺類", "こってり", "にんにく必至"], variations: ["汁なし担々麺", "冷やし中華"] },
  { name: "あっさり魚介醤油ラーメン🍜", search: "魚介醤油ラーメン", genre: "中華", type: ["麺類"], variations: ["煮干しラーメン", "和風ラーメン"] },

  // ================= イタリアン・パスタ・ピザ =================
  { name: "パルミジャーノたっぷりカルボナーラ🧀", search: "カルボナーラ", genre: "イタリアン", type: ["麺類", "チーズ系", "卵料理"], variations: ["チーズフォンデュ"] },
  { name: "ピリッと辛いアラビアータ🌶️", search: "アラビアータ", genre: "イタリアン", type: ["麺類", "激辛系"], variations: ["プッタネスカ", "ペンネアラビアータ"] },
  { name: "にんにくガツン！ペペロンチーノ🧄", search: "ペペロンチーノ", genre: "イタリアン", type: ["麺類", "にんにく必至"], variations: ["しらすのペペロンチーノ", "アンチョビパスタ"] },
  { name: "濃厚じっくり煮込んだボロネーゼ🍝", search: "ボロネーゼ", genre: "イタリアン", type: ["麺類", "お肉"], variations: ["ミートソース", "ラザニア"] },
  { name: "香り豊かなジェノベーゼソース大葉🍝", search: "ジェノベーゼ", genre: "イタリアン", type: ["麺類"], variations: ["バジルパスタ"] },
  { name: "海の恵みペスカトーレ🦐", search: "ペスカトーレ", genre: "イタリアン", type: ["麺類", "魚介"], variations: ["ボンゴレビアンコ", "イカスミパスタ"] },
  { name: "さっぱり和風きのこパスタ🍄", search: "和風きのこパスタ", genre: "和食", type: ["麺類", "消化が良い"], variations: ["納豆パスタ", "ツナマヨパスタ"] },
  { name: "王道！濃厚明太子パスタ🍝", search: "明太子パスタ", genre: "イタリアン", type: ["麺類"], variations: ["たらこパスタ", "ウニパスタ"] },
  { name: "昔ながらの鉄板ナポリタン🍳", search: "ナポリタン", genre: "洋食", type: ["麺類", "鉄板系"], variations: ["オムナポリタン", "太麺焼きそば"] },
  { name: "王道マルゲリータピザ🍕", search: "マルゲリータピザ", genre: "イタリアン", type: ["パン", "粉もの", "チーズ系"], variations: ["ナポリピザ", "マリナーラ"] },
  { name: "チーズ好きのクワトロフォルマッジ🧀", search: "クワトロフォルマッジ", genre: "イタリアン", type: ["パン", "粉もの", "チーズ系", "おつまみ系"], variations: ["ハニーチーズピザ"] },
  { name: "魚介たっぷりシーフードピザ🍕", search: "シーフードピザ", genre: "イタリアン", type: ["パン", "粉もの", "魚介"], variations: ["エビマヨピザ", "アンチョビピザ"] },

  { name: "半熟卵のビスマルクピザ🍕", search: "ビスマルクピザ", genre: "イタリアン", type: ["パン", "粉もの", "チーズ系", "卵料理"], variations: ["プロシュートピザ", "サラミピザ"] },
  { name: "きのことベーコンの和風パスタ🍝", search: "和風パスタ", genre: "イタリアン", type: ["麺類"], variations: ["たらこマヨパスタ", "しらすとキャベツのパスタ"] },
  { name: "真っ黒！イカスミパスタ🦑", search: "イカスミパスタ", genre: "イタリアン", type: ["麺類", "魚介"], variations: ["カラスミパスタ", "ウニクリームパスタ"] },
  { name: "濃厚チーズフォンデュ🧀", search: "チーズフォンデュ", genre: "イタリアン", type: ["チーズ系", "野菜", "パン"], variations: ["ラクレットチーズ", "カマンベールアヒージョ"] },

  // ================= カレー系 =================
  { name: "じっくり煮込んだビーフカレー🍛", search: "ビーフカレー", genre: "洋食", type: ["ご飯もの", "お肉"], variations: ["ポークカレー", "家庭のカレー"] },
  { name: "スパイスふわりキーマカレー🍛", search: "キーマカレー", genre: "インド料理", type: ["ご飯もの"], variations: ["ドライカレー", "タコライス"] },
  { name: "まろやか濃厚バターチキンカリー🍛", search: "バターチキンカレー", genre: "インド料理", type: ["ご飯もの"], variations: ["チーズナンセット", "サグチキン"] },
  { name: "激辛青唐辛子グリーンカレー🌶️", search: "グリーンカレー", genre: "エスニック", type: ["ご飯もの", "激辛系"], variations: ["レッドカレー", "マッサマンカレー"] },
  { name: "ゴロゴロ野菜のスープカレー🍛", search: "スープカレー", genre: "エスニック", type: ["スープ・鍋", "ご飯もの", "野菜"], variations: ["チキンレッグカレー", "ラムスープカレー"] },
  { name: "ガッツリ！ロースカツカレー🍛", search: "カツカレー", genre: "洋食", type: ["ご飯もの", "揚げ物", "お肉"], variations: ["メンチカツカレー", "唐揚げカレー"] },

  { name: "マイルドなマッサマンカレー🍛", search: "マッサマンカレー", genre: "エスニック", type: ["ご飯もの"], variations: ["イエローカレー", "プーパッポンカリー"] },
  { name: "たっぷりチーズカツカレー🍛", search: "チーズカツカレー", genre: "洋食", type: ["ご飯もの", "揚げ物", "お肉", "チーズ系", "こってり"], variations: ["ハンバーグカレー", "シーフードカレー"] },
  { name: "ナスとひき肉のスパイスカレー🍛", search: "スパイスカレー", genre: "インド料理", type: ["ご飯もの", "野菜"], variations: ["ほうれん草カレー", "ダル（豆）カレー"] },

  // ================= ファストフード・パン・カフェ =================
  { name: "トリプルチーズバーガー🍔", search: "チーズバーガー", genre: "ファストフード", type: ["パン", "お肉", "チーズ系", "こってり"], variations: ["ダブルチーズバーガー", "ベーコンレタスバーガー"] },
  { name: "ジューシーてりやきチキンバーガー🍔", search: "てりやきチキンバーガー", genre: "ファストフード", type: ["パン", "お肉", "こってり"], variations: ["チキンフィレオ", "月見バーガー"] },
  { name: "山盛りフライドポテト🍟", search: "フライドポテト", genre: "ファストフード", type: ["揚げ物", "野菜", "おつまみ系"], variations: ["オニオンリング", "チキンナゲット"] },
  { name: "ジャンボフライドチキン🍗", search: "フライドチキン", genre: "ファストフード", type: ["お肉", "揚げ物", "こってり"], variations: ["クリスピーチキン", "ファミチキ"] },
  { name: "アメリカンホットドッグ🌭", search: "ホットドッグ", genre: "ファストフード", type: ["パン", "お肉"], variations: ["チーズドッグ", "チリドッグ"] },
  { name: "おしゃれクラブハウスサンド🥪", search: "クラブハウスサンド", genre: "カフェ・軽食", type: ["パン", "野菜"], variations: ["BLTサンド", "ホットサンド"] },
  { name: "サーモンクリームチーズベーグル🥯", search: "ベーグル", genre: "カフェ・軽食", type: ["パン", "魚介", "チーズ系"], variations: ["アボカドサンド", "生ハムサンド"] },
  { name: "とろーりエッグベネディクト🥚", search: "エッグベネディクト", genre: "カフェ・軽食", type: ["パン", "卵料理"], variations: ["クロックムッシュ", "フレンチトースト"] },
  { name: "たっぷり野菜のサラダボウル🥗", search: "サラダボウル", genre: "カフェ・軽食", type: ["野菜", "消化が良い"], variations: ["シーザーサラダ", "コブサラダ"] },
  { name: "甘みたっぷりフルーツパンケーキ🥞", search: "フルーツパンケーキ", genre: "カフェ・軽食", type: ["パン", "卵料理"], variations: ["ワッフル", "アサイーボウル"] },

  { name: "濃厚アボカドバーガー🍔", search: "アボカドバーガー", genre: "ファストフード", type: ["パン", "お肉", "野菜"], variations: ["フィッシュバーガー", "テリヤキバーガー"] },
  { name: "サクッとピザトースト🍞", search: "ピザトースト", genre: "カフェ・軽食", type: ["パン", "チーズ系"], variations: ["クロックムッシュ", "ツナマヨサンド"] },
  { name: "シナモンロールと紅茶🥐", search: "シナモンロール", genre: "カフェ・軽食", type: ["パン"], variations: ["スコーン", "クロワッサンサンド"] },
  { name: "ヘルシー！アサイーボウル🥣", search: "アサイーボウル", genre: "カフェ・軽食", type: ["消化が良い"], variations: ["ヨーグルトボウル", "オートミール"] },

  // ================= 丼もの・ご飯もの（和・中・韓・他） =================
  { name: "つゆだく特盛牛丼🍚", search: "牛丼", genre: "ファストフード", type: ["お肉", "ご飯もの"], variations: ["豚丼", "カルビ丼"] },
  { name: "サクサク卵とじカツ丼🍚", search: "カツ丼", genre: "和食", type: ["お肉", "ご飯もの", "揚げ物", "卵料理"], variations: ["ソースカツ丼", "天丼"] },
  { name: "とろとろ卵の親子丼🥚", search: "親子丼", genre: "和食", type: ["お肉", "ご飯もの", "卵料理", "消化が良い"], variations: ["玉子丼", "そぼろ丼"] },
  { name: "パラパラ黄金炒飯（チャーハン）🍚", search: "チャーハン", genre: "中華", type: ["ご飯もの", "鉄板系"], variations: ["カニレタスチャーハン", "あんかけチャーハン"] },
  { name: "香ばしい石焼ビビンバ🔥", search: "石焼ビビンバ", genre: "韓国料理", type: ["ご飯もの", "鉄板系", "野菜"], variations: ["クッパ", "プルコギ丼"] },
  { name: "フワフワ天津飯🥚", search: "天津飯", genre: "中華", type: ["ご飯もの", "卵料理", "消化が良い"], variations: ["中華丼", "カニ玉"] },
  { name: "バジル香る旨辛ガパオライス🍳", search: "ガパオライス", genre: "エスニック", type: ["ご飯もの", "激辛系", "卵料理"], variations: ["カオマンガイ", "ナシゴレン"] },

  { name: "ねぎ塩豚丼🍚", search: "ねぎ塩豚丼", genre: "和食", type: ["お肉", "ご飯もの"], variations: ["スタミナ丼", "チャーシュー丼"] },
  { name: "パラパラ！キムチ炒飯🔥", search: "キムチ炒飯", genre: "韓国料理", type: ["ご飯もの", "激辛系", "鉄板系"], variations: ["ガーリックライス", "そばめし"] },
  { name: "喫茶店のオムライス🍳", search: "オムライス", genre: "洋食", type: ["ご飯もの", "卵料理"], variations: ["ハヤシライス", "えびピラフ"] },
  { name: "こんがりチーズドリア🥘", search: "ドリア", genre: "洋食", type: ["ご飯もの", "チーズ系", "鉄板系"], variations: ["ミラノ風ドリア", "グラタン"] },

  // ================= 中華・韓国の一品（粉もの・鍋含む） =================
  { name: "本格四川のシビ辛麻婆豆腐🔥", search: "麻婆豆腐", genre: "中華", type: ["ご飯もの", "激辛系", "にんにく必至"], variations: ["回鍋肉", "青椒肉絲"] },
  { name: "肉汁たっぷり鉄板焼き餃子🥟", search: "餃子", genre: "中華", type: ["お肉", "鉄板系", "粉もの", "にんにく必至"], variations: ["水餃子", "小籠包"] },
  { name: "ぷりぷりエビのチリソース炒め🍤", search: "エビチリ", genre: "中華", type: ["魚介", "激辛系"], variations: ["エビマヨ", "八宝菜"] },
  { name: "海鮮たっぷりチヂミ🐙", search: "チヂミ", genre: "韓国料理", type: ["粉もの", "魚介", "鉄板系", "おつまみ系"], variations: ["キムチチヂミ", "チーズチヂミ"] },
  { name: "とろけるチーズタッカルビ🧀", search: "チーズタッカルビ", genre: "韓国料理", type: ["お肉", "鉄板系", "チーズ系", "激辛系"], variations: ["ヤンニョムチキン", "トッポギ"] },
  { name: "豆腐たっぷりスンドゥブチゲ🌶️", search: "スンドゥブチゲ", genre: "韓国料理", type: ["スープ・鍋", "激辛系", "にんにく必至", "消化が良い"], variations: ["キムチチゲ", "テンジャンチゲ"] },

  { name: "シャキシャキ青椒肉絲（チンジャオロース）🥩", search: "青椒肉絲", genre: "中華", type: ["お肉", "野菜", "鉄板系"], variations: ["回鍋肉", "酢豚"] },
  { name: "具だくさん八宝菜🥢", search: "八宝菜", genre: "中華", type: ["野菜", "魚介", "お肉", "消化が良い"], variations: ["広東麺", "中華丼"] },
  { name: "甘辛ヤンニョムチキン🍗", search: "ヤンニョムチキン", genre: "韓国料理", type: ["お肉", "揚げ物", "激辛系"], variations: ["ハニーバターチキン", "フライドチキン"] },
  { name: "もっちりトッポギ🌶️", search: "トッポギ", genre: "韓国料理", type: ["粉もの", "激辛系", "チーズ系"], variations: ["チーズトッポギ", "ラッポッキ"] },

  // ================= 鉄板・粉もの・おつまみ（居酒屋など） =================
  { name: "熱々！豚玉お好み焼き🐙", search: "お好み焼き", genre: "和食", type: ["粉もの", "鉄板系"], variations: ["広島焼き", "ねぎ焼き"] },
  { name: "カリとろ本場たこ焼き🐙", search: "たこ焼き", genre: "居酒屋メニュー", type: ["粉もの", "揚げ物", "鉄板系", "おつまみ系"], variations: ["明石焼き", "揚げたこ焼き"] },
  { name: "明太もちチーズもんじゃ🍳", search: "もんじゃ焼き", genre: "和食", type: ["粉もの", "鉄板系", "おつまみ系", "チーズ系"], variations: ["ベビースターもんじゃ"] },
  { name: "炭火焼き鳥の盛り合わせ🍻", search: "焼き鳥", genre: "居酒屋メニュー", type: ["お肉", "おつまみ系"], variations: ["つくね串", "ねぎま串"] },
  { name: "出汁が染みたおでん盛り合わせ🍢", search: "おでん", genre: "居酒屋メニュー", type: ["スープ・鍋", "おつまみ系", "消化が良い"], variations: ["牛すじ煮込み", "もつ煮"] },
  { name: "にんにくガツン！博多もつ鍋🍲", search: "もつ鍋", genre: "居酒屋メニュー", type: ["スープ・鍋", "お肉", "にんにく必至"], variations: ["水炊き", "しゃぶしゃぶ"] },

  { name: "ボリューム満点！広島風お好み焼き🐙", search: "広島風お好み焼き", genre: "和食", type: ["粉もの", "鉄板系", "麺類"], variations: ["モダン焼き", "オムそば"] },
  { name: "とろ〜りチーズのとんぺい焼き🍳", search: "とんぺい焼き", genre: "居酒屋メニュー", type: ["お肉", "卵料理", "鉄板系", "おつまみ系"], variations: ["だし巻き卵", "ニラ玉"] },
  { name: "じっくり煮込んだ牛すじ煮込み🍲", search: "牛すじ煮込み", genre: "居酒屋メニュー", type: ["お肉", "スープ・鍋", "おつまみ系"], variations: ["もつ煮", "どて焼き"] },
  { name: "炙りえいひれと日本酒🐟", search: "えいひれ", genre: "居酒屋メニュー", type: ["魚介", "おつまみ系"], variations: ["イカの塩辛", "たこわさ"] },

  // ================= パン・洋食鍋・地中海 =================
  { name: "熱々シーフードマカロニグラタン🥘", search: "マカロニグラタン", genre: "洋食", type: ["スープ・鍋", "チーズ系", "魚介"], variations: ["ラザニア", "クリームシチュー"] },
  { name: "じっくり煮込んだビーフシチュー🥩", search: "ビーフシチュー", genre: "洋食", type: ["スープ・鍋", "お肉"], variations: ["ポークシチュー", "ボルシチ"] },
  { name: "魚介たっぷり本格パエリア🥘", search: "パエリア", genre: "スペイン・地中海", type: ["ご飯もの", "魚介", "にんにく必至"], variations: ["リゾット", "アクアパッツァ"] },
  { name: "海老きのこのアヒージョ🧄", search: "アヒージョ", genre: "スペイン・地中海", type: ["おつまみ系", "にんにく必至", "魚介"], variations: ["カルパッチョ", "タコマリネ"] },

  { name: "あつあつクラムチャウダー🥣", search: "クラムチャウダー", genre: "洋食", type: ["スープ・鍋", "魚介"], variations: ["コーンスープ", "ミネストローネ"] },
  { name: "チーズとろけるオニオングラタンスープ🥣", search: "オニオングラタンスープ", genre: "洋食", type: ["スープ・鍋", "チーズ系", "パン"], variations: ["ポトフ", "ボルシチ"] },
  { name: "魚介の旨み！アクアパッツァ🐟", search: "アクアパッツァ", genre: "スペイン・地中海", type: ["魚介", "スープ・鍋", "にんにく必至"], variations: ["ブイヤベース", "カルパッチョ"] },

  // ================= 定食・麺・お弁当（その他） =================
  { name: "うなもつとろろ蕎麦🥢", search: "とろろ蕎麦", genre: "和食", type: ["麺類", "消化が良い"], variations: ["おろしそば", "ざるそば"] },
  { name: "サクサク天ぷらうどん🍤", search: "天ぷらうどん", genre: "和食", type: ["麺類", "揚げ物"], variations: ["かき揚げうどん", "肉うどん"] },
  { name: "あっさり鶏肉のフォー🍜", search: "フォー", genre: "エスニック", type: ["麺類", "消化が良い"], variations: ["牛肉のフォー", "ビーフン"] },
  { name: "つるつる韓国冷麺🍜", search: "冷麺", genre: "韓国料理", type: ["麺類", "消化が良い"], variations: ["ビビン麺", "盛岡冷麺"] },
  { name: "ほかほか唐揚げ弁当🍱", search: "唐揚げ弁当", genre: "お惣菜・デパ地下", type: ["お肉", "揚げ物", "弁当系"], variations: ["チキン南蛮弁当", "コロッケ弁当"] },
  { name: "彩り豊かな幕の内弁当🍱", search: "幕の内弁当", genre: "お惣菜・デパ地下", type: ["ご飯もの", "弁当系", "魚介"], variations: ["松花堂弁当", "のり弁当"] },
  { name: "洋食屋ハンバーグ弁当🍱", search: "ハンバーグ弁当", genre: "お惣菜・デパ地下", type: ["お肉", "弁当系"], variations: ["焼肉弁当", "オムライス弁当"] },
  { name: "デパ地下の量り売り惣菜🛍️", search: "惣菜", genre: "お惣菜・デパ地下", type: ["野菜", "おつまみ系", "弁当系"], variations: ["ローストビーフ", "ポテトサラダ"] },
  { name: "胃に優しい中華風鶏がゆ🥣", search: "中華粥", genre: "中華", type: ["ご飯もの", "消化が良い", "スープ・鍋"], variations: ["玉子粥", "サムゲタン"] },
  { name: "出汁が香る肉うどん🍜", search: "肉うどん", genre: "和食", type: ["麺類", "お肉"], variations: ["カレーうどん", "肉ぶっかけうどん"] },
  { name: "サクサクかき揚げそば🥢", search: "かき揚げそば", genre: "和食", type: ["麺類", "揚げ物"], variations: ["にしんそば", "月見そば"] },
  { name: "さっぱり冷製トマトパスタ🍝", search: "冷製トマトパスタ", genre: "イタリアン", type: ["麺類", "野菜"], variations: ["カペッリーニ", "サラダパスタ"] },
  { name: "定番！のり弁当🍱", search: "のり弁当", genre: "お惣菜・デパ地下", type: ["ご飯もの", "弁当系", "魚介"], variations: ["鮭弁当", "そぼろ弁当"] },
  { name: "目玉焼きのせナシゴレン🍳", search: "ナシゴレン", genre: "エスニック", type: ["ご飯もの", "卵料理"], variations: ["ミーゴレン", "ガパオライス"] }
];

const genreOptions = [
  {label: "和食", emoji: "🍣"}, {label: "洋食", emoji: "🥩"}, {label: "中華", emoji: "🥟"}, 
  {label: "イタリアン", emoji: "🍕"}, {label: "インド料理", emoji: "🍛"}, {label: "韓国料理", emoji: "🌶️"}, 
  {label: "ファストフード", emoji: "🍔"}, {label: "エスニック", emoji: "🌿"}, {label: "カフェ・軽食", emoji: "🥐"},
  {label: "居酒屋メニュー", emoji: "🍻"}, {label: "焼肉・ホルモン", emoji: "🍖"}, 
  {label: "スペイン・地中海", emoji: "🥘"}, {label: "お惣菜・デパ地下", emoji: "🛍️"}
];

const typeOptions = [
  {label: "ご飯もの", emoji: "🍚"}, {label: "麺類", emoji: "🍜"}, {label: "パン", emoji: "🍞"}, 
  {label: "お肉", emoji: "🍖"}, {label: "魚介", emoji: "🐟"}, {label: "野菜", emoji: "🥗"},
  {label: "スープ・鍋", emoji: "🍲"}, {label: "揚げ物", emoji: "🍤"}, {label: "粉もの", emoji: "🐙"},
  {label: "鉄板系", emoji: "🍳"}, {label: "弁当系", emoji: "🍱"}, {label: "チーズ系", emoji: "🧀"},
  {label: "にんにく必至", emoji: "🧄"}, {label: "激辛系", emoji: "🌶️"}, {label: "卵料理", emoji: "🥚"},
  {label: "おつまみ系", emoji: "🍢"}, {label: "消化が良い", emoji: "🥣"}
];

// ==========================================
// 2. 状態管理
// ==========================================
let currentMode = 'normal';
let eliminatedGenres = [];
let eliminatedTypes = [];
let currentCandidates = [];
let finalCandidates = [];
let eliminatedInRound = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 【第1画面】モード選択
function renderModeSelection() {
    const main = document.getElementById('app-main');
    main.innerHTML = `
        <div class="screen active">
            <h1 class="question-title">今の気分はどっち？</h1>
            <div class="mode-selection">
                <div class="mode-btn normal" onclick="selectMode('normal')">
                    <span>通常モード</span>
                    <span class="desc">自分で見て消去する</span>
                </div>
                <div class="mode-btn game" onclick="selectMode('game')">
                    <span>ゲームモード</span>
                    <span class="desc">カードをめくって運試し！</span>
                </div>
            </div>
        </div>
    `;
}

function selectMode(mode) {
    currentMode = mode;
    eliminatedGenres = [];
    eliminatedTypes = [];
    renderGenreElimination();
}

// 【第2画面】ジャンル除外（13種類）
function renderGenreElimination() {
    const main = document.getElementById('app-main');
    main.innerHTML = `
        <div class="screen active">
            <h1 class="question-title" style="margin-bottom:10px;">絶対に【食べたくない】ジャンルを消してね！🚫</h1>
            <p style="text-align:center; font-size:12px; color:#ff5232; margin-bottom:15px;">（複数消してもOK、消さなくてもOK）</p>
            <div class="options-grid">
                ${genreOptions.map((opt, i) => `
                    <button class="option-btn ${currentMode === 'game' ? 'card-back' : ''}" id="genre-${i}" onclick="toggleEliminate('genre', '${opt.label}', 'genre-${i}')">
                        <span style="font-size: 24px; display:block; margin-bottom:4px;">${opt.emoji}</span>
                        <span>${opt.label}</span>
                    </button>
                `).join('')}
            </div>
            <button class="nav-btn" onclick="renderTypeElimination()">次へ 👉</button>
        </div>
    `;
}

// 【第3画面】種類除外（17種類）
function renderTypeElimination() {
    const main = document.getElementById('app-main');
    main.innerHTML = `
        <div class="screen active">
            <h1 class="question-title" style="margin-bottom:10px;">絶対に【避けたい】種類を消してね！👎</h1>
            <p style="text-align:center; font-size:12px; color:#ff5232; margin-bottom:15px;">（複数消してもOK、消さなくてもOK）</p>
            <div class="options-grid">
                ${typeOptions.map((opt, i) => `
                    <button class="option-btn ${currentMode === 'game' ? 'card-back' : ''}" id="type-${i}" onclick="toggleEliminate('type', '${opt.label}', 'type-${i}')">
                        <span style="font-size: 24px; display:block; margin-bottom:4px;">${opt.emoji}</span>
                        <span>${opt.label}</span>
                    </button>
                `).join('')}
            </div>
            <button class="nav-btn" onclick="startSurvival()">候補を絞り込む！ 🔪</button>
        </div>
    `;
}

function toggleEliminate(category, label, btnId) {
    const btn = document.getElementById(btnId);
    let targetArray = category === 'genre' ? eliminatedGenres : eliminatedTypes;
    
    if (targetArray.includes(label)) {
        targetArray.splice(targetArray.indexOf(label), 1);
        btn.classList.remove('eliminated');
    } else {
        targetArray.push(label);
        btn.classList.add('eliminated');
    }
}

// 【第4画面】サバイバル開始 (10個から消去)
let intermediateEliminatedNames = [];

function startSurvival() {
    // 条件に合わないものを除外
    let validFoods = menuData.filter(f => {
        if (eliminatedGenres.includes(f.genre)) return false;
        const hasEliminatedType = eliminatedTypes.some(t => f.type.includes(t));
        if (hasEliminatedType) return false;
        return true;
    });

    if (validFoods.length === 0) {
        // 万が一全部消してしまった場合は全復活
        validFoods = [...menuData];
    }

    currentCandidates = shuffleArray([...validFoods]).slice(0, 10);
    intermediateEliminatedNames = [];
    renderSurvivalPhase();
}

function renderSurvivalPhase() {
    const main = document.getElementById('app-main');
    main.innerHTML = `
        <div class="screen active">
            <h1 class="question-title">10個の候補が生き残った！<br><span style="font-size:16px; color:var(--primary-color);">「これは違うな」というものをタップして吹き飛ばしてね💥</span></h1>
            <div class="options-grid">
                ${currentCandidates.map((food, i) => `
                    <button id="card-${i}" class="option-btn ${currentMode === 'game' ? 'card-back' : ''}" onclick="toggleEliminateSurvival(${i})">
                        <span>${food.name}</span>
                    </button>
                `).join('')}
            </div>
            <button id="result-btn" class="nav-btn" onclick="showResult()">最終結果を見る！ 🏆</button>
        </div>
    `;
}

function toggleEliminateSurvival(index) {
    const btn = document.getElementById(`card-${index}`);
    const foodName = currentCandidates[index].name;

    if (intermediateEliminatedNames.includes(foodName)) {
        intermediateEliminatedNames = intermediateEliminatedNames.filter(n => n !== foodName);
        btn.classList.remove('eliminated');
    } else {
        intermediateEliminatedNames.push(foodName);
        btn.classList.add('eliminated');
    }

    const resultBtn = document.getElementById('result-btn');
    if (intermediateEliminatedNames.length === 10) {
        resultBtn.disabled = true;
        resultBtn.innerText = '全部消えちゃった！😱';
    } else {
        resultBtn.disabled = false;
        resultBtn.innerText = '最終決定！ 🏆';
    }
}

// 【第5画面】結果発表 (5位までランキング)
function showResult() {
    const main = document.getElementById('app-main');
    
    // 生き残ったものを抽出
    let survivors = currentCandidates.filter(c => !intermediateEliminatedNames.includes(c.name));
    
    // 生き残った中からランダムで最大5つ選ぶ
    survivors = shuffleArray(survivors);
    const final5 = survivors.slice(0, 5);
    
    const medals = ["🥇 1位", "🥈 2位", "🥉 3位", "🏅 4位", "🏅 5位"];

    let podiumHtml = final5.map((dish, index) => {
        const query = encodeURIComponent(dish.search || dish.name.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{1F200}-\u{1F251}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{1FA70}-\u{1FAFF}]/gu, '').trim());
        let variationsHtml = "";
        
        if (dish.variations && dish.variations.length > 0) {
            variationsHtml = `
                <div style="font-size: 13px; color: #b33939; margin-bottom: 15px; font-weight: bold; background: #fff9c4; padding: 10px; border-radius: 10px; border: 2px dashed #ff9f1a;">
                    <div style="font-size:11px; color:#e67e22; margin-bottom:4px;">✨ 似ている別メニュー</div>
                    ${dish.variations.join(' ・ ')}
                </div>
            `;
        }

        return `
            <div class="podium-item">
                <div class="rank-badge">${medals[index]}</div>
                <div class="dish-name" style="font-size: 20px;">${dish.name}</div>
                ${variationsHtml}
                <div class="search-buttons" style="display:flex; justify-content:center; gap:5px; flex-wrap:wrap;">
                    <a href="https://tabelog.com/rstLst/?vs=1&sa=&sk=${query}" target="_blank" class="btn-search">🍽️ 食べログ</a>
                    <a href="https://cookpad.com/search/${query}" target="_blank" class="btn-search" style="background:#ff9f1a; color:white; border-color:#e67e22; box-shadow:0 4px 0 #e67e22;">🍳 クックパッド</a>
                    <a href="https://sp.demae-can.com/search/chain/${query}" target="_blank" class="btn-search">🛵 出前館</a>
                </div>
            </div>
        `;
    }).join('');

    main.innerHTML = `
        <div class="screen active">
            <h1 class="question-title">🔥 最終生存者 🔥</h1>
            <p style="text-align: center; font-weight: bold; color: #7f8fa6; margin-bottom: 20px;">消去法を生き抜いた最適な料理！</p>
            ${podiumHtml}
            <button class="nav-btn" style="margin-top:30px;" onclick="location.reload()">🔄 最初からやり直す</button>
        </div>
    `;
}

// 起動時はモード選択から
window.onload = renderModeSelection;
