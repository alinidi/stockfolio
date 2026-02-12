export type QuoteResponse = {
    symbol: string; //тикер
    name: string; //название
    currency: string; //валюта
    change: string; //изменение в каренси
    percent_change: string; //изменение в процентах
    close: string; //цена на момент продажи
    timestamp?: number;
};
