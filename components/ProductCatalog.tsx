'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

// --- Types & Interfaces ---
interface Product {
  id: number;
  name: string;
  unit: string;
  price: number;
  deposit: number;
  description: string;
  image: string;
  allowSubscription: boolean;
  category: 'staples' | 'artisanal';
}

interface CartItem {
  product: Product;
  purchaseType: 'weekly' | 'one-time';
  quantity: number;
}

// --- Framer Motion Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

const cartItemVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

// --- Static Data ---
const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Pasture-Raised Whole Milk',
    unit: '1 Liter Glass Bottle',
    price: 4.50,
    deposit: 1.50,
    description: 'Creamy, sweet, and rich with a natural cream line. Gently pasteurized and unhomogenized to keep all its natural nutrients intact.',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=800',
    allowSubscription: true,
    category: 'staples',
  },
  {
    id: 2,
    name: 'Pasture-Raised Semi-Skimmed Milk',
    unit: '1 Liter Glass Bottle',
    price: 4.50,
    deposit: 1.50,
    description: 'Crisp, clean, and refreshing. We gently skim away a portion of the cream while keeping the full-bodied flavor and high protein of our pasture-raised milk.',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=800',
    allowSubscription: true,
    category: 'staples',
  },
  {
    id: 3,
    name: 'Traditional Salted Butter',
    unit: '250g Block',
    price: 6.00,
    deposit: 0,
    description: 'Slow-churned in small batches from our fresh pasture cream and lightly sprinkled with natural sea salt. Deep golden yellow and incredibly spreadable.',
    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=800',
    allowSubscription: true,
    category: 'staples',
  },
  {
    id: 4,
    name: 'Fresh Artisanal Cheese',
    unit: '400g Wheel',
    price: 8.50,
    deposit: 0,
    description: 'A mild, soft, and moist farm cheese made by hand using traditional regional techniques on the morning of your delivery. Perfect for slicing or melting.',
    image: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&q=80&w=800',
    allowSubscription: false,
    category: 'artisanal',
  },
  {
    id: 5,
    name: 'Natural Probiotic Yogurt',
    unit: '500g Glass Jar',
    price: 5.00,
    deposit: 1.00,
    description: 'Thick, creamy, and pleasantly tart. Made with active live cultures and zero thickeners, preservatives, or added sugar.',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=800',
    allowSubscription: true,
    category: 'staples',
  },
];

