// 料理の大規模データベース（超絶ボリューム版・約150種類！）
// これなら「毎回違う10個の候補」が出てくるので、何度遊んでも飽きません！
const allFoods = [
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

  // ================= カレー系 =================
  { name: "じっくり煮込んだビーフカレー🍛", search: "ビーフカレー", genre: "洋食", type: ["ご飯もの", "お肉"], variations: ["ポークカレー", "家庭のカレー"] },
  { name: "スパイスふわりキーマカレー🍛", search: "キーマカレー", genre: "インド料理", type: ["ご飯もの"], variations: ["ドライカレー", "タコライス"] },
  { name: "まろやか濃厚バターチキンカリー🍛", search: "バターチキンカレー", genre: "インド料理", type: ["ご飯もの"], variations: ["チーズナンセット", "サグチキン"] },
  { name: "激辛青唐辛子グリーンカレー🌶️", search: "グリーンカレー", genre: "エスニック", type: ["ご飯もの", "激辛系"], variations: ["レッドカレー", "マッサマンカレー"] },
  { name: "ゴロゴロ野菜のスープカレー🍛", search: "スープカレー", genre: "エスニック", type: ["スープ・鍋", "ご飯もの", "野菜"], variations: ["チキンレッグカレー", "ラムスープカレー"] },
  { name: "ガッツリ！ロースカツカレー🍛", search: "カツカレー", genre: "洋食", type: ["ご飯もの", "揚げ物", "お肉"], variations: ["メンチカツカレー", "唐揚げカレー"] },

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

  // ================= 丼もの・ご飯もの（和・中・韓・他） =================
  { name: "つゆだく特盛牛丼🍚", search: "牛丼", genre: "ファストフード", type: ["お肉", "ご飯もの"], variations: ["豚丼", "カルビ丼"] },
  { name: "サクサク卵とじカツ丼🍚", search: "カツ丼", genre: "和食", type: ["お肉", "ご飯もの", "揚げ物", "卵料理"], variations: ["ソースカツ丼", "天丼"] },
  { name: "とろとろ卵の親子丼🥚", search: "親子丼", genre: "和食", type: ["お肉", "ご飯もの", "卵料理", "消化が良い"], variations: ["玉子丼", "そぼろ丼"] },
  { name: "パラパラ黄金炒飯（チャーハン）🍚", search: "チャーハン", genre: "中華", type: ["ご飯もの", "鉄板系"], variations: ["カニレタスチャーハン", "あんかけチャーハン"] },
  { name: "香ばしい石焼ビビンバ🔥", search: "石焼ビビンバ", genre: "韓国料理", type: ["ご飯もの", "鉄板系", "野菜"], variations: ["クッパ", "プルコギ丼"] },
  { name: "フワフワ天津飯🥚", search: "天津飯", genre: "中華", type: ["ご飯もの", "卵料理", "消化が良い"], variations: ["中華丼", "カニ玉"] },
  { name: "バジル香る旨辛ガパオライス🍳", search: "ガパオライス", genre: "エスニック", type: ["ご飯もの", "激辛系", "卵料理"], variations: ["カオマンガイ", "ナシゴレン"] },

  // ================= 中華・韓国の一品（粉もの・鍋含む） =================
  { name: "本格四川のシビ辛麻婆豆腐🔥", search: "麻婆豆腐", genre: "中華", type: ["ご飯もの", "激辛系", "にんにく必至"], variations: ["回鍋肉", "青椒肉絲"] },
  { name: "肉汁たっぷり鉄板焼き餃子🥟", search: "餃子", genre: "中華", type: ["お肉", "鉄板系", "粉もの", "にんにく必至"], variations: ["水餃子", "小籠包"] },
  { name: "ぷりぷりエビのチリソース炒め🍤", search: "エビチリ", genre: "中華", type: ["魚介", "激辛系"], variations: ["エビマヨ", "八宝菜"] },
  { name: "海鮮たっぷりチヂミ🐙", search: "チヂミ", genre: "韓国料理", type: ["粉もの", "魚介", "鉄板系", "おつまみ系"], variations: ["キムチチヂミ", "チーズチヂミ"] },
  { name: "とろけるチーズタッカルビ🧀", search: "チーズタッカルビ", genre: "韓国料理", type: ["お肉", "鉄板系", "チーズ系", "激辛系"], variations: ["ヤンニョムチキン", "トッポギ"] },
  { name: "豆腐たっぷりスンドゥブチゲ🌶️", search: "スンドゥブチゲ", genre: "韓国料理", type: ["スープ・鍋", "激辛系", "にんにく必至", "消化が良い"], variations: ["キムチチゲ", "テンジャンチゲ"] },

  // ================= 鉄板・粉もの・おつまみ（居酒屋など） =================
  { name: "熱々！豚玉お好み焼き🐙", search: "お好み焼き", genre: "和食", type: ["粉もの", "鉄板系"], variations: ["広島焼き", "ねぎ焼き"] },
  { name: "カリとろ本場たこ焼き🐙", search: "たこ焼き", genre: "居酒屋メニュー", type: ["粉もの", "揚げ物", "鉄板系", "おつまみ系"], variations: ["明石焼き", "揚げたこ焼き"] },
  { name: "明太もちチーズもんじゃ🍳", search: "もんじゃ焼き", genre: "和食", type: ["粉もの", "鉄板系", "おつまみ系", "チーズ系"], variations: ["ベビースターもんじゃ"] },
  { name: "炭火焼き鳥の盛り合わせ🍻", search: "焼き鳥", genre: "居酒屋メニュー", type: ["お肉", "おつまみ系"], variations: ["つくね串", "ねぎま串"] },
  { name: "出汁が染みたおでん盛り合わせ🍢", search: "おでん", genre: "居酒屋メニュー", type: ["スープ・鍋", "おつまみ系", "消化が良い"], variations: ["牛すじ煮込み", "もつ煮"] },
  { name: "にんにくガツン！博多もつ鍋🍲", search: "もつ鍋", genre: "居酒屋メニュー", type: ["スープ・鍋", "お肉", "にんにく必至"], variations: ["水炊き", "しゃぶしゃぶ"] },

  // ================= パン・洋食鍋・地中海 =================
  { name: "熱々シーフードマカロニグラタン🥘", search: "マカロニグラタン", genre: "洋食", type: ["スープ・鍋", "チーズ系", "魚介"], variations: ["ラザニア", "クリームシチュー"] },
  { name: "じっくり煮込んだビーフシチュー🥩", search: "ビーフシチュー", genre: "洋食", type: ["スープ・鍋", "お肉"], variations: ["ポークシチュー", "ボルシチ"] },
  { name: "魚介たっぷり本格パエリア🥘", search: "パエリア", genre: "スペイン・地中海", type: ["ご飯もの", "魚介", "にんにく必至"], variations: ["リゾット", "アクアパッツァ"] },
  { name: "海老ときのこのアヒージョ🧄", search: "アヒージョ", genre: "スペイン・地中海", type: ["おつまみ系", "にんにく必至", "魚介"], variations: ["カルパッチョ", "タコのマリネ"] },

  // ================= 定食・麺・お弁当（その他） =================
  { name: "うなもつとろろ蕎麦🥢", search: "とろろ蕎麦", genre: "和食", type: ["麺類", "消化が良い"], variations: ["おろしそば", "ざるそば"] },
  { name: "サクサク天ぷらうどん🍤", search: "天ぷらうどん", genre: "和食", type: ["麺類", "揚げ物"], variations: ["かき揚げうどん", "肉うどん"] },
  { name: "あっさり鶏肉のフォー🍜", search: "フォー", genre: "エスニック", type: ["麺類", "消化が良い"], variations: ["牛肉のフォー", "ビーフン"] },
  { name: "つるつる韓国冷麺🍜", search: "冷麺", genre: "韓国料理", type: ["麺類", "消化が良い"], variations: ["ビビン麺", "盛岡冷麺"] },
  { name: "ほかほか唐揚げ弁当🍱", search: "唐揚げ弁当", genre: "お惣菜・デパ地下", type: ["お肉", "揚げ物", "弁当系"], variations: ["チキン南蛮弁当", "コロッケ弁当"] },
  { name: "彩り豊かな幕の内弁当🍱", search: "幕の内弁当", genre: "お惣菜・デパ地下", type: ["ご飯もの", "弁当系", "魚介"], variations: ["松花堂弁当", "のり弁当"] },
  { name: "洋食屋さんのハンバーグ弁当🍱", search: "ハンバーグ弁当", genre: "お惣菜・デパ地下", type: ["お肉", "弁当系"], variations: ["焼肉弁当", "オムライス弁当"] },
  { name: "デパ地下の彩り量り売り惣菜🛍️", search: "惣菜", genre: "お惣菜・デパ地下", type: ["野菜", "おつまみ系", "弁当系"], variations: ["ローストビーフマリネ", "ポテトサラダ"] },
  { name: "胃に優しい中華風鶏がゆ🥣", search: "中華粥", genre: "中華", type: ["ご飯もの", "消化が良い", "スープ・鍋"], variations: ["玉子粥", "サムゲタン"] }
];

