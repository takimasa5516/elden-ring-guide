import React, { useState } from 'react';
import { controlsList, essentialTips } from '../data/controlsData';
import { Platform } from '../types';
import { ShieldAlert, Lightbulb, AlertTriangle, Info, CheckCircle, Zap } from 'lucide-react';

export const ControlsSection: React.FC = () => {
  const [platform, setPlatform] = useState<Platform>('ps');

  return (
    <div className="space-y-8 pb-12">
      {/* Platform Selector & Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-elden-panel p-4 sm:p-5 rounded-2xl border border-elden-border">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-serif flex items-center gap-2">
            <Zap className="w-6 h-6 text-elden-gold" />
            <span>基本操作 ＆ 探索・戦闘の極意</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            お使いのコントローラー / 環境を選択してください。ボタン表記が切り替わります。
          </p>
        </div>

        <div className="flex flex-wrap p-1 bg-elden-card rounded-xl border border-elden-border self-start sm:self-auto gap-1">
          <button
            onClick={() => setPlatform('ps')}
            className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              platform === 'ps'
                ? 'bg-elden-gold text-black font-bold shadow'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            PlayStation (PS5/4)
          </button>
          <button
            onClick={() => setPlatform('xbox')}
            className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              platform === 'xbox'
                ? 'bg-elden-gold text-black font-bold shadow'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Xbox
          </button>
          <button
            onClick={() => setPlatform('switch2')}
            className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              platform === 'switch2'
                ? 'bg-red-600 text-white font-bold shadow'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></span>
            Nintendo Switch 2
          </button>
          <button
            onClick={() => setPlatform('pc')}
            className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              platform === 'pc'
                ? 'bg-elden-gold text-black font-bold shadow'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            PC (キーボード/マウス)
          </button>
        </div>
      </div>

      {/* Switch 2 Special Guidance Banner */}
      {platform === 'switch2' && (
        <div className="p-4 rounded-xl bg-red-950/30 border border-red-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs animate-fadeIn">
          <div className="flex items-start gap-2.5">
            <Info className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-red-200">
                Nintendo Switch 2 (Proコントローラー / Joy-Con 2) ボタン配置
              </p>
              <p className="text-gray-300 mt-1 leading-relaxed">
                任天堂コントローラーの右面ボタン配置：【A（右）】回避・ダッシュ / 【B（下）】ジャンプ / 【X（上）】アクション・調べる / 【Y（左）】アイテム使用。<br className="hidden sm:inline" />
                PlayStationの「○（右）・✕（下）・△（上）・□（左）」と物理位置が同一のため、指の配置はそのままで直感的にプレイ可能です。
              </p>
            </div>
          </div>
          <span className="text-[11px] px-2.5 py-1 rounded bg-red-900/60 text-red-200 border border-red-700/60 font-mono shrink-0 self-start sm:self-auto font-semibold">
            Switch 2 最適化
          </span>
        </div>
      )}

      {/* Must-Read Essential Tips */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b border-elden-border/60 pb-2">
          <ShieldAlert className="w-5 h-5 text-elden-gold" />
          <h3 className="text-lg font-bold text-white font-serif">
            序盤で絶対にやっておくべき心得 ＆ 超重要システム
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {essentialTips.map((tip) => (
            <div
              key={tip.id}
              className={`p-4 sm:p-5 rounded-xl border relative transition-all ${
                tip.alertLevel === 'warning'
                  ? 'bg-[#181111]/90 border-red-900/60 shadow-[0_0_15px_rgba(239,68,68,0.08)]'
                  : tip.alertLevel === 'tip'
                  ? 'bg-[#161712]/90 border-elden-gold/40 shadow-[0_0_15px_rgba(200,170,110,0.08)]'
                  : 'bg-elden-panel border-elden-border'
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  {tip.alertLevel === 'warning' ? (
                    <AlertTriangle className="w-5 h-5 text-red-400 shrink-0" />
                  ) : tip.alertLevel === 'tip' ? (
                    <Lightbulb className="w-5 h-5 text-elden-gold shrink-0" />
                  ) : (
                    <Info className="w-5 h-5 text-cyan-400 shrink-0" />
                  )}
                  <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                    {tip.title}
                  </h4>
                </div>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-medium shrink-0 ${
                    tip.alertLevel === 'warning'
                      ? 'bg-red-500/20 text-red-300 border border-red-500/40'
                      : 'bg-elden-gold/20 text-elden-gold-light border border-elden-gold/40'
                  }`}
                >
                  {tip.badge}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 mb-3 leading-relaxed">
                {tip.description}
              </p>

              <ul className="space-y-1.5 pt-2 border-t border-white/5">
                {tip.details.map((detail, idx) => (
                  <li key={idx} className="text-xs text-gray-400 flex items-start gap-2">
                    <span className="text-elden-gold mt-0.5">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Control Actions Table */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-elden-border/60 pb-2">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-elden-gold" />
            <h3 className="text-lg font-bold text-white font-serif">
              戦闘 ＆ 移動のアクション対応表
            </h3>
          </div>
          <span className="text-xs text-elden-gold font-mono">
            ★印は特に強力なアクション
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {controlsList.map((ctrl) => {
            const keyCommand =
              platform === 'ps'
                ? ctrl.ps
                : platform === 'xbox'
                ? ctrl.xbox
                : platform === 'switch2'
                ? ctrl.switch2
                : ctrl.pc;
            return (
              <div
                key={ctrl.id}
                className={`p-3.5 rounded-xl border flex flex-col justify-between transition-all ${
                  ctrl.isCrucial
                    ? 'bg-elden-panel/90 border-elden-gold/40 shadow-sm'
                    : 'bg-elden-card/80 border-elden-border'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1.5">
                      {ctrl.isCrucial && <span className="text-elden-gold text-sm">★</span>}
                      <h4 className="text-sm font-bold text-white">{ctrl.action}</h4>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 px-1.5 py-0.5 rounded bg-black/40 border border-gray-700">
                      {ctrl.category}
                    </span>
                  </div>

                  {/* Button Command Display */}
                  <div
                    className={`my-2 p-2 rounded-lg border text-center ${
                      platform === 'switch2'
                        ? 'bg-red-950/20 border-red-900/40 text-red-200'
                        : 'bg-black/60 border-elden-border'
                    }`}
                  >
                    <span
                      className={`text-xs font-mono font-bold tracking-wide ${
                        platform === 'switch2' ? 'text-red-300' : 'text-elden-gold-light'
                      }`}
                    >
                      {keyCommand}
                    </span>
                  </div>

                  {ctrl.note && (
                    <p className="text-[11px] text-gray-400 leading-relaxed mt-1">
                      {ctrl.note}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
