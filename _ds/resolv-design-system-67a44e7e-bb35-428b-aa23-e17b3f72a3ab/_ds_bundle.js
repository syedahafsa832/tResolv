/* @ds-bundle: {"format":3,"namespace":"ResolvDesignSystem_67a44e","components":[],"sourceHashes":{"ui_kits/console/Primitives.jsx":"19023414acb9","ui_kits/console/Screens.jsx":"bbe5e230ba24","ui_kits/console/Shell.jsx":"79ec33c619f5","ui_kits/console/TicketDetail.jsx":"e807f988ba4b","ui_kits/console/data.js":"83ef10435f93"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ResolvDesignSystem_67a44e = window.ResolvDesignSystem_67a44e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/console/Primitives.jsx
try { (() => {
/* Resolv UI Kit — Primitives
   Icon (Lucide paths), Logo, Badge, ConfidencePill, ConfidenceBar, StatCard, Button.
   Exported to window for cross-file use. */

const {
  useState,
  useRef,
  useEffect
} = React;

/* ---- Lucide icon paths (outline, 2px, round joins) ------------------ */
const ICONS = {
  'layout-dashboard': '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
  inbox: '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',
  'shield-alert': '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4"/><path d="M12 16h.01"/>',
  'shield-question': '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
  settings: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
  'log-out': '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',
  store: '<path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/>',
  'chevron-down': '<path d="m6 9 6 6 6-6"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  refresh: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  send: '<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  'arrow-right': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  hand: '<path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>',
  bot: '<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>',
  zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>'
};
function Icon({
  name,
  size = 16,
  color = 'currentColor',
  strokeWidth = 2,
  style
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flexShrink: 0,
      display: 'block',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: ICONS[name] || ''
    }
  });
}

/* ---- Brand logo ------------------------------------------------------ */
function Logo({
  size = 28,
  wordmark = true,
  color = 'var(--accent)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '9px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 40 40",
    fill: "none",
    style: {
      display: 'block',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "36",
    height: "36",
    rx: "9",
    fill: "var(--accent)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9 21 L 18 30 L 33 10",
    stroke: "#fff",
    strokeWidth: "4.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18 30 L 18 36",
    stroke: "#fff",
    strokeWidth: "4.2",
    strokeLinecap: "round"
  })), wordmark && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: size * 0.64,
      letterSpacing: '-0.5px',
      color
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: color
    }
  }, "T"), "Resolve"));
}

/* ---- Status badge ---------------------------------------------------- */
const STATUS_MAP = {
  processing: {
    label: '⟳ Processing…',
    color: 'var(--text-secondary)',
    bg: 'var(--bg-tertiary)'
  },
  auto_resolved: {
    label: 'Auto-resolved',
    color: 'var(--success)',
    bg: 'var(--success-light)'
  },
  resolved: {
    label: 'Resolved',
    color: 'var(--success)',
    bg: 'var(--success-light)'
  },
  ai_suggested: {
    label: 'Draft ready',
    color: 'var(--accent)',
    bg: 'var(--accent-light)'
  },
  human_managing: {
    label: 'Human managing',
    color: 'var(--violet)',
    bg: 'var(--violet-light)'
  },
  requires_human: {
    label: 'Needs human',
    color: 'var(--warning)',
    bg: 'var(--warning-light)'
  },
  escalated: {
    label: 'Escalated',
    color: 'var(--warning)',
    bg: 'var(--warning-light)'
  },
  review: {
    label: 'Review needed',
    color: 'var(--info)',
    bg: 'var(--info-light)'
  },
  open: {
    label: 'Open',
    color: 'var(--accent)',
    bg: 'var(--accent-light)'
  },
  closed: {
    label: 'Closed',
    color: 'var(--text-muted)',
    bg: 'var(--bg-tertiary)'
  },
  refund: {
    label: 'Refund',
    color: 'var(--danger)',
    bg: 'var(--danger-light)'
  },
  cancel_order: {
    label: 'Cancel',
    color: 'var(--warning)',
    bg: 'var(--warning-light)'
  },
  exchange: {
    label: 'Exchange',
    color: 'var(--info)',
    bg: 'var(--info-light)'
  },
  discount: {
    label: 'Discount',
    color: 'var(--violet)',
    bg: 'var(--violet-light)'
  }
};
function Badge({
  status,
  size = 'sm'
}) {
  const c = STATUS_MAP[status] || {
    label: status || 'Unknown',
    color: 'var(--text-muted)',
    bg: 'var(--bg-tertiary)'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: size === 'sm' ? '2px 8px' : '4px 10px',
      borderRadius: '4px',
      fontSize: size === 'sm' ? '12px' : '13px',
      fontWeight: 500,
      color: c.color,
      background: c.bg,
      whiteSpace: 'nowrap'
    }
  }, c.label);
}
function SentimentTag({
  s
}) {
  const map = {
    angry: ['Angry', '#dc2626', '#fee2e2'],
    frustrated: ['Frustrated', '#d97706', '#fef3c7'],
    positive: ['Happy', '#16a34a', '#dcfce7']
  };
  if (!map[s]) return null;
  const [label, color, bg] = map[s];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      padding: '2px 7px',
      borderRadius: '10px',
      background: bg,
      color,
      fontWeight: 600
    }
  }, label);
}

