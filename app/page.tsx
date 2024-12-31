import Portfolio from './components/Portfolio';
import TradeSettings from './components/TradeSettings';
import WatchList from './components/WatchList';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">트레이딩 시스템</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <WatchList />
          <Portfolio />
          <TradeSettings />
        </div>
      </div>
    </div>
  );
}