const screens = [
  {
    id: "eliminate_genre",
    title: "絶対に【食べたくない】ジャンルを消してね！🚫",
    type: "grid",
    options: [
      {label: "和食", emoji: "🍣"}, 
      {label: "洋食", emoji: "🥩"}, 
      {label: "中華", emoji: "🥟"}, 
      {label: "イタリアン", emoji: "🍕"}, 
      {label: "インド料理", emoji: "🍛"}, 
      {label: "韓国料理", emoji: "🌶️"}, 
      {label: "ファストフード", emoji: "🍔"}, 
      {label: "エスニック", emoji: "🌿"},
      {label: "カフェ・軽食", emoji: "🥐"},
      {label: "居酒屋メニュー", emoji: "🍻"},
      {label: "焼肉・ホルモン", emoji: "🍖"},
      {label: "スペイン・地中海", emoji: "🥘"},
      {label: "お惣菜・デパ地下", emoji: "🛍️"}
    ]
  },
  {
    id: "eliminate_type",
    title: "絶対に【避けたい】種類を消してね！👎",
    type: "grid",
    options: [
      {label: "ご飯もの", emoji: "🍚"}, 
      {label: "麺類", emoji: "🍜"}, 
      {label: "パン", emoji: "🍞"}, 
      {label: "お肉", emoji: "🍖"}, 
      {label: "魚介", emoji: "🐟"}, 
      {label: "野菜", emoji: "🥗"},
      {label: "スープ・鍋", emoji: "🍲"},
      {label: "揚げ物", emoji: "🍤"},
      {label: "粉もの", emoji: "🐙"},
      {label: "鉄板系", emoji: "🍳"},
      {label: "弁当系", emoji: "🍱"},
      {label: "チーズ系", emoji: "🧀"},
      {label: "にんにく必至", emoji: "🧄"},
      {label: "激辛系", emoji: "🌶️"},
      {label: "卵料理", emoji: "🥚"},
      {label: "おつまみ系", emoji: "🍢"},
      {label: "消化が良い", emoji: "🥣"}
    ]
  }
];

