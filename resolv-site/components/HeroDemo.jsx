'use client';

import { useEffect, useRef, useState } from 'react';

const SCENARIOS = [
  {
    customer: 'Where is my order #1007?',
    order: { id: '#1007', badge: 'shipped', badgeLabel: 'Shipped', item: 'Oversized Hoodie, Black, M', price: '$58.00' },
    luna: "Order #1007 shipped Tuesday, it's in transit and expected to arrive Thursday. Tracking is in your email!",
    stamp: '✓ Resolved in 6s',
  },
  {
    customer: 'Can I cancel order #2214?',
    order: { id: '#2214', badge: 'processing', badgeLabel: 'Processing', item: 'Canvas Tote Bag', price: '$24.00' },
    luna: "I've staged a cancellation for order #2214, it's now waiting on the merchant's one-tap approval.",
    stamp: '✓ Staged in 4s',
  },
];

export default function HeroDemo() {
  const [customerText, setCustomerText] = useState('');
  const [showStatus, setShowStatus] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [lunaText, setLunaText] = useState('');
  const [showStamp, setShowStamp] = useState(false);
  const [fading, setFading] = useState(false);
  const [scenarioIndex, setScenarioIndex] = useState(0);

  const timers = useRef([]);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;

    const schedule = (fn, delay) => {
      const id = setTimeout(() => {
        if (mounted.current) fn();
      }, delay);
      timers.current.push(id);
      return id;
    };

    const typeText = (text, speed, onChar, onDone) => {
      let i = 0;
      const step = () => {
        if (!mounted.current) return;
        i += 1;
        onChar(text.slice(0, i));
        if (i < text.length) {
          schedule(step, speed);
        } else {
          onDone?.();
        }
      };
      schedule(step, speed);
    };

    const resetDemo = () => {
      setCustomerText('');
      setShowStatus(false);
      setShowOrder(false);
      setLunaText('');
      setShowStamp(false);
      setFading(false);
    };

    const runCycle = (index) => {
      const scenario = SCENARIOS[index % SCENARIOS.length];
      resetDemo();

      typeText(scenario.customer, 65, setCustomerText, () => {
        schedule(() => {
          setShowStatus(true);
          schedule(() => {
            setShowStatus(false);
            setShowOrder(true);
            schedule(() => {
              typeText(scenario.luna, 28, setLunaText, () => {
                schedule(() => {
                  setShowStamp(true);
                  schedule(() => {
                    setFading(true);
                    schedule(() => {
                      setScenarioIndex((prev) => {
                        const next = (prev + 1) % SCENARIOS.length;
                        runCycle(next);
                        return next;
                      });
                    }, 500);
                  }, 3000);
                }, 300);
              });
            }, 900);
          }, 1300);
        }, 400);
      });
    };

    runCycle(0);

    return () => {
      mounted.current = false;
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scenario = SCENARIOS[scenarioIndex % SCENARIOS.length];

  return (
    <div className="hd-outer">
      <div className={`hd-card${fading ? ' hd-fading' : ''}`}>
        <div className="hd-chrome">
          <div className="hd-dots">
            <span className="hd-dot hd-dot-r" />
            <span className="hd-dot hd-dot-y" />
            <span className="hd-dot hd-dot-g" />
          </div>
          <div className="hd-title">Chat Widget · storefront</div>
        </div>
        <div className="hd-body">
          {customerText && (
            <div className="hd-msg hd-msg-customer">
              {customerText}
              {customerText.length < scenario.customer.length && <span className="hd-cursor" />}
            </div>
          )}
          {showStatus && (
            <div className="hd-status">
              <span className="hd-status-dot" />
              Luna is checking Shopify…
            </div>
          )}
          {showOrder && (
            <div className="hd-order-card">
              <div className="hd-order-top">
                <span className="hd-order-id">{scenario.order.id}</span>
                <span className={`hd-order-badge hd-order-badge-${scenario.order.badge}`}>
                  {scenario.order.badgeLabel}
                </span>
              </div>
              <div className="hd-order-item">{scenario.order.item}</div>
              <div className="hd-order-price">{scenario.order.price}</div>
            </div>
          )}
          {lunaText && (
            <div className="hd-msg hd-msg-luna">
              {lunaText}
              {lunaText.length < scenario.luna.length && <span className="hd-cursor" />}
            </div>
          )}
          {showStamp && <div className="hd-stamp">{scenario.stamp}</div>}
        </div>
      </div>
    </div>
  );
}
