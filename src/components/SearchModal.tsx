import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ChevronRight, Tag } from 'lucide-react';
import { globalSearchIndex } from '../data/searchIndex';
import { SearchItem } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTab: (tabId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectTab }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      // Ctrl+K or Cmd+K to open
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        // toggle handled externally if desired
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const filteredResults: SearchItem[] = query.trim()
    ? globalSearchIndex.filter((item) => {
        const q = query.toLowerCase().trim();
        return (
          item.title.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.keywords.some((k) => k.toLowerCase().includes(q))
        );
      })
    : globalSearchIndex.slice(0, 8); // デフォルトで注目の検索候補を表示

  const handleSelect = (item: SearchItem) => {
    onSelectTab(item.tabId);
    onClose();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      {/* Background click close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#121418] border border-elden-gold/50 rounded-2xl shadow-[0_0_30px_rgba(200,170,110,0.25)] overflow-hidden z-10 flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-elden-border bg-[#0e1014]">
          <Search className="w-5 h-5 text-elden-gold shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="アイテム名、地名、戦技、NPC、祈祷、稼ぎなどを検索... (例: 月隠, 獅子斬り, 火の癒しよ)"
            className="flex-1 bg-transparent text-white text-sm sm:text-base placeholder-gray-500 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs text-gray-400 hover:text-white border border-gray-700 rounded hover:border-gray-500 transition-all"
          >
            Esc
          </button>
        </div>

        {/* Quick Tag Recommendations */}
        <div className="px-4 py-2 border-b border-elden-border/50 bg-[#16191f] flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs">
          <span className="text-gray-400 shrink-0 flex items-center gap-1">
            <Tag className="w-3 h-3 text-elden-gold" />
            おすすめ:
          </span>
          {['迷子', 'ボス勝てない', '月隠', '獅子斬り', '火の癒しよ', '写し身', '鈴玉', '神授塔', 'ルーン稼ぎ'].map(
            (tag) => (
              <button
                key={tag}
                onClick={() => setQuery(tag)}
                className="px-2 py-0.5 rounded-full bg-black/40 hover:bg-elden-gold/20 text-gray-300 hover:text-elden-gold border border-gray-700/60 hover:border-elden-gold/50 transition-all shrink-0"
              >
                {tag}
              </button>
            )
          )}
        </div>

        {/* Search Results List */}
        <div className="flex-1 overflow-y-auto p-2 space-y-1 divide-y divide-gray-800/40">
          {filteredResults.length === 0 ? (
            <div className="py-12 text-center text-gray-400 text-sm">
              <p>「{query}」に一致する情報は見つかりませんでした。</p>
              <p className="text-xs text-gray-400 mt-1">別のキーワードやひらがな・漢字でお試しください。</p>
            </div>
          ) : (
            filteredResults.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelect(item)}
                className="w-full text-left p-3 rounded-xl hover:bg-white/5 transition-all flex items-center justify-between group"
              >
                <div className="space-y-1 pr-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-elden-gold transition-colors">
                      {item.title}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-black/60 border border-elden-gold/40 text-elden-gold font-mono">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 line-clamp-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-elden-gold group-hover:translate-x-0.5 transition-all shrink-0" />
              </button>
            ))
          )}
        </div>

        {/* Footer Note */}
        <div className="px-4 py-2.5 border-t border-elden-border bg-[#0e1014] text-[11px] text-gray-400 flex items-center justify-between">
          <span>タップすると該当タブの解説へジャンプします</span>
          <span className="text-elden-gold font-mono">{filteredResults.length} 件ヒット</span>
        </div>
      </div>
    </div>
  );
};