let currentScreenIndex = 0;
// 初期の除外リスト
const eliminated = {
  genre: [],
  type: []
};

// 10個の候補と、その中でさらに除外されたもの
let intermediateCandidates = [];
let intermediateEliminatedNames = [];

const appMain = document.getElementById("app-main");

function renderApp() {
  appMain.innerHTML = "";
  
  if (currentScreenIndex < screens.length) {
    renderQuestionScreen(screens[currentScreenIndex]);
  } else if (currentScreenIndex === screens.length) {
    generateIntermediateCandidates();
    renderIntermediateScreen();
  } else {
    renderFinalScreen();
  }
}

function renderQuestionScreen(screenData) {
  const wrapper = document.createElement('div');
  wrapper.className = 'screen active';
  
  const title = document.createElement('h2');
  title.className = 'question-title';
  title.innerHTML = screenData.title + `<br><span style="font-size:14px; color:#ff5232;">（複数消してもOK、消さなくてもOK）</span>`;
  wrapper.appendChild(title);

  const controls = document.createElement('div');
  controls.className = 'options-grid';
  
  const categoryId = screenData.id.split('_')[1]; // "genre" or "type"

  screenData.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    
    if (eliminated[categoryId].includes(opt.label)) {
      btn.classList.add('eliminated');
    }
    
    btn.innerHTML = `<span style="font-size: 38px;">${opt.emoji}</span><span>${opt.label}</span>`;
    
    btn.onclick = () => {
      if(navigator.vibrate) navigator.vibrate(50);
      const idx = eliminated[categoryId].indexOf(opt.label);
      if (idx > -1) {
        // 取り消し
        eliminated[categoryId].splice(idx, 1);
        btn.classList.remove('eliminated');
      } else {
        // 除外する
        eliminated[categoryId].push(opt.label);
        btn.classList.add('eliminated');
      }
    };
    controls.appendChild(btn);
  });
  
  wrapper.appendChild(controls);

  const nextBtn = document.createElement('button');
  nextBtn.className = 'nav-btn btn-danger';
  nextBtn.innerText = currentScreenIndex === screens.length - 1 ? '候補を絞り込む！ 🔪' : '次へ 👉';
  nextBtn.onclick = () => {
    currentScreenIndex++;
    renderApp();
  };
  
  wrapper.appendChild(nextBtn);
  appMain.appendChild(wrapper);
}

