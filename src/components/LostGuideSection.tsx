import React, { useState } from 'react';
import {
  Compass,
  Skull,
  Users,
  ShieldAlert,
  Coins,
  ArrowRight,
  AlertCircle,
  HelpCircle,
  CheckCircle2,
  Lightbulb,
} from 'lucide-react';
import { lostSituations } from '../data/lostGuideData';
import { LostSituation } from '../types';

interface LostGuideSectionProps {
  onNavigateTab?: (tabId: string) => void;
}

export const LostGuideSection: React.FC<LostGuideSectionProps> = ({ onNavigateTab }) => {
  const [selectedSituationId, setSelectedSituationId] = useState<string>(lostSituations[0].id);

  const currentSituation: LostSituation =
    lostSituations.find((s) => s.id === selectedSituationId) || lostSituations[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return Compass;
      case 'Skull':
        return Skull;
      case 'Users':
        return Users;
      case 'ShieldAlert':
        return ShieldAlert;
      case 'Coins':
        return Coins;
      default:
        return HelpCircle;
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-elden-card via-[#161922] to-elden-card border border-amber-500/40 p-6 sm:p-8 shadow-2xl">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold font-mono tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 animate-pulse" />
            LOST GUIDE & TROUBLESHOOTING
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white font-serif tracking-wide">
            迷ったときにすべきこと（緊急診断フロー）
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-300 leading-relaxed">
            オープンワールド特有の「進行の迷子」「ボスの即死」「NPCの消失」「ドッスンローリング」など、初心者が直面する5大詰まりをネタバレなしで自力打開するための処方箋チェックリストです。
          </p>
        </div>
        <div className="absolute -right-8 -bottom-8 w-56 h-56 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* 5 Main Situations Navigation Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
        {lostSituations.map((sit) => {
          const Icon = getIcon(sit.iconName);
          const isSelected = selectedSituationId === sit.id;
          return (
            <button
              key={sit.id}
              onClick={() => setSelectedSituationId(sit.id)}
              className={`p-3.5 sm:p-4 rounded-xl text-left border transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-gradient-to-b from-amber-500/20 to-black/80 border-amber-500/80 shadow-[0_0_15px_rgba(245,158,11,0.2)] transform -translate-y-0.5'
                  : 'bg-elden-card/90 border-elden-border hover:border-amber-500/40 text-gray-400 hover:text-white'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Icon
                    className={`w-5 h-5 ${
                      isSelected ? 'text-amber-400' : 'text-gray-400'
                    }`}
                  />
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded border font-mono font-bold ${sit.badgeColor}`}
                  >
                    {sit.badge}
                  </span>
                </div>
                <h3
                  className={`text-xs sm:text-sm font-bold leading-snug ${
                    isSelected ? 'text-white' : 'text-gray-300'
                  }`}
                >
                  {sit.title}
                </h3>
              </div>
              <div className="mt-2 flex items-center text-[11px] font-mono text-amber-400/80">
                <span>診断する</span>
                <ArrowRight className="w-3 h-3 ml-1" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Detailed Action Steps Container */}
      <div className="space-y-6">
        {/* Situation Header Card */}
        <div className="p-5 sm:p-6 rounded-2xl bg-elden-card border border-elden-border space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className={`text-xs px-2.5 py-0.5 rounded border font-mono font-bold ${currentSituation.badgeColor}`}>
                {currentSituation.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white font-serif mt-2">
                {currentSituation.title}
              </h3>
              <p className="text-sm text-gray-400 mt-1">{currentSituation.subtitle}</p>
            </div>
          </div>

          <p className="text-sm text-gray-300 bg-black/40 p-3.5 rounded-xl border border-gray-800 leading-relaxed">
            {currentSituation.summary}
          </p>

          {/* Causes Check */}
          <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/40">
            <h4 className="text-xs font-bold text-red-400 font-mono tracking-wider flex items-center gap-1.5 mb-2">
              <AlertCircle className="w-4 h-4" />
              よくある原因・落とし穴チェック
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-gray-300">
              {currentSituation.causes.map((cause, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-red-400 font-bold shrink-0">・</span>
                  <span>{cause}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Step-by-Step Action List */}
        <div className="space-y-4">
          <h4 className="text-base font-bold text-elden-gold font-serif flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-elden-gold" />
            打開するための 5 つのアクション手順（ステップバイステップ）
          </h4>

          <div className="space-y-3">
            {currentSituation.actionSteps.map((action) => (
              <div
                key={action.step}
                className="p-4 sm:p-5 rounded-xl bg-elden-card/90 border border-elden-border/80 hover:border-elden-gold/50 transition-all space-y-2.5 group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-400 font-bold font-mono text-sm flex items-center justify-center shrink-0 border border-amber-500/40 group-hover:bg-amber-500 group-hover:text-black transition-all">
                      {action.step}
                    </span>
                    <div>
                      <h5 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                        {action.title}
                      </h5>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mt-1">
                        {action.description}
                      </p>
                    </div>
                  </div>

                  {action.navigationTab && onNavigateTab && (
                    <button
                      onClick={() => onNavigateTab(action.navigationTab!)}
                      className="px-3 py-1.5 rounded-lg bg-elden-gold/10 hover:bg-elden-gold text-elden-gold hover:text-black border border-elden-gold/40 text-xs font-bold transition-all shrink-0 flex items-center gap-1 shadow"
                    >
                      <span>関連タブへ</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {action.recommendedTarget && (
                  <div className="ml-10 text-xs text-gray-400 bg-black/50 px-3 py-1.5 rounded-lg border border-gray-800 flex items-center gap-2 flex-wrap">
                    <span className="text-amber-400 font-bold font-mono">推奨ターゲット:</span>
                    <span className="text-gray-200">{action.recommendedTarget}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Expert Advice Box */}
        <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-amber-950/30 via-[#18150f] to-amber-950/30 border border-amber-500/40 flex items-start gap-3.5">
          <Lightbulb className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h5 className="text-sm font-bold text-amber-400 font-serif">褪せ人の心得（アドバイス）</h5>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {currentSituation.expertAdvice}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
