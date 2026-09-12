import React, { useState } from 'react';
import {
  spiritAshesList,
  godTalismansList,
  talismanPouchGuide,
  larvalTearsList,
  essentialTricks,
} from '../data/usefulTipsData';
import { Sparkles, Ghost, Shield, RefreshCw, AlertCircle, Check, Zap } from 'lucide-react';

export const UsefulTipsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ashes' | 'talismans' | 'respec' | 'tricks'>('ashes');

  return (
    <div className="space-y-8 pb-12">
      {/* Banner */}
      <div className="bg-elden-panel p-4 sm:p-6 rounded-2xl border border-elden-border space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-elden-gold/15 border border-elden-gold/30 text-elden-gold-light text-xs font-serif font-bold">
          <Sparkles className="w-3.5 h-3.5 text-elden-gold" />
          <span>ESSENTIAL SECRETS • 神遺灰 ＆ 神タリスマン ＆ 攻略知識</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white font-serif flex items-center gap-2">
          <Zap className="w-6 h-6 text-elden-gold" />
          <span>攻略難易度を劇的に下げる必須システム ＆ 神アイテム</span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
          知っているだけで世界が変わる「公式救済システム（神遺灰）」「最強タリスマン」「ステータス振り直し」「状態異常即完治」などの最重要テクニック集です。
        </p>
      </div>

      {/* Navigation Subtabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <button
          onClick={() => setActiveTab('ashes')}
          className={`p-3 rounded-xl border text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
            activeTab === 'ashes'
              ? 'bg-elden-gold text-black shadow-md'
              : 'bg-elden-panel text-gray-400 hover:text-white border-elden-border'
          }`}
        >
          <Ghost className="w-4 h-4 shrink-0" />
          <span>神遺灰 ＆ 強化解放</span>
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
          <span>神タリスマン ＆ お守り袋</span>
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
          <span>ステ振り直し ＆ 雫の幼生</span>
        </button>

        <button
          onClick={() => setActiveTab('tricks')}
          className={`p-3 rounded-xl border text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
            activeTab === 'tricks'
              ? 'bg-elden-gold text-black shadow-md'
              : 'bg-elden-panel text-gray-400 hover:text-white border-elden-border'
          }`}
        >
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>罠解除 ＆ 便利小ワザ</span>
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
                <p>4. 再びローデリカと話し、ヒューグの言葉を伝える。再度ヒューグと話す。</p>
                <p>5. 祝福で一度休むと、ヒューグの向かい側にローデリカが座り【調霊師】として遺灰の強化が可能になる！</p>
              </div>
            </div>
          </div>

          {/* God Spirit Ashes Grid */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-serif flex items-center gap-2">
              <Ghost className="w-4 h-4 text-elden-gold" />
              <span>厳選！最後まで使える最強の神遺灰5選</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {spiritAshesList.map((ash, idx) => (
                <div key={idx} className="bg-elden-panel border border-elden-border hover:border-elden-gold/40 p-4 sm:p-5 rounded-xl space-y-2.5 transition-all">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] text-elden-gold-light font-mono block">消費: {ash.fpCost}</span>
                      <h5 className="text-base font-bold text-white font-serif">{ash.name}</h5>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-elden-gold/15 text-elden-gold border border-elden-gold/30">
                      {ash.type === 'tank' ? '高耐久タンク' : '超高火力アタッカー'}
                    </span>
                  </div>

                  <div className="text-xs text-elden-gold font-medium">
                    📍 {ash.location}
                  </div>

                  <p className="text-xs text-gray-300 bg-black/40 p-2.5 rounded-lg border border-white/5">
                    {ash.feature}
                  </p>

                  <div className="text-[11px] text-gray-400 pt-1">
                    <strong className="text-gray-300">強さの秘密: </strong>
                    {ash.whyStrong}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* --- TAB 2: TALISMANS --- */}
      {activeTab === 'talismans' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Pouch Guide */}
          <div className="bg-elden-panel border border-elden-gold/40 rounded-2xl p-4 sm:p-6 space-y-3 shadow-lg">
            <h3 className="text-base sm:text-lg font-bold text-white font-serif flex items-center gap-2">
              <Shield className="w-5 h-5 text-elden-gold" />
              <span>{talismanPouchGuide.title}</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              タリスマンは初期状態では1つしか装備できませんが、「お守り袋」を入手することで最大4つまで装備可能になります。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              {talismanPouchGuide.steps.map((step, idx) => (
                <div key={idx} className="bg-black/50 p-3 rounded-xl border border-elden-border text-xs">
                  <span className="w-5 h-5 rounded-full bg-elden-gold/20 text-elden-gold-light flex items-center justify-center font-bold font-mono text-[10px] mb-1.5">
                    +{idx + 1}
                  </span>
                  <strong className="text-white block font-serif mb-1">{step.source}</strong>
                  <span className="text-gray-400 text-[11px] leading-relaxed">{step.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* God Talismans List */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-serif flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-elden-gold" />
              <span>探索だけで拾える！絶対に確保すべき神タリスマン</span>
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

      {/* --- TAB 3: RESPEC (REBIRTH) --- */}
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

      {/* --- TAB 4: TRICKS & CURES --- */}
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