function generateIntermediateCandidates() {
  let validFoods = allFoods.filter(f => {
    if (eliminated.genre.includes(f.genre)) return false;
    
    const hasEliminatedType = eliminated.type.some(t => f.type.includes(t));
    if (hasEliminatedType) return false;
    
    return true;
  });

  if (validFoods.length < 10) {
      const remaining = allFoods.filter(f => !validFoods.includes(f));
      remaining.sort(() => 0.5 - Math.random());
      validFoods = [...validFoods, ...remaining.slice(0, 10 - validFoods.length)];
  }

  // 生き残った大量のリストから、ランダムに10個抽出する！！
  validFoods.sort(() => 0.5 - Math.random());
  intermediateCandidates = validFoods.slice(0, 10);
  intermediateEliminatedNames = [];
}

function renderIntermediateScreen() {
  const wrapper = document.createElement('div');
  wrapper.className = 'screen active';
  
  wrapper.innerHTML = `
    <h2 class="question-title">10個の候補が生き残った！<br><span style="font-size:18px; color:var(--primary-color);">「これは違うな」というものをタップして吹き飛ばしてね💥</span></h2>
    <div class="target-list" id="target-list"></div>
    <button class="nav-btn" id="btn-final" style="margin-top: 10px;">最終結果を見る！ 🏆</button>
  `;
  appMain.appendChild(wrapper);

  const listContainer = document.getElementById('target-list');
  
  intermediateCandidates.forEach(cand => {
      const btn = document.createElement('div');
      btn.className = 'target-item';
      btn.innerText = cand.name;
      
      btn.onclick = () => {
          if (intermediateEliminatedNames.includes(cand.name)) {
              intermediateEliminatedNames = intermediateEliminatedNames.filter(n => n !== cand.name);
              btn.classList.remove('eliminated');
          } else {
              intermediateEliminatedNames.push(cand.name);
              btn.classList.add('eliminated');
              if(navigator.vibrate) navigator.vibrate([30, 50, 30]);
          }
          
          const finalBtn = document.getElementById('btn-final');
          if (intermediateEliminatedNames.length === 10) {
              finalBtn.disabled = true;
              finalBtn.innerText = '全部消えちゃった！😱';
          } else {
              finalBtn.disabled = false;
              finalBtn.innerText = '最終決定！ 🏆';
          }
      };
      
      listContainer.appendChild(btn);
  });

  document.getElementById('btn-final').onclick = () => {
      currentScreenIndex++;
      renderApp();
  };
}