/* ---- Confidence ------------------------------------------------------ */
function confColor(pct) {
  return pct >= 80 ? 'var(--success)' : pct >= 50 ? 'var(--warning)' : 'var(--danger)';
}
function confBg(pct) {
  return pct >= 80 ? 'var(--success-light)' : pct >= 50 ? 'var(--warning-light)' : 'var(--danger-light)';
}
function ConfidencePill({
  score
}) {
  const pct = Math.round(score > 1 ? score : score * 100);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      padding: '2px 8px',
      borderRadius: '4px',
      fontSize: '12px',
      fontWeight: 500,
      color: confColor(pct),
      background: confBg(pct),
      fontFamily: 'var(--font-mono)'
    }
  }, pct, "% confidence");
}
function ConfidenceBar({
  score
}) {
  const pct = Math.round(score > 1 ? score : score * 100);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '4px',
      fontSize: '12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "AI Confidence"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      color: confColor(pct)
    }
  }, pct, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '6px',
      background: 'var(--bg-tertiary)',
      borderRadius: '3px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: pct + '%',
      background: confColor(pct),
      borderRadius: '3px',
      transition: 'width 0.4s ease'
    }
  })));
}

/* ---- Stat card ------------------------------------------------------- */
function StatCard({
  label,
  value,
  subtitle
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border)',
      borderRadius: '6px',
      background: 'var(--bg-primary)',
      padding: '20px 24px',
      flex: 1,
      minWidth: '160px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      color: 'var(--text-secondary)',
      marginBottom: '8px',
      fontWeight: 500
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '28px',
      fontWeight: 500,
      color: 'var(--text-primary)',
      lineHeight: 1,
      marginBottom: '4px'
    }
  }, value), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12px',
      color: 'var(--text-muted)'
    }
  }, subtitle));
}

/* ---- Button ---------------------------------------------------------- */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled,
  style
}) {
  const base = {
    fontFamily: 'var(--font-sans)',
    border: 'none',
    borderRadius: '4px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontWeight: variant === 'primary' || variant === 'success' ? 600 : 500,
    transition: 'background 0.15s',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    whiteSpace: 'nowrap'
  };
  const sizes = {
    sm: {
      padding: '6px 12px',
      fontSize: '13px'
    },
    md: {
      padding: '9px 16px',
      fontSize: '14px'
    }
  };
  const variants = {
    primary: {
      background: disabled ? 'var(--bg-tertiary)' : 'var(--accent)',
      color: disabled ? 'var(--text-muted)' : '#fff'
    },
    success: {
      background: disabled ? 'var(--bg-tertiary)' : 'var(--success)',
      color: disabled ? 'var(--text-muted)' : '#fff'
    },
    secondary: {
      background: 'var(--bg-secondary)',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border)'
    },
    danger: {
      background: 'transparent',
      color: 'var(--danger)',
      border: '1px solid var(--danger)'
    }
  };
  const [hover, setHover] = useState(false);
  const hoverBg = variant === 'primary' ? 'var(--accent-hover)' : null;
  return /*#__PURE__*/React.createElement("button", {
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      ...(hover && hoverBg && !disabled ? {
        background: hoverBg
      } : {}),
      ...style
    }
  }, children);
}
Object.assign(window, {
  Icon,
  Logo,
  Badge,
  SentimentTag,
  ConfidencePill,
  ConfidenceBar,
  StatCard,
  Button,
  confColor,
  confBg
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/Primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/Screens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Resolv UI Kit — Screens: Login, Dashboard, Conversations, TicketDetail, Escalations */

const {
  useState: useScreenState
} = React;
function timeAgo(iso) {
  const d = new Date(iso);
  const now = new Date('2026-03-14T10:00:00');
  const m = Math.round((now - d) / 60000);
  if (m < 60) return m + 'm ago';
  if (m < 1440) return Math.round(m / 60) + 'h ago';
  return Math.round(m / 1440) + 'd ago';
}
function fmtTime(iso) {
  return new Date(iso).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

/* ============ LOGIN ============ */
function LoginScreen({
  onLogin
}) {
  const [email, setEmail] = useScreenState('owner@lunaapparel.com');
  const [pw, setPw] = useScreenState('••••••••••');
  const [focus, setFocus] = useScreenState(null);
  const field = k => ({
    onFocus: () => setFocus(k),
    onBlur: () => setFocus(null),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      padding: '11px 12px',
      borderRadius: '4px',
      background: '#fff',
      color: 'var(--text-primary)',
      width: '100%',
      boxSizing: 'border-box',
      border: `1px solid ${focus === k ? 'var(--accent)' : 'var(--border-strong)'}`,
      outline: 'none'
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg-secondary)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '380px',
      background: '#fff',
      border: '1px solid var(--border)',
      borderRadius: '8px',
      boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
      padding: '32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 32
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 4px',
      fontSize: '20px',
      fontWeight: 700,
      textAlign: 'center',
      letterSpacing: '-0.3px'
    }
  }, "Welcome back"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 24px',
      fontSize: '13px',
      color: 'var(--text-secondary)',
      textAlign: 'center'
    }
  }, "Sign in to your Resolv console"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: '13px',
      fontWeight: 500,
      color: 'var(--text-secondary)'
    }
  }, "Email"), /*#__PURE__*/React.createElement("input", _extends({
    value: email,
    onChange: e => setEmail(e.target.value)
  }, field('email')))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: '13px',
      fontWeight: 500,
      color: 'var(--text-secondary)'
    }
  }, "Password"), /*#__PURE__*/React.createElement("input", _extends({
    type: "password",
    value: pw,
    onChange: e => setPw(e.target.value)
  }, field('pw')))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onLogin,
    style: {
      justifyContent: 'center',
      marginTop: '4px'
    }
  }, "Sign in \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      margin: '20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: '1px',
      background: 'var(--border)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: 'var(--text-muted)'
    }
  }, "or"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: '1px',
      background: 'var(--border)'
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onLogin,
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      background: '#fff',
      border: '1px solid var(--border-strong)',
      borderRadius: '4px',
      padding: '10px',
      fontSize: '14px',
      fontWeight: 500,
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 16,
    color: "var(--accent)"
  }), "Continue with Google"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0',
      fontSize: '12px',
      color: 'var(--text-muted)',
      textAlign: 'center'
    }
  }, "New to Resolv? ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontWeight: 500
    }
  }, "Create an account"))));
}

