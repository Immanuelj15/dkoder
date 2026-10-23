import React, { useState } from 'react';
import { Trophy, Flame, Search, ChevronLeft, ChevronRight, Award, Zap } from 'lucide-react';
import initialLeaderboardData from '../data/leaderboardData.json';

const tabs = [
  { id: 'xp', label: 'XP Leaders', metric: 'xp', unit: 'XP' },
  { id: 'solves', label: 'Most Active Solvers', metric: 'totalSolves', unit: 'Solves' },
  { id: 'hard', label: 'Hard Solvers', metric: 'hardSolves', unit: 'Hard' }
];

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState('xp');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const rawEntries = initialLeaderboardData.entries || initialLeaderboardData || [];
  
  // Format and sort entries
  const currentMetric = tabs.find(t => t.id === activeTab)?.metric || 'xp';
  const sortedEntries = [...rawEntries].map((entry, idx) => ({
    userId: entry.userId || `student_${idx}`,
    username: entry.username || entry.name || `Student #${idx + 1}`,
    institutionName: entry.institutionName || entry.college || 'Engineering College',
    streak: entry.streak || (idx % 3 + 1),
    xp: entry.xp || Math.max(100, Math.floor(2800 - idx * 45)),
    totalSolves: entry.totalSolves || Math.max(10, Math.floor(180 - idx * 3)),
    hardSolves: entry.hardSolves || Math.max(2, Math.floor(35 - idx))
  })).sort((a, b) => (b[currentMetric] || 0) - (a[currentMetric] || 0))
    .map((item, idx) => ({ ...item, rank: idx + 1 }));

  // Search filtering
  const filtered = sortedEntries.filter(item => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      item.username.toLowerCase().includes(q) ||
      item.institutionName.toLowerCase().includes(q)
    );
  });

  const podium = sortedEntries.slice(0, 3);
  const paginated = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(filtered.length / itemsPerPage) || 1;

  return (
    <section id="leaderboard-preview" className="relative pt-16 pb-24 md:pt-20 md:pb-32 overflow-hidden bg-[#FFFAF0] font-body border-t-2 border-[#17181A]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCC419] border border-[#17181A] text-xs font-black uppercase tracking-wider mb-3 shadow-[2px_2px_0px_#17181A]">
              <Trophy size={14} />
              <span>Campus Rankings</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#17181A] font-heading m-0">
              Earn your spot.
            </h2>
            <p className="text-[#5F6060] mt-2 text-base">
              Today's reminder: <em>"Consistency today, opportunities tomorrow."</em>
            </p>
          </div>

          {/* Metric Selector Tabs */}
          <div className="flex items-center gap-2 bg-[#FFFDF8] p-1.5 rounded-2xl border-2 border-[#17181A] shadow-[4px_4px_0px_#17181A]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveTab(tab.id);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#4E25A5] text-white shadow-[2px_2px_0px_#17181A]'
                    : 'text-[#17181A] hover:bg-[#FFF8E6]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Podium Top 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {podium.map((student, idx) => {
            const ranks = [
              { color: 'bg-[#FCC419]', border: 'border-[#17181A]', shadow: 'shadow-[6px_6px_0px_#4E25A5]', order: 'md:order-2', title: '1st Place' },
              { color: 'bg-[#FFFDF8]', border: 'border-[#17181A]', shadow: 'shadow-[6px_6px_0px_#17181A]', order: 'md:order-1', title: '2nd Place' },
              { color: 'bg-[#FFFDF8]', border: 'border-[#17181A]', shadow: 'shadow-[6px_6px_0px_#17181A]', order: 'md:order-3', title: '3rd Place' }
            ];
            const meta = ranks[idx] || ranks[1];

            return (
              <div
                key={student.userId}
                className={`rounded-[24px] border-2 ${meta.border} ${meta.color} ${meta.shadow} ${meta.order} p-6 flex flex-col items-center text-center relative transition-transform hover:-translate-y-1`}
              >
                <div className="absolute -top-4 w-8 h-8 rounded-full bg-[#17181A] text-[#FCC419] font-black flex items-center justify-center border-2 border-white shadow">
                  #{idx + 1}
                </div>

                <div className="w-16 h-16 rounded-full border-2 border-[#17181A] bg-white flex items-center justify-center mt-2 mb-3 shadow-[2px_2px_0px_#17181A] font-bold text-xl text-[#4E25A5]">
                  {student.username.slice(0, 2).toUpperCase()}
                </div>

                <h3 className="text-xl font-bold text-[#17181A] tracking-tight font-heading m-0">
                  {student.username}
                </h3>
                <p className="text-xs text-[#5F6060] font-medium mt-1 truncate max-w-full">
                  {student.institutionName}
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-white border border-[#17181A]">
                    <Flame size={14} className="text-orange-500 fill-orange-500" />
                    {student.streak}d streak
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-extrabold px-2.5 py-1 rounded-full bg-[#4E25A5] text-white">
                    <Zap size={13} />
                    {student[currentMetric]?.toLocaleString()} {tabs.find(t => t.id === activeTab)?.unit}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Search & Filter Bar */}
        <div className="rounded-2xl border-2 border-[#17181A] bg-white p-3.5 mb-6 shadow-[4px_4px_0px_#17181A] flex items-center gap-3">
          <Search size={18} className="text-[#5F6060]" />
          <input
            type="text"
            placeholder="Search students or colleges..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="flex-1 border-0 bg-transparent text-sm font-medium focus:outline-none placeholder-[#5F6060]"
          />
        </div>

        {/* Leaderboard Table */}
        <div className="rounded-3xl border-2 border-[#17181A] bg-white shadow-[8px_8px_0px_#17181A] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-[#17181A] bg-[#FFF8E6] text-xs font-extrabold uppercase tracking-wider text-[#6E5F36]">
                  <th className="py-4 px-6">Rank</th>
                  <th className="py-4 px-6">Student</th>
                  <th className="py-4 px-6">College</th>
                  <th className="py-4 px-6">Streak</th>
                  <th className="py-4 px-6 text-right">Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#17181A]/10 text-sm">
                {paginated.map((student) => (
                  <tr
                    key={student.userId}
                    className="hover:bg-[#FFFDF8] transition-colors"
                  >
                    <td className="py-4 px-6 font-black text-[#17181A]">
                      #{student.rank}
                    </td>
                    <td className="py-4 px-6 font-bold text-[#17181A] flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full border border-[#17181A] bg-[#FFF8E6] flex items-center justify-center font-bold text-xs text-[#4E25A5]">
                        {student.username[0]}
                      </div>
                      <span>{student.username}</span>
                    </td>
                    <td className="py-4 px-6 text-[#5F6060] font-medium">
                      {student.institutionName}
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1 font-bold text-xs px-2 py-0.5 rounded-full bg-[#FFF8E6] border border-[#DAD4C8]">
                        <Flame size={13} className="text-orange-500 fill-orange-500" />
                        {student.streak}d
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right font-extrabold text-[#4E25A5]">
                      {student[currentMetric]?.toLocaleString()} {tabs.find(t => t.id === activeTab)?.unit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="border-t-2 border-[#17181A] bg-[#FFFDF8] px-6 py-4 flex items-center justify-between">
            <span className="text-xs font-bold text-[#5F6060]">
              Showing {Math.min(filtered.length, (currentPage - 1) * itemsPerPage + 1)} - {Math.min(filtered.length, currentPage * itemsPerPage)} of {filtered.length} students
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={currentPage <= 1}
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                className="w-8 h-8 rounded-lg border border-[#17181A] bg-white flex items-center justify-center text-[#17181A] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#FCC419] transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="text-xs font-bold px-2">
                Page {currentPage} of {totalPages}
              </span>
              <button
                type="button"
                disabled={currentPage >= totalPages}
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                className="w-8 h-8 rounded-lg border border-[#17181A] bg-white flex items-center justify-center text-[#17181A] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#FCC419] transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
