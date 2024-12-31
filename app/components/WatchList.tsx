
export default function WatchList() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <h2 className="text-xl font-bold mb-4">관심종목</h2>
      <div className="space-y-2">
        {/* 임시 데이터 */}
        <div className="flex justify-between items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
          <div>
            <span className="font-semibold">삼성전자</span>
            <span className="text-sm text-gray-500 ml-2">005930</span>
          </div>
          <div className="text-green-500">+2.5%</div>
        </div>
      </div>
    </div>
  );
} 