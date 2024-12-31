
export default function TradeSettings() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <h2 className="text-xl font-bold mb-4">거래 설정</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">피라미딩 설정</label>
          <input 
            type="number" 
            className="w-full rounded border border-gray-300 p-2"
            placeholder="피라미딩 비율 (%)"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">트레일링 스탑</label>
          <input 
            type="number" 
            className="w-full rounded border border-gray-300 p-2"
            placeholder="트레일링 스탑 비율 (%)"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">손절 설정</label>
          <input 
            type="number" 
            className="w-full rounded border border-gray-300 p-2"
            placeholder="손절 비율 (%)"
          />
        </div>
      </div>
    </div>
  );
} 