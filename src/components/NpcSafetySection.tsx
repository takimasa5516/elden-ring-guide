import React, { useState } from 'react';
import { missableAlerts } from '../data/npcSafetyData';
import { npcQuestFlowList } from '../data/npcQuestFlowData';
import {
  AlertTriangle,
  Users,
  ChevronDown,
  MapPin,
  Flame,
  Award,
  Scroll,
  Search,
  Check,
  Compass,
} from 'lucide-react';

export const NpcSafetySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'flow' | 'alerts'>('flow');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedNpc, setExpandedNpc] = useState<string | null>('ranni');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'すべて (13)' },
    { id: 'ending', label: 'エンディング分岐 (4)' },
    { id: 'equipment', label: '最強装備・タリスマン (6)' },
    { id: 'function', label: '商人・特殊機能 (3)' },
  ];

  const filteredNpcs = npcQuestFlowList.filter((npc) => {
    const matchesCategory = selectedCategory === 'all' || npc.category === selectedCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      npc.name.toLowerCase().includes(query) ||
      npc.title.toLowerCase().includes(query) ||
      npc.firstLocation.toLowerCase().includes(query) ||
      npc.mainRewards.some((r) => r.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (id: string) => {
    setExpandedNpc((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Banner */}
      <div className="bg-elden-panel p-4 sm:p-6 rounded-2xl border border-elden-border relative overflow-hidden space-y-3">
        <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-red-950/20 rounded-full blur-2xl pointer-events-none" />
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/60 text-red-300 text-xs font-serif font-bold">
          <Flame className="w-3.5 h-3.5 text-red-400" />
          <span>SPOILER UNLOCKED • サブNPCイベント完全攻略 ＆ 取返不能防止</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white font-serif flex items-center gap-2">
          <Users className="w-6 h-6 text-elden-gold" />
          <span>サブNPCイベント完全攻略フロー ＆ 取り返しのつかない要素</span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-3xl">
          【一部ネタバレ解禁】ラニやミリセントをはじめとする全13大サブNPCの<strong>出会いから最終結末、ボス共闘、運命の分岐選択、最強装備・エンディング修復ルーン入手までの完全チャート</strong>を網羅。取り返しのつかない重大アラートも併載しています。
        </p>
      </div>

      {/* Main Mode Switcher (Flow vs Critical Alerts) */}
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => setActiveTab('flow')}
          className={`p-3 sm:p-3.5 rounded-xl border text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
            activeTab === 'flow'
              ? 'bg-elden-gold text-black shadow-md font-serif'
              : 'bg-elden-panel text-gray-400 hover:text-white border-elden-border'
          }`}
        >
          <Scroll className="w-4 h-4 shrink-0" />
          <span>サブNPC完全攻略フロー (全13名)</span>
        </button>

        <button
          onClick={() => setActiveTab('alerts')}
          className={`p-3 sm:p-3.5 rounded-xl border text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
            activeTab === 'alerts'
              ? 'bg-red-900/80 text-white shadow-md border-red-500 font-serif'
              : 'bg-elden-panel text-gray-400 hover:text-white border-elden-border'
          }`}
        >
          <AlertTriangle className="w-4 h-4 shrink-0 text-red-400" />
          <span>重大取返不能アラート (灰都化等)</span>
        </button>
      </div>

      {/* ======================================================== */}
      {/* MODE 1: NPC QUEST COMPLETE FLOWS (ネタバレ解禁) */}
      {/* ======================================================== */}
      {activeTab === 'flow' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Controls: Search & Category Filters */}
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-elden-gold/20 text-elden-gold-light border border-elden-gold/50 shadow-sm'
                      : 'bg-black/40 text-gray-400 hover:text-white border border-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[200px] sm:min-w-[240px]">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="NPC名・報酬・地名で検索..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-black/50 border border-elden-border text-xs text-white placeholder-gray-500 focus:outline-none focus:border-elden-gold"
              />
            </div>
          </div>

          {/* NPC Flow Cards List */}
          <div className="space-y-4">
            {filteredNpcs.map((npc) => {
              const isExpanded = expandedNpc === npc.id;
              return (
                <div
                  key={npc.id}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isExpanded
                      ? 'bg-elden-panel border-elden-gold/50 shadow-xl'
                      : 'bg-elden-panel/80 hover:bg-elden-panel border-elden-border'
                  }`}
                >
                  {/* Card Header (Always Visible, Click to Toggle) */}
                  <div
                    onClick={() => toggleExpand(npc.id)}
                    className="p-4 sm:p-5 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 select-none"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs px-2.5 py-0.5 rounded-full font-serif font-bold bg-elden-gold/15 text-elden-gold-light border border-elden-gold/30">
                          {npc.categoryLabel}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-white font-serif flex items-center gap-2">
                          <span>{npc.name}</span>
                        </h3>
                        <span className="text-xs text-gray-400 font-serif hidden sm:inline">— {npc.title}</span>
                      </div>
                      <p className="text-xs text-gray-300 leading-relaxed line-clamp-1 sm:line-clamp-none">
                        {npc.summary}
                      </p>
                      <div className="flex items-center gap-1.5 text-[11px] text-elden-gold-light/90">
                        <MapPin className="w-3.5 h-3.5 text-elden-gold shrink-0" />
                        <span>初遭遇: {npc.firstLocation}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5">
                      <div className="flex flex-wrap gap-1 sm:justify-end max-w-xs">
                        {npc.mainRewards.slice(0, 2).map((r, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] px-2 py-0.5 rounded bg-black/60 border border-elden-border text-yellow-300 truncate max-w-[150px]"
                          >
                            {r.split('（')[0]}
                          </span>
                        ))}
                      </div>
                      <button
                        className={`p-1.5 rounded-lg border transition-transform ${
                          isExpanded ? 'bg-elden-gold text-black border-elden-gold rotate-180' : 'bg-black/40 text-gray-400 border-white/10'
                        }`}
                        aria-label="開閉"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Card Content (Expandable) */}
                  {isExpanded && (
                    <div className="border-t border-elden-border/60 p-4 sm:p-6 space-y-6 bg-black/30">
                      {/* Rewards Overview */}
                      <div className="p-3.5 rounded-xl bg-black/50 border border-elden-border space-y-2">
                        <strong className="text-xs text-elden-gold font-serif flex items-center gap-1.5">
                          <Award className="w-4 h-4" />
                          <span>獲得できる主要報酬・遺品</span>
                        </strong>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                          {npc.mainRewards.map((reward, idx) => (
                            <div key={idx} className="flex items-start gap-1.5 text-xs text-gray-200">
                              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{reward}</span>
                            </div>
                          ))}
                        </div>
                        {npc.endingImpact && (
                          <div className="text-xs text-purple-300 bg-purple-950/20 p-2.5 rounded-lg border border-purple-800/30 mt-2">
                            <strong className="block font-serif text-purple-200 mb-0.5">🌟 エンディング分岐への影響:</strong>
                            <p className="leading-relaxed">{npc.endingImpact}</p>
                          </div>
                        )}
                      </div>

                      {/* Branch Choice Box (if applicable) */}
                      {npc.branchChoice && (
                        <div className="p-4 rounded-xl bg-yellow-950/20 border border-yellow-800/40 space-y-3">
                          <div className="flex items-center gap-2 text-yellow-300 font-serif font-bold text-sm">
                            <AlertTriangle className="w-4 h-4 text-yellow-400" />
                            <span>{npc.branchChoice.title}</span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                            <div className="p-3 rounded-lg bg-black/60 border border-yellow-700/40 space-y-1.5">
                              <strong className="text-emerald-400 block font-serif">{npc.branchChoice.choiceA.label}</strong>
                              <p className="text-gray-300 text-[11px] leading-relaxed">{npc.branchChoice.choiceA.action}</p>
                              <div className="text-[11px] text-gray-400">結末: {npc.branchChoice.choiceA.outcome}</div>
                              <div className="text-yellow-300 text-[11px] font-bold bg-yellow-900/30 p-1.5 rounded">
                                報酬: {npc.branchChoice.choiceA.reward}
                              </div>
                            </div>

                            <div className="p-3 rounded-lg bg-black/60 border border-red-700/40 space-y-1.5">
                              <strong className="text-red-400 block font-serif">{npc.branchChoice.choiceB.label}</strong>
                              <p className="text-gray-300 text-[11px] leading-relaxed">{npc.branchChoice.choiceB.action}</p>
                              <div className="text-[11px] text-gray-400">結末: {npc.branchChoice.choiceB.outcome}</div>
                              <div className="text-red-300 text-[11px] font-bold bg-red-900/30 p-1.5 rounded">
                                報酬: {npc.branchChoice.choiceB.reward}
                              </div>
                            </div>
                          </div>
                          <div className="text-xs text-gray-200 bg-black/40 p-2.5 rounded border border-white/5">
                            <strong className="text-elden-gold-light">💡 おすすめの選択: </strong>
                            {npc.branchChoice.recommendation}
                          </div>
                        </div>
                      )}

                      {/* Step-by-Step Flow Timeline */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-bold text-white font-serif flex items-center gap-2">
                          <Compass className="w-4 h-4 text-elden-gold" />
                          <span>攻略手順フロー（最初から結末まで）</span>
                        </h4>

                        <div className="space-y-2.5">
                          {npc.steps.map((step) => (
                            <div
                              key={step.step}
                              className="p-3 sm:p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1.5 text-xs relative pl-9 sm:pl-10"
                            >
                              <span className="absolute left-2.5 top-3.5 w-5 h-5 rounded-full bg-elden-gold/20 text-elden-gold-light font-mono font-bold flex items-center justify-center text-[10px] border border-elden-gold/30">
                                {step.step}
                              </span>

                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                                <strong className="text-white font-serif text-sm">
                                  {step.location}
                                </strong>
                                {step.bossRequired && (
                                  <span className="text-[10px] px-2 py-0.5 rounded bg-red-950/60 border border-red-800/40 text-red-300 shrink-0 self-start sm:self-auto">
                                    討伐: {step.bossRequired}
                                  </span>
                                )}
                              </div>

                              <p className="text-gray-300 leading-relaxed">
                                {step.action}
                              </p>

                              {step.dialogOrChoice && (
                                <div className="text-[11px] text-amber-300 bg-amber-950/20 p-2 rounded border border-amber-800/30">
                                  <strong className="text-amber-200">セリフ・選択肢: </strong>
                                  {step.dialogOrChoice}
                                </div>
                              )}

                              {step.caution && (
                                <div className="text-[11px] text-red-300 bg-red-950/20 p-2 rounded border border-red-800/30">
                                  <strong className="text-red-200">⚠️ 注意: </strong>
                                  {step.caution}
                                </div>
                              )}

                              {step.note && (
                                <div className="text-[11px] text-gray-400 bg-black/30 p-2 rounded">
                                  <strong className="text-elden-gold-light">Memo: </strong>
                                  {step.note}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Spoiler Ending & Outcome */}
                      <div className="p-4 rounded-xl bg-red-950/15 border border-red-900/40 space-y-1.5 text-xs">
                        <strong className="text-red-300 font-serif flex items-center gap-1.5 text-xs sm:text-sm">
                          <Flame className="w-4 h-4 text-red-400" />
                          <span>【結末ネタバレ】このNPCの迎える最後・ストーリーの真相</span>
                        </strong>
                        <p className="text-gray-300 leading-relaxed text-[11px] sm:text-xs">
                          {npc.spoilerEnding}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODE 2: CRITICAL MISSABLE ALERTS (重大取返不能アラート) */}
      {/* ======================================================== */}
      {activeTab === 'alerts' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-red-950/20 border border-red-900/60 p-4 sm:p-5 rounded-2xl space-y-2">
            <h3 className="text-base sm:text-lg font-bold text-white font-serif flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              <span>進行前に必ずチェック！絶対に避けるべき取返不能トリガー</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              特定のエリアの大ボスを倒したり、特定のアイテムを渡してしまうと、複数のNPCイベントや伝説の武器が一瞬で消滅します。攻略を進める前に必ずご確認ください。
            </p>
          </div>

          <div className="space-y-4">
            {missableAlerts.map((alert) => (
              <div
                key={alert.id}
                className={`p-4 sm:p-5 rounded-xl border space-y-3 ${
                  alert.riskLevel === 'critical'
                    ? 'bg-red-950/25 border-red-800/70 shadow-lg'
                    : 'bg-yellow-950/20 border-yellow-800/50'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-white/5">
                  <h4 className="text-sm sm:text-base font-bold text-white font-serif flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${alert.riskLevel === 'critical' ? 'bg-red-400 animate-ping' : 'bg-yellow-400'}`} />
                    <span>{alert.title}</span>
                  </h4>
                  <span className="text-[11px] px-2.5 py-0.5 rounded bg-black/60 border border-white/10 text-red-300 font-mono self-start sm:self-auto">
                    発生時期: {alert.timing}
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-black/50 border border-white/5 text-xs text-gray-200">
                  <strong className="text-red-400 block mb-1">【失われるもの・消滅する要素】:</strong>
                  <ul className="list-disc list-inside space-y-0.5 text-[11px] text-gray-300">
                    {alert.whatIsLost.map((lost, idx) => (
                      <li key={idx}>{lost}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 rounded-lg bg-black/50 border border-white/5 text-xs text-gray-200">
                  <strong className="text-emerald-400 block mb-1">【絶対に守るべき鉄則・回避法】:</strong>
                  <p className="text-[11px] text-gray-200 leading-relaxed">{alert.preventRule}</p>
                </div>

                {alert.details && alert.details.length > 0 && (
                  <div className="text-[11px] text-gray-400 space-y-1 pl-1">
                    {alert.details.map((d, idx) => (
                      <p key={idx}>• {d}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