/* ============ DASHBOARD ============ */
function Dashboard({
  onOpen
}) {
  const d = window.DATA;
  const s = d.stats;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      maxWidth: '1100px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Active Conversations",
    value: s.activeConversations,
    subtitle: "Real-time open chats"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "AI Handled",
    value: s.aiHandledPct + '%',
    subtitle: "Resolved without a human"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Escalated Chats",
    value: s.escalatedChats,
    subtitle: "Need your attention"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Pending Approvals",
    value: s.pendingApprovals,
    subtitle: "Actions awaiting review"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 320px',
      gap: '24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border)',
      borderRadius: '6px',
      background: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '14px 16px',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: '14px',
      fontWeight: 600
    }
  }, "Recent Conversations"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontSize: '12px',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '7px',
      height: '7px',
      borderRadius: '50%',
      background: 'var(--success)',
      animation: 'pulse 2s infinite'
    }
  }), "Live")), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, ['Customer', 'Subject', 'Status', 'Updated'].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      padding: '9px 16px',
      textAlign: 'left',
      fontSize: '12px',
      fontWeight: 600,
      color: 'var(--text-muted)',
      borderBottom: '1px solid var(--border)',
      background: 'var(--bg-secondary)'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, d.conversations.slice(0, 6).map((c, i) => /*#__PURE__*/React.createElement(Row, {
    key: c.id,
    c: c,
    alt: i % 2 === 1,
    onOpen: onOpen
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border)',
      borderRadius: '6px',
      background: '#fff',
      padding: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '12px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "zap",
    size: 15,
    color: "var(--accent)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: '14px',
      fontWeight: 600
    }
  }, "Pending Approvals"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      color: 'var(--text-muted)'
    }
  }, d.actions.length)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, d.actions.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.id,
    onClick: () => onOpen('conversations'),
    style: {
      padding: '10px 12px',
      borderRadius: '6px',
      background: 'var(--bg-secondary)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      marginBottom: '6px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    status: a.action_type
  }), a.amount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '13px',
      fontWeight: 500
    }
  }, "$", a.amount.toFixed(2)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(ConfidencePill, {
    score: a.ai_confidence
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12px',
      color: 'var(--text-secondary)',
      lineHeight: 1.4
    }
  }, a.reason))))))));
}
function Row({
  c,
  alt,
  onOpen
}) {
  const [hover, setHover] = useScreenState(false);
  const unread = c.unread_count > 0;
  return /*#__PURE__*/React.createElement("tr", {
    onClick: () => onOpen('ticket', c.id),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      cursor: 'pointer',
      background: hover ? 'var(--accent-light)' : unread ? 'var(--accent-light)' : alt ? 'var(--bg-secondary)' : '#fff'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '11px 16px',
      fontSize: '13px',
      fontWeight: unread ? 600 : 400,
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, c.customer_email, /*#__PURE__*/React.createElement(SentimentTag, {
    s: c.customer_sentiment
  }))), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '11px 16px',
      fontSize: '13px',
      color: 'var(--text-secondary)',
      borderBottom: '1px solid var(--border)',
      maxWidth: '240px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      fontWeight: unread ? 600 : 400
    }
  }, c.subject), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '11px 16px',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    status: c.status
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '11px 16px',
      fontSize: '12px',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-mono)',
      borderBottom: '1px solid var(--border)',
      whiteSpace: 'nowrap'
    }
  }, timeAgo(c.updated_at)));
}