export function ProductCatalog() {
  // --- States ---
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'staples' | 'artisanal'>('all');
  const [purchaseModes, setPurchaseModes] = useState<Record<number, 'weekly' | 'one-time'>>({
    1: 'weekly',
    2: 'weekly',
    3: 'weekly',
    4: 'one-time', // Locked to one-time
    5: 'weekly',
  });
  const [cart, setCart] = useState<CartItem[]>([
    { product: PRODUCTS[0], purchaseType: 'weekly', quantity: 2 },
    { product: PRODUCTS[3], purchaseType: 'one-time', quantity: 1 },
  ]);
  const [checkoutStep, setCheckoutStep] = useState<'idle' | 'success'>('idle');
  const [selectedZone, setSelectedZone] = useState<'Zone A' | 'Zone B'>('Zone A');

  // --- Handlers ---
  const handlePurchaseModeChange = (productId: number, mode: 'weekly' | 'one-time') => {
    setPurchaseModes((prev) => ({ ...prev, [productId]: mode }));
  };

  const handleAddToCart = (product: Product) => {
    const mode = purchaseModes[product.id] || 'one-time';
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.product.id === product.id && item.purchaseType === mode
      );

      if (existingIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingIndex].quantity += 1;
        return newCart;
      } else {
        return [...prevCart, { product, purchaseType: mode, quantity: 1 }];
      }
    });
  };

  const handleQuantityChange = (productId: number, type: 'weekly' | 'one-time', delta: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.product.id === productId && item.purchaseType === type) {
            return { ...item, quantity: Math.max(0, item.quantity + delta) };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  // --- Calculations ---
  const subscriptionItems = cart.filter((item) => item.purchaseType === 'weekly');
  const oneTimeItems = cart.filter((item) => item.purchaseType === 'one-time');

  const subtotalSub = subscriptionItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const subtotalOneTime = oneTimeItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const totalDeposits = cart.reduce((acc, item) => acc + item.product.deposit * item.quantity, 0);
  const deliveryFee = 0.00; // Free local deliveries
  const totalToday = subtotalSub + subtotalOneTime + totalDeposits + deliveryFee;

  // Filtered Products
  const filteredProducts = PRODUCTS.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  return (
    <section id="product-catalog" className="relative bg-[#F9F7F5] py-24 px-4 sm:px-6 lg:px-8 text-[#3E2B1E]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-[#5D4432] uppercase bg-[#E9E3DD] px-3 py-1 rounded-full">
            The Farm Shop
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-[#5D4432] font-display">
            Straight From Our Farm to Your Fridge
          </h2>
          <p className="mt-4 text-lg text-[#5D4432]/80 leading-relaxed font-sans">
            Create a custom weekly subscription of fresh staples, or mix in one-time seasonal items. Easily pause or edit your order anytime from your dashboard.
          </p>
        </div>

        {/* Catalog Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Filter & Product Cards */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Category Switcher */}
            <div className="flex space-x-2 p-1 bg-[#E9E3DD]/50 rounded-xl max-w-md">
              {(['all', 'staples', 'artisanal'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all capitalize ${
                    selectedCategory === cat
                      ? 'bg-[#5D4432] text-white shadow-sm'
                      : 'text-[#5D4432] hover:bg-[#E9E3DD] hover:text-[#3E2B1E]'
                  }`}
                >
                  {cat === 'all' ? 'All Products' : cat === 'staples' ? 'Weekly Staples' : 'Artisanal Treats'}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => {
                  const currentMode = purchaseModes[product.id] || 'one-time';
                  return (
                    <motion.div
                      key={product.id}
                      layout
                      variants={cardVariants}
                      className="bg-white rounded-2xl border border-[#E9E3DD] overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                    >
                      {/* Product Image & Tag */}
                      <div className="relative h-56 w-full bg-[#E9E3DD]">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4 flex flex-col gap-1.5 items-start">
                          <span className="bg-[#5D4432] text-white text-xs font-semibold px-2.5 py-1 rounded-md shadow">
                            {product.unit}
                          </span>
                          {product.deposit > 0 && (
                            <span className="bg-[#16A34A] text-white text-xs font-medium px-2.5 py-1 rounded-md shadow">
                              +${product.deposit.toFixed(2)} deposit
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start gap-2">
                            <h3 className="font-semibold text-lg text-[#3E2B1E] leading-snug">
                              {product.name}
                            </h3>
                            <span className="text-xl font-bold text-[#5D4432]">
                              ${product.price.toFixed(2)}
                            </span>
                          </div>
                          <p className="mt-2 text-sm text-[#3E2B1E]/80 leading-relaxed min-h-[60px]">
                            {product.description}
                          </p>
                        </div>

                        {/* Purchase Type Selector */}
                        <div className="mt-6 space-y-4">
                          {product.allowSubscription ? (
                            <div className="grid grid-cols-2 gap-2 p-1 bg-[#F9F7F5] rounded-lg border border-[#E9E3DD]">
                              <button
                                type="button"
                                onClick={() => handlePurchaseModeChange(product.id, 'weekly')}
                                className={`py-1.5 text-xs font-medium rounded-md transition-all ${
                                  currentMode === 'weekly'
                                    ? 'bg-[#5D4432] text-white shadow-sm'
                                    : 'text-[#3E2B1E]/70 hover:text-[#3E2B1E]'
                                }`}
                              >
                                Subscribe Weekly
                              </button>
                              <button
                                type="button"
                                onClick={() => handlePurchaseModeChange(product.id, 'one-time')}
                                className={`py-1.5 text-xs font-medium rounded-md transition-all ${
                                  currentMode === 'one-time'
                                    ? 'bg-[#5D4432] text-white shadow-sm'
                                    : 'text-[#3E2B1E]/70 hover:text-[#3E2B1E]'
                                }`}
                              >
                                One-Time
                              </button>
                            </div>
                          ) : (
                            <div className="py-2 px-3 text-center bg-[#E9E3DD]/30 border border-[#E9E3DD]/60 rounded-lg text-xs font-medium text-[#3E2B1E]/80">
                              One-Time Purchase Only
                            </div>
                          )}

                          {/* Add To Basket Button */}
                          <button
                            onClick={() => handleAddToCart(product)}
                            className="w-full bg-[#E9E3DD] hover:bg-[#5D4432] text-[#3E2B1E] hover:text-white transition-all font-semibold py-2.5 px-4 rounded-xl text-sm flex items-center justify-center gap-2 group border border-[#5D4432]/10"
                          >
                            <span>Add to Basket</span>
                            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>

            {/* Empty State when no items match filters */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12 bg-white rounded-2xl border border-[#E9E3DD]">
                <p className="text-[#3E2B1E]/60 font-medium">No products found in this category.</p>
              </div>
            )}
          </div>

          {/* Right Column: Checkout Drawer / Mini-Cart Summary */}
          <div className="lg:col-span-4 lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl border border-[#E9E3DD] shadow-sm overflow-hidden">
              
              {/* Cart Header */}
              <div className="bg-[#5D4432] text-[#F9F7F5] px-6 py-5 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <h3 className="font-bold text-lg font-display">Your Dairy Basket</h3>
                </div>
                <span className="bg-[#E9E3DD] text-[#3E2B1E] text-xs font-bold px-2.5 py-1 rounded-full">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)} items
                </span>
              </div>

              {/* Cart Items List */}
              <div className="p-6 space-y-4 max-h-[380px] overflow-y-auto divide-y divide-[#E9E3DD]/60">
                <AnimatePresence initial={false} mode="popLayout">
                  {cart.length === 0 ? (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center py-12"
                    >
                      <svg className="w-12 h-12 text-[#E9E3DD] mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                      <p className="text-sm font-medium text-[#3E2B1E]/60">Your basket is waiting to be filled.</p>
                      <p className="text-xs text-[#3E2B1E]/40 mt-1">Add organic milk and artisanal treats.</p>
                    </motion.div>
                  ) : (
                    cart.map((item, index) => (
                      <motion.div
                        key={`${item.product.id}-${item.purchaseType}`}
                        variants={cartItemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        layout
                        className={`flex gap-3 justify-between items-start ${index > 0 ? 'pt-4' : ''}`}
                      >
                        <div className="flex gap-3">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-12 h-12 rounded-lg object-cover bg-[#E9E3DD]"
                          />
                          <div>
                            <h4 className="text-sm font-semibold text-[#3E2B1E] leading-tight">
                              {item.product.name}
                            </h4>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs text-[#3E2B1E]/60">{item.product.unit}</span>
                              <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                                item.purchaseType === 'weekly' 
                                  ? 'bg-[#5D4432]/10 text-[#5D4432]' 
                                  : 'bg-[#E9E3DD] text-[#3E2B1E]'
                              }`}>
                                {item.purchaseType === 'weekly' ? 'Weekly' : 'One-Time'}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Quantity and Price control */}
                        <div className="flex flex-col items-end gap-1.5">
                          <span className="text-sm font-bold text-[#3E2B1E]">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </span>
                          <div className="flex items-center border border-[#E9E3DD] rounded-md bg-[#F9F7F5] overflow-hidden">
                            <button
                              type="button"
                              onClick={() => handleQuantityChange(item.product.id, item.purchaseType, -1)}
                              className="px-2 py-0.5 text-[#3E2B1E] hover:bg-[#E9E3DD] transition-colors font-bold text-xs"
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <span className="px-2 text-xs font-semibold text-[#3E2B1E] min-w-[20px] text-center">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleQuantityChange(item.product.id, item.purchaseType, 1)}
                              className="px-2 py-0.5 text-[#3E2B1E] hover:bg-[#E9E3DD] transition-colors font-bold text-xs"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>

              {/* Pricing Breakdown */}
              <div className="bg-[#F9F7F5] p-6 border-t border-[#E9E3DD] space-y-3">
                
                {subscriptionItems.length > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-[#3E2B1E]/70">Weekly Subscription Staples:</span>
                    <span className="font-semibold text-[#3E2B1E]">${subtotalSub.toFixed(2)}</span>
                  </div>
                )}
                
                {oneTimeItems.length > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-[#3E2B1E]/70">One-Time Artisanal Items:</span>
                    <span className="font-semibold text-[#3E2B1E]">${subtotalOneTime.toFixed(2)}</span>
                  </div>
                )}

                {totalDeposits > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-[#3E2B1E]/70">Refundable Bottle Deposits:</span>
                    <span className="font-semibold text-[#3E2B1E]">${totalDeposits.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between text-sm">
                  <span className="text-[#3E2B1E]/70">Estimated Delivery Fee:</span>
                  <span className="font-semibold text-[#16A34A] uppercase text-xs tracking-wider">FREE</span>
                </div>

                <div className="pt-3 border-t border-[#E9E3DD] flex justify-between items-end">
                  <div>
                    <span className="text-xs font-bold text-[#3E2B1E]/60 uppercase tracking-wider block">Total Today</span>
                    <span className="text-xs text-[#3E2B1E]/50">Includes refundable deposits</span>
                  </div>
                  <span className="text-2xl font-bold text-[#5D4432] font-display">
                    ${totalToday.toFixed(2)}
                  </span>
                </div>

                {/* Checkout CTA */}
                <button
                  type="button"
                  disabled={cart.length === 0}
                  onClick={() => setCheckoutStep('success')}
                  className={`w-full mt-4 py-3 px-4 rounded-xl font-semibold text-sm transition-all text-center flex items-center justify-center gap-2 ${
                    cart.length > 0
                      ? 'bg-[#5D4432] hover:bg-[#4A3527] text-white shadow-sm hover:shadow'
                      : 'bg-[#E9E3DD] text-[#3E2B1E]/40 cursor-not-allowed'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Secure Checkout & Schedule</span>
                </button>

                <p className="text-[11px] text-center text-[#3E2B1E]/60 mt-2">
                  No upfront fees. Pause, adjust, or cancel anytime before Sunday 5:00 PM.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Circular Promise Callout */}
        <div className="mt-16 bg-[#E9E3DD]/40 border border-[#E9E3DD] rounded-2xl p-8 lg:p-10 flex flex-col md:flex-row items-center gap-8 justify-between">
          <div className="max-w-2xl">
            <h4 className="text-lg font-bold text-[#5D4432] font-display">
              🌱 Our Zero-Waste Circular Promise
            </h4>
            <p className="mt-2 text-sm text-[#3E2B1E]/80 leading-relaxed">
              We package our milk and yogurts in traditional, heavy-duty glass. Leave your rinsed, empty bottles on your porch on delivery day. We will sanitize them, credit your account, and refill them. Zero plastic, zero waste.
            </p>
          </div>
          <a
            href="#how-it-works"
            className="whitespace-nowrap bg-white hover:bg-[#5D4432] text-[#5D4432] hover:text-white border border-[#5D4432]/20 font-semibold py-2.5 px-5 rounded-xl text-xs transition-all tracking-wider uppercase"
          >
            How Bottle Returns Work
          </a>
        </div>

      </div>

      {/* Checkout Simulation Success Modal */}
      <AnimatePresence>
        {checkoutStep === 'success' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#F9F7F5] text-[#3E2B1E] max-w-lg w-full rounded-2xl border border-[#E9E3DD] p-8 shadow-2xl relative overflow-hidden"
            >
              {/* Confetti Accent */}
              <div className="absolute top-0 left-0 w-full h-2 bg-[#16A34A]" />

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#16A34A]/10 text-[#16A34A] rounded-full mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold font-display text-[#5D4432]">
                  Your Farm Basket is Reserved!
                </h3>
                <p className="mt-2 text-sm text-[#3E2B1E]/80 leading-relaxed">
                  Excellent choice! We’ve staged your fresh dairy order. To finalize your delivery schedules, set up your porch drop instructions, and register your address, let’s get you connected.
                </p>
              </div>

              {/* Order Summary Recap */}
              <div className="mt-6 bg-white p-4 rounded-xl border border-[#E9E3DD] text-left text-sm space-y-2">
                <div className="font-semibold text-xs text-[#3E2B1E]/60 uppercase tracking-wider mb-1">Order Summary</div>
                <div className="flex justify-between">
                  <span>Selected Items ({cart.reduce((sum, item) => sum + item.quantity, 0)})</span>
                  <span className="font-semibold">${(subtotalSub + subtotalOneTime).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Refundable Bottle Deposits</span>
                  <span className="font-semibold">${totalDeposits.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#16A34A] font-medium">
                  <span>Local Delivery (Assigned Day)</span>
                  <span className="uppercase text-xs">FREE</span>
                </div>
                <div className="border-t border-[#E9E3DD] pt-2 flex justify-between font-bold text-[#5D4432] text-base">
                  <span>Total Due Today</span>
                  <span>${totalToday.toFixed(2)}</span>
                </div>
              </div>

              {/* Delivery Zone Selection Simulator */}
              <div className="mt-6 space-y-3 text-left">
                <label className="block text-xs font-bold text-[#3E2B1E]/80 uppercase tracking-wider">
                  Select Your Neighborhood Zone
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedZone('Zone A')}
                    className={`p-3 rounded-lg border text-xs text-left transition-all ${
                      selectedZone === 'Zone A'
                        ? 'border-[#5D4432] bg-[#E9E3DD]/30 ring-2 ring-[#5D4432]/20'
                        : 'border-[#E9E3DD] bg-white hover:bg-[#F9F7F5]'
                    }`}
                  >
                    <div className="font-bold text-[#5D4432]">Zone A (East & Downtown)</div>
                    <div className="text-[11px] text-[#3E2B1E]/60 mt-1">Delivers Every Tuesday</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedZone('Zone B')}
                    className={`p-3 rounded-lg border text-xs text-left transition-all ${
                      selectedZone === 'Zone B'
                        ? 'border-[#5D4432] bg-[#E9E3DD]/30 ring-2 ring-[#5D4432]/20'
                        : 'border-[#E9E3DD] bg-white hover:bg-[#F9F7F5]'
                    }`}
                  >
                    <div className="font-bold text-[#5D4432]">Zone B (West & Suburbs)</div>
                    <div className="text-[11px] text-[#3E2B1E]/60 mt-1">Delivers Every Thursday</div>
                  </button>
                </div>
              </div>

              {/* CTA Actions */}
              <div className="mt-8 space-y-3">
                <a
                  href="#contact-section"
                  onClick={() => setCheckoutStep('idle')}
                  className="block w-full bg-[#5D4432] hover:bg-[#4A3527] text-white text-center font-semibold py-3 px-4 rounded-xl text-sm shadow-sm transition-colors"
                >
                  Complete Registration on Contact Form
                </a>
                <button
                  type="button"
                  onClick={() => setCheckoutStep('idle')}
                  className="block w-full bg-transparent hover:bg-[#E9E3DD]/40 text-[#3E2B1E]/80 font-medium py-2 px-4 rounded-xl text-xs transition-colors"
                >
                  Go Back & Modify Basket
                </button>
              </div>

              <p className="text-[10px] text-center text-[#3E2B1E]/50 mt-4">
                *Next delivery slot for {selectedZone}: Orders close Sunday at 5:00 PM.
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}