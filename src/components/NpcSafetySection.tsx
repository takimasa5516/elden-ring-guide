import React, { useState } from 'react';
import { missableAlerts, npcSafetyList } from '../data/npcSafetyData';
import {
  ShieldAlert,
  AlertTriangle,
  Users,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Sparkles,
  MapPin,
  Flame,
  Key,
  Award,
} from 'lucide-react';

export const NpcSafetySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedNpc, setExpandedNpc] = useState<string | null>('varre');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredNpcs = npcSafetyList.filter((npc) => {
    const matchesCategory = selectedCategory === 'all' || npc.rewardType === selectedCategory;
    const matchesSearch =
      npc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      npc.bestReward.toLowerCase().includes(searchQuery.toLowerCase()) ||
      npc.firstLocation.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="bg-elden-panel p-5 sm:p-6 rounded-2xl border border-elden-border relative overflow-hidden">
        <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-red-950/20 rounded-full blur-2xl pointer-events-none" />
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-xl bg-red-950/60 border border-red-800/60 text-red-400">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-serif">
              取り返しのつかない要素 ＆ 重要NPCセーフティリスト
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
              ストーリー結末のネタバレなし。二度と手に入らなくなる神器の消滅やイベントのフラグ折れを100%未然に防ぎます。
            </p>
          </div>
        </div>
      </div>

      {/* Critical Missable Alerts */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-elden-border/60 pb-2">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-400 animate-pulse" />
            <h3 className="text-lg font-bold text-white font-serif">
              絶対にやってはいけない！重大取返不能アラート
            </h3>
          </div>
          <span className="text-xs text-red-400 font-mono">※進行前に必ずチェック</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {missableAlerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-5 rounded-xl border relative transition-all ${
                alert.riskLevel === 'critical'
                  ? 'bg-[#1a0f0f]/95 border-red-800/80 shadow-[0_0_20px_rgba(239,68,68,0.12)]'
                  : alert.riskLevel === 'high'
                  ? 'bg-[#18130e]/95 border-amber-800/70'
                  : 'bg-elden-panel border-elden-border'
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-red-400 shrink-0" />
                  <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                    {alert.title}
                  </h4>
                </div>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold shrink-0 ${
                    alert.riskLevel === 'critical'
                      ? 'bg-red-500/30 text-red-200 border border-red-500/60'
                      : 'bg-amber-500/30 text-amber-200 border border-amber-500/60'
                  }`}
                >
                  {alert.riskLevel.toUpperCase()}
                </span>
              </div>

              {/* Timing */}
              <div className="mb-3 px-3 py-1.5 rounded-lg bg-black/50 border border-white/5 text-xs text-gray-300 flex items-center gap-2">
                <span className="text-elden-gold font-bold shrink-0">発生トリガー:</span>
                <span className="text-red-300 font-medium">{alert.timing}</span>
              </div>

              {/* What is lost */}
              <div className="mb-3 space-y-1">
                <span className="text-[11px] font-bold text-red-400 uppercase tracking-wider block">
                  失われるアイテム・要素:
                </span>
                <ul className="space-y-1 pl-1">
                  {alert.whatIsLost.map((lost, idx) => (
                    <li key={idx} className="text-xs text-gray-300 flex items-start gap-1.5">
                      <span className="text-red-500 mt-0.5">✕</span>
                      <span>{lost}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prevent Rule */}
              <div className="p-3 rounded-lg bg-red-950/40 border border-red-800/50 mb-3">
                <span className="text-[11px] font-bold text-elden-gold-light uppercase tracking-wider block mb-1">
                  🛡️ 安全策・回避ルール:
                </span>
                <p className="text-xs text-emerald-300 font-semibold leading-relaxed">
                  {alert.preventRule}
                </p>
              </div>

              {/* Details List */}
              <ul className="space-y-1 pt-2 border-t border-white/5 text-[11px] text-gray-400">
                {alert.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-gray-500">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Key NPCs Section */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-elden-border/60 pb-3">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-elden-gold" />
            <h3 className="text-lg font-bold text-white font-serif">
              超重要NPCセーフティ進行表（神アイテム・神器回収）
            </h3>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-wrap items-center gap-2">
            <input
              type="text"
              placeholder="NPC名・報酬で検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-3 py-1.5 text-xs bg-elden-card border border-elden-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-elden-gold w-40 sm:w-48"
            />
            <div className="inline-flex p-0.5 bg-elden-card rounded-lg border border-elden-border">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-2 py-1 rounded text-[11px] font-medium transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-elden-gold text-black font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                全て
              </button>
              <button
                onClick={() => setSelectedCategory('weapon')}
                className={`px-2 py-1 rounded text-[11px] font-medium transition-all ${
                  selectedCategory === 'weapon'
                    ? 'bg-elden-gold text-black font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                武器
              </button>
              <button
                onClick={() => setSelectedCategory('talisman')}
                className={`px-2 py-1 rounded text-[11px] font-medium transition-all ${
                  selectedCategory === 'talisman'
                    ? 'bg-elden-gold text-black font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                タリスマン
              </button>
              <button
                onClick={() => setSelectedCategory('material')}
                className={`px-2 py-1 rounded text-[11px] font-medium transition-all ${
                  selectedCategory === 'material'
                    ? 'bg-elden-gold text-black font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                素材
              </button>
            </div>
          </div>
        </div>

        {/* NPC Cards Accordion */}
        <div className="space-y-3">
          {filteredNpcs.map((npc) => {
            const isExpanded = expandedNpc === npc.id;
            return (
              <div
                key={npc.id}
                className="bg-elden-panel/90 rounded-xl border border-elden-border overflow-hidden transition-all hover:border-elden-gold/40"
              >
                {/* Accordion Header */}
                <div
                  onClick={() => setExpandedNpc(isExpanded ? null : npc.id)}
                  className="p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer select-none bg-elden-card/50 hover:bg-elden-card/80 transition-colors"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-elden-gold/10 border border-elden-gold/30 flex items-center justify-center text-elden-gold shrink-0">
                      {npc.rewardType === 'weapon' ? (
                        <Award className="w-5 h-5" />
                      ) : npc.rewardType === 'talisman' ? (
                        <Sparkles className="w-5 h-5" />
                      ) : npc.rewardType === 'material' ? (
                        <Key className="w-5 h-5" />
                      ) : (
                        <Users className="w-5 h-5" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-base font-bold text-white truncate">{npc.name}</h4>
                        <span className="text-[11px] text-gray-400 font-mono px-2 py-0.5 rounded bg-black/40 border border-gray-700">
                          {npc.title}
                        </span>
                      </div>
                      <div className="text-xs text-elden-gold-light mt-1 flex items-center gap-1.5 truncate">
                        <Award className="w-3.5 h-3.5 shrink-0 text-elden-gold" />
                        <span className="truncate">最重要リワード: {npc.bestReward}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="hidden sm:inline-block text-[11px] px-2.5 py-1 rounded bg-black/60 border border-elden-border text-gray-300">
                      初遭遇: {npc.firstLocation.split('：')[0]}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-elden-gold" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>

                {/* Accordion Body */}
                {isExpanded && (
                  <div className="p-4 sm:p-5 border-t border-elden-border/60 bg-black/20 space-y-4 animate-fadeIn">
                    {/* Safety Rule Banner */}
                    <div className="p-3.5 rounded-xl bg-red-950/30 border border-red-800/50 flex items-start gap-2.5">
                      <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-red-300 uppercase tracking-wider block">
                          ⚠️ セーフティルール（これだけは守れ）:
                        </span>
                        <p className="text-xs sm:text-sm text-gray-200 mt-0.5 font-medium">
                          {npc.safetyRule}
                        </p>
                      </div>
                    </div>

                    {/* Step by Step Timeline */}
                    <div className="space-y-2.5">
                      <span className="text-xs font-bold text-elden-gold font-serif flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" />
                        安全進行ステップ（最速入手ルート）
                      </span>

                      <div className="space-y-2 relative before:absolute before:top-2 before:bottom-2 before:left-[15px] before:w-[2px] before:bg-elden-border">
                        {npc.stepGuide.map((step, idx) => (
                          <div key={idx} className="flex items-start gap-3 pl-1 relative">
                            <div className="w-6 h-6 rounded-full bg-elden-card border border-elden-gold/60 text-elden-gold text-[11px] font-bold flex items-center justify-center shrink-0 z-10">
                              {idx + 1}
                            </div>
                            <div className="flex-1 bg-elden-panel/80 p-3 rounded-xl border border-white/5">
                              <div className="flex items-center gap-1.5 text-xs font-bold text-elden-gold-light mb-1">
                                <MapPin className="w-3.5 h-3.5 text-elden-gold" />
                                <span>{step.location}</span>
                              </div>
                              <p className="text-xs text-gray-300 leading-relaxed">{step.action}</p>
                              {step.note && (
                                <p className="text-[11px] text-amber-300/90 mt-1.5 font-mono">
                                  💡 {step.note}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
