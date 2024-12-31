import { apiClient } from '@/lib/api-client';
import type { Balance, CurrentPrice, OrderRequest } from '@/types/trading';
import { useMutation, useQuery } from '@tanstack/react-query';

export function useOverseasBalance() {
  return useQuery<Balance>({
    queryKey: ['overseasBalance'],
    queryFn: async () => {
      const { data } = await apiClient.get('/api/v1/trading/overseas/balance');
      return data;
    },
    refetchInterval: 5000, // 5초마다 갱신
  });
}

export function useCurrentPrice(stockCode: string) {
  return useQuery<CurrentPrice>({
    queryKey: ['currentPrice', stockCode],
    queryFn: async () => {
      const { data } = await apiClient.get(`/api/v1/trading/current-price/${stockCode}`);
      return data;
    },
    refetchInterval: 1000, // 1초마다 갱신
  });
}

export function usePlaceBuyOrder() {
  return useMutation({
    mutationFn: async (orderRequest: OrderRequest) => {
      const { data } = await apiClient.post('/api/v1/trading/order/buy', null, {
        params: orderRequest,
      });
      return data;
    },
  });
}

export function usePlaceSellOrder() {
  return useMutation({
    mutationFn: async (orderRequest: OrderRequest) => {
      const { data } = await apiClient.post('/api/v1/trading/order/sell', null, {
        params: orderRequest,
      });
      return data;
    },
  });
} 