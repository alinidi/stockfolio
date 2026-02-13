'use client';

import { useState, useEffect } from 'react';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (quantity: number) => void;
    symbol: string;
    name: string;
    price: number;
    currency: string;
    maxQuantity: number;
};

export const SellModal = ({
    isOpen,
    onClose,
    onConfirm,
    symbol,
    name,
    price,
    currency,
    maxQuantity,
}: Props) => {
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const total = quantity * price;
    const max = Math.min(maxQuantity, 9999);

    const handleConfirm = () => {
        onConfirm(quantity);
        onClose();
        setQuantity(1);
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-gray-800 rounded-xl p-6 w-full max-w-md border border-gray-700 shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-4">
                    Sell stocks
                </h2>
                <div className="bg-gray-700/50 rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center">
                        <div>
                            <span className="text-xl font-bold text-white">
                                {symbol}
                            </span>
                            <span className="text-sm text-gray-400 ml-2">
                                {name}
                            </span>
                        </div>
                        <span className="text-lg text-white">
                            {price.toFixed(2)} {currency}
                        </span>
                    </div>
                </div>
                <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                        <label className="text-sm text-gray-400">
                            Quantity
                        </label>
                        <span className="text-xs text-gray-500">
                            Max: {maxQuantity}
                        </span>
                    </div>
                    <input
                        type="number"
                        min="1"
                        max={max}
                        step="1"
                        value={quantity}
                        onChange={(e) =>
                            setQuantity(
                                Math.min(
                                    max,
                                    Math.max(1, parseInt(e.target.value) || 1)
                                )
                            )
                        }
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-700">
                    <span className="text-gray-400">You will receive:</span>
                    <span className="text-2xl font-bold text-white">
                        {total.toFixed(2)} {currency}
                    </span>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={onClose}
                        className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleConfirm}
                        className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition-colors font-medium"
                    >
                        Confirm Sell
                    </button>
                </div>
            </div>
        </div>
    );
};
