export interface Balance {
  total_profit_loss: number;
  holdings: {
    종목코드: { [key: string]: string };
    해외거래소코드: { [key: string]: string };
    종목명: { [key: string]: string };
    보유수량: { [key: string]: number };
    매도가능수량: { [key: string]: number };
    매입단가: { [key: string]: number };
    수익률: { [key: string]: number };
    현재가: { [key: string]: number };
    평가손익: { [key: string]: number };
  };
}

export interface StockPosition {
  stock_code: string;
  stock_name: string;
  quantity: number;
  average_price: number;
  current_price: number;
  profit_loss: number;
  profit_loss_ratio: number;
}

export interface CurrentPrice {
  stock_code: string;
  price: number;
  change: number;
  change_ratio: number;
}

export interface OrderRequest {
  stock_code: string;
  quantity: number;
  price: number;
  order_type?: string;
}

export interface Order {
  order_no: string;
  stock_code: string;
  order_type: string;
  quantity: number;
  price: number;
  status: string;
  created_at: string;
} 