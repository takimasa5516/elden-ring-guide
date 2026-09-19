import React, { useState } from 'react';
import {
  spiritAshesList,
  godTalismansList,
  talismanPouches,
  buildTalismanPresets,
  greatRunesGuide,
  larvalTearsList,
  essentialTricks,
} from '../data/usefulTipsData';
import { Sparkles, Ghost, Shield, RefreshCw, AlertCircle, Check, Zap, Layers, Crown } from 'lucide-react';

export const UsefulTipsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ashes' | 'talismans' | 'runes' | 'respec' | 'tricks'>('ashes');

  return (
    <div className="space-y-8 pb-12">
      {/* Banner */}
      <div className="bg-elden-panel p-4 sm:p-6 rounded-2xl border border-elden-border space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-elden-gold/15 border border-elden-gold/30 text-elden-gold-light text-xs font-serif font-bold">
          <Sparkles className="w-3.5 h-3.5 text-elden-gold" />
          <span>ESSENTIAL SECRETS • 神遺灰 ＆ 神タリスマン ＆ 大ルーン ＆ 攻略知識</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white font-serif flex items-center gap-2">
          <Zap className="w-6 h-6 text-elden-gold" />
          <span>攻略難易度を劇的に下げる必須システム ＆ 神アイテム</span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
          知っているだけで世界が変わる「公式救済システム（神遺灰）」「最大4枠タリスマン＆最強構成」「大ルーンと神授塔」「ステータス振り直し」「状態異常即完治」などの最重要テクニック集です。
        </p>
      </div>

      {/* Navigation Subtabs */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        <button
          onClick={() => setActiveTab('ashes')}
          className={`p-3 rounded-xl border text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
            activeTab === 'ashes'
              ? 'bg-elden-gold text-black shadow-md'
              : 'bg-elden-panel text-gray-400 hover:text-white border-elden-border'
          }`}
        >
          <Ghost className="w-4 h-4 shrink-0" />
          <span>神遺灰 ＆ 強化</span>
        </button>

        <button
          onClick={() => setActiveTab('talismans')}
          className={`p-3 rounded-xl border text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
            activeTab === 'talismans'
              ? 'bg-elden-gold text-black shadow-md'
              : 'bg-elden-panel text-gray-400 hover:text-white border-elden-border'
          }`}
        >
          <Shield className="w-4 h-4 shrink-0" />
          <span>タリスマン ＆ 枠拡張</span>
        </button>

        <button
          onClick={() => setActiveTab('runes')}
          className={`p-3 rounded-xl border text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
            activeTab === 'runes'
              ? 'bg-elden-gold text-black shadow-md'
              : 'bg-elden-panel text-gray-400 hover:text-white border-elden-border'
          }`}
        >
          <Crown className="w-4 h-4 shrink-0" />
          <span>大ルーン ＆ 神授塔</span>
        </button>

        <button
          onClick={() => setActiveTab('respec')}
          className={`p-3 rounded-xl border text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
            activeTab === 'respec'
              ? 'bg-elden-gold text-black shadow-md'
              : 'bg-elden-panel text-gray-400 hover:text-white border-elden-border'
          }`}
        >
          <RefreshCw className="w-4 h-4 shrink-0" />
          <span>ステ振り直し</span>
        </button>

        <button
          onClick={() => setActiveTab('tricks')}
          className={`p-3 rounded-xl border text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all col-span-2 sm:col-span-1 ${
            activeTab === 'tricks'
              ? 'bg-elden-gold text-black shadow-md'
              : 'bg-elden-panel text-gray-400 hover:text-white border-elden-border'
          }`}
        >
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>罠解除 ＆ 小ワザ</span>
        </button>
      </div>

      {/* --- TAB 1: SPIRIT ASHES --- */}
      {activeTab === 'ashes' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Roderika Tuning Unlock Guide */}
          <div className="bg-elden-panel border border-elden-gold/40 rounded-2xl p-4 sm:p-6 space-y-3 shadow-lg">
            <h3 className="text-base sm:text-lg font-bold text-white font-serif flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-elden-gold" />
              <span>超重要：調霊師ローデリカを解放して遺灰を「強化」せよ！</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              遺灰は初期状態では弱くすぐ死にますが、各地の地下墓で手に入る「墓すずらん」を使って<strong>最大+10まで強化するとHPと攻撃力が数倍に跳ね上がり、ボスの猛攻を何分も耐える化け物になります。</strong>
            </p>

            <div className="bg-black/50 p-3.5 rounded-xl border border-elden-border space-y-2 text-xs text-gray-300">
              <strong className="text-elden-gold-light block font-serif">【遺灰強化の解放手順】:</strong>
              <div className="space-y-1 pl-1">
                <p>1. 嵐の丘「嵐丘のボロ屋」でローデリカと会って複数回会話し「霊クラゲの遺灰」を貰う。</p>
                <p>2. ストームヴィル城へ進むか、円卓解放後に円卓を訪れると、ローデリカが暖炉の前に移動している。</p>
                <p>3. ローデリカと会話後、鍛冶屋ヒューグと話し「ローデリカについて」を選択。</p>
                <p>4. 再びローデリカと話し、もう一度ヒューグと話して祝福で一度休むと、ヒューグの向かいに【調霊師】として店を構えます。</p>
              </div>
            </div>
          </div>

          {/* God Ashes List */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-serif flex items-center gap-2">
              <Ghost className="w-4 h-4 text-elden-gold" />
              <span>序盤から終盤まで活躍する「人権」おすすめ遺灰</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {spiritAshesList.map((ash, idx) => (
                <div key={idx} className="bg-elden-panel border border-elden-border hover:border-elden-gold/40 p-4 sm:p-5 rounded-xl space-y-2.5 transition-all">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h5 className="text-base font-bold text-white font-serif">{ash.name}</h5>
                      <span className="text-[10px] text-elden-gold/80 font-mono">消費: {ash.fpCost}</span>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded bg-elden-gold/15 text-elden-gold-light border border-elden-gold/30 font-serif shrink-0">
                      {ash.type}
                    </span>
                  </div>

                  <div className="text-xs text-gray-300">
                    <span className="text-elden-gold font-medium">入手場所: </span>
                    {ash.location}
                  </div>

                  <p className="text-[11px] text-gray-400 leading-relaxed">
                    {ash.feature}
                  </p>

                  <div className="text-[11px] text-gray-300 bg-black/40 p-2 rounded border border-white/5">
                    <strong className="text-elden-gold-light">おすすめ理由: </strong>
                    {ash.whyStrong}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* --- TAB 2: TALISMANS & POUCHES --- */}
      {activeTab === 'talismans' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Talisman Pouch Roadmap */}
          <div className="bg-elden-panel border border-elden-gold/40 rounded-2xl p-4 sm:p-6 space-y-3 shadow-lg">
            <h3 className="text-base sm:text-lg font-bold text-white font-serif flex items-center gap-2">
              <Shield className="w-5 h-5 text-elden-gold" />
              <span>タリスマン袋 4枠完全解放ロードマップ</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              タリスマンは初期状態では1個しか装備できませんが、「お守り袋」を3個集めることで<strong>最大4枠</strong>まで拡張されます。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
              {talismanPouches.map((step, idx) => (
                <div key={idx} className="bg-black/50 p-3 rounded-xl border border-elden-border text-xs flex flex-col justify-between space-y-2">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="px-2 py-0.5 rounded bg-elden-gold/20 text-elden-gold-light font-bold font-mono text-[11px]">
                        {step.slotNumber}
                      </span>
                      <span className="text-[10px] text-gray-400">{step.timing}</span>
                    </div>
                    <strong className="text-white block font-serif text-sm mb-1">{step.source}</strong>
                    <span className="text-elden-gold-light text-[11px] block mb-1">場所: {step.location}</span>
                  </div>
                  <span className="text-gray-300 text-[11px] leading-relaxed bg-white/5 p-2 rounded block">{step.note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Build Presets */}
          <div className="space-y-4">
            <h4 className="text-sm sm:text-base font-bold text-white font-serif flex items-center gap-2">
              <Layers className="w-4 h-4 text-elden-gold" />
              <span>ビルド別 最強タリスマン4選プリセット（迷ったらこれを目指せ！）</span>
            </h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {buildTalismanPresets.map((preset, idx) => (
                <div key={idx} className="bg-elden-panel border border-elden-border rounded-xl p-4 sm:p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <h5 className="text-base font-bold text-white font-serif">{preset.buildName}</h5>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-elden-gold/15 text-elden-gold-light border border-elden-gold/30 font-serif">
                      {preset.badge}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {preset.talismans.map((t, tidx) => (
                      <div key={tidx} className="bg-black/40 p-2.5 rounded-lg border border-white/5 space-y-1">
                        <div className="font-bold text-yellow-300 font-serif">{t.name}</div>
                        <div className="text-[11px] text-gray-200">{t.effect}</div>
                        <div className="text-[10px] text-gray-400">入手: {t.location}</div>
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-gray-300 bg-elden-gold/10 p-2.5 rounded-lg border border-elden-gold/20">
                    <strong className="text-elden-gold-light block font-serif mb-0.5">シナジー解説:</strong>
                    <span className="text-[11px] leading-relaxed">{preset.synergyAdvice}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* God Talismans List */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-serif flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-elden-gold" />
              <span>探索だけで拾える！絶対に確保すべき神タリスマン一覧</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {godTalismansList.map((talisman, idx) => (
                <div key={idx} className="bg-elden-panel border border-elden-border hover:border-elden-gold/40 p-4 sm:p-5 rounded-xl space-y-2.5 transition-all">
                  <div className="flex items-start justify-between gap-2">
                    <h5 className="text-base font-bold text-white font-serif">{talisman.name}</h5>
                  </div>
                  <div className="text-xs text-yellow-300 font-bold bg-yellow-950/20 p-2 rounded border border-yellow-800/30">
                    効果: {talisman.effect}
                  </div>
                  <div className="text-xs text-gray-300">
                    <span className="text-elden-gold font-medium">場所: </span>
                    {talisman.location}
                  </div>
                  <p className="text-[11px] text-gray-400 leading-relaxed">
                    {talisman.howToGet}
                  </p>
                  <div className="text-[11px] text-gray-400 bg-black/40 p-2 rounded border border-white/5">
                    <strong className="text-elden-gold-light">寸評: </strong>
                    {talisman.note}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* --- TAB 3: GREAT RUNES & DIVINE TOWERS --- */}
      {activeTab === 'runes' && (
        <div className="space-y-6 animate-fadeIn">
          {/* How Great Runes Work */}
          <div className="bg-elden-panel border border-elden-gold/40 rounded-2xl p-4 sm:p-6 space-y-3 shadow-lg">
            <h3 className="text-base sm:text-lg font-bold text-white font-serif flex items-center gap-2">
              <Crown className="w-5 h-5 text-elden-gold" />
              <span>大ルーンの解放 ＆「ルーンの弧」発動の3ステップ</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              デミゴッド（主要ボス）を倒して手に入れた大ルーンは、そのままでは力が失われており効果がありません。
              対応する<strong>「神授塔」</strong>の最上階へ行き、力を取り戻すことで初めて装備できるようになります。
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-black/50 p-3.5 rounded-xl border border-elden-border space-y-1 text-xs">
                <span className="px-2 py-0.5 rounded bg-elden-gold/20 text-elden-gold-light font-bold font-mono text-[10px]">STEP 1</span>
                <strong className="text-white block font-serif text-sm">神授塔で力を取り戻す</strong>
                <p className="text-gray-400 text-[11px] leading-relaxed">各デミゴッドに対応した神授塔へ行き、頂上の二本指の骸を調べて大ルーンを解放する。</p>
              </div>

              <div className="bg-black/50 p-3.5 rounded-xl border border-elden-border space-y-1 text-xs">
                <span className="px-2 py-0.5 rounded bg-elden-gold/20 text-elden-gold-light font-bold font-mono text-[10px]">STEP 2</span>
                <strong className="text-white block font-serif text-sm">祝福で大ルーンを装備</strong>
                <p className="text-gray-400 text-[11px] leading-relaxed">任意の祝福でメニューを開き「大ルーン」から使いたい大ルーンを1つスロットにセットする。</p>
              </div>

              <div className="bg-black/50 p-3.5 rounded-xl border border-elden-border space-y-1 text-xs">
                <span className="px-2 py-0.5 rounded bg-elden-gold/20 text-elden-gold-light font-bold font-mono text-[10px]">STEP 3</span>
                <strong className="text-white block font-serif text-sm">「ルーンの弧」を消費して発動</strong>
                <p className="text-gray-400 text-[11px] leading-relaxed">消費アイテム「ルーンの弧」を使うと恩恵が発動。死亡するまで効果が永続します（死亡時に切れるため再使用が必要）。</p>
              </div>
            </div>
          </div>

          {/* Great Runes List */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white font-serif flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-elden-gold" />
              <span>主要大ルーン ＆ 神授塔の場所・おすすめ活用法</span>
            </h4>

            <div className="space-y-4">
              {greatRunesGuide.map((rune, idx) => (
                <div key={idx} className="bg-elden-panel border border-elden-border rounded-xl p-4 sm:p-5 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-elden-border">
                    <div>
                      <h5 className="text-base font-bold text-white font-serif">{rune.name}</h5>
                      <span className="text-xs text-gray-400">ボス: {rune.boss}</span>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded bg-black/60 text-elden-gold-light border border-elden-border font-serif">
                      神授塔: {rune.divineTower}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="space-y-1.5">
                      <div className="text-yellow-300 font-bold bg-yellow-950/20 p-2.5 rounded border border-yellow-800/30">
                        【恩恵効果】: {rune.effect}
                      </div>
                      <div className="text-gray-300 bg-black/40 p-2.5 rounded border border-white/5">
                        <strong className="text-elden-gold block mb-1">神授塔の場所・行き方:</strong>
                        <p className="text-[11px] text-gray-300 leading-relaxed">{rune.towerLocation}</p>
                      </div>
                    </div>

                    <div className="text-gray-300 bg-elden-gold/10 p-3 rounded-lg border border-elden-gold/20 flex flex-col justify-center">
                      <strong className="text-elden-gold-light block font-serif mb-1 text-xs">💡 おすすめ使い分け・評価:</strong>
                      <p className="text-[11px] leading-relaxed text-gray-200">{rune.runeArcUsage}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* --- TAB 4: RESPEC (REBIRTH) --- */}
      {activeTab === 'respec' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-elden-panel border border-elden-gold/40 rounded-2xl p-4 sm:p-6 space-y-3 shadow-lg">
            <h3 className="text-base sm:text-lg font-bold text-white font-serif flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-elden-gold" />
              <span>ステータス振り直し（生まれ直し）の完全ガイド</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              「ステ振りを失敗した」「別の武器や魔術を使いたくなった」場合でも取り返しがつかない心配はありません。
              魔術学院レアルカリアの大ボス<strong>「満月の女王レナラ」</strong>を倒すと、アイテム<strong>「雫の幼生」</strong>を消費して、キャラクターの素性初期ステータスまで何度でも自由にステータスを再配分できます！
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-serif flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>戦闘なし・低リスクで拾える「雫の幼生」安全スポット</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {larvalTearsList.map((tear, idx) => (
                <div key={idx} className="bg-elden-panel border border-elden-border p-4 rounded-xl space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-black/60 border border-elden-border text-elden-gold-light font-mono">
                      {tear.area}
                    </span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      危険度: {tear.risk}
                    </span>
                  </div>
                  <h5 className="text-sm font-bold text-white font-serif">{tear.location}</h5>
                  <p className="text-xs text-gray-300 leading-relaxed bg-black/40 p-2 rounded">
                    {tear.howToGet}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* --- TAB 5: TRICKS & CURES --- */}
      {activeTab === 'tricks' && (
        <div className="space-y-4 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {essentialTricks.map((trick, idx) => (
              <div
                key={idx}
                className={`p-4 sm:p-5 rounded-xl border flex flex-col justify-between space-y-3 ${
                  trick.type === 'danger'
                    ? 'bg-red-950/20 border-red-900/60'
                    : trick.type === 'heal'
                    ? 'bg-emerald-950/20 border-emerald-900/60'
                    : 'bg-elden-panel border-elden-border'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="text-sm sm:text-base font-bold text-white font-serif leading-snug">
                      {trick.title}
                    </h4>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold shrink-0 ${
                      trick.type === 'danger' ? 'bg-red-500/20 text-red-300' : 'bg-elden-gold/20 text-elden-gold-light'
                    }`}>
                      {trick.badge}
                    </span>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed mb-3">
                    {trick.desc}
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-black/50 border border-white/5 text-xs text-gray-200">
                  <strong className="text-elden-gold block mb-1">【解決策・実践法】:</strong>
                  <p className="leading-relaxed">{trick.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