function renderFinalScreen() {
  const wrapper = document.createElement('div');
  wrapper.className = 'screen active';
  
  wrapper.innerHTML = `
    <h2 class="question-title" style="margin-bottom: 8px;">🔥 最終生存者 🔥</h2>
    <p style="text-align: center; font-weight: 700; color: #7f8fa6; margin-bottom: 24px;">
      消去法を生き抜いた最適な5つの料理！
    </p>
    <div class="podium" id="podium-list"></div>
    <button class="nav-btn" style="margin-top: 24px; background: #fff; border-color: #192a56; box-shadow: 0 8px 0 #192a56; color: #192a56;" onclick="resetApp()">
      🔄 最初からやり直す
    </button>
  `;
  appMain.appendChild(wrapper);
  
  let survivors = intermediateCandidates.filter(c => !intermediateEliminatedNames.includes(c.name));
  
  survivors.sort(() => 0.5 - Math.random());
  const final5 = survivors.slice(0, 5);
  
  const podiumContainer = document.getElementById('podium-list');
  const medals = ["🥇 1位", "🥈 2位", "🥉 3位", "🏅 4位", "🏅 5位"];
  
  final5.forEach((dish, index) => {
      // searchプロパティがあればそれを使い、なければ名前から絵文字を除去
      const searchQuery = dish.search || dish.name.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{1F200}-\u{1F251}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{1FA70}-\u{1FAFF}]/gu, '').trim();
      const query = encodeURIComponent(searchQuery);
      const el = document.createElement('div');
      el.className = `podium-item podium-${index + 1}`;
      el.style.animationDelay = `${index * 0.2}s`;
      el.style.opacity = '0';
      
      let variationsHtml = "";
      if (dish.variations && dish.variations.length > 0) {
        variationsHtml = `
          <div style="font-size: 14px; color: #b33939; margin-bottom: 16px; font-weight: 900; background: #fffa65; padding: 12px; border-radius: 12px; border: 3px dashed #ff9f1a; transform: rotate(-1deg); box-shadow: 0 4px 0 rgba(0,0,0,0.1);">
            <div style="display:inline-block; font-size:12px; background:#ff9f1a; color:#fff; padding:4px 10px; border-radius:20px; margin-bottom:6px;">✨ 似ている別メニュー ✨</div><br>
            ${dish.variations.join(' ・ ')}
          </div>
        `;
      }
      
      el.innerHTML = `
          <div class="rank-badge" style="font-size:16px; padding:4px 12px; font-weight:900; border:3px solid #192a56;">${medals[index]}</div>
          <div class="dish-name" style="margin-top:8px;">${dish.name}</div>
          ${variationsHtml}
          <div style="display:flex; justify-content:center; gap:8px; flex-wrap:wrap; margin-top:8px;">
            <a href="https://tabelog.com/rst/rstsearch/?sk=${query}" target="_blank" class="btn-search">🍽️ 食べログ</a>
            <a href="https://www.google.com/search?q=出前館+${query}" target="_blank" class="btn-search">🛵 出前館検索</a>
            <a href="https://cookpad.com/search/${query}" target="_blank" class="btn-search" style="background:#ff9f1a; border-color:#e67e22; box-shadow:0 4px 0 #e67e22;">🍳 クックパッド</a>
          </div>
      `;
      podiumContainer.appendChild(el);
  });
}

function resetApp() {
  currentScreenIndex = 0;
  eliminated.genre = [];
  eliminated.type = [];
  intermediateCandidates = [];
  intermediateEliminatedNames = [];
  renderApp();
}

renderApp();