/* ============ CONVERSATIONS LIST ============ */
function Conversations({
  onOpen
}) {
  const d = window.DATA;
  const [filter, setFilter] = useScreenState('all');
  const filters = [['all', 'All'], ['ai_suggested', 'Draft ready'], ['escalated', 'Escalated'], ['auto_resolved', 'Resolved']];
  const rows = d.conversations.filter(c => filter === 'all' || c.status === filter);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1100px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      marginBottom: '16px'
    }
  }, filters.map(([k, label]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setFilter(k),
    style: {
      fontFamily: 'var(--font-sans)',
      padding: '6px 14px',
      borderRadius: '9999px',
      fontSize: '13px',
      fontWeight: 500,
      cursor: 'pointer',
      border: `1px solid ${filter === k ? 'var(--accent)' : 'var(--border)'}`,
      background: filter === k ? 'var(--accent-light)' : '#fff',
      color: filter === k ? 'var(--accent)' : 'var(--text-secondary)'
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      border: '1px solid var(--border-strong)',
      borderRadius: '4px',
      padding: '0 10px',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 15,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search conversations\u2026",
    style: {
      border: 'none',
      outline: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      padding: '8px 0',
      width: '180px',
      background: 'transparent'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border)',
      borderRadius: '6px',
      background: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, ['Customer', 'Subject', 'Handler', 'Status', 'Updated'].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      padding: '9px 16px',
      textAlign: 'left',
      fontSize: '12px',
      fontWeight: 600,
      color: 'var(--text-muted)',
      borderBottom: '1px solid var(--border)',
      background: 'var(--bg-secondary)'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((c, i) => /*#__PURE__*/React.createElement(FullRow, {
    key: c.id,
    c: c,
    alt: i % 2 === 1,
    onOpen: onOpen
  }))))));
}
function FullRow({
  c,
  alt,
  onOpen
}) {
  const [hover, setHover] = useScreenState(false);
  const unread = c.unread_count > 0;
  return /*#__PURE__*/React.createElement("tr", {
    onClick: () => onOpen('ticket', c.id),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      cursor: 'pointer',
      background: hover ? 'var(--accent-light)' : unread ? 'var(--accent-light)' : alt ? 'var(--bg-secondary)' : '#fff'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '11px 16px',
      fontSize: '13px',
      fontWeight: unread ? 600 : 400,
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, c.customer_email, /*#__PURE__*/React.createElement(SentimentTag, {
    s: c.customer_sentiment
  }))), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '11px 16px',
      fontSize: '13px',
      color: 'var(--text-secondary)',
      borderBottom: '1px solid var(--border)',
      maxWidth: '260px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      fontWeight: unread ? 600 : 400
    }
  }, c.subject), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '11px 16px',
      fontSize: '12px',
      color: 'var(--text-secondary)',
      borderBottom: '1px solid var(--border)',
      whiteSpace: 'nowrap'
    }
  }, c.handler), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '11px 16px',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    status: c.status
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '11px 16px',
      fontSize: '12px',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-mono)',
      borderBottom: '1px solid var(--border)',
      whiteSpace: 'nowrap'
    }
  }, fmtTime(c.updated_at)));
}
window.Screens = {
  LoginScreen,
  Dashboard,
  Conversations,
  timeAgo,
  fmtTime
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/Shell.jsx
try { (() => {
/* Resolv UI Kit — App shell: Sidebar + Topbar + Layout */

const {
  useState: useStateShell
} = React;
function Sidebar({
  active,
  counts,
  onNav,
  onLogout
}) {
  const items = [{
    key: 'dashboard',
    label: 'Dashboard',
    icon: 'layout-dashboard'
  }, {
    key: 'conversations',
    label: 'Conversations',
    icon: 'inbox'
  }, {
    key: 'escalations',
    label: 'Escalations',
    icon: 'shield-alert',
    count: counts.escalations,
    danger: true
  }, {
    key: 'quarantine',
    label: 'Quarantine',
    icon: 'shield-question',
    count: counts.quarantine,
    warn: true
  }, {
    key: 'settings',
    label: 'Settings',
    icon: 'settings'
  }];
  const [hover, setHover] = useStateShell(null);
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 'var(--sidebar-width)',
      flexShrink: 0,
      background: 'var(--bg-secondary)',
      borderRight: '1px solid var(--border)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'var(--topbar-height)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 16px',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 26
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      padding: '12px 8px',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    }
  }, items.map(it => {
    const isActive = active === it.key;
    const isHover = hover === it.key && !isActive;
    return /*#__PURE__*/React.createElement("button", {
      key: it.key,
      onClick: () => onNav(it.key),
      onMouseEnter: () => setHover(it.key),
      onMouseLeave: () => setHover(null),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '9px 12px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        width: '100%',
        textAlign: 'left',
        fontFamily: 'var(--font-sans)',
        fontSize: '14px',
        background: isActive ? 'var(--accent-light)' : isHover ? 'var(--bg-tertiary)' : 'transparent',
        color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
        fontWeight: isActive ? 600 : 500,
        transition: 'background 0.12s'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: it.icon,
      size: 16
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, it.label), it.count > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        background: it.danger ? 'var(--danger)' : 'var(--warning)',
        color: '#fff',
        borderRadius: '10px',
        fontSize: '11px',
        fontWeight: 600,
        padding: '1px 6px',
        fontFamily: 'var(--font-mono)'
      }
    }, it.count));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px',
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onLogout,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '9px 12px',
      borderRadius: '6px',
      border: 'none',
      cursor: 'pointer',
      width: '100%',
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      background: 'transparent',
      color: 'var(--text-secondary)',
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "log-out",
    size: 16
  }), "Sign out")));
}
function Topbar({
  title,
  brand,
  onRefresh,
  children
}) {
  const [open, setOpen] = useStateShell(false);
  const [spin, setSpin] = useStateShell(false);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 'var(--topbar-height)',
      flexShrink: 0,
      borderBottom: '1px solid var(--border)',
      background: 'var(--bg-primary)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 24px',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: '16px',
      fontWeight: 700,
      letterSpacing: '-0.1px'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), children, onRefresh && /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setSpin(true);
      onRefresh && onRefresh();
      setTimeout(() => setSpin(false), 700);
    },
    title: "Refresh",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border)',
      borderRadius: '4px',
      padding: '6px 12px',
      fontSize: '13px',
      fontWeight: 500,
      color: 'var(--text-secondary)',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "refresh",
    size: 14,
    style: {
      animation: spin ? 'spin 0.7s linear' : 'none'
    }
  }), "Refresh"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: 'transparent',
      border: '1px solid var(--border)',
      borderRadius: '6px',
      padding: '5px 10px',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "store",
    size: 15,
    color: "var(--text-secondary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      fontWeight: 500
    }
  }, brand), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 14,
    color: "var(--text-muted)"
  })));
}
function Layout({
  active,
  counts,
  brand,
  title,
  onNav,
  onLogout,
  onRefresh,
  topbarExtra,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%',
      background: 'var(--bg-secondary)'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: active,
    counts: counts,
    onNav: onNav,
    onLogout: onLogout
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Topbar, {
    title: title,
    brand: brand,
    onRefresh: onRefresh
  }, topbarExtra), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '24px'
    }
  }, children)));
}
Object.assign(window, {
  Sidebar,
  Topbar,
  Layout
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/TicketDetail.jsx
try { (() => {
/* Resolv UI Kit — TicketDetail (AI draft approval + Shopify order panel) + Escalations + Toast */

const {
  useState: useTD,
  useEffect: useTDEffect
} = React;

/* ===== Toast ===== */
function Toast({
  toast
}) {
  if (!toast) return null;
  const color = toast.type === 'success' ? 'var(--success)' : toast.type === 'danger' ? 'var(--danger)' : 'var(--text-primary)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '24px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--text-primary)',
      color: '#fff',
      padding: '10px 18px',
      borderRadius: '6px',
      fontSize: '13px',
      fontWeight: 500,
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      animation: 'slideIn 0.2s ease'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '7px',
      height: '7px',
      borderRadius: '50%',
      background: color
    }
  }), toast.msg);
}

