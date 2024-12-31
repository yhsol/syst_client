'use client';

import { useOverseasBalance } from '@/hooks/useTrading';

export default function Portfolio() {
  const { data: balance, isLoading } = useOverseasBalance();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!balance?.holdings) {
    return <div>No data available</div>;
  }

  // holdings 객체에서 배열로 변환
  const holdings = Object.keys(balance.holdings['종목코드']).map((index) => ({
    stockCode: balance.holdings['종목코드'][index],
    exchange: balance.holdings['해외거래소코드'][index],
    stockName: balance.holdings['종목명'][index],
    quantity: balance.holdings['보유수량'][index],
    availableQuantity: balance.holdings['매도가능수량'][index],
    averagePrice: balance.holdings['매입단가'][index],
    profitLossRatio: balance.holdings['수익률'][index],
    currentPrice: balance.holdings['현재가'][index],
    profitLoss: balance.holdings['평가손익'][index],
  }));

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <div className="mb-4">
        <h2 className="text-xl font-bold">포트폴리오</h2>
        <div className="text-2xl font-bold mt-2">
          총 평가손익: ${balance.total_profit_loss.toFixed(2)}
        </div>
        <div className={`text-sm ${balance.total_profit_loss >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {balance.total_profit_loss >= 0 ? '+' : ''}{balance.total_profit_loss.toFixed(2)}$
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="border-t pt-4">
          <h3 className="font-semibold mb-2">보유종목</h3>
          <div className="space-y-2">
            {holdings.map((stock) => (
              <div key={`${stock.exchange}-${stock.stockCode}`} className="flex justify-between items-center p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
                <div>
                  <div className="font-semibold">{stock.stockCode}</div>
                  <div className="text-sm text-gray-500">
                  {stock.exchange} | {stock.stockName}
                  </div>
                  <div className="text-sm text-gray-500">
                    {stock.quantity}주 @ ${stock.averagePrice.toFixed(2)}
                  </div>
                </div>
                <div className="text-right">
                  <div>${stock.currentPrice.toFixed(2)}</div>
                  <div className={`${stock.profitLossRatio >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {stock.profitLossRatio >= 0 ? '+' : ''}{stock.profitLossRatio.toFixed(2)}%
                  </div>
                  <div className={`text-sm ${stock.profitLoss >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {stock.profitLoss >= 0 ? '+' : ''}{stock.profitLoss.toFixed(2)}$
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 