/* ===== TicketDetail ===== */
function TicketDetail({
  id,
  onBack,
  notify
}) {
  const d = window.DATA;
  const conv = d.conversations.find(c => c.id === id) || d.conversations[0];
  const msgs = d.messages[conv.id] || [{
    role: 'customer',
    content: conv.last_message,
    created_at: conv.updated_at
  }];
  const action = d.actions.find(a => a.customer_email === conv.customer_email);
  const [draft, setDraft] = useTD(conv.ai_draft || 'Hi, thanks for reaching out — happy to help with this. Could you share your order number so I can take a look?');
  const [taken, setTaken] = useTD(conv.handler && conv.handler.startsWith('human'));
  const [tone, setTone] = useTD('default');
  const [sent, setSent] = useTD(false);
  const [actionState, setActionState] = useTD(action ? 'pending' : null);
  const tones = [['default', 'Default'], ['shorter', 'Shorter'], ['warmer', 'Warmer'], ['firmer', 'Firmer']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 340px',
      gap: '20px',
      maxWidth: '1100px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      alignSelf: 'flex-start',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      color: 'var(--text-secondary)',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 14,
    style: {
      transform: 'rotate(180deg)'
    }
  }), "Back to conversations"), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border)',
      borderRadius: '6px',
      background: '#fff',
      padding: '16px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '6px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: '16px',
      fontWeight: 700,
      letterSpacing: '-0.1px'
    }
  }, conv.subject), /*#__PURE__*/React.createElement(SentimentTag, {
    s: conv.customer_sentiment
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    status: taken ? 'human_managing' : conv.status
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '16px',
      fontSize: '12px',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-mono)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "#", conv.id), /*#__PURE__*/React.createElement("span", null, conv.customer_email), /*#__PURE__*/React.createElement("span", null, window.Screens.fmtTime(conv.updated_at)))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border)',
      borderRadius: '6px',
      background: '#fff',
      padding: '18px',
      display: 'flex',
      flexDirection: 'column',
      gap: '14px'
    }
  }, msgs.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
      alignItems: m.role === 'customer' ? 'flex-start' : 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      color: 'var(--text-muted)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.4px'
    }
  }, m.role === 'customer' ? conv.customer_email.split('@')[0] : 'Resolv AI'), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '78%',
      padding: '10px 14px',
      borderRadius: '10px',
      fontSize: '13px',
      lineHeight: 1.5,
      background: m.role === 'customer' ? 'var(--bg-secondary)' : 'var(--accent-light)',
      color: 'var(--text-primary)',
      borderTopLeftRadius: m.role === 'customer' ? '2px' : '10px',
      borderTopRightRadius: m.role === 'customer' ? '10px' : '2px'
    }
  }, m.content))), sent && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      color: 'var(--success)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.4px'
    }
  }, "\u2713 Sent by you"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '78%',
      padding: '10px 14px',
      borderRadius: '10px',
      borderTopRightRadius: '2px',
      fontSize: '13px',
      lineHeight: 1.5,
      background: 'var(--success-light)',
      color: 'var(--text-primary)'
    }
  }, draft))), !sent && /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border)',
      borderRadius: '6px',
      background: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '12px 16px',
      borderBottom: '1px solid var(--border)',
      background: 'var(--bg-secondary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bot",
    size: 16,
    color: "var(--accent)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      fontWeight: 600
    }
  }, "AI-drafted reply"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(ConfidencePill, {
    score: conv.confidence || 0.8
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px'
    }
  }, /*#__PURE__*/React.createElement("textarea", {
    value: draft,
    onChange: e => setDraft(e.target.value),
    rows: 6,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      border: '1px solid var(--border-strong)',
      borderRadius: '4px',
      padding: '12px',
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      lineHeight: 1.55,
      color: 'var(--text-primary)',
      resize: 'vertical',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      margin: '12px 0 14px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: 'var(--text-muted)'
    }
  }, "Rewrite:"), tones.map(([k, label]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => {
      setTone(k);
      notify('Rewrote draft · ' + label.toLowerCase());
    },
    style: {
      fontFamily: 'var(--font-sans)',
      padding: '4px 11px',
      borderRadius: '9999px',
      fontSize: '12px',
      fontWeight: 500,
      cursor: 'pointer',
      border: `1px solid ${tone === k ? 'var(--accent)' : 'var(--border)'}`,
      background: tone === k ? 'var(--accent-light)' : '#fff',
      color: tone === k ? 'var(--accent)' : 'var(--text-secondary)'
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "success",
    onClick: () => {
      setSent(true);
      notify('Reply sent to ' + conv.customer_email, 'success');
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "send",
    size: 14
  }), "Approve & Send"), !taken ? /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => {
      setTaken(true);
      notify('Takeover active. AI disabled.');
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "hand",
    size: 14
  }), "Take over") : /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => {
      setTaken(false);
      notify('Released to AI. Automations resumed.');
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bot",
    size: 14
  }), "Release to AI"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      position: 'sticky',
      top: 0
    }
  }, conv.order && /*#__PURE__*/React.createElement(OrderPanel, {
    order: conv.order
  }), action && /*#__PURE__*/React.createElement("div", {
    style: {
      border: `1px solid ${actionState === 'approved' ? 'var(--success)' : 'var(--border)'}`,
      borderRadius: '6px',
      background: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '12px 16px',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "zap",
    size: 15,
    color: "var(--accent)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      fontWeight: 600
    }
  }, "Staged action")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '10px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    status: action.action_type
  }), action.amount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '16px',
      fontWeight: 500
    }
  }, "$", action.amount.toFixed(2))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      color: 'var(--text-secondary)',
      lineHeight: 1.5,
      marginBottom: '12px'
    }
  }, action.reason), /*#__PURE__*/React.createElement(ConfidenceBar, {
    score: action.ai_confidence
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 12px',
      background: 'var(--warning-light)',
      borderRadius: '4px',
      fontSize: '12px',
      color: 'var(--warning)',
      margin: '14px 0',
      display: 'flex',
      gap: '6px',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u26A0"), /*#__PURE__*/React.createElement("span", null, "Financial actions always require your approval \u2014 they never auto-execute.")), actionState === 'pending' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "success",
    size: "sm",
    onClick: () => {
      setActionState('approved');
      notify(`${action.action_type === 'refund' ? 'Refund' : 'Action'} approved in Shopify`, 'success');
    },
    style: {
      flex: 1,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14
  }), "Approve"), /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    size: "sm",
    onClick: () => {
      setActionState('rejected');
      notify('Action rejected', 'danger');
    },
    style: {
      flex: 1,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 14
  }), "Reject")), actionState === 'approved' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      color: 'var(--success)',
      fontSize: '13px',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15
  }), "Approved & executed"), actionState === 'rejected' && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-muted)',
      fontSize: '13px',
      fontWeight: 500
    }
  }, "Rejected \u2014 no action taken")))));
}
function OrderPanel({
  order
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border)',
      borderRadius: '6px',
      background: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '12px 16px',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "store",
    size: 15,
    color: "var(--text-secondary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      fontWeight: 600
    }
  }, "Shopify order ", order.order_name)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      padding: '2px 8px',
      borderRadius: '4px',
      background: 'var(--success-light)',
      color: 'var(--success)',
      fontWeight: 600,
      textTransform: 'capitalize'
    }
  }, order.financial_status), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      padding: '2px 8px',
      borderRadius: '4px',
      background: 'var(--info-light)',
      color: 'var(--info)',
      fontWeight: 600,
      textTransform: 'capitalize'
    }
  }, order.fulfillment_status)), order.line_items.map((li, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '13px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-primary)'
    }
  }, li.quantity, "\xD7 ", li.title), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-mono)',
      fontSize: '12px'
    }
  }, li.variant_title))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: '10px',
      borderTop: '1px solid var(--border)',
      fontSize: '13px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 500
    }
  }, "$", order.total_price, " ", order.currency)), order.tracking_number && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '12px',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, order.carrier, " tracking"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, order.tracking_number))));
}

/* ===== Escalations ===== */
function Escalations({
  onOpen
}) {
  const d = window.DATA;
  if (d.escalations.length === 0) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: '700px',
        border: '1px dashed var(--border-strong)',
        borderRadius: '8px',
        background: '#fff',
        padding: '48px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '28px',
        marginBottom: '8px'
      }
    }, "\u2713"), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: '0 0 4px',
        fontSize: '15px',
        fontWeight: 600
      }
    }, "Queue empty"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: '13px',
        color: 'var(--text-secondary)'
      }
    }, "No conversations require human intervention."));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '760px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      background: 'var(--warning-light)',
      border: '1px solid var(--warning-light)',
      borderRadius: '6px',
      fontSize: '13px',
      color: 'var(--warning)',
      display: 'flex',
      gap: '8px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-alert",
    size: 16,
    color: "var(--warning)"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, d.escalations.length, " conversations"), " need your attention \u2014 Resolv paused automation on these.")), d.escalations.map(e => /*#__PURE__*/React.createElement("div", {
    key: e.id,
    onClick: () => onOpen('ticket', e.id),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      border: '1px solid var(--border)',
      borderRadius: '6px',
      background: '#fff',
      padding: '14px 16px',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 18,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      fontWeight: 600
    }
  }, e.customer_email), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12px',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-mono)'
    }
  }, "#", e.id, " \xB7 ", window.Screens.timeAgo(e.updated_at))), /*#__PURE__*/React.createElement(Badge, {
    status: e.status
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Review \u2192"))));
}
window.TD = {
  TicketDetail,
  Escalations,
  Toast
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/TicketDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/data.js
try { (() => {
/* Resolv UI Kit — fake demo data */

window.DATA = {
  brand: {
    name: 'Luna Apparel',
    domain: 'luna.myshopify.com',
    support_email: 'help@lunaapparel.com'
  },
  stats: {
    activeConversations: 24,
    aiHandledPct: 86,
    escalatedChats: 3,
    pendingApprovals: 5
  },
  filterSummary: {
    total_blocked: 41,
    total_allowed: 218,
    prevented_loops: 6,
    total_quarantined: 2,
    by_reason: {
      promotional_content: 22,
      blocked_domain: 9,
      auto_reply_header: 6,
      loop_risk: 4
    }
  },
  conversations: [{
    id: 'a3f29b1c',
    channel: 'email',
    customer_email: 'maria.lopez@gmail.com',
    subject: 'My order arrived damaged',
    last_message: 'The hoodie has a tear along the seam — photo attached.',
    status: 'ai_suggested',
    customer_sentiment: 'frustrated',
    tags: ['damaged', 'refund'],
    updated_at: '2026-03-14T09:42:00',
    handler: 'AI',
    unread_count: 1,
    confidence: 0.88,
    ai_draft: "Hi Maria, I'm so sorry your hoodie arrived damaged — that's not the experience we want for you. I've reviewed the photo and I'd like to issue a full refund of $48.00 to your original payment method. You're welcome to keep or donate the item. The refund will appear in 3–5 business days. Is there anything else I can help with?",
    order: {
      order_name: '#1042',
      financial_status: 'paid',
      fulfillment_status: 'fulfilled',
      currency: 'USD',
      total_price: '48.00',
      line_items: [{
        quantity: 1,
        title: 'Cloud Fleece Hoodie',
        variant_title: 'Oat / M'
      }],
      tracking_number: '1Z9A8X',
      carrier: 'UPS'
    }
  }, {
    id: '7d10e4a2',
    channel: 'email',
    customer_email: 'james.wu@outlook.com',
    subject: 'Where is my order?',
    last_message: 'It has been 8 days and tracking has not updated.',
    status: 'auto_resolved',
    customer_sentiment: 'neutral',
    tags: ['shipping'],
    updated_at: '2026-03-14T09:31:00',
    handler: 'AI',
    unread_count: 0,
    confidence: 0.94
  }, {
    id: 'bb98c0f1',
    channel: 'email',
    customer_email: 'sara.kim@icloud.com',
    subject: 'I want to cancel and get my money back NOW',
    last_message: 'This is unacceptable. I have emailed three times.',
    status: 'escalated',
    customer_sentiment: 'angry',
    tags: ['cancel', 'complaint'],
    updated_at: '2026-03-14T09:05:00',
    handler: 'human · you',
    unread_count: 2,
    confidence: 0.41
  }, {
    id: '0c4d77ab',
    channel: 'email',
    customer_email: 'devon.r@gmail.com',
    subject: 'Exchange for a larger size',
    last_message: 'Could I swap the medium for a large?',
    status: 'ai_suggested',
    customer_sentiment: 'positive',
    tags: ['exchange'],
    updated_at: '2026-03-14T08:58:00',
    handler: 'AI',
    unread_count: 0,
    confidence: 0.79
  }, {
    id: 'f51ab9d0',
    channel: 'email',
    customer_email: 'nina.patel@gmail.com',
    subject: 'Wrong shipping address',
    last_message: 'I moved last week — can you update it before it ships?',
    status: 'ai_suggested',
    customer_sentiment: 'neutral',
    tags: ['shipping'],
    updated_at: '2026-03-14T08:40:00',
    handler: 'AI',
    unread_count: 0,
    confidence: 0.83
  }, {
    id: 'c7e3120a',
    channel: 'email',
    customer_email: 'happycustomer@gmail.com',
    subject: 'Just wanted to say thanks!',
    last_message: 'The quality is amazing, will order again.',
    status: 'auto_resolved',
    customer_sentiment: 'positive',
    tags: ['compliment'],
    updated_at: '2026-03-14T08:12:00',
    handler: 'AI',
    unread_count: 0,
    confidence: 0.97
  }, {
    id: '9a2b4c6d',
    channel: 'email',
    customer_email: 'tom.becker@gmail.com',
    subject: 'Refund for late delivery',
    last_message: 'Order #1031 was promised by Friday and arrived Tuesday.',
    status: 'open',
    customer_sentiment: 'frustrated',
    tags: ['refund', 'shipping'],
    updated_at: '2026-03-13T17:50:00',
    handler: 'AI',
    unread_count: 0,
    confidence: 0.66
  }],
  messages: {
    a3f29b1c: [{
      role: 'customer',
      content: 'Hi, my order #1042 arrived today but the hoodie has a tear along the seam. Really disappointed — I was planning to wear it this weekend. Photo attached. I would like a refund please.',
      created_at: '2026-03-14T09:38:00'
    }]
  },
  actions: [{
    id: 'act_01',
    action_type: 'refund',
    amount: 48.00,
    ai_confidence: 0.88,
    customer_email: 'maria.lopez@gmail.com',
    order_number: '1042',
    brand_name: 'Luna Apparel',
    created_at: '2026-03-14T09:42:00',
    reason: 'Item arrived damaged; customer shared a photo and requested a full refund.',
    status: 'pending'
  }, {
    id: 'act_02',
    action_type: 'cancel_order',
    amount: 0,
    ai_confidence: 0.74,
    customer_email: 'sara.kim@icloud.com',
    order_number: '1039',
    brand_name: 'Luna Apparel',
    created_at: '2026-03-14T09:06:00',
    reason: 'Customer requested cancellation before fulfillment; order not yet shipped.',
    status: 'pending'
  }, {
    id: 'act_03',
    action_type: 'exchange',
    amount: 0,
    ai_confidence: 0.81,
    customer_email: 'devon.r@gmail.com',
    order_number: '1044',
    brand_name: 'Luna Apparel',
    created_at: '2026-03-14T08:59:00',
    reason: 'Customer wants to swap M for L; same SKU in stock.',
    status: 'pending'
  }],
  escalations: [{
    id: 'bb98c0f1',
    channel: 'email',
    customer_email: 'sara.kim@icloud.com',
    status: 'escalated',
    updated_at: '2026-03-14T09:05:00'
  }, {
    id: 'd33f01ce',
    channel: 'email',
    customer_email: 'angry.buyer@gmail.com',
    status: 'escalated',
    updated_at: '2026-03-14T07:22:00'
  }, {
    id: 'e88a2b10',
    channel: 'email',
    customer_email: 'legal@somecorp.com',
    status: 'requires_human',
    updated_at: '2026-03-13T19:01:00'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/data.js", error: String((e && e.message) || e) }); }

})();